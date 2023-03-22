import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

function AdminLogin() {
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    axios
      .post("http://localhost:3001/admin/login", { email, password })
      .then((response) => {
        if (response.status === 200) {
          localStorage.setItem('adminToken',response.data.token)
          navigate("/admin/home");
        } else if(response.status===201) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Wrong credentials!',
              });
        }
      });
  };

  return (
    <div className="container mx-auto bg-admin-background">
      <div className="grid h-screen place-items-center">
        <div className="h-96  w-96  content-center shadow hover:shadow-2xl">
          <h1 className="text-white text-5xl text-center ">Admin</h1>
          <h1 className="mt-3 text-white text-center ">
            Login using you username and password
          </h1>
          <form onSubmit={handleSubmit}>
            <label className="relative block mt-6 content-center">
              <span className="sr-only">Email</span>
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <svg
                  className="h-5 w-5 fill-slate-300"
                  viewBox="0 0 20 20"
                ></svg>
              </span>
              <input
                className="placeholder:italic text-black placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm "
                placeholder="Email"
                type="text"
                name="Email"
                ref={emailRef}
              />
            </label>
            <label className="relative block mt-6 content-center">
              <span className="sr-only">password</span>
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <svg
                  className="h-5 w-5 fill-slate-300"
                  viewBox="0 0 20 20"
                ></svg>
              </span>
              <input
                className="placeholder:italic text-black placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm "
                placeholder="password"
                type="password"
                name="password"
                ref={passwordRef}
              />
            </label>
            <button className="bg-custom-button1 hover:bg-custom-inputbox-color text-white font-bold py-2 px-4 rounded relative block  mt-2  ml-36">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
