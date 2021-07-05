import './App.css';
import React, { Component, useState, useEffect } from 'react';
import Header from './site/Header';
import NasaPic from './apps/nasa';
  
const App = () => {
  const [lat, setLat] = useState('');
  const [lon, setLon] = useState('');

  const componentDidMount = () => {
    navigator.geolocation.getCurrentPosition(function(position) {
      setLat(position.coords.latitude)
      setLon(position.coords.longitude)
  });
}

componentDidMount();
  
  return (
    <div className="App">
      <Header />
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