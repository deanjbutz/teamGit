import React, { useState } from 'react'
import './nasa.css'

const Nasa = () => {

    const date = new Date();
    const fullDate = date.toISOString().split('T')[0]

    const apiKey = 'zhrnDaeXThvzQWR2prriWmwh1uODpkD5iTYJF0Ae';
    const end = 'https://api.nasa.gov/planetary/earth/imagery';
    const lat = localStorage.getItem('lat');
    const lng = localStorage.getItem('lng');
    // const date2 = ''
    // const url = `${end}?lon=${lng}&lat=${lat}&date=${fullDate}&api_key=${apiKey}`
    // const url = `${end}?lon=${lng}&lat=${lat}&date=2021-11-11&api_key=${apiKey}`
    const url = 'https://api.nasa.gov/planetary/earth/imagery?lon=-95.33&lat=29.78&date=2020-01-01&api_key=rgo8OIvWfSRDmQvnwcSkFIH6In7yKWI001cWmuUi';
    // const [image, setImage] = useState("")

    const [image, setImage] = useState("");

    fetch(url)
        .then(res => setImage(res.url))
       // .then(data => console.log(data))
        .catch(err => console.log(err))
    // fetch("url").then(async response => {
    //     try {
    //      const data = await response.json()
    //      console.log('response data?', data)
    //    } catch(error) {
    //      console.log('Error happened here!')
    //      console.error(error)
    //    }
    //   })
    return (
        <div id="nasa">
            <img id="sat-image" src={image} alt="No Image" height="300px" width="300px" />
            <h1>{fullDate}</h1>
        </div>
    )
}
export default Nasa