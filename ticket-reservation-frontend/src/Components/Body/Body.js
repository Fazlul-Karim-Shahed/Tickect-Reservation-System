import React from 'react'
import { Route, Routes } from 'react-router'
import Contact from './Contact'
import Profile from './Profile'
import Ticket from './Ticket'
import Signin from './Auth/Signin'
import Signup from './Auth/Signup'
import Admin from './Admin'
import Home from './Home'


export default function Body() {

  let admin = true

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/ticket' element={<Ticket />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />

        {admin ? <Route path='/admin' element={<Admin />} /> : ''}

        <Route path='*' element={<h4 className=''>Page not found</h4>} />

      </Routes>
    </div>
  )
}
