import React from 'react';

const WeatherResults = (props) => {
    return(
        <div>
            <div>
            {props.results.map(result => {
                return(
                    <div key={result._id}>
                        <ul>
                            <li>{result.weather.icon}</li>
                            <li>{result.main.temp}</li>
                            <li>{result.name}</li>
                            <li>{result.dt}</li>
                            <li>{result.weather.description}</li>
                            <li>{result.main.feels_like}</li>
                        </ul>
                    </div>
                )
            })}
            </div>

        </div>
    );
};

export default WeatherResults;