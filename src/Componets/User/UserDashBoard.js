import React from 'react'
import { Route,Routes } from 'react-router-dom'
import UserHeader from './UserHeader'
import UserFooter from './UserFooter'
import UserHome from './UserHome'
function UserDashBoard() {
  return (
    <div>
        <UserHeader/>
          <Routes>

            <Route path='/home' element={<UserHome/>} />
          </Routes>
        
        <UserFooter/>
    </div>
  )
}

export default UserDashBoard