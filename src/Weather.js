 import React, { useState,  } from 'react';
import axios from 'axios';
import './Weather.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherIcon from './WeatherIcon';
import WeatherForecast from './WeatherForecast';

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});
 const [city, setCity] = useState(props.defaultCity)

  function showWeather(response) {
    console.log(response.data);

    setWeatherData({
      temperature: response.data.temperature.current,
      coordinates: response.data.coordinates,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      city: response.data.city,
       iconCode: response.data.condition.icon,
      description: response.data.description,
      date: new Date(), // Store the current date and time
    
    });

    setReady(true);
  }

  
  function formatDate(date) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const day = days[date.getDay()];
    const dayOfMonth = date.getDate();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');

    return `${day} ${dayOfMonth} ${hours}:${minutes}`;
  }

  function handleCityChange(event){
    setCity (event.target.value)
    
  
  }

function search() {
  const apiKey = "2ob113a879d9f74f53b31fb0t04ab5cb";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`

    axios.get(apiUrl).then(showWeather)
    .catch((error) => {
      console.log(error.message); // A brief message describing the error
      });
  
}

  function handleSubmit(event) {
    event.preventDefault();
    search();
  
  }

  if (ready) {
    return (
      <div className='weather'>
        <form onSubmit={handleSubmit}>
          <div className='row'>
            <div className='col-9'>
              <input
                type='search'
                placeholder='Enter a City'
                required
                className='form-control'
                autoFocus='on'
                onChange={handleCityChange}
              />
            </div>
            <div className='col-3'>
              <input 
              type='submit' 
              value='search' 
              className='btn btn-primary w-100' 
               />
            </div>
          </div>
        </form>

        <h1>{weatherData.city}</h1>
        <ul>
          <li>{formatDate(weatherData.date)}</li> {/* Display the current date and time */}
          <li className='text-primary text-capitalize'>{weatherData.description}</li>
        </ul>

        <div className='row'>
          <div className='col-6'>
              
              <WeatherIcon iconCode={weatherData.iconCode} />
              <span className='temperature'>{Math.round(weatherData.temperature)}</span><span className='celsius'>°C</span> 
          </div>
          <div className='col-6'>
            <ul>
              <li className='text-danger'> Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind} km/h</li>
            </ul>
            
          </div>
        </div>
        <WeatherForecast />
      </div>
    );

  } else {

     search();

    return "Loading...";
  }
}