import React, {useState} from "react";
import {useRef} from "react";
import { useNavigate } from "react-router-dom";

function UserHome() {
        const navigate=useNavigate()
    const placeRef = useRef()
    const placeSubmit = (e) => {
        e.preventDefault()
        const place = placeRef.current.value;
        navigate(`/user/hotels?place=${place}`)
    }

    return (
        <form onSubmit={placeSubmit}>
            <div className="flex justify-between mt-2 h-16 w-4/6 bg-yellow-400  items-center mx-auto">

                <input type="text" className="bg-white px-4 py-2 mr-2 flex-1 rounded-lg" placeholder="Text input"
                    ref={placeRef}
                    required/>
                <input type="date" className="bg-white px-4 py-2 mr-2 flex-1  rounded-lg" placeholder="Start date"
                    min={
                        new Date().toISOString().slice(0, 10)
                    }/>
                <input type="date" className="bg-white px-4 py-2 flex-1  rounded-lg" placeholder="End date"/>
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded">
                    Submit
                </button>

            </div>
        </form>

    );
}

export default UserHome;
