// API KEY = f71dfe271bd670c7684da61f3894c9f6
// URL = api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
//list.main.temp for current temp & list.weather[0].main for first in array of current conditions
import React, { useState } from 'react';
import Conditions from './conditions/Conditions';

const Weather = (props) => {
    const lat = props.lat;
    const lon = props.lon;
    const [unit, setUnit] = useState('imperial');
    const weatherKey = "f71dfe271bd670c7684da61f3894c9f6";
    const baseURL = 'https://api.openweathermap.org/data/2.5/weather?';
    // const [responseObj, setResponseObj] = useState({});
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [results, setResults] = useState({});
    
    
    function getCurrentWeather(e) { // weather data fetch function will go here
        e.preventDefault();

        if (lat.length === 0) {
            return setError(true);
        }
        // clear state in preparation for new data
        setError(false);
        setResults({});

        setLoading(true);

        if (lat && lon !== null) {
            //let url = `${baseURL}lat=${lat}&lon=${lon}&exclude=hourly,daily&units=metric&appid=${weatherKey}`; // &units
            let url = `${baseURL}lat=${lat}&lon=${lon}&units=${unit}&appid=${weatherKey}`;
            console.log(url);
            fetch(url)
            .then(response => response.json())
            .then(response => setResults(response))
            .catch(err => console.log(err))
            return;
        }
    
        console.log(results);
        // console.log(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&unit=${unit}&appid=${weatherKey}`);
        
        // fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&unit=${unit}&appid=${weatherKey}`,{
        //     "method": "GET",
            
        // }) 
        // .then(response => response.json())
        //     //console.log(response.json());
        // .then(response => {
        //     if (response.cod !== 200){
        //         throw new Error()
        //     }
        //     setResponseObj(response);
        //     console.log(response);
        //     setLoading(false);
        // })
        // .catch(err => {
        //     setError(true);
        //     setLoading(false);
        //     console.log(err.message);
        // });
        
    }
    return(
        <div>
            <h2>Current Weather Conditions</h2>
            <p onLoad={getCurrentWeather}></p>
            <Conditions
            results={results}
            error={error}
            loading={loading}
            />
            <div>
                {JSON.stringify(results)}
            </div>
            <button onClick={setUnit} ></button>
            
        </div>
    )
}

export default Weather;


































// //const baseURL = 'https://api.openweathermap.org/data/2.5/onecall?';
// const baseURL = 'https://api.openweathermap.org/data/2.5/weather?';
// const weatherKey = "f71dfe271bd670c7684da61f3894c9f6";


// const Weather = (props) => {
//     // const [lat, setLat] = useState('lat');
//     // const [lon, setLon] = useState('lon');
//     const lat = props.lat;
//     const lon = props.lon;
//     const [results, setResults] = useState([]);
//     // const [icon, setIcon] = useState('');
//     // const [temp, setTemp] = useState('');
//     // const [description, setDescription] = useState('');
//     // const [city, setCity] = useState('');

// //api.openweathermap.org/data/2.5/find?q=London&units=metric
//     // useEffect(() => {
//     //     let url = `${baseUrl}lat=${lat}&lon=${lon}&exclude=hourly,daily&units=metric&appid=${weatherKey}`; // &units=${units} (Celsius=metric Fahrenheit=imperial)
//     //     console.log(url);

//     //     fetch(url)
//     //         .then(res => res.json())
//     //         .then(data => setResults(data))
//     //             console.log(results)
//     //         .catch(err => console.log(err))
//     // }, [lat,lon])

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
//     // setIcon[results.weather.icon];
//     // setDescription[results.weather.description];
//     // setTemp[results.main.temp];
//     // setCity[results.name];

    

//     return(
//         <div>
//             <h1>Weather</h1>
//             {/* <p>
//             {props.lat}
//             </p>
//             <p>
//             {props.lon}
//             </p> */}
//         </div>
//     )
// };

// export default Weather;