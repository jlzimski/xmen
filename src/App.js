import './App.css';
import React, {  useState } from 'react'; // Component useEffect
// import Header from './site/Header';
import Weather from './apps/weather';
import NasaPic from './apps/nasa';
  
const App = () => {
  const [lat, setLat] = useState('');
  const [lon, setLon] = useState('');

  const componentDidMount = () => {
    navigator.geolocation.getCurrentPosition(function(position) {
      console.log("Latitude:", position.coords.latitude);
      console.log("Longitude:", position.coords.longitude);
      setLat(position.coords.latitude);
      setLon(position.coords.longitude);
  }); 
}

componentDidMount();

  // const componentDidMount = () => {
  //  if (navigator.geoLocation){
  //   navigator.geolocation.watchPosition(function(position) {
  //     console.log("Latitude:", position.coords.latitude);
  //     console.log("Longitude:", position.coords.longitude);
  //     setLat(position.coords.latitude)
  //     setLon(position.coords.longitude)
  // }); 
  // }

  // componentDidMount();


  return (
    <div className="App">
      <Weather 
        lat={lat}
        lon={lon}
      />
      <h2>NASA</h2>
      <NasaPic 
        lat={lat}
        lon={lon}
      />
      <h3>Ticketmaster</h3>
    </div>
  );
}

export default App;