import React from 'react'
import { Route, Routes } from 'react-router'
import Contact from './Contact'
import Profile from './Profile'
import Ticket from './Ticket'
import Signin from './Auth/Signin'
import Signup from './Auth/Signup'
import Admin from './Admin'
import Home from './Home'
import Logout from './Auth/Logout'
import { checkLocalStorageAuth } from '../Function/StorageFunction'


export default function Body() {

  let auth = checkLocalStorageAuth().auth

  let admin
  if (auth) {
    if (checkLocalStorageAuth().data.role === 'admin') admin = true
    else admin = false
  }
  else admin = false

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/contact' element={<Contact />} />
        {/* <Route path='/ticket' element={<Ticket />} /> */}
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/logout' element={<Logout />} />

        {admin ? <Route path='/admin' element={<Admin />} /> : ''}
        {auth ? <Route path='/ticket' element={<Ticket />} /> : ''}

        <Route path='*' element={<h4 className=''>Page not found</h4>} />

      </Routes>
    </div>
  )
}
