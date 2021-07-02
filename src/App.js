import './App.css';
import React, { Component } from 'react';
import Weather from './apps/weather';

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
      <Weather />
      <h2>NASA</h2>
      <h3>Ticketmaster</h3>
    </div>
  );
}

export default App;
