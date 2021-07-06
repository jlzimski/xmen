import React from 'react';
import NasaPic from '../apps/nasa';

const Sidebar = (props) => {
    const lat = props.lat;
    const lon = props.lon;

    return(
        <div className="nasaImg">
            <NasaPic 
                lat={lat}
                lon={lon}
            />
        </div>
    )
}

export default Sidebar;