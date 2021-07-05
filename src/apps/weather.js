// API KEY = f71dfe271bd670c7684da61f3894c9f6
// URL = api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
//list.main.temp for current temp & list.weather[0].main for first in array of current conditions
import React, { useState } from 'react';

//const baseURL = 'https://api.openweathermap.org/data/2.5/onecall?';
const baseURL = 'https://api.openweathermap.org/data/2.5/weather?';
const weatherKey = "f71dfe271bd670c7684da61f3894c9f6";


const Weather = (props) => {
    // const [lat, setLat] = useState('lat');
    // const [lon, setLon] = useState('lon');
    const lat = props.lat;
    const lon = props.lon;
    const [results, setResults] = useState([]);
    // const [icon, setIcon] = useState('');
    // const [temp, setTemp] = useState('');
    // const [description, setDescription] = useState('');
    // const [city, setCity] = useState('');

//api.openweathermap.org/data/2.5/find?q=London&units=metric
    // useEffect(() => {
    //     let url = `${baseUrl}lat=${lat}&lon=${lon}&exclude=hourly,daily&units=metric&appid=${weatherKey}`; // &units=${units} (Celsius=metric Fahrenheit=imperial)
    //     console.log(url);

    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => setResults(data))
    //             console.log(results)
    //         .catch(err => console.log(err))
    // }, [lat,lon])

    // if (lat && lon) {
    //     //let url = `${baseURL}lat=${lat}&lon=${lon}&exclude=hourly,daily&units=metric&appid=${weatherKey}`; // &units
    //     let url = `${baseURL}lat=${lat}&lon=${lon}&units=metric&appid=${weatherKey}`;
    //     console.log(url);
    //     fetch(url)
    //     .then(res => res.json())
    //     .then(data => setResults(data))
    //     .catch(err => console.log(err))
    //     return;
    // }

    // console.log(results);


    // setIcon[results.weather.icon];
    // setDescription[results.weather.description];
    // setTemp[results.main.temp];
    // setCity[results.name];

    

    return(
        <div>
            <p>Weather</p>
            {/* <p>
            {props.lat}
            </p>
            <p>
            {props.lon}
            </p> */}
        </div>
    )
};

export default Weather;