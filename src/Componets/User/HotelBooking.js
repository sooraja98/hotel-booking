import React from 'react'
import { useParams } from 'react-router-dom';

function HotelBooking() {
  const value = useParams();
  const [id, roomid,total] = value['*'].split('/');
  console.log(total)
    
  return (
    <div>sdfasdfasd</div>
  )
}

export default HotelBooking