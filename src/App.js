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
    <div>
      {lat && lon ? (
        <div className="App" id="grid">
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
      ) : 
      <h1>Looks like we can't help you without your location.</h1>
      }
      
    </div>
  );
}

export default App;