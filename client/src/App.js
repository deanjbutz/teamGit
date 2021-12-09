import React, { useState } from 'react';
import Nasa from './components/Nasa';
import Weather from './components/Weather';
import TicketMaster from './components/TicketMaster';
import 'bootstrap/dist/css/bootstrap.css'

const App = () => {
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [status, setStatus] = useState(null);



  const getLocation = () => {

    navigator.geolocation.getCurrentPosition((position) => {

      localStorage.setItem('lat', position.coords.latitude);
      setLat(position.coords.latitude)
      localStorage.setItem('lng', position.coords.longitude);
      setLng(position.coords.longitude)
    }, () => {
      setStatus('Unable to retrieve your location');
    });
  }
  getLocation();
  return (
    <div className="container">
      <div className='nasa-weather'>

        <Nasa />
        <Weather />
        <TicketMaster />
      </div>
    </div>
  );
}




export default App;