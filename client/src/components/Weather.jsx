import React, { useState } from "react"

import { Button } from 'reactstrap'



const Weather = () => {
    let lat = localStorage.getItem('lat')
    let lng = localStorage.getItem('lng')
    let endpoint = 'https://api.openweathermap.org'
    let key = 'ff29e4114c7f6c6b5a7a03fe2aff39a7'
    let url = `${endpoint}/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${key}`
    const [f, setF] = useState(0)
    const [c, setC] = useState(0)
    const [newTemp, setNewTemp] = useState(false)







    fetch(url)
        .then(res => res.json())
        //.then(data => console.log(data))
        .then(data => setF((data.main.temp - 273.15) * 9 / 5 + 32))
        .then(data => setC((data.main.temp - 273.15)))

        //^^Kind of like saying 'let Temp=Data.main.temp'
        .catch(err => console.log(err))

    const handleClick = () => {
        if (newTemp) {
            setNewTemp(false)
        } else {
            setNewTemp(true)
        }


    }



    return (
        <div>


            {(newTemp) ? <h3>Today's temp is {f} degrees farenheit!</h3> : <h3>Today's temp is {c} degrees celsius!</h3>}
            <Button className='Btn' onClick={handleClick} color='danger' >Change format</Button>
        </div >
    )
}



export default Weather;