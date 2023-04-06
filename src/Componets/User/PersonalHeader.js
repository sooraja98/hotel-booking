import React from 'react'
import { Link } from 'react-router-dom';
function PersonalHeader() {
    return (
        <div
          className="h-auto bg-header-color md:h-48 w-full flex flex-col md:flex-row items-center justify-between px-4 md:px-8 py-4 md:py-6"
        >
          <div className="bg-header-button h-20 w-34 rounded-lg	 -mt-40 ml-36 md:mb-0">
            <p className="text-bottom px-6 font-bold py-8">Profile Panel</p>
          </div>
          <h1 className='text-6xl text-white'>Login</h1>
    
          <div className="flex justify-center md:justify-end mb-36 pt-3">
            <Link to="/admin/home" className="mr-4 text-white hover:text-gray-200">
              Home
            </Link>
            <Link to="/admin/home" className="mr-4 text-white hover:text-gray-200">
              Booking
            </Link>
            <Link  onClick={''} to="/admin/login" className="ml-4 text-white hover:text-gray-200">
              Logout
            </Link>
          </div>
          
        </div>
        
      );
}

export default PersonalHeader