import React from "react";
import { Route,Routes} from "react-router-dom";
import AdminHeader from "./AdminHeader";
import AdminFooter from "./AdminFooter";
import AdminHome from "./AdminHome";
import AdminRequest from "./AdminRequest";
import AdminVendorRequestSinglePage from "./AdminVendorRequestSinglePage";
import AdminVendor from "./AdminVendor";
import AdminComplaint from "./AdminComplaint";
function AdminDashBoard() {
  return (
    <div>
      <AdminHeader />
      <Routes>
      <Route path='/home' element={<AdminHome/>} />
      <Route path='/request' element={<AdminRequest/>} />
      <Route path='/request/request-single-page/*' element={<AdminVendorRequestSinglePage/>} />
      <Route path='/request' element={<AdminRequest/>} />
      <Route path='/complaint' element={<AdminComplaint/>} />
      <Route path='/vendorsList' element={<AdminVendor/>} />
      </Routes>
      <AdminFooter />
    </div>
  );
}

export default AdminDashBoard;
