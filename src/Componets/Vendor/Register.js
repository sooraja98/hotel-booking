import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";
import Swal from "sweetalert2";

function Register() {
  const navigate = useNavigate();
  const ownernameRef = useRef();
  const hotelnameRef = useRef();
  const emailRef = useRef();
  const addressRef = useRef();
  const countryRef = useRef();
  const stateRef = useRef();
  const districtRef = useRef();
  const cityRef = useRef();
  const pinRef = useRef();
  const phoneRef = useRef();
  const gstRef = useRef();
  const adharRef = useRef();
  const panRef = useRef();
  const [hotelPic, setHotelPic] = useState([]);
  const [ownerPic, setOwnerPic] = useState("");
  const [adharPic, setAdharPic] = useState("");
  const [panPic, setPanPic] = useState("");

  const handleHotelPicChange = (event) => {
    setHotelPic(event.target.files);
  };

  const handleOwnerPicChange = (event) => {
    setOwnerPic(event.target.files[0]);
  };

  const handleAdharPicChange = (event) => {
    setAdharPic(event.target.files[0]);
  };

  const handlePanPicChange = (event) => {
    setPanPic(event.target.files[0]);
  };

  const handleUser = async (e) => {
    e.preventDefault();
    const ownername = ownernameRef.current.value;
    const hotelname = hotelnameRef.current.value;
    const email = emailRef.current.value;
    const address = addressRef.current.value;
    const country = countryRef.current.value;
    const state = stateRef.current.value;
    const district = districtRef.current.value;
    const city = cityRef.current.value;
    const pin = pinRef.current.value;
    const phone = phoneRef.current.value;
    const gst = gstRef.current.value;
    const adhar = adharRef.current.value;
    const pan = panRef.current.value;

    // Regular expressions for validation
    const nameRegex = /^[a-zA-Z ]+$/;
    const emailRegex = /^\S+@\S+\.\S+$/;
    const phoneRegex = /^\d{10}$/;
    const pinRegex = /^\d{6}$/;
    const gstRegex = /^GST\d{15}$/;
    const adharRegex = /^\d{12}$/;
    const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;

    // Validation
    if (!ownername.match(nameRegex)) {
      alert("Please enter a valid owner name");
      return;
    }
    if (!hotelname.match(nameRegex)) {
      alert("Please enter a valid hotel name");
      return;
    }
    if (!email.match(emailRegex)) {
      alert("Please enter a valid email address");
      return;
    }
    if (address.trim() === "") {
      alert("Please enter an address");
      return;
    }
    if (!country.match(nameRegex)) {
      alert("Please enter a valid country name");
      return;
    }
    if (!state.match(nameRegex)) {
      alert("Please enter a valid state name");
      return;
    }
    if (!district.match(nameRegex)) {
      alert("Please enter a valid district name");
      return;
    }
    if (!city.match(nameRegex)) {
      alert("Please enter a valid city name");
      return;
    }
    if (!pin.match(pinRegex)) {
      alert("Please enter a valid PIN code");
      return;
    }
    if (!phone.match(phoneRegex)) {
      alert("Please enter a valid phone number");
      return;
    }
    if (!gst.match(gstRegex)) {
      alert("Please enter a valid GST number");
      return;
    }
    if (!adhar.match(adharRegex)) {
      alert("Please enter a valid Adhar card number");
      return;
    }
    if (!pan.match(panRegex)) {
      alert("Please enter a valid PAN card number");
      return;
    }

    const formData = new FormData();

    formData.append("ownername", ownernameRef.current.value);
    formData.append("hotelname", hotelnameRef.current.value);
    formData.append("email", emailRef.current.value);
    formData.append("address", addressRef.current.value);
    formData.append("country", countryRef.current.value);
    formData.append("state", stateRef.current.value);
    formData.append("district", districtRef.current.value);
    formData.append("city", cityRef.current.value);
    formData.append("pin", pinRef.current.value);
    formData.append("phone", phoneRef.current.value);
    formData.append("gst", gstRef.current.value);
    formData.append("adhar", adharRef.current.value);
    formData.append("pan", panRef.current.value);
    formData.append("ownerPic", ownerPic);
    formData.append("adharPic", adharPic);
    formData.append("panPic", panPic);

    for (let i = 0; i < hotelPic.length; i++) {
      formData.append("hotelPic", hotelPic[i]);
    }
    try {
      await axios.post('http://localhost:3001/vendor/register', formData).then((response) => {
        if (response.status === 200) {
          Swal.fire({
            icon: "success",
            title: "Registration Successful",
            text: "You have successfully registered your hotel",
            showCancelButton: false,
            confirmButtonColor: "#3085d6",
            confirmButtonText: "OK",
          }).then((result) => {
            if (result.isConfirmed) {
              navigate("/vendor/login-register"); // Programmatically navigate to login page
            }
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
          });
        }
      });
    } catch (error) {
      console.error(error);
      alert(error);
    }
  };

  return (
    <>
      <Header />
      <div>
        <div className="flex flex-grow min-h-screen justify-center items-center">
          <form
            className="flex flex-col items-center w-full sm:w-2/3 md:w-1/2 lg:w-1/3 mb-6"
            onSubmit={handleUser}
          >
            <div className="mb-6 w-full">
              <label className="block text-gray-700  mb-2">Owner Name</label>
              <input
                type="text"
                id="OWnername"
                name="ownername"
                className="w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:shadow-outline"
                required={true}
                ref={ownernameRef}
              />
            </div>

            <div className="mb-4 w-full">
              <label className="block text-gray-700 mb-2">Hotel Name</label>
              <input
                required={true}
                type="text"
                id="hotelname"
                name="hotelname"
                ref={hotelnameRef}
                className="w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:shadow-outline"
              />
            </div>
            <div className="mb-4 w-full">
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                required={true}
                type="email"
                id="email"
                name="email"
                ref={emailRef}
                className="w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:shadow-outline"
              />
            </div>
            <div className="mb-4 w-full">
              <label className="block text-gray-700 mb-2">Address</label>
              <textarea
                ref={addressRef}
                required={true}
                id="address"
                name="address"
                className="w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:shadow-outline"
              />
            </div>

            <div className="mb-4 w-full">
              <label className="block text-gray-700 mb-2">Country</label>
              <input
                ref={countryRef}
                required={true}
                type="text"
                id="country"
                name="country"
                className="w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:shadow-outline"
              />
            </div>
            <div className="mb-4 w-full">
              <label className="block text-gray-700 mb-2">State</label>
              <input
                ref={stateRef}
                required={true}
                type="text"
                id="state"
                name="state"
                className="w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:shadow-outline"
              />
            </div>
            <div className="mb-4 w-full">
              <label className="block text-gray-700 mb-2">District</label>
              <input
                ref={districtRef}
                required={true}
                type="text"
                id="district"
                name="district"
                className="w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:shadow-outline"
              />
            </div>
            <div className="mb-4 w-full">
              <label className="block text-gray-700 mb-2">City</label>
              <input
                ref={cityRef}
                required={true}
                type="text"
                id="city"
                name="city"
                className="w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:shadow-outline"
              />
            </div>
            <div className="mb-4 w-full">
              <label className="block text-gray-700 mb-2">PIN</label>
              <input
                ref={pinRef}
                required={true}
                type="number"
                id="PIN"
                name="PIN"
                className="w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:shadow-outline"
              />
            </div>
            <div className="mb-4 w-full">
              <label className="block text-gray-700 mb-2">Phone number</label>
              <input
                ref={phoneRef}
                required={true}
                type="number"
                id="Phone"
                name="Phone"
                className="w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:shadow-outline"
              />
            </div>
            <div className="mb-4 w-full">
              <label className="block text-gray-700 mb-2">GST</label>
              <input
                ref={gstRef}
                required={true}
                type="text"
                id="gst"
                name="gst"
                className="w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:shadow-outline"
              />
            </div>
            <div className="mb-4 w-full">
              <label className="block text-gray-700 mb-2">Adhaar</label>
              <input
                ref={adharRef}
                required={true}
                type="number"
                id="adhaar"
                name="adhaar"
                className="w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:shadow-outline"
              />
            </div>
            <div className="mb-4 w-full">
              <label className="block text-gray-700 mb-2">Pan card</label>
              <input
                ref={panRef}
                required={true}
                type="text"
                id="pan"
                name="pan"
                className="w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:shadow-outline"
              />
            </div>

            <div className="mb-4 w-full">
              <label className="block text-gray-700 font-bold mb-2">
                Hotels pics
              </label>
              <input
                onChange={handleHotelPicChange}
                required={true}
                type="file"
                id="hotelpic"
                name="hotelpic"
                multiple 
                className="w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:shadow-outline"
                accept="image/*"
              />
            </div>

            <div className="mb-4 w-full">
              <label className="block text-gray-700 font-bold mb-2">
                owner pic
              </label>
              <input
                onChange={handleOwnerPicChange}
                required={true}
                type="file"
                id="ownerpic"
                name="ownerpic"
                accept="image/*"
                className="w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:shadow-outline"
              />
            </div>

            <div className="mb-4 w-full">
              <label className="block text-gray-700 font-bold mb-2">
                Adhar pic
              </label>
              <input
                onChange={handleAdharPicChange}
                required={true}
                type="file"
                id="adharpic"
                name="adharpic"
                accept="image/*"
                className="w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:shadow-outline"
              />
            </div>
            <div className="mb-4 w-full">
              <label className="block text-gray-700 font-bold mb-2">
                pan pic
              </label>
              <input
                onChange={handlePanPicChange}
                required={true}
                type="file"
                id="panpic"
                name="panpic"
                accept="image/*"
                className="w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:shadow-outline"
              />
            </div>
            <button
              type="submit"
              className="bg-header-button mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Register;
