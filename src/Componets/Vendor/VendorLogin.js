import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
function VendorLogin() {
  const navigate = useNavigate();
  const emailRef = useRef();
  const otpRef = useRef(0);

  const [data, setData] = useState();
  const [countdown, setCountdown] = useState(0);

  const handleOtp = async () => {
    const email = emailRef.current.value;
    if (email === "") {
      alert("enter the email please");
    } else {
      setCountdown(60);
      const timerId = setInterval(() => {
        setCountdown((countdown) => countdown - 1);
      }, 1000);
      setTimeout(() => clearInterval(timerId), 60000);
      axios
        .post("http://localhost:3001/vendor/emailVerify", { email })
        .then((response) => {
          if (response.data.message === "approve") {
            Swal.fire({
              icon: "success",
              title: "Otp send Successful",
              text: "successfully  otp Generated ",
              showCancelButton: false,
              confirmButtonColor: "#3085d6",
              confirmButtonText: "OK",
            });
            setData(response.data.data);
          } else if (response.data === "pending") {
            navigate("/vendors/PendingPage");
          } else if (response.data === "not a user") {
            Swal.fire({
              icon: "error",
              title: "Oops...You are not a user",
              text: "Regiser your account !",
            });
          }
        });
    }
  };
  const handleLogin = async () => {
    const otp = otpRef.current.value;
    const email = emailRef.current.value;
    if (otp === "") {
      alert("enter the otp plz");
    } else {
      const response = await axios.post("http://localhost:3001/vendor/login", {
        otp,
        email,
      });

      if (response.data.data === "success") {
        localStorage.setItem("vendorToken", response.data.token);
        navigate("/vendor/home");
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong  !",
        });
      }
    }
  };

  return (
    <div className="container mx-auto bg-224957">
      <Link to="/vendor/register">
        <button className="bg-custom-inputbox-color hover:bg-custom-button1 text-white font-bold py-2 px-4 rounded  fixed right-0 top-0 mr-3 mt-3 ">
          Register
        </button>
      </Link>
      <div className="grid h-screen place-items-center">
        <div className="h-96  w-96  content-center shadow hover:shadow-2xl">
          <h1 className="text-custom-inputbox-color text-5xl text-center ">
            Welcome
          </h1>
          <h1 className="mt-3 text-custom-inputbox-color text-center ">
            Register your hotel here and feel free
          </h1>
          <label className="relative block mt-6 content-center">
            <span className="sr-only">Email</span>
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
            </span>
            <input
              className="placeholder:italic text-white placeholder:text-slate-400 block bg-custom-inputbox-color w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm "
              placeholder="Email"
              type="text"
              name="Email"
              required
              ref={emailRef}
            />
          </label>
          <button
            type="button"
            onClick={handleOtp}
            className="bg-custom-button1  hover:bg-custom-inputbox-color text-white font-bold py-2 px-4 rounded relative block mt-2  ml-32"
            disabled={countdown !== 0}
          >
            {countdown === 0 ? " Verify Email" : `Resend: ${countdown}`}
          </button>
          <label className="relative block mt-6 content-center">
            <span className="sr-only">OTP</span>
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
            </span>
            <input
              className="placeholder:italic text-white placeholder:text-slate-400 block bg-custom-inputbox-color w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm "
              placeholder="OTP"
              type="number"
              name="OTP"
              required
              ref={otpRef}
            />
          </label>
          <button
            onClick={handleLogin}
            className="bg-custom-button1 hover:bg-custom-inputbox-color text-white font-bold py-2 px-4 rounded relative block  mt-2  ml-36"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default VendorLogin;
