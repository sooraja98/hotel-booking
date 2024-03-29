import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import useAdminToken from "../../CustomHooks/useAdminToken";
function AdminVendor() {
  const [data, setData] = useState([]);
  const adminTokenCheck=useAdminToken()
  useEffect(() => {
    const adminToken=localStorage.getItem('adminToken')
    const fetchData = async () => {
      const response = await axios.get(
        "http://localhost:3001/admin/vendorList",{
          headers:{
            "Content-Type": "application/json",
            Authorization: `Bearer ${adminToken}`,
          }
        }
      );
      setData(response.data);
    };

    fetchData();
  }, [adminTokenCheck]);

  return (
    <div>
      <div className="w-full overflow-x-auto">
        <table className="w-full whitespace-nowrap">
          <thead>
            <tr className="text-gray-600 font-bold">
              <th className="px-6 py-3 text-left">Number</th>
              <th className="px-6 py-3 text-left">Name</th>
              <th className="px-6 py-3 text-left">Address</th>
              <th className="px-6 py-3 text-left">Email</th>
              <th className="px-6 py-3 text-left">GST</th>
              <th className="px-6 py-3 text-left">Hoetel Name</th>
              <th className="px-6 py-3 text-left">Status</th>
              <th className="px-6 py-3 text-left">Action</th>
            </tr>
          </thead>

          <tbody>
            {data.map((data, index) => (
              <tr
                key={data._id}
                className="border-b border-gray-200 hover:bg-gray-100"
              >
                <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {data.ownername}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{data.address}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {data.hotelname}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{data.gst}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {data.hotelname}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {data.status ? "Banned" : "Active"}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button>
                    {" "}
                    <span>&#x1F6AB;</span>{" "}
                  </button>{" "}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">      <Link
                    to={`approveVendorsSinglePageDetails/${data._id}`}
                  >
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 -ml-12 rounded">
                      View
                    </button>
                  </Link></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminVendor;
