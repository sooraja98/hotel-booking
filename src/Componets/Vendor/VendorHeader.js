import React from "react";
import { Link } from "react-router-dom";

function VendorHeader() {
  const headerImg = `https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvdGVsfGVufDB8fDB8fA%3D%3D&w=1000&q=80`;
  return (
    <div
      className="h-auto md:h-48 w-full flex flex-col md:flex-row items-center justify-between px-4 md:px-8 py-4 md:py-6"
      style={{
        backgroundImage: `url(${headerImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-header-button h-20 w-34 rounded-lg	 -mt-40 ml-36 md:mb-0">
        <p className="text-bottom px-6 font-bold py-8">Vendor Panel</p>
      </div>
      <div className="flex justify-center md:justify-end  mt-28  pt-3">
        <Link to="/vendor/home" className="mr-4 text-white hover:text-gray-200">
          Home
        </Link>
        <Link to="/vendor/customerList" className="mr-4 text-white hover:text-gray-200">
          Customer
        </Link>
        <Link to="/vendor/VendorProfile" className="mr-4 text-white hover:text-gray-200">
          Profile
        </Link>
        <Link to="/vendor/roomStatus" className="text-white hover:text-gray-200">
          Room status
        </Link>
        <Link  to="/vendor/paymentHistory" className="text-white px-4 hover:text-gray-200">
          Payment histroy
        </Link>
        <Link to="/vendor/login-register" className="ml-4 text-white hover:text-gray-200">
          Logout
        </Link>
      </div>
    </div>
  );
}

export default VendorHeader;
