import './App.css';
import React, { Component } from 'react';
// import Weather from './apps/weather';
// import Nasa from './apps/nasa';

function componentDidMount() {
  if ("geolocation" in navigator) {
    console.log("Available");
  } else {
    console.log("Not Available");
  }
}
componentDidMount();

function getLocation() {
  navigator.geolocation.getCurrentPosition(function(position) {
    console.log("Latitude is :", position.coords.latitude);
    console.log("Longitude is :", position.coords.longitude);
    let lat = position.coords.latitude;
    console.log(lat);
    let lon = position.coords.longitude;
    console.log(lon);
  });
}
getLocation();



function App() {
  // const [location, setLocation] = useState('');

  // useEffect(() => {
  //   if (localStorage.getItem('location')){
  //     setLocation(localStorage.getItem('location');)
  //   }
  // }, [])

  
  
  
  return (
    <div className="App">
      <h1>Weather</h1>
      <h2>NASA</h2>
      <img src="https://api.nasa.gov/planetary/earth/imagery?lon=-95.33&amp;lat=29.78&amp;date=2018-01-01&amp;dim=0.15&amp;api_key=HSkfDy1fyixzHxV8mgTWRtKiQ8F82tEDzhqqOAuA" width="2048" height="2048"></img>
      <h3>Ticketmaster</h3>
    </div>
  );
}

export default App;
