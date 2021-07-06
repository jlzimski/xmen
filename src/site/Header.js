import React from 'react';
import Weather from '../apps/weather';

const Header = (props) => {
    const lat = props.lat;
    const lon = props.lon;

    return(
        <div className="weatherResults">
            <p><a href='/'>Team X-Men</a></p>
                <Weather
                    lat={lat}
                    lon={lon}
                />
                 <ButtonToggle color="info" size="lg" ></ButtonToggle>
            <p><a href="https://github.com/jlzimski/xmen" target="blank">GitHub</a></p>
        </div>
    )
}

export default Header;