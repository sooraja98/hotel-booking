import React from "react";
import { Link } from "react-router-dom";

function UserHeader() {
  const headerImg = `https://www.theparkhotels.com/images/site-specific/navi-mumbai/home/navi-mumbai-night-view.jpg`;
  return (
    <div className="flex">
      <div className=" flex w-full">
        <div
          className="h-auto"
          style={{
            height: "450px",
            width: "100%",
            backgroundImage: `url(${headerImg})`,
            backgroundSize: "fill",
            backgroundPosition: "center",
          }}
        >
          <div className="flex w-28 bg-header-button p-2 content-center rounded-md ml-56 font-semibold text-center">
            BOOK YOUR HOTEL
          </div>
          <div className=" flex justify-end space-x-4 -mt-10  mr-10 text-white  ">
            <h1 className=" md:flex md:text-lg ">Home</h1>
            <h1 className=" md:flex md:text-lg">Register/Login</h1>
          </div>

          <h1 className="flex text-2xl md:text-4xl lg:text-8xl text-white font-extralight mt-14 px-4">
            WELCOME TO
          </h1>
          <h1 className="flex text-5xl md:text-7xl lg:text-8xl text-white font-thin px-2 md:px-32">
            H O T E L S
          </h1>
          <h1 className="flex text-lg md:text-2xl lg:text-3xl mt-3 text-white font-thin px-2 md:px-72">
            Don't worry about the stay
          </h1>
        </div>
      </div>
  
    </div>
  );
}

export default UserHeader;
