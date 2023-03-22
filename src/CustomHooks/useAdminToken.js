import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function useAdminToken() {
  const [adminToken, setAdminToken] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      navigate('/admin/login'); // navigate to login page if token is not found
    } else {
      setAdminToken(token);
    }
  }, []);

  return adminToken;
}

export default useAdminToken

