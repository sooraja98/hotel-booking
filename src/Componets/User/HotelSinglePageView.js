import axios from 'axios';
import React, {useEffect, useState} from 'react'
import {useParams, useLocation} from 'react-router-dom';

import {
    FaSwimmingPool,
    FaDumbbell,
    FaSpa,
    FaUtensils,
    FaBriefcase,
    FaClock
} from 'react-icons/fa';
import HotelRoomPriceBook from './HotelRoomPriceBook';
import HotelNameAddress from './HotelNameAddress';

function HotelSinglePageView() {
    const id = useParams()
    const [data, setData] = useState({});
const value=id['*']
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`http://localhost:3001/user/hotels/singlehotelview/${
                JSON.stringify(id)
            }`, {
                headers: {
                    "Content-Type": "application/json"

                }
            });
            setData(response.data);
        };
        fetchData();
    }, []);

 
    return (

        <div className="flex flex-wrap container"
            style={
                {
                    marginLeft: '40px',
                    marginRight: '40px'
                }
        }>


            <div className="flex flex-wrap container">
                <div className="w-full lg:w-1/5 bg-yellow-400 flex flex-col justify-center h-80 mt-44 lg:items-stretch">
                    <div className="flex flex-col flex-wrap w-4/5 justify-center h-max">
                        <label className="flex text-black justify-center bg-yellow-400">Destination/Property</label>
                        <input className="flex mx-auto h-10 w-4/5 mb-2 mr-2  rounded-lg text-black" type="text" placeholder="Destination/Property"/>
                        <label className="flex text-black justify-center bg-yellow-400 ">Check-IN Date</label>
                        <input type="date" className="mx-auto bg-white h-10 px-4 w-4/5 rounded-lg mb-2 mr-2" placeholder="Start date"
                            min={
                                new Date().toISOString().slice(0, 10)
                            }/>
                        <label className="flex text-black justify-center bg-yellow-400">Check-OUT Date</label>
                        <input type="date" className="mx-auto bg-white h-10 px-4 w-4/5 rounded-lg mb-2 mr-2" placeholder="End date"/>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold h-10 px-4 w-4/5 rounded-lg mx-auto mt-2 mr-2">
                            Submit
                        </button>
                    </div>
                </div>
                <div class="w-full lg:w-4/5 flex flex-col justify-center items-center content-center ">
                <HotelNameAddress id={id}/>

                    <section class="overflow-hidden text-neutral-700">
                        <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
                            <div class="-m-1 flex flex-wrap md:-m-2">
                                <div class="flex w-1/2 flex-wrap">
                                    <div class="w-1/2 p-1 md:p-2">
                                        <img alt="gallery" class="block h-full w-full rounded-lg object-cover object-center" src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp"/>
                                    </div>
                                    <div class="w-1/2 p-1 md:p-2">
                                        <img alt="gallery" class="block h-full w-full rounded-lg object-cover object-center" src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp"/>
                                    </div>
                                    <div class="w-full p-1 md:p-2">
                                        <img alt="gallery" class="block h-full w-full rounded-lg object-cover object-center" src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"/>
                                    </div>
                                </div>
                                <div class="flex w-1/2 flex-wrap">
                                    <div class="w-full p-1 md:p-2">
                                        <img alt="gallery" class="block h-full w-full rounded-lg object-cover object-center" src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp"/>
                                    </div>
                                    <div class="w-1/2 p-1 md:p-2">
                                        <img alt="gallery" class="block h-full w-full rounded-lg object-cover object-center" src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp"/>
                                    </div>
                                    <div class="w-1/2 p-1 md:p-2">
                                        <img alt="gallery" class="block h-full w-full rounded-lg object-cover object-center" src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>


            <HotelRoomPriceBook data={data} value={value}/>

            <div className="hotel-facilities py-12">
                <h2 className="text-3xl font-bold mb-8">Our Hotel Facilities</h2>
                <div className="flex flex-wrap">
                    <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                        <div className="bg-white rounded-lg shadow-lg p-6"
                            style={
                                {backgroundImage: 'url("https://source.unsplash.com/640x480/?pool")'}
                        }>
                            <div className="flex justify-center items-center mb-4">
                                <FaSwimmingPool className="text-4xl text-white"/>
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-center">Swimming Pool</h3>
                            <p className="text-gray-700 text-center">Enjoy a refreshing dip in our indoor swimming pool, open year-round.</p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                        <div className="bg-blue-500 rounded-lg shadow-lg p-6"
                            style={
                                {backgroundImage: 'url("https://source.unsplash.com/640x480/?gym")'}
                        }>
                            <div className="flex justify-center items-center mb-4">
                                <FaDumbbell className="text-4xl text-white"/>
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-center text-white">Fitness Center</h3>
                            <p className="text-gray-200 text-center">Stay in shape during your stay with our fully equipped fitness center.</p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                        <div className="bg-white rounded-lg shadow-lg p-6"
                            style={
                                {backgroundImage: 'url("https://source.unsplash.com/640x480/?spa")'}
                        }>
                            <div className="flex justify-center items-center mb-4">
                                <FaSpa className="text-4xl text-white"/>
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-center">Spa</h3>
                            <p className="text-gray-700 text-center">Relax and rejuvenate at our on-site spa, offering a range of treatments.</p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                        <div className="bg-red-500 rounded-lg shadow-lg p-6"
                            style={
                                {backgroundImage: 'url("https://source.unsplash.com/640x480/?food")'}
                        }>
                            <div className="flex justify-center items-center mb-4">
                                <FaUtensils className="text-4xl text-white"/>
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-center text-white">Restaurant</h3>
                            <p className="text-gray-200 text-center">Savor delicious dishes from our restaurant, open for breakfast, lunch, and dinner.</p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                        <div className="bg-red-500 rounded-lg shadow-lg p-6"
                            style={
                                {backgroundImage: 'url("https://source.unsplash.com/640x480/?meeting")'}
                        }>
                            <div className="flex justify-center items-center mb-4">
                                <FaBriefcase className="text-4xl text-white"/>
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-center text-white">Meeting Rooms</h3>
                            <p className="text-gray-200 text-center">Host successful meetings and events in our versatile meeting rooms.</p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                        <div className="bg-red-500 rounded-lg shadow-lg p-6"
                            style={
                                {backgroundImage: 'url("https://source.unsplash.com/640x480/?Reception")'}
                        }>
                            <div className="flex justify-center items-center mb-4">
                                <FaClock className="text-4xl text-white"/>
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-center text-white">24/7 Reception</h3>
                            <p className="text-gray-200 text-center">Our friendly staff is available around the clock to assist you with anything you need.</p>
                        </div>
                    </div>

                </div>
            </div>


            <div className=" w-full bg-gray-50 px-4 py-8">
                <div className="max-w-5xl mx-auto">
                    <div className="mb-4">
                        <h2 className="text-2xl font-medium mb-4">Write a Review</h2>
                        <form>
                            <div className="flex items-center border-b border-gray-300 py-2">
                                <input type="text" placeholder="Write your review here" className="bg-transparent w-full py-2 px-3 text-gray-700 focus:outline-none"/>
                                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg ml-4 hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500">Post</button>
                            </div>
                        </form>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg p-4">
                        <h3 className="text-xl font-medium mb-4">Reviews</h3>
                        <p className="text-gray-400 mb-4">No reviews yet.</p>
                        <div className="border-b border-gray-300 py-4">
                            <p className="mb-2">This hotel is amazing!</p>
                            <span className="text-gray-400 text-sm">Posted on April 5, 2023</span>
                        </div>
                        <div className="border-b border-gray-300 py-4">
                            <p className="mb-2">I wasn't impressed with this hotel.</p>
                            <span className="text-gray-400 text-sm">Posted on April 4, 2023</span>
                        </div>
                    </div>
                </div>
            </div>


        </div>


    )
}

export default HotelSinglePageView
