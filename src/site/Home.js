import React from 'react';
import EventMaster from '../apps/ticketmaster';

const Home = (props) => {
    const lat = props.lat;
    const lon = props.lon;

    return(
        <div className="eventCentral">
            <EventMaster 
                lat={lat}
                lon={lon}
            />
        </div>
    )
}

export default Home;