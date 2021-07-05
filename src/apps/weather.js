// import React, { useState } from 'react';

// // API KEY = f71dfe271bd670c7684da61f3894c9f6
// // URL = api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

// const baseUrl=`https://api.openweathermap.org/data/2.5/weather`;
// const weatherKey = "f71dfe271bd670c7684da61f3894c9f6";

// const Weather = () => {
//     const [lat, setLat] = useState('');
//     const [lon, setLon] = useState('');
//     const [results, setResults] = useState([]);

//     // function getLocation() {
//     //     navigator.geolocation.getCurrentPosition(function(position) {
//     //         console.log("Latitude is :", position.coords.latitude);
//     //         console.log("Longitude is :", position.coords.longitude);
//     //         setLat(position.coords.latitude);
//     //         console.log(lat);
            
//     //         setLon(position.coords.longitude);
//     //         console.log(lon);
//     //     });
//     // }
//     //     getLocation();
    
//     const fetchResults = () => {
//         let url = `${baseUrl}?lat=${lat}&lon=${lon}&appid=${weatherKey}`;

//         fetch(url)
//             .then(res => res.json())
//             .then(json => {
//                 console.log(json)
//                 setResults(json);
//             }
//     }, fetchResults(lat, lon);

//     return(
//         <div>
//             <h1>Weather</h1>
//             { results.map(result => {
//                         return(
//                             <h3>{result.main.temp}</h3>
//                         )
//                     })}
//             <button className="convert" type='toggle'></button>
//         </div>
//     )
// }

// export default Weather;