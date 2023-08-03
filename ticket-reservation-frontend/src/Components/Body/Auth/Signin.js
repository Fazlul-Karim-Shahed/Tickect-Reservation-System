import React from 'react'
import { Formik } from 'formik'
import { createUser } from '../../Function/UserFunction'
import { Link } from 'react-router-dom'


export default function Signin() {
  return (
    <div>
      <Formik

        initialValues={{
          name: '',
          email: '',
        }}

        onSubmit={val => {
          createUser(val).then(data => {
            console.log(data)
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

              <div>
                Not have account?<Link to={'/signup'}> Register now</Link>
              </div>

              <button className='mt-3 btn btn-success' type="submit">Submit</button>
            </form>
          </div>

        )}

      </Formik>
    </div>
  )
}
