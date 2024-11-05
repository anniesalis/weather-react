import React, { useState, } from 'react';
import axios from 'axios';
import './Weather.css';

import ReactAnimatedWeather from "react-animated-weather/build/ReactAnimatedWeather";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Weather(props) {
  
    let [city, setCity] = useState(null);
    let [message, setMessage] = useState(false);
    let [weather, setWeather] = useState({});
  
  
    function handleSubmit(event) {
      event.preventDefault();
      let apiKey = "4b3503b2f08a729413c4d33ef1186004";
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
      console.log(apiUrl);
      axios.get(apiUrl).then(showWeather);
    }
  
  
    function changeCity(event) {
      setCity(event.target.value);
    }

  
    function showWeather(response) {
      setMessage(true);
      setWeather({
        temperature: response.data.main.temp,
        description: response.data.weather[0].description,
        humidity: response.data.main.humidity,
        wind: response.data.wind.speed,
      });
    }
  
  
    let form = (
      
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Enter a city..."
          required
          onChange={changeCity}
          className="searchBox"
        />
        <input type="submit" value="Search" className="searchButton" />
      </form>
    );
  
  
    if (message) {
      return (
        <div className='container'>
          {form}
          <div className='row'>
            <div className='col-sm-4 pt-3'>
              <div className='city'>  </div>
            <div className='description text-danger'><ReactAnimatedWeather
              icon="CLOUDY"
              color=""
              size={40}
              animate={true}
            />{" "} {weather.description}</div>
            <div  className='temp'> <h1><strong> {Math.round(weather.temperature)}°C </strong></h1></div>
            </div>
            <br />
                        
         
           <div className='col-sm-'> 
                  <div className='humidity'>Humidity: {Math.round(weather.humidity)}%</div>
            <div className='wind text-warning'>Wind: {Math.round(weather.wind)}km/h</div>
            </div>
            </div>
      
          
        </div>
        
      );
    } else {
      setMessage(" ");
    }
  }
  