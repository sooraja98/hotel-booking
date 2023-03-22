import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import useAdminToken from "../../CustomHooks/useAdminToken";

function AdminRejectVendorDetailList(props) {

  const id = useParams();
  const [data, setData] = useState({});
const adminTokenCheck= useAdminToken()
  useEffect(() => {
    const adminToken=localStorage.getItem('adminToken')
    const fetchData = async () => {
      const response = await axios.get(
        `http://localhost:3001/admin/request/singleRequestData/${JSON.stringify(
          id
        )}`,{
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${adminToken}`,
          },
        }
      );
      setData(response.data);
    };
    fetchData();
  }, [adminTokenCheck]);


  return (  
    <div className="relative bg-white w-full h-max overflow-hidden text-left text-lg text-gray-900 font-inter">
      <div className="flex row">
        <div className="column flex-column p-2 alig">
          <h1 className="text-center font-bold text-xl ">HOTEL IMAGE</h1>
          {data?.hotelPic?.map((image) => {
            return <img className="mt-2 w-full h-64" src={image} alt="" />;
          })}
        </div>

        <div className="row w-3/5 ">
          <div className=" flex ">
            <img
              className="h-30 w-28 mx-auto my-2"
              src={data.ownerPic}
              alt=""
            />
          </div>
          <div className="row flex w-full ">
            <div className="column  w-1/2 flex-grow ">
              <form className="flex flex-col items-center w-full  m-2 p-2">
                <div className="mb-6 w-full">
                  <label className="block text-gray-700 font-bold mb-2">
                    Owner Name
                  </label>
                  <input
                    type="text"
                    id="OWnername"
                    name="ownername"
                    className="w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:shadow-outline"
                    required={true}
                    value={data.ownername}
                  />
                </div>

                <div className="mb-4 w-full">
                  <label className="block text-gray-700 font-bold mb-2">
                    Hotel Name
                  </label>
                  <input
                    value={data.hotelname}
                    required={true}
                    type="text"
                    id="hotelname"
                    name="hotelname"
                    className="w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:shadow-outline"
                  />
                </div>
                <div className="mb-4 w-full">
                  <label className="block text-gray-700 font-bold mb-2">
                    Country
                  </label>
                  <input
                    value={data.country}
                    required={true}
                    type="email"
                    id="email"
                    name="email"
                    className="w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:shadow-outline"
                  />
                </div>
                <div className="mb-4 w-full">
                  <label className="block text-gray-700 font-bold mb-2">
                    District
                  </label>
                  <textarea
                    value={data.district}
                    required={true}
                    id="address"
                    name="address"
                    className="w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:shadow-outline"
                  />
                </div>

                <div className="mb-4 w-full">
                  <label className="block text-gray-700 font-bold mb-2">
                    Pin
                  </label>
                  <input
                    value={data.pin}
                    required={true}
                    type="text"
                    id="country"
                    name="country"
                    className="w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:shadow-outline"
                  />
                </div>
                <div className="mb-4 w-full">
                  <label className="block text-gray-700 font-bold mb-2">
                    GST
                  </label>
                  <input
                    value={data.gst}
                    required={true}
                    type="text"
                    id="state"
                    name="state"
                    className="w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:shadow-outline"
                  />
                </div>
              </form>
            </div>
            <div className="column w-1/2 flex-grow">
              <form className="flex flex-col items-center w-full m-2 p-2">
                <div className="mb-4 w-full">
                  <label className="block text-gray-700 font-bold mb-2">
                    Email
                  </label>
                  <input
                    value={data.email}
                    required={true}
                    type="email"
                    id="email"
                    name="email"
                    className="w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:shadow-outline"
                  />
                </div>
                <div className="mb-4 w-full">
                  <label className="block text-gray-700 font-bold mb-2">
                    Address
                  </label>
                  <textarea
                    value={data.address}
                    required={true}
                    id="address"
                    name="address"
                    className="w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:shadow-outline"
                  />
                </div>

                <div className="mb-4 w-full">
                  <label className="block text-gray-700 font-bold mb-2">
                    State
                  </label>
                  <input
                    value={data.state}
                    required={true}
                    type="text"
                    id="country"
                    name="country"
                    className="w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:shadow-outline"
                  />
                </div>
                <div className="mb-4 w-full">
                  <label className="block text-gray-700 font-bold mb-2">
                    City
                  </label>
                  <input
                    value={data.city}
                    required={true}
                    type="text"
                    id="state"
                    name="state"
                    className="w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:shadow-outline"
                  />
                </div>
                <div className="mb-4 w-full">
                  <label className="block text-gray-700 font-bold mb-2">
                    Phone number
                  </label>
                  <input
                    value={data.phone}
                    required={true}
                    type="number"
                    id="Phone"
                    name="Phone"
                    className="w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:shadow-outline"
                  />
                </div>

                <div className="mb-4 w-full">
                  <label className="block text-gray-700 font-bold mb-2">
                    Pan card
                  </label>
                  <input
                    value={data.pan}
                    required={true}
                    type="text"
                    id="pan"
                    name="pan"
                    className="w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:shadow-outline"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className=" flex justify-evenly mt-20">
        <div className="colunm text-center">
          <h1>PAN CARD</h1>
          <img className=" w-full h-64" src={data.panPic} alt="" />{" "}
        </div>
        <div className="colunm text-center">
          <h1>ADHAR CARD</h1>
          <img className=" w-full h-64" src={data.adharPic} alt="" />
        </div>
      </div>
      <h1 className="text-center mt-10 text-2xl">Vendor Request </h1>
    </div>
  );
}

export default AdminRejectVendorDetailList;
