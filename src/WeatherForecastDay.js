import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function temperatureFahrenheitDay() {
    let temperature = Math.round(props.data.temp.day);
    if (props.unit === "celsius") {
      return `${temperature} ˚C`;
    } else {
      return `${Math.round((temperature * 9) / 5 + 32)} ˚F`;
    }
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="DailyForecast-day">{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={36} />
      <div className="DailyForecast-temperatures">
        <span className="DailyForecast-temperature-max">
          {temperatureFahrenheitDay()}
        </span>
      </div>
      <p>{props.data.weather[0].main}</p>
    </div>
  );
}
