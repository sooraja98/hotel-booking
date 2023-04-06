import axios from 'axios';
import React, {useEffect} from 'react'
import {useState} from 'react';
import {useLocation, Link} from 'react-router-dom';


function Hotels() {
    const location = useLocation();
    const place = new URLSearchParams(location.search).get('place');
    const [vendor, setVendor] = useState([])
    const [hotel, setHotel] = useState([])
    useEffect(() => {
        try {
            const fetchdata = async () => {
                const response = await axios.get(`http://localhost:3001/user/hotelfinduser/${place}`);
                if (response) {
                    setVendor(response.data);
                } else {
                    console.log('eroor in the fontend hotel getting side')
                }
            };
            fetchdata();
        } catch (error) {
            console.log('the error happened in the front end hotels showing', error);
        }
    }, [place]);


    return (
        <>
            <h1 className='flex justify-center text-2xl mt-4 py-4'>
                <p className='font-bold text-green-900 uppercase'>
                    {place}:{
                    vendor.length
                }
                    Properties</p>
            </h1>
            <div className="flex flex-wrap container mt-20"
                style={
                    {
                        marginLeft: '30px',
                        marginRight: '30px'
                    }
            }>
                <div className="w-full lg:w-1/5 bg-yellow-400 flex flex-col justify-center h-80 lg:items-stretch">
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
                    {
                    vendor.map((vendor, index) => (
                        <div class="w-full lg:w-4/5 h-auto border-2 border-blue-700 mb-2 rounded-lg p-4 flex justify-center items-center content-center lg:flex-row lg:justify-center">
                            <div class="w-full lg:w-1/3 mr-auto p-1 md:p-2 flex justify-center lg:justify-start">
                                <img alt="gallery" class="block h-full w-full max-w-full lg:max-w-full rounded-lg object-cover object-center"
                                    src={
                                        vendor.hotelPic[0]
                                    }/>
                            </div>
                            <div class="w-full lg:w-2/3 ml-auto p-1 md:p-2 flex justify-center lg:justify-start">
                                <div class="max-w-full justify-center content-center">
                                    <div class="text-3xl font-bold mb-2 justify-center content-center text-blue-600">
                                        {
                                        vendor.hotelname
                                    }</div>
                                    <div class="text-lg mb-2">
                                        <p className='font-bold'>Address:</p>
                                        <p className='font-mono'>
                                            {
                                            vendor.address
                                        }</p>
                                    </div>
                                    <div class="text-lg mb-2">
                                        <p className='font-bold'>Phone:</p>
                                        <p className='font-mono'>
                                            {
                                            vendor.phone
                                        }</p>
                                    </div>
                                    <div class="text-lg mb-2">
                                        <p className='font-bold'>
                                            Country:</p>
                                        <p className='font-mono '>
                                            {
                                            vendor.country
                                        }</p>
                                    </div>
                                    <div class="text-lg mb-2">
                                        <p className='font-bold'>City:</p>
                                        <p className='font-mono'>
                                            {
                                            vendor.city
                                        }</p>
                                    </div>
                                    <hr class="my-2 border-gray-500 w-full"></hr>
                                    <Link to={`hotel-single-page-view/${vendor._id}`}>
                                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 ml-96 rounded ">Book Now</button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                    ))
                } </div>
            </div>


        </>
    )
}

export default Hotels
