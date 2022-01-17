import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { useState, useEffect } from 'react';
import { io } from 'socket.io-client';
import endpoints from '../../constants/endpoints';
import axios from 'axios';

const socket = io(endpoints.backend);

const MapContainer = ({ google }) => {

    const [locations, setLocations] = useState([
        { lat: 10.3764, lng: 7.7095 },
        { lat: 10.3789, lng: 7.7025 },
        { lat: 10.1064, lng: 7.7005 },
        { lat: 10.3764, lng: 7.6095 }

    ]);
    const [center, setCenter] = useState(null);

    const fetchCordinates = () => {
        axios.get(`${endpoints.backend}/fetch-alerts`)
            .then(data => {
                console.log(data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        fetchCordinates()
        socket.on("alert_recieved")
    })

    return (
        <Map
            google={google}
            style={{ width: "100%", height: "100%" }}
            zoom={10}
            initialCenter={{ lat: 10.3764, lng: 7.7095 }}
        >
            {locations.map(item => <Marker position={{ lat: item.lat, lng: item.lng }} />)}
        </Map>
    )
}

export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_API_KEY,
})(MapContainer)