import React from "react";

function UserHome() {
  return(
<div className="flex justify-between mt-2 h-16 w-4/6 bg-yellow-400  items-center mx-auto">
  <input type="text" className="bg-white px-4 py-2 mr-2 flex-1 rounded-lg" placeholder="Text input"/>
  <input type="date" className="bg-white px-4 py-2 mr-2 flex-1  rounded-lg" placeholder="Start date" min={new Date().toISOString().slice(0,10)}/>
  <input type="date" className="bg-white px-4 py-2 flex-1  rounded-lg" placeholder="End date"/>
  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded">
    Submit
  </button>
</div>

  );
}

export default UserHome;
