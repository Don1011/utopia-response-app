import React from 'react';
import Map from '../presentational/MapContainer.js';
import { io } from 'socket.io-client';

const Home = () => {
    return (
        <div>
            <Map />
        </div>
    )
}

export default Home;