import React, { useEffect } from 'react'
import useVendorToken from '../../CustomHooks/useVendorToken'
function VendorHome() {
  const vendorTokenChecker=useVendorToken()
  useEffect(()=>{

  },[vendorTokenChecker])
  return (
    <div>VendorHome</div>
  )
}

export default VendorHome