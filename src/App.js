import "./App.css";
import { Route, Routes } from "react-router-dom";
import Register from "./Componets/Vendor/Register";
import VendorLoginRegister from "./Pages/Vendor/VendorLoginRegister";
import AdminLogin from "./Componets/Admin/AdminLogin";
import AdminDashBoard from "./Componets/Admin/AdminDashBoard";
import VendorHomeP from "./Pages/Vendor/VendorHomeP";
function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='admin/login' element={<AdminLogin/>}/>
      <Route path='admin/*' element={<AdminDashBoard/>}/>
        <Route path='vendor/login-register' element={<VendorLoginRegister/>}/>
        <Route path='vendor/register' element={<Register/>}/>
        <Route path='vendor/*' element={<VendorHomeP/>}/>

      </Routes>
   
    </div>
  );
}

export default App;
