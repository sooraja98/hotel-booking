import React, { useEffect } from 'react';
import useAdminToken from '../../CustomHooks/useAdminToken';

function AdminHome() {
 const adminToken= useAdminToken();
  useEffect(()=>{

  },{adminToken})

  return (
    <div>
      <h1>adsa</h1>
    </div>
  );
}

export default AdminHome;
