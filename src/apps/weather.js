// API KEY = f71dfe271bd670c7684da61f3894c9f6
// URL = api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
//list.main.temp for current temp & list.weather[0].main for first in array of current conditions
import React, { useState, useEffect } from 'react';

// import Conditions from './conditions/Conditions';

const Weather = (props) => {

    const lat = props.lat;
    const lon = props.lon;

    console.log(lat, lon); //Leave in, if not won't work


    const key = '6ccc78695554c2475d4eac24bbf01d17';
    const unit = 'imperial'

    const [feels_like, setFeelsLike] = useState('');
    const [mainTemp, setMainTemp] = useState('');
    const [description, setDescription] = useState('');
    const [main, setMain] = useState('');
    const [iconID, setIconID] = useState('');

    const weatherURL = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${unit}&appid=${key}`

    useEffect(() => {
        fetch(weatherURL)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            
        })
    }, [weatherURL])
    return (

        <div>
            <div>
                <ul>
                    <li>icon(weather.icon)</li>
                    <li>temp: (main.temp)</li>
                    <li>location: (name)</li>
                    <li>current time: (dt)</li>
                    <li>description: (weather.description)</li>
                    <li>feels like: (main.feels_like)</li>                   
                </ul>
            </div>
        </div>

    )
}

export default Weather;