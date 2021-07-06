// API KEY = f71dfe271bd670c7684da61f3894c9f6
// URL = api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
//list.main.temp for current temp & list.weather[0].main for first in array of current conditions
import React, { useState } from 'react';

import Conditions from './conditions/Conditions';


//const baseURL = 'https://api.openweathermap.org/data/2.5/onecall?';
const baseURL = 'https://api.openweathermap.org/data/2.5/weather?';
const weatherKey = "f71dfe271bd670c7684da61f3894c9f6";



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

    // const [lat, setLat] = useState('lat');
    // const [lon, setLon] = useState('lon');
//     const lat = props.lat;
//     const lon = props.lon;
//     const [results, setResults] = useState([]);
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

// import React, { Component } from 'react';
// const weatherApi = `${process.env.REACT_APP_WEATHER_ENDPOINT}`;
// const weatherApiKey = `${process.env.REACT_APP_WEATHER_API_KEY}`;
// ​
// class WeatherApp extends Component {
//     state = {
//         lat: undefined,
//         lon: undefined,
//         city: undefined,
//         temperatureC: undefined,
//         temperatureF: undefined,
//         icon: undefined,
//         description: undefined,
//         errorMessage: undefined,
//     }
// ​
//     getPosition = () => {
//         return new Promise(function (resolve, reject) {
//             navigator.geolocation.getCurrentPosition(resolve, reject);
//         });
//     }
// ​
//     getWeather = async (lat, lon) => {
//         let url = `${weatherApi}lat=${lat}&lon=${lon}&units=imperial&appid=${weatherApiKey}`
//         const api_call = await fetch(url);
//         const data = await api_call.json();
//         this.setState({
//             lat: lat,
//             lon: lon,
//             city: data.name,
//             temperatureC: Math.round(data.main.temp),
//             temperatureF: Math.round(data.main.temp * 1.8 + 32),
//             description: data.weather[0].description,
//         })
//     }
// ​
// ​
//     componentDidMount() {
//         this.getPosition()
//             .then((position) => {
//                 this.getWeather(position.coords.latitude, position.coords.longitude)
//             })
//             .catch((err) => {
//                 this.setState({ errorMessage: err.message });
//             });
// ​
//         this.timerID = setInterval(
//             () =>
//                 this.getWeather(this.state.lat, this.state.lon),
//             60000
//         );
//     }
// ​
//     componentWillUnmount() {
//         clearInterval(this.timerID);
//     }
// ​
//     render() {
//         const { city, temperatureC, temperatureF, description } = this.state;
//         if (city) {
//             return (
//                 <div>
                    
//                         <h1>Weather today in {city}</h1>
//                         <h2>{temperatureC} &deg;C <span>/</span> {temperatureF} &deg;F</h2>
//                         <h2>
                            
//                             <span>Description: {description}</span>
                            
//                         </h2>
//                 </div>
//             );
//         }
//         else {
//             return (
//                 <div>Loading...</div>
//             )
//         }
//     }
// }
// ​
// export default WeatherApp;

