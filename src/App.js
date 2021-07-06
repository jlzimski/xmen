import './App.css';
import React, {  useState } from 'react'; // Component useEffect
import Header from './site/Header';
import Sidebar from './site/Sidebar';
import Home from './site/Home';
  
const App = () => {
  const [lat, setLat] = useState('');
  const [lon, setLon] = useState('');

  async function componentDidMount() {
    navigator.geolocation.getCurrentPosition(function(position) {
      console.log("Latitude:", position.coords.latitude);
      console.log("Longitude:", position.coords.longitude);
      setLat(position.coords.latitude);
      setLon(position.coords.longitude);
  }); 
  }

componentDidMount();

  return (
    <div className="App">
    <header>
      <Header 
        lat={lat}
        lon={lon}
        />
    </header>
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