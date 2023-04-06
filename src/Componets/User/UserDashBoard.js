import React from 'react'
import { Route,Routes } from 'react-router-dom'
import UserHeader from './UserHeader'
import UserFooter from './UserFooter'
import UserHome from './UserHome'
import Hotels from './Hotels'
import HotelSinglePageView from './HotelSinglePageView'
import HotelBooking from './HotelBooking'
function UserDashBoard() {
  return (
    <div>
        <UserHeader/>
          <Routes>
            <Route path='/home' element={<UserHome/>} />
            <Route path='/login' element={<UserHome/>} />
            <Route path='/hotels' element={<Hotels/>} />
            <Route path='/hotels/*' element={<Hotels/>} />
            <Route path='/hotels/hotel-single-page-view/*' element={<HotelSinglePageView/>} />
            <Route path='/hotels/hotel-single-page-view/hotelbooking/*' element={<HotelBooking/>} />

          </Routes>
          <UserFooter/>

    </div>
  )
}

export default UserDashBoard