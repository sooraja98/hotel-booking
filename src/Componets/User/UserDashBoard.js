import React from 'react'
import { Route,Routes } from 'react-router-dom'
import UserHeader from './UserHeader'
import UserFooter from './UserFooter'
import UserHome from './UserHome'
import Hotels from './Hotels'
function UserDashBoard() {
  return (
    <div>
        <UserHeader/>
          <Routes>
            <Route path='/home' element={<UserHome/>} />
            <Route path='/hotels' element={<Hotels/>} />
          </Routes>
          <UserFooter/>

    </div>
  )
}

export default UserDashBoard