import "./App.css";
import { Route, Routes } from "react-router-dom";
import Register from "./Componets/Vendor/Register";
import VendorLoginRegister from "./Pages/Vendor/VendorLoginRegister";
import VendorHomeP from "./Pages/Vendor/VendorHomeP";
import UserPage from "./Pages/User/UserPage";
import AdminLoginP from './Pages/Admin/AdminLoginP'
import AdminHomeP from "./Pages/Admin/AdminHomeP";
import PendingPage from "./Pages/Vendor/PendingPage";
import RejectPage from "./Pages/Vendor/RejectPage";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="vendor/login-register" element={<VendorLoginRegister />} />
        <Route path="vendor/register" element={<Register />} />
        <Route path="admin/login" element={<AdminLoginP />} />
        <Route path="admin/*" element={<AdminHomeP />} />
        <Route path="vendor/*" element={<VendorHomeP />} />
        <Route path="vendors/PendingPage" element={<PendingPage/>} />
        <Route path="vendors/RejectPage" element={<RejectPage/>} />
        <Route path="user/*" element={<UserPage />} />
      </Routes>
    </div>
  );
}

export default App;
