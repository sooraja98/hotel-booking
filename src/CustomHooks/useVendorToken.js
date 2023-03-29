import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function useVendorToken() {
  const [vendorToken, setVendorToken] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('vendorToken');
    if (!token) {
      navigate('/vendor/login-register'); // navigate to login page if token is not found
    } else {
      setVendorToken(token);
    }
  }, []);

  return vendorToken;
}

export default useVendorToken

