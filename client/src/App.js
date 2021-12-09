import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import Nasa from './components/Nasa';
import TicketMaster from './components/TicketMaster';
import Weather from './components/Weather';

  const App = () => {
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      localStorage.setItem('lat', position.coords.latitude);
      setLat(position.coords.latitude)
      localStorage.setItem('lng', position.coords.longitude);
      setLng(position.coords.longitude)
    })
  }

  getLocation();

  return (
    <div>
      <Header />
      <div className='container0'>
        <div className='nasa-weather'>
          <Nasa />
          <Weather />
        </div>
        <TicketMaster />
      </div>
    </div>
  );
}

export default App;