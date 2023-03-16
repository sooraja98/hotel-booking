import React, { useState, useEffect } from "react";
import { useParams,useNavigate } from "react-router-dom";
import axios from "axios";
function AdminVendorRequestSinglePage(props) {
  const navigate=useNavigate()
  const id = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `http://localhost:3001/admin/request/singleRequestData/${JSON.stringify(
          id
        )}`
      );
      setData(response.data);
    };
    fetchData();
  }, []);


    const allowed=async()=>{
        const id=data._id
   try {
    const response=await axios.patch(`http://localhost:3001/admin/request/allowing/${id}`)
      if(response.data==='changed'){
          navigate('/admin/vendorsList')
      }
    
   } catch (error) {
      console.log('error in the request allowing frontend side'+error)
   }
    }

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
      <div className="  flex justify-evenly mt-12 ">
        <div className="column">
          <button  onClick={allowed} class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-600 to-green-300 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white  rounded-md group-hover:bg-opacity-0 text-gray-600 font-bold">
              ALLOW
            </span>
          </button>
        </div>
        <div className="column">
          <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-600 to-red-300 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white  rounded-md group-hover:bg-opacity-0 text-gray-600 font-bold">
              REJECT
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdminVendorRequestSinglePage;
