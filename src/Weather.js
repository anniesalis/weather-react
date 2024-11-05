import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Weather(props) {
  const [temperature, setTemperature] = useState(null);

  useEffect(() => {
    let apiKey = "4b3503b2f08a729413c4d33ef1186004";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(showWeather);
  }, [props.city]);

  function showWeather(response) {
    setTemperature(response.data.main.temp);
  }

  return (
    <div>
      {temperature !== null ? (
        alert(`The weather in ${props.city} is currently ${temperature}°C`)
      ) : (
        <p>Loading weather...</p>
      )}
    </div>
  );
}
