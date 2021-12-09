import React, { useState } from "react"
import { Button } from 'reactstrap'
import './weather.css'



const Weather = () => {
    let lat = localStorage.getItem('lat')
    let lng = localStorage.getItem('lng')
    let endpoint = 'https://api.openweathermap.org'
    let key = '4be00938d03df53af3477e87b158d34f'
    let url = `${endpoint}/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${key}`
    const [f, setF] = useState(0)
    const [c, setC] = useState(0)
    const [newTemp, setNewTemp] = useState(false)
    const [feelsLike, setFeelsLike] = useState('');

    const handleClick = () => {
        // fetchWeather()
        if (newTemp) {
            setNewTemp(false)
        } else {
            setNewTemp(true)
        }
    }

    // const fetchWeather = () => {
        fetch(url)
        .then(res => res.json())
        // .then(data => setResults(data))
        // .then(data => setResults(data))
        .then(data => {
            setF((data.main.temp - 273.15) * 9 / 5 + 32)
            setC((data.main.temp - 273.15))
            setFeelsLike((data.main.feels_like - 273.15) * 9 / 5 + 32)
            // setResults(data)
        })
        // .then(data => setC((data.main.temp - 273.15)))

        //^^Kind of like saying 'let Temp=Data.main.temp'
        .catch(err => console.log(err))
    // }

    return (
        <div id="weather">
            <h1>Today's Weather</h1>
            {/* <p>Feels like: {feelsLike.toFixed(0)}°F</p> */}
                <hr />
                {(newTemp) ? <h3>Today's temp is {f.toFixed(2)}°F!</h3> : <h3>Today's temp is {c.toFixed(2)}°C!</h3>}
                <Button id="tempBtn" className='Btn' onClick={handleClick} color='danger' >Change °F/°C</Button>
        </div >
    )
}



export default Weather;