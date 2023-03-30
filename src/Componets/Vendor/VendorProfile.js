import React, {useEffect, useRef, useState} from "react";
import axios from "axios";
import Swal from "sweetalert2";

function VendorProfile() {

    const [isOpen, setIsOpen] = useState(false);
    const [isUpdate, setIsUpdate] = useState(false);
    const roomTypeRef = useRef(null);
    const roomCountRef = useRef(null);
    const roomPriceRef = useRef(null);
    const [hotel, setHotel] = useState([])


    const toggleModal = () => {
        setIsOpen(!isOpen);
    };
    const toggleModalUpdarte = () => {
        setIsUpdate(!isUpdate);
    };
    useEffect(() => {
        const fetchData = async () => {
            const email = localStorage.getItem('vendorToken')
            const response = await axios.get(`http://localhost:3001/vendor/hotelroomgetting?email=${email}`)
            setHotel(response.data)
        };
        fetchData()
    }, [hotel])

    const [hotelImages, setHotelImages] = useState([]);


    const handleHotelPicChange = (event) => {
        setHotelImages(event.target.files);
    };

    const hotelPicSubmit = async (e) => {
        e.preventDefault()
        try {
            const email = localStorage.getItem('vendorToken');
            const formData = new FormData();
            for (let i = 0; i < hotelImages.length; i++) {
                formData.append("hotelImages", hotelImages[i]);
            }
            console.log(formData)
            const response = await axios.post("http://localhost:3001/vendor/uploadimage", {formData, email});
            Swal.fire("Success", "Hotel images uploaded successfully", "success");
        } catch (error) {
            console.log('error happened in front end hotel pic uploading side' + error);
            Swal.fire("Error", "Internal server error", "error");
        }
    }


    const handleRoomData = async (e) => {
        e.preventDefault()
        const email = localStorage.getItem('vendorToken')
        const roomType = roomTypeRef.current.value;
        const roomCount = roomCountRef.current.value;
        const roomPrice = roomPriceRef.current.value;
        const response = await axios.post("http://localhost:3001/vendor/hoteladding", {roomType, roomCount, roomPrice, email})
        if (response.status === 200) {
            setHotel(response.data)
            setIsOpen(!isOpen)

        } else {
            console.log('error in the hotel profile hotel adding section')
            alert("an error happend when you adding the room")
        }


    }


    const deleteRoom = async (hotelId, roomId) => {
        const respsonse = await axios.delete(`http://localhost:3001/vendor/deleteroom/${hotelId}/${roomId}`)
        if (respsonse.data === "Room deleted successfully") {
            Swal.fire({
                icon: "success",
                title: "Registration Successful",
                text: "You have successfully registered your hotel",
                showCancelButton: false,
                confirmButtonColor: "#3085d6",
                confirmButtonText: "OK"
            })
        } else {
            Swal.fire({icon: "error", title: "Oops...", text: "Something went wrong!"});
        }

    }

    return (

        <>

            <div> {
                isUpdate && (
                    <div className="fixed z-10 inset-0 overflow-y-auto">
                        <div className="flex items-center justify-center min-h-screen">
                            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                                <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                            </div>

                            <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
                                <form className="px-6 py-4">
                                    <div className="mb-4">
                                        <label className="block text-gray-700 font-bold mb-2">
                                            Room Type
                                        </label>
                                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="roomType" type="text" placeholder="Room Type"
                                            ref={roomTypeRef}/>
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 font-bold mb-2">
                                            Number of Rooms
                                        </label>
                                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="room" type="number" placeholder="Number"
                                            ref={roomCountRef}/>
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 font-bold mb-2">
                                            Price
                                        </label>
                                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="proce" type="text" placeholder="price"
                                            ref={roomPriceRef}/>
                                    </div>

                                    <div className="flex justify-center">
                                        <button onClick={''}
                                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                            Update
                                        </button>
                                        <button onClick={toggleModalUpdarte}
                                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2">
                                            Cancel
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                )
            } </div>


            <div> {
                isOpen && (
                    <div className="fixed z-10 inset-0 overflow-y-auto">
                        <div className="flex items-center justify-center min-h-screen">
                            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                                <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                            </div>

                            <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
                                <form className="px-6 py-4">
                                    <div className="mb-4">
                                        <label className="block text-gray-700 font-bold mb-2">
                                            Room Type
                                        </label>
                                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="roomType" type="text" placeholder="Room Type"
                                            ref={roomTypeRef}/>
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 font-bold mb-2">
                                            Number of Rooms
                                        </label>
                                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="room" type="number" placeholder="Number"
                                            ref={roomCountRef}/>
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 font-bold mb-2">
                                            Price
                                        </label>
                                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="proce" type="text" placeholder="price"
                                            ref={roomPriceRef}/>
                                    </div>

                                    <div className="flex justify-center">
                                        <button onClick={handleRoomData}
                                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                            SAVE
                                        </button>
                                        <button onClick={toggleModal}
                                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2">
                                            Cancel
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                )
            } </div>
            <div className="flex flex-col  justify-center content-center items-center">
                <div className="flex items-center justify-center content-center">
                    <div>
                        <h1 className="text-4xl">HOTEL NAME</h1>
                    </div>
                </div>
                <section className="overflow-hidden text-neutral-700 bg-gray-100">
                    <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
                        <div className="-m-1 flex flex-wrap md:-m-2">
                            <div className="flex w-1/3 flex-wrap">
                                <div className="w-full p-1 md:p-2">
                                    <img alt="gallery" className="block h-full w-full rounded-lg object-cover object-center" src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"/>
                                </div>
                            </div>
                            <div className="flex w-1/3 flex-wrap">
                                <div className="w-full p-1 md:p-2">
                                    <img alt="gallery" className="block h-full w-full rounded-lg object-cover object-center" src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp"/>
                                </div>
                            </div>
                            <div className="flex w-1/3 flex-wrap">
                                <div className="w-full p-1 md:p-2">
                                    <img alt="gallery" className="block h-full w-full rounded-lg object-cover object-center" src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp"/>
                                </div>
                            </div>
                            <div className="flex w-1/3 flex-wrap">
                                <div className="w-full p-1 md:p-2">
                                    <img alt="gallery" className="block h-full w-full rounded-lg object-cover object-center" src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp"/>
                                </div>
                            </div>
                            <div className="flex w-1/3 flex-wrap">
                                <div className="w-full p-1 md:p-2">
                                    <img alt="gallery" className="block h-full w-full rounded-lg object-cover object-center" src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(76).webp"/>
                                </div>
                            </div>
                            <div className="flex w-1/3 flex-wrap">
                                <div className="w-full p-1 md:p-2">
                                    <img alt="gallery" className="block h-full w-full rounded-lg object-cover object-center" src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp"/>
                                </div>
                            </div>
                            <div className="flex w-1/3 flex-wrap">
                                <div className="w-full p-1 md:p-2">
                                    <img alt="gallery" className="block h-full w-full rounded-lg object-cover object-center" src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp"/>
                                </div>
                            </div>
                            <div className="flex w-1/3 flex-wrap">
                                <div className="w-full p-1 md:p-2">
                                    <img alt="gallery" className="block h-full w-full rounded-lg object-cover object-center" src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp"/>
                                </div>
                            </div>
                            <div className="flex w-1/3 flex-wrap">
                                <div className="w-full p-1 md:p-2">
                                    <img alt="gallery" className="block h-full w-full rounded-lg object-cover object-center" src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <form onSubmit={hotelPicSubmit}>
                        <div className="flex justify-center">
                            <label className="relative cursor-pointer bg-gray-300 hover:bg-gray-500 rounded-md font-medium py-2 px-4">
                                <span>Upload the picture</span>
                                <input onChange={handleHotelPicChange}
                                    required={true}
                                    type="file"
                                    id="hotelImages"
                                    name="hotelImages"
                                    multiple
                                    className="w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:shadow-outline"
                                    accept="image/*"/>
                            </label>
                            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-4 rounded">
                                Add new room
                            </button>
                        </div>

                    </form>


                </section>
                <div className="mt-8 bg-gray-100">
                    <table className="w-full whitespace-nowrap  ">
                        <thead>
                            <tr className="text-gray-600 font-bold bg-gray-100">
                                <th className="px-6 py-3 text-left">Number</th>
                                <th className="px-6 py-3 text-left">Room type</th>
                                <th className="px-6 py-3 text-left">Number of room</th>
                                <th className="px-6 py-3 text-left">Price</th>
                                <th className="px-6 py-3 text-left">Change</th>
                                <th className="px-6 py-3 text-left">Delete</th>
                            </tr>
                        </thead>

                        <tbody> {
                            hotel.map((hotel) => hotel.room.map((room, index) => (
                                <tr className="border-b border-gray-200 bg-gray-200">
                                    <td className="px-6 py-4 whitespace-nowrap text-center">
                                        {
                                        index + 1
                                    }</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-center">
                                        {
                                        room.roomType
                                    }</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-center">
                                        {
                                        room.roomCount
                                    }</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-center">
                                        {
                                        room.roomprice
                                    }</td>
                                    <td className="px-6 py-4 whitespace-nowrap">

                                        <button onClick={toggleModalUpdarte}
                                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                            Update
                                        </button>

                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">

                                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                            onClick={
                                                () => deleteRoom(hotel._id, room._id)
                                        }>
                                            Delete
                                        </button>

                                    </td>
                                </tr>
                            )))
                        } </tbody>
                    </table>
                    <div className="flex justify-center">
                        <button onClick={toggleModal}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Add new room
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
export default VendorProfile
