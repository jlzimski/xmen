import React from 'react';

const WeatherResults = (props) => {
    return(
        <div>
            <div>
            
                return(
                    <div key={props.response}>
                        <ul>
                            <li>{props.response.weather.icon}</li>
                            <li>{props.response.main.temp}</li>
                            <li>{props.response.name}</li>
                            <li>{props.response.dt}</li>
                            <li>{props.response.weather.description}</li>
                            <li>{props.response.main.feels_like}</li>
                        </ul>
                    </div>
                )
            )}
            </div>

        </div>
    );
};

export default WeatherResults;