import React, { useEffect } from "react";
import useVendorToken from "../../CustomHooks/useVendorToken";
function VendorFooter() {
  const vendorTokenChecker=useVendorToken()
  useEffect(()=>{

  },[vendorTokenChecker])
  return (
    <footer className="bg-header-color mt-80 bottom-0 w-full  py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/2 lg:w-1/4 mb-8">
            <h3 className="text-white font-bold mb-4">Luxury</h3>
            <ul className="text-gray-400">
              <li className="mb-2">
                <a href="asd" className="hover:text-white">
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a href="asd" className="hover:text-white">
                  Contact
                </a>
              </li>
              <li className="mb-2">
                <a href="asd" className="hover:text-white">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 mb-8">
            <h3 className="text-white font-bold mb-4">Follow Us</h3>
            <ul className="flex">
              <li className="mr-4">
                <a href="asd" className="text-white hover:text-gray-400">
                  <i className="fab fa-facebook"></i>
                </a>
              </li>
              <li className="mr-4">
                <a href="asd" className="text-white hover:text-gray-400">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li className="mr-4">
                <a href="asd" className="text-white hover:text-gray-400">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 mb-8">
            <h3 className="text-white font-bold mb-4">Hotels</h3>
            <p className="text-gray-400 mb-2">
              497 Evergreen Rd. Roseville, CA 95673
            </p>
            <p className="text-gray-400 mb-2">+44 345 678 903</p>
            <p className="text-gray-400 mb-2">luxury_hotels@gmail.com</p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 mb-8">
            <h3 className="text-white font-bold mb-4">Newsletter</h3>
            <form className="flex flex-wrap">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full sm:w-3/4 p-2 mb-2 sm:mb-0 rounded-l-lg"
              />
              <button
                type="submit"
                className="w-full sm:w-1/4 bg-header-button  hover:bg-blue-700 text-white font-bold py-2 border-header-button  rounded-r-lg"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default VendorFooter;
