import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

function HotelNameAddress(props) {
    const {id}=props
    const [hotel, setHotel] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`http://localhost:3001/user/hotels/hotelnamefinding/${
                JSON.stringify(id)
            }`, {
                headers: {
                    "Content-Type": "application/json"

                }
            });
            setHotel(response.data);
        };
        fetchData();
    }, []);

  return (
    <div>

{
                    hotel.map((hotel, index) => (
                        <div key={index}>
                            <h1>{
                                hotel.hotelname
                            }</h1>
                            <p>{
                                hotel.address
                            }</p>
                            <p>{
                                hotel.phone
                            }</p>
                        </div>
                    ))
                }
    </div>
  )
}

export default HotelNameAddress