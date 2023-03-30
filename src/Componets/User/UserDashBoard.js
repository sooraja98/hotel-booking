import React from 'react'
import { Route,Routes } from 'react-router-dom'
import UserHeader from './UserHeader'
import UserFooter from './UserFooter'
import UserHome from './UserHome'
import Hotels from './Hotels'
import HotelSinglePageView from './HotelSinglePageView'
function UserDashBoard() {
  return (
    <div>
        <UserHeader/>
          <Routes>
            <Route path='/home' element={<UserHome/>} />
            <Route path='/hotels' element={<Hotels/>} />
            <Route path='/hotels/*' element={<Hotels/>} />
            <Route path='/hotel-single-page-view/*' element={<HotelSinglePageView/>} />

          </Routes>
          <UserFooter/>

    </div>
  )
}

export default UserDashBoard