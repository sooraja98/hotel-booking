import React from 'react'
import PersonalHeader from './PersonalHeader'
import { useState } from 'react';

function UserLogin() {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  
  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission logic here
  };
  
  return (
    <div className='app'>
        <PersonalHeader/>
         <form className='max-w-sm mx-auto shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4' onSubmit={handleSubmit}>
      <div className='mb-4'>
        <label htmlFor='email' className='block text-gray-700 font-bold mb-2'>Email</label>
        <input type='email' id='email' name='email' placeholder='Enter your email' className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' value={email} onChange={handleEmailChange} required />
      </div>
      <div className='mb-4'>
        <label htmlFor='otp' className='block text-gray-700 font-bold mb-2'>OTP</label>
        <input type='number' id='otp' name='otp' placeholder='Enter OTP' className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' value={otp} onChange={handleOtpChange} required />
      </div>
      <div className='flex items-center justify-between'>
        <button type='submit' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>
          Login
        </button>
        <a href='#' className='inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800'>
          Resend OTP
        </a>
      </div>
    </form>

    </div>
  )
}

export default UserLogin