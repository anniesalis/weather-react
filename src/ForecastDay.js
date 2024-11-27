import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props) {
  // Function to get the day of the week
  function day() {
    let date = new Date(props.data.time * 1000); // Convert Unix timestamp to JS Date
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[date.getDay()]; // Get the day name from the days array
  }

  // Function to get the maximum temperature
  function maxTemperature() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}°`;
  }

  // Function to get the minimum temperature
  function minTemperature() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}°`;
  }

  return (
    <div className="ForecastDay">
      {/* Display the day of the week */}
      <div className="forecast-time">{day()}</div>
      
      {/* Display weather icon */}
      <WeatherIcon code={props.data.condition.icon} size={42} />

      {/* Display max and min temperatures */}
      <div className="forecast-temperature">
        <span className="forecast-temperature-max">{maxTemperature()}</span>
        <span className="forecast-temperature-min">{minTemperature()}</span>
      </div>
    </div>
  );
}
