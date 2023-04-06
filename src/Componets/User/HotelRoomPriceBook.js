import axios from 'axios';
import {addDays} from 'date-fns';
import React, {useEffect, useState} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {Link} from 'react-router-dom';

function HotelRoomPriceBook(props) {
    const {value, data} = props;
    const [checkinDate, setCheckinDate] = useState(null);
    const [checkoutDate, setCheckoutDate] = useState(null);
    const [roomnumber, setRoomNumber] = useState(1);
    const [guestnumber, setGuestNumber] = useState(1);
 
 const token=localStorage.getItem('userToken')
    const calculatePrice = (basePrice, numRooms, numGuests, checkin, checkout) => {
        const oneDay = 24 * 60 * 60 * 1000; // Number of milliseconds in one day
        const numNights = Math.round((checkout - checkin) / oneDay); // Round to nearest whole day
        var totalPrice = basePrice * numNights;
        if (numRooms > 1) {
            totalPrice += basePrice * (numRooms - 1);
        }
        if (numGuests > numRooms * 2) {
            totalPrice += basePrice * 0.2 * (numGuests - numRooms);
        }
        totalPrice = Math.floor(totalPrice);
        return totalPrice
        
    };
 

    return (
        <div className='container flex flex-col mt-28 ml-20'>
            <form className='flex flex-wrap '>
                {
                data.room && data.room.map((room) => (
                    <div key={
                            room.id
                        }
                        className='w-full sm:w-1/2 md:w-3/10 lg:w-1/4 xl:w-1/5 p-4'>
                        <div className='w-full bg-white rounded-lg shadow-lg p-6 bg-cover bg-center'>
                            <h3 className='text-lg font-medium mb-4'>
                                {
                                room.roomType
                            }</h3>
                            <div className='flex items-center mb-4'>
                                <span className='mr-2'>Rooms:</span>
                                <button type='button' className='text-gray-500 rounded-full p-2 hover:bg-gray-100 focus:outline-none'
                                    onClick={
                                        () => {
                                            if (roomnumber > 1) {
                                                setRoomNumber(roomnumber - 1);
                                            }
                                        }
                                }>
                                    -
                                </button>
                                <span className='mx-2'>
                                    {roomnumber}</span>
                                <button type='button' className='text-gray-500 rounded-full p-2 hover:bg-gray-100 focus:outline-none'
                                    onClick={
                                        () => setRoomNumber(roomnumber + 1)
                                }>
                                    +
                                </button>
                            </div>
                            <div className='flex items-center mb-4'>
                                <span className='mr-2'>Guests:</span>
                                <button type='button' className='text-gray-500 rounded-full p-2 hover:bg-gray-100 focus:outline-none'
                                    onClick={
                                        () => {
                                            if (guestnumber > 1) {
                                                setGuestNumber(guestnumber - 1);
                                            }
                                        }
                                }>
                                    -
                                </button>
                                <span className='mx-2'>
                                    {guestnumber}</span>
                                <button type='button' className='text-gray-500 rounded-full p-2 hover:bg-gray-100 focus:outline-none'
                                    onClick={
                                        () => {
                                            setGuestNumber(guestnumber + 1);
                                        }
                                }>
                                    +
                                </button>
                            </div>
                            <div className='flex flex-col space-y-2 w-full'>
                                <label htmlFor='checkin-date' className='font-medium'>
                                    Check-in Date
                                </label>
                                <DatePicker id='checkin-date'
                                    selected={checkinDate}
                                    onChange={
                                        (date) => setCheckinDate(date)
                                    }
                                    className='border border-gray-300 p-2 rounded-md'
                                    minDate={
                                        new Date()
                                    }
                                    required/>
                            </div>
                            <div className='flex flex-col space-y-2'>
                                <label htmlFor='checkout-date' className='font-medium'>
                                    Check-out Date
                                </label>
                                <DatePicker id='checkout-date'
                                    selected={checkoutDate}
                                    onChange={
                                        (date) => setCheckoutDate(date)
                                    }
                                    className='border border-gray-300 p-2 rounded-md'
                                    minDate={
                                        addDays(checkinDate, 1)
                                    }
                                    required/>
                            </div>
                            <div className='flex items-center mb-4'>
                                <span className='mr-2'>Base price:</span>
                                <span id={
                                        `${
                                            room.roomPrice
                                        }-base-price`
                                    }
                                    className='font-medium text-gray-500'>
                                    ₹{
                                    room.roomPrice
                                } </span>
                            </div>
                            <div className='flex items-center mb-4'>
                                <span className='mr-2'>Price:</span>
                                {
                                calculatePrice(room.roomPrice, roomnumber, guestnumber, checkinDate, checkoutDate) >= 0 ? <span id={
                                        `${
                                            room.id
                                        }-price`
                                    }
                                    className='font-bold text-2xl text-blue-500'>
                                    ₹{
                                    calculatePrice(room.roomPrice, roomnumber, guestnumber, checkinDate, checkoutDate)
                                } </span> : <span className='text-red-500'>
                                    Please select valid check-in and check-out dates.
                                </span>
                            } </div>
                            <div className='w-full p-4'>
                                {
                                  token? <Link to={
                                    `hotelbooking/${value}/${room._id}`
                                }>
                                    <button type='submit' className='w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600'>
                                        Book Now
                                    </button>
                                </Link>:<Link to={
                                    `/user/login`
                                }>
                                    <button type='submit' className='w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600'>
                                        Book Now
                                    </button>
                                </Link>
                                }
                               

                            </div>
                        </div>

                    </div>
                ))
            } </form>
        </div>
    );
}

export default HotelRoomPriceBook
