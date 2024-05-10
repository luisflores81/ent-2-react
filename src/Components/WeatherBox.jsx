import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TempDisplay from './TempDisplay';



const WeatherBox = () => {

    const [weather, setWeather ] = useState({})
    const [temp, setTemp] = useState(0)
    const [isCelsius, setIsCelsius] = useState(true)

    useEffect(() =>{        
        const success = pos => {
            const crd = pos.coords
            axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&appid=664adefe760417ec3dbdaadc80f173b2`)
            .then(res =>{
                setWeather(res.data)
                setTemp(((res.data.main.temp)-273.15).toFixed(2)) 
            })                
        }
        const error = () => {alert("Please allow browser to access location then reload the page")} 

        navigator.geolocation.getCurrentPosition(success,error);
    },[] )

    
    const convertTemp = () => {
        if(isCelsius){
          
            setTemp(((weather.main.temp - 273.15) * 9 / 5 + 32 ).toFixed(2))
            setIsCelsius(false)
            
        } else {
           
            setTemp((weather.main.temp - 273.15).toFixed(2))
            setIsCelsius(true)
        }
    }
    console.log(weather)

    return (

        <div className='container'>
            <h1>Weather App</h1>
            <h3>{weather.name}, {weather.sys?.country}</h3>
            <p>{weather.weather?.[0].description}</p>
            <div className="details">
                <img src={`http://openweathermap.org/img/wn/${weather.weather?.[0].icon}@2x.png`} alt="" />
                <ul> 
                    <li><i className="fa-solid fa-fan"></i>&nbsp;&nbsp;Wind speed: {weather.wind?.speed}</li>
                    <li><i className="fa-solid fa-cloud"></i>&nbsp;Clouds: {weather.clouds?.all}%</li>
                    <li><i className="fa-solid fa-temperature-half"></i>&nbsp;&nbsp;&nbsp;  Pressure: {weather.main?.pressure}</li>
                </ul>
            </div>
            
            
            <TempDisplay>
                <h2 className='temp'>{temp} { isCelsius ? "C°": "F°" }</h2>
                <button onClick={convertTemp}>C° / F°</button>
            </TempDisplay>
        </div>
    );
};

export default WeatherBox;