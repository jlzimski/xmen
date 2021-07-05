import './App.css';
import React, { Component, useState, useEffect } from 'react';
import Header from './site/Header';
import Sidebar from './site/Sidebar';
import Home from './site/Home';
  
const App = () => {
  const [lat, setLat] = useState('');
  const [lon, setLon] = useState('');

  async function componentDidMount() {
    navigator.geolocation.getCurrentPosition(function(position) {
      setLat(position.coords.latitude)
      setLon(position.coords.longitude)
  });
}

componentDidMount();
  
  return (
    <div className="App">
      <Header 
        lat={lat}
        lon={lon}
        />
      <Sidebar 
        lat={lat}
        lon={lon}
      />
      <Home 
        lat={lat}
        lon={lon}
      />
    </div>
  );
}

export default App;