import React from 'react'
import { Link } from 'react-router-dom'
function RejectPage() {
  return (


        <div className="min-h-screen bg-gray-100 flex justify-center items-center">
          <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">You are Rejected</h2>
            <p className="mb-6">
              Your are Rejected to more about  contact us email is adsasd@gmail.com or do the registeration once more
            </p>
            <Link to='/vendor/login-register'>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 ml-36  rounded focus:outline-none focus:shadow-outline">
              OK
            </button></Link>
            
          </div>
        </div>

    
  )
}

export default RejectPage