import { Formik } from 'formik'
import React from 'react'

export default function PassengerInfo() {
  return (
    <div className="px-2">
      <Formik

        initialValues={{
          bookedBy: '',
          mobile: '',
          email: '',
          address: '',

        }}

        onSubmit={val => {


        }}

      >


        {({ values, handleChange, handleSubmit }) => (
          <div>

            <form className='form-control shadow py-4' onSubmit={handleSubmit} action="">


              <div className="row">
                <div className="col-md-6">
                  <div className='mt-4'>
                    <label htmlFor="bookedBy">Booked By: </label> <br />
                    <input className='form-control' type="text" name='bookedBy' id='bookedBy' onChange={handleChange} value={JSON.parse(localStorage.getItem(process.env.REACT_APP_LOCAL_STORAGE + 'user')).name} />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className='mt-4'>
                    <label htmlFor="email">Email: </label> <br />
                    <input className='form-control' type="text" name='email' id='email' onChange={handleChange} value={JSON.parse(localStorage.getItem(process.env.REACT_APP_LOCAL_STORAGE + 'user')).email} />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <div className='mt-4'>
                    <label htmlFor="mobile">Mobile: </label> <br />
                    <input className='form-control' type="text" name='mobile' id='mobile' onChange={handleChange} value={JSON.parse(localStorage.getItem(process.env.REACT_APP_LOCAL_STORAGE + 'user')).mobile} />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className='mt-4'>
                    <label htmlFor="address">address: </label> <br />
                    <textarea className='form-control' type="text" name='address' id='address' onChange={handleChange} value={values.address} />
                  </div>
                </div>
              </div>



              <button className='btn btn-primary mt-4' type="submit">Submit</button>
              <div className='text-danger mt-2'>Save before continuing.</div>
            </form>

          </div>
        )}


      </Formik>
    </div>
  )
}
