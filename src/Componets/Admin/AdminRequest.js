import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import useAdminToken from "../../CustomHooks/useAdminToken";
function AdminRequest() {
  const adminTokenCheck = useAdminToken();

  const [data, setData] = useState([]);

  useEffect(() => {
    const adminToken=localStorage.getItem('adminToken')
    const fetchData = async () => {
      const response = await axios.get("http://localhost:3001/admin/requests",{
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${adminToken}`,
        },
      });
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
              <th className="px-6 py-3 text-left">Hotel Name</th>
              <th className="px-6 py-3 text-left">GST</th>
              <th className="px-6 py-3 text-left">View</th>
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
                  <Link to={`request-single-page/${data._id}`}>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                      View
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminRequest;
