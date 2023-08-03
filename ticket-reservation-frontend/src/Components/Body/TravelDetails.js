import React, { useState } from 'react';

// Sample coordinates of bus stoppages
const stoppageCoordinates = {
    stop1: { lat: 40.7128, lng: -74.0060 }, // Replace with the actual latitude and longitude values
    stop2: { lat: 34.0522, lng: -118.2437 }, // Replace with the actual latitude and longitude values
    stop3: { lat: 51.5074, lng: -0.1278 },  // Replace with the actual latitude and longitude values
    // Add more bus stop coordinates here
};

function TravelDetails() {
    const [boardingPoint, setBoardingPoint] = useState('stop1');
    const [destinationPoint, setDestinationPoint] = useState('stop1');
    const [distance, setDistance] = useState(0);

    function calculateDistance() {
        if (boardingPoint === destinationPoint) {
            setDistance(0);
        } else {
            const boardingLatLng = stoppageCoordinates[boardingPoint];
            const destinationLatLng = stoppageCoordinates[destinationPoint];

            if (boardingLatLng && destinationLatLng) {
                const calculatedDistance = haversineDistance(boardingLatLng, destinationLatLng);
                setDistance(calculatedDistance.toFixed(2));
            } else {
                setDistance('Coordinates not available');
            }
        }
    }

    // Haversine formula to calculate distance between two coordinates in meters
    function haversineDistance(point1, point2) {
        const earthRadius = 6371000; // Earth's radius in meters
        const dLat = toRadians(point2.lat - point1.lat);
        const dLon = toRadians(point2.lng - point1.lng);

        const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(toRadians(point1.lat)) * Math.cos(toRadians(point2.lat)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);

        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        return earthRadius * c;
    }

    function toRadians(degrees) {
        return degrees * (Math.PI / 180);
    }

    return (
        <div>
            <h1>Bus Stoppage System</h1>
            <div>
                <label htmlFor="boarding">Boarding Point:</label>
                <select id="boarding" value={boardingPoint} onChange={(e) => setBoardingPoint(e.target.value)}>
                    <option value="stop1">Bus Stop 1</option>
                    <option value="stop2">Bus Stop 2</option>
                    <option value="stop3">Bus Stop 3</option>
                    {/* Add more bus stop options here */}
                </select>
            </div>
            <div>
                <label htmlFor="destination">Destination Point:</label>
                <select id="destination" value={destinationPoint} onChange={(e) => setDestinationPoint(e.target.value)}>
                    <option value="stop1">Bus Stop 1</option>
                    <option value="stop2">Bus Stop 2</option>
                    <option value="stop3">Bus Stop 3</option>
                    {/* Add more bus stop options here */}
                </select>
            </div>
            <button onClick={calculateDistance}>Calculate Distance</button>
            <p>Distance: {distance} meters</p>
        </div>
    );
}

export default TravelDetails;
