import React, { useState, useEffect } from "react";
import "./DailyForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function DailyForecast({ coordinates, unit }) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [coordinates]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="DailyForecast-Container">
        <div className="DailyForecast">
          <div className="row">
            {forecast.map((dailyForecast, index) => {
              if (index < 6) {
                return (
                  <div className="col-sm" key={index}>
                    <WeatherForecastDay data={dailyForecast} unit={unit} />
                  </div>
                );
              } else {
                return null;
              }
            })}
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "ed238469f9b5e9d801834270e65449bc";
    const longitude = coordinates.lon;
    const latitude = coordinates.lat;
    const units = "metric";
    const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
