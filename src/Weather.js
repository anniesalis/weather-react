import React, { useState,  } from 'react';
import axios from 'axios';
import './Weather.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});
 const [city, setCity] = useState(props.defaultCity)

  function showWeather(response) {
    console.log(response.data);

    setWeatherData({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      city: response.data.name,
      description: response.data.weather[0].description,
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
  const apiKey = "4b3503b2f08a729413c4d33ef1186004";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(showWeather).catch((error) => {
      console.error("Error fetching data:", error); // Log the error for debugging
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
            <img
              src='https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png'
              alt='weather icon'
            />{' '}
            <span className='temperature'>{Math.round(weatherData.temperature)}</span>°C | ºF
          </div>
          <div className='col-6'>
            <ul>
              <li className='text-danger'> Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );

  } else {
    
     search();
  
  
    return "Loading...";
  }
}
