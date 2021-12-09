import React, { useState } from 'react'

const Nasa = () => {
    const current = new Date();
    const date = `${current.getFullYear()}-${current.getMonth() + 1}-${current.getDate()}`;
    const apiKey = 'zhrnDaeXThvzQWR2prriWmwh1uODpkD5iTYJF0Ae';
    const end = 'https://api.nasa.gov/planetary/earth/imagery';
    const lat = localStorage.getItem('lat');
    const lng = localStorage.getItem('lng');
    // const url = `${end}?lon=${lng}&lat=${lat}&date=${date}&api_key=${apiKey}`
    const url = `${end}?lon=${lng}&lat=${lat}&dim=0.100&date=2021-11-11&api_key=${apiKey}`
    // const url = 'https://api.nasa.gov/planetary/earth/imagery?lon=-95.33&lat=29.78&date=2018-01-01&dim=0.15&api_key=DEMO_KEY';

    const [image, setImage] = useState("");

    fetch(url)
        .then(res => setImage(res.url))
        // .then(data => console.log(data))
        .catch(err => console.log(err))

    return (
        <div>
            <img src={image} height="300px" width="300px" />
            <h1>Current date is {date}</h1>
        </div>
    )
}

export default Nasa
