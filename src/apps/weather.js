// API KEY = f71dfe271bd670c7684da61f3894c9f6
// URL = api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
//list.main.temp for current temp & list.weather[0].main for first in array of current conditions
import React, { useState, useEffect } from 'react';
// import WeatherResults from './WeatherResults';

// import Conditions from './conditions/Conditions';

const Weather = (props) => {

    const lat = props.lat;
    const lon = props.lon;

    console.log(lat, lon); //Leave in, if not won't work


    const key = '6ccc78695554c2475d4eac24bbf01d17';
    const unit = 'imperial'
    const [results, setResults] = useState('');
    const [feels_like, setFeelsLike] = useState('');
    const [mainTemp, setMainTemp] = useState('');
    const [description, setDescription] = useState('');
    const [main, setMain] = useState('');
    const [iconID, setIconID] = useState('');
    const [locationName, setLocName] = useState('');

    const weatherURL = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${unit}&appid=${key}`
    const fetchWeather = async () => {
        const res = await fetch(weatherURL);
        const data = await res.json();
        const mainTemp = data.main.temp;
        const feels_like = data.main.feels_like;
        const description = data.weather[0].description;
        const iconID = data.weather[0].icon;
        const locationName = data.name;
        setResults(data)
        setFeelsLike(feels_like);
        setMainTemp(mainTemp);
        setDescription(description);
        setLocName(locationName);
        setIconID(iconID);
        console.log(data);
    };
    useEffect(() => {

        fetchWeather();
        }, []);
        

    return (

        <div>
            <div>
                <ul>
                    <li>{iconID}</li>
                    <li>Current Temp: {mainTemp}F</li>
                    <li>Location: {locationName}</li>
                    {/* <li>current time: (dt)</li> */}
                    <li>Description: {description}</li>
                    <li>Feels like: {feels_like}</li>                   
                </ul>
            </div>
            {/* {
                    results.length > 0 ? <WeatherResults response={response} /> : null
                } */}
        </div>

    )
}

export default Weather;