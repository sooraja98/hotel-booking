import React from "react";
import VendorFooter from "./VendorFooter";
import VendorHeader from "./VendorHeader";
import { Route, Routes } from "react-router-dom";
import VendorHome from "./VendorHome";
import VendorcustomerList from "./VendorCustomerList";
import VendorProfile from "./VendorProfile";
function VendorHomeDashboard() {
  return (
    <div>
        <VendorHeader />

      <Routes>
      
        <Route path="/home" element={<VendorHome />} />
        <Route path="/customerList" element={<VendorcustomerList />} />
        <Route path="/rejectVendorsList" element={<VendorcustomerList />} />
        <Route path="/VendorProfile" element={<VendorProfile />} />
        <Route path="/logout" element={<VendorProfile />} />

      </Routes>
      <VendorFooter />

    </div>
  );
}

export default VendorHomeDashboard;
