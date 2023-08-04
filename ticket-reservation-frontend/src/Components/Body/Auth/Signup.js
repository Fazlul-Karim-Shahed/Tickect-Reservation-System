import React, { useEffect, useState } from 'react'
import { Formik } from 'formik'
import { checkUserAuth, createUser, getSingleUser } from '../../Function/UserFunction'
import { Link } from 'react-router-dom'
import { checkLocalStorageAuth, storeLocalStorage } from '../../Function/StorageFunction'


export default function Signup() {

  useEffect(() => {
    console.log(checkLocalStorageAuth())

  }, [])


  const [message, setMessage] = useState('')


  return (
    <div>
      <Formik

        initialValues={{

          name: '',
          email: '',
          role: 'user',
          mobile: '',
          password: ''

        }}

        onSubmit={val => {
          checkUserAuth(val, 'signup').then(data => {
            
            if (data.auth) {
              setMessage(data.message)
            }

            else {
              createUser(val).then(data => {
                getSingleUser(data.name).then(data => {
                  storeLocalStorage(data)
                  setMessage('Register successful')
                  window.location.replace('/')
                })

              })
            }
          })
        }}

      >

        {({ handleChange, handleSubmit, values }) => (

          <div className='w-75 m-auto p-3 my-5'>
            <form className='form-control shadow-sm' onSubmit={handleSubmit} action="">

              <div className='mt-3'>
                <label htmlFor="name">Name</label> <br />
                <input className='form-control' value={values.name} onChange={handleChange} name='name' type="text" id='name' />
              </div>

              <div className='mt-3'>
                <label htmlFor="email">Email</label> <br />
                <input className='form-control' value={values.email} onChange={handleChange} name='email' type="text" id='email' />
              </div>

              <div className='mt-3'>
                <label htmlFor="mobile">Mobile</label> <br />
                <input className='form-control' value={values.mobile} onChange={handleChange} name='mobile' type="text" id='mobile' />
              </div>

              <div className='mt-3'>
                <label htmlFor="password">Password</label> <br />
                <input className='form-control' value={values.password} onChange={handleChange} name='password' type="text" id='password' />
              </div>

              <div className='py-2'>
                Already have account?<Link to={'/signin'}>Signin now</Link>
              </div>

              <button className='mt-3 btn btn-success' type="submit">Submit</button>

              <div className='text-center text-danger py-2'>{message}</div>

            </form>
          </div>

        )}

      </Formik>
    </div>
  )
}
