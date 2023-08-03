import React from 'react'
import { Formik } from 'formik'
import { createUser } from '../../Function/UserFunction'


export default function Signup() {
  return (
    <div>
      <Formik

        initialValues={{
          name: '',
          email: '',
          role: 'user',
          mobile: ''
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

              <div className='mt-3'>
                <label htmlFor="mobile">Mobile</label> <br />
                <input className='form-control' value={values.mobile} onChange={handleChange} name='mobile' type="text" id='mobile' />
              </div>

              <button className='mt-3 btn btn-success' type="submit">Submit</button>
            </form>
          </div>

        )}

      </Formik>
    </div>
  )
}
