import React, { useState, useEffect } from "react";
import ForecastDay from "./ForecastDay";
import axios from "axios";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState([]);

  function handleForecastResponse(response) {
    console.log("API response:", response.data); // Debugging the response
    if (response.data.daily) {
      setForecast(response.data.daily);
      setLoaded(true);
    } else {
      console.error("No daily forecast found in API response.");
    }
  }

  useEffect(() => {
    if (props.city) {
      setLoaded(false); // Reset loading state on city change
      const apiKey = "et9o12f3b1437b5dda065b3e80a5ef38";
      const apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${apiKey}&units=metric`;

      axios.get(apiUrl).then(handleForecastResponse).catch((error) => {
        console.error("Error fetching forecast data:", error);
      });
    }
  }, [props.city]);

  if (!loaded) {
    return <div>Loading forecast...</div>;
  }

  if (forecast.length === 0) {
    return <div>No forecast available.</div>;
  }

  return (
    <div className="WeatherForecast row">
      {forecast.slice(0, 5).map((day, index) => (
        <div className="col" key={index}>
          <ForecastDay data={day} />
        </div>
      ))}
    </div>
  );
}
