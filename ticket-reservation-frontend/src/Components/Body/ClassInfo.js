import { Formik } from 'formik'
import React from 'react'
import { Table } from 'reactstrap'

export default function ClassInfo() {

  let classDetails = [
    { name: 'Sitting', slots: 30, fare: '50' },
    { name: 'Economic A', slots: 30, fare: '60' },
    { name: 'Economic B', slots: 30, fare: '70' },
    { name: 'Tourist', slots: 30, fare: '90' },
    { name: 'Cabin', slots: 30, fare: '100' },
  ]

  return (
    <div className="px-2">
      <Formik

        initialValues={{
          classIndex: localStorage.getItem(process.env.REACT_APP_LOCAL_STORAGE + 'class') === null ? '' : JSON.parse(localStorage.getItem(process.env.REACT_APP_LOCAL_STORAGE + 'class')).classIndex,

          passengerNumber: localStorage.getItem(process.env.REACT_APP_LOCAL_STORAGE + 'class') === null ? '1' : JSON.parse(localStorage.getItem(process.env.REACT_APP_LOCAL_STORAGE + 'class')).passengerNumber
        }}

        onSubmit={val => {

          localStorage.setItem(process.env.REACT_APP_LOCAL_STORAGE + 'class', JSON.stringify({
            ...classDetails[val.classIndex],
            passengerNumber: val.passengerNumber,
            classIndex: val.classIndex
          }))
        }}

      >


        {({ values, handleChange, handleSubmit }) => (
          <div>

            <form className='form-control shadow py-4' onSubmit={handleSubmit} action="">

              <Table hover>
                <thead>
                  <tr>
                    <th>Class Type</th>
                    <th>Slot</th>
                    <th>Fare</th>
                  </tr>
                </thead>

                <tbody>
                  {
                    classDetails.map((item, index) => {
                      return <tr>
                        <td>
                          <label htmlFor={"classIndex" + index}>
                            <input checked={String(index) === values.classIndex} className='form-check-input' onChange={handleChange} value={index} type="radio" name="classIndex" id={"classIndex" + index} />
                            <span className='ms-2'>{item.name}</span>
                          </label>
                        </td>

                        <td>{item.slots}</td>
                        <td>{item.fare}</td>
                      </tr>
                    })
                  }

                </tbody>

              </Table>

              <div className='mt-4'>
                <label htmlFor="passengerNumber">Passenger Number</label> <br />
                <input className='form-control' type="number" name="passengerNumber" value={values.passengerNumber} onChange={handleChange} id="passengerNumber" />
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
