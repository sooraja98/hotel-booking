import React from 'react'

function Hotels() {
    return (
        <>
            <div className="flex flex-wrap container justify-center items-center mt-20"
                style={
                    {
                        marginLeft: '10px',
                        marginRight: '10px'
                    }
            }>
                <div className="w-full lg:w-1/5 bg-yellow-400 flex flex-col justify-center items-center lg:items-stretch">
                    <div className="flex flex-col flex-wrap w-4/5 justify-center h-72">
                        <label className="flex text-black justify-center bg-yellow-400">Destination/Property</label>
                        <input className="flex mx-auto h-10 w-4/5 mb-2 mr-2  rounded-lg" type="text" placeholder='Destination/ Property'/>
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
                <div className="w-full lg:w-4/5 flex justify-center items-center content-center">
                    <div className="  w-4/5 h-64 border-4 border-black rounded-lg p-4 flex justify-center items-center content-center">
                        <div className=" flex  w-1/5 p-1 md:p-2">
                            <img alt="gallery" className="block h-full w-full rounded-lg object-cover object-center" src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"/>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Hotels
