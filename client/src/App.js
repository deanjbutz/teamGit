import React, { useState } from 'react';
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
      <Nasa />
      <TicketMaster />
      <Weather />
    </div>
  );
}

export default App;

