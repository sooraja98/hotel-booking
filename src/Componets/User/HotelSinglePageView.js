import axios from 'axios';
import React, {useEffect, useState} from 'react'
import {useParams} from "react-router-dom";

function HotelSinglePageView() {
    const id = useParams()
    const [data, setData] = useState({});
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
        <div className=''>

            {/* <h1>{data}</h1> */}

        </div>
    )
}

export default HotelSinglePageView
