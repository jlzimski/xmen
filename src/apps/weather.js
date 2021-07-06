// API KEY = f71dfe271bd670c7684da61f3894c9f6
// URL = api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
//list.main.temp for current temp & list.weather[0].main for first in array of current conditions
import React, { useState, useEffect } from 'react';

// import Conditions from './conditions/Conditions';

const Weather = (props) => {

    const lat = props.lat;
    const lon = props.lon;
    console.log(lat, lon);
    // const [unit, setUnit] = useState('imperial');
    // const baseURL = 'https://api.openweathermap.org/data/2.5/weather?';

    //     const weatherURL =
    //     `http://api.openweathermap.org/data/2.5/forecast?zip=11102&units=imperial&APPID=${apiConfig.owmKey}`
    // fetch(weatherURL)
    //     .then(res => res.json())
    //     .then(data => console.log("Data List Loaded", data.list))

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
    }, [])
    return (
        <div>
            <div>
                
            </div>
        </div>
    )
}

export default Weather;