import React from 'react';
import Weather from '../apps/weather';

const Header = (props) => {
    const lat = props.lat;
    const lon = props.lon;

    return(
        <div className="App-header">
            <div className="team">
            <p className="Title"><a href='/'>Team X-Men</a></p>
            <p className="github"><a href="https://github.com/jlzimski/xmen" target="blank">@GitHub</a></p>
            </div>
            <div className="weather">    
                <Weather
                    lat={lat}
                    lon={lon}
                />
                {/* <ButtonToggle color="info" size="lg" ></ButtonToggle> */}
            </div>
        </div>
    )
}

export default Header;