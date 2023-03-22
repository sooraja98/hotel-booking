import React from "react";
import { Link } from "react-router-dom";

function UserHeader() {
  const headerImg = `https://www.luxuryabode.com/mona/img/hotels.jpg`;
  return (
    <div
      className="h-auto md:h-80 w-full flex flex-col md:flex-row items-center justify-between px-4 md:px-8 py- md:py-6"
      style={{
        backgroundImage: `url(${headerImg})`,
        backgroundSize: "fill",
        backgroundPosition: "center",
      }}
    >
      <div
        className="absolute inset-0 bg-gray-900 opacity-50 z-10"
        style={{ mixBlendMode: "multiply" }}
      ></div>
      <div className="z-20 relative"></div>
      <div className="bg-header-button h-10 w-34 rounded-lg	 -mt-64 ml-36 md:mb-0">
        <p className="text-bottom px-6 font-bold py-2">Search Hotels</p>
      </div>
      <h1 className=" text-6xl text-white">WELCOME TO HOTELS</h1>
      <div className="flex justify-center md:justify-end  mb-60 mr-48  pt-3 ">
        <Link
          to="/admin/home"
          className="mr-4 text-white font-bold hover:text-gray-200"
        >
          Home
        </Link>
        <Link
          to="/admin/vendorsList"
          className="mr-4 text-white hover:text-gray-200"
        >
          Vendor
        </Link>
        <Link
          to="/admin/request"
          className="mr-4 text-white hover:text-gray-200"
        >
          Request
        </Link>
        <Link to="/admin/complaint" className="text-white hover:text-gray-200">
          Complaint
        </Link>
        <Link to="/admin/login" className="ml-4 text-white hover:text-gray-200">
          Logout
        </Link>
      </div>
    </div>
  );
}

export default UserHeader;
