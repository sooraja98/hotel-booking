import React from "react";
import { Link,useNavigate } from "react-router-dom";
import useAdminToken from "../../CustomHooks/useAdminToken";

function Header() {
  const adminTokenChecker=useAdminToken()
  const navigate=useNavigate()
  const headerImg = `https://images.unsplash.com/photo-1517840901100-8179e982acb7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWx8ZW58MHx8MHx8&w=1000&q=80`;
  const handleLogout=()=>{
     navigate("/admin/login");
    localStorage.removeItem('adminToken')

  }
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
        <p className="text-bottom px-6 font-bold py-8">Admin Panel</p>
      </div>
      <div className="flex justify-center md:justify-end  mt-28  pt-3">
        <Link to="/admin/home" className="mr-4 text-white hover:text-gray-200">
          Home
        </Link>
        <Link to="/admin/vendorsList" className="mr-4 text-white hover:text-gray-200">
          Vendor
        </Link>
        <Link to="/admin/rejectVendorsList" className="mr-4 text-white hover:text-gray-200">
          Rejected Vendor
        </Link>
        <Link to="/admin/request" className="mr-4 text-white hover:text-gray-200">
          Request
        </Link>
        <Link to="/admin/complaint" className="text-white hover:text-gray-200">
          Complaint
        </Link>
        <Link  onClick={handleLogout} to="/admin/login" className="ml-4 text-white hover:text-gray-200">
          Logout
        </Link>
      </div>
    </div>
  );
}

export default Header;
