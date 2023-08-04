import { Formik } from 'formik';
import React, { useEffect, useState } from 'react';


function TravelDetails() {


    useEffect(() => {

    }, [])





    const stoppageCoordinates = {
        stop1: { lat: 40.7128, lng: -74.0060 },
        stop2: { lat: 34.0522, lng: -118.2437 },
        stop3: { lat: 51.5074, lng: -0.1278 },

    };

    const haversineDistance = (point1, point2) => {
        const earthRadius = 6371000; // Earth's radius in meters
        const dLat = toRadians(point2.lat - point1.lat);
        const dLon = toRadians(point2.lng - point1.lng);

        const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(toRadians(point1.lat)) * Math.cos(toRadians(point2.lat)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);

        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        return earthRadius * c;
    }

    const toRadians = degrees => {
        return degrees * (Math.PI / 180);
    }

    const calculateDistance = (boardingPoint, destinationPoint) => {

        if (boardingPoint === destinationPoint) {
            return 0
        }
        else {
            const boardingLatLng = stoppageCoordinates[boardingPoint];
            const destinationLatLng = stoppageCoordinates[destinationPoint];

            if (boardingLatLng && destinationLatLng) {
                const calculatedDistance = haversineDistance(boardingLatLng, destinationLatLng);

                return calculatedDistance.toFixed(2)
            }
            else {

                return 'Coordinates not available'
            }
        }
    }


    return (
        <div className="m-auto px-2">
            <Formik

                initialValues={{
                    boardingPoint: localStorage.getItem(process.env.REACT_APP_LOCAL_STORAGE + 'travel_details') === null ? '' : JSON.parse(localStorage.getItem(process.env.REACT_APP_LOCAL_STORAGE + 'travel_details')).boardingPoint,

                    destinationPoint: localStorage.getItem(process.env.REACT_APP_LOCAL_STORAGE + 'travel_details') === null ? '' : JSON.parse(localStorage.getItem(process.env.REACT_APP_LOCAL_STORAGE + 'travel_details')).destinationPoint,

                    date: localStorage.getItem(process.env.REACT_APP_LOCAL_STORAGE + 'travel_details') === null ? '' : JSON.parse(localStorage.getItem(process.env.REACT_APP_LOCAL_STORAGE + 'travel_details')).date,
                }}

                onSubmit={val => {

                    let distance = calculateDistance(val.boardingPoint, val.destinationPoint)
                    localStorage.setItem(process.env.REACT_APP_LOCAL_STORAGE + 'travel_details', JSON.stringify({ ...val, distance: distance }))

                }}


            >

                {({ values, handleChange, handleSubmit }) => (

                    <div>

                        <form className="form-control bg-light shadow py-4" onSubmit={handleSubmit} action="">
                            <div className="mt-0">
                                <label htmlFor="boarding">Boarding Point:</label> <br />
                                <select required onChange={handleChange} name='boardingPoint' className="form-control" id="boarding" value={values.boardingPoint} >
                                    <option value=''>Select</option>
                                    <option value="stop1">Bus Stop 1</option>
                                    <option value="stop2">Bus Stop 2</option>
                                    <option value="stop3">Bus Stop 3</option>
                                </select>
                            </div>
                            <div className="mt-4">
                                <label htmlFor="destination">Destination Point:</label> <br />
                                <select required className="form-control" id="destination" value={values.destinationPoint} name='destinationPoint' onChange={handleChange} >
                                    <option value=''>Select</option>
                                    <option value="stop1">Bus Stop 1</option>
                                    <option value="stop2">Bus Stop 2</option>
                                    <option value="stop3">Bus Stop 3</option>
                                </select>
                            </div>

                            <div className="mt-4">
                                <label htmlFor="date">Departure time</label> <br />
                                <input required className="form-control" type="date" name="date" value={values.date} onChange={handleChange} id="date" />
                            </div>

                            <button className='btn btn-primary mt-4' type="submit">Submit</button>
                            <div className='text-danger mt-2'>Save before continuing.</div>
                        </form>
                    </div>
                )}
            </Formik>
        </div>
    );
}

export default TravelDetails;
