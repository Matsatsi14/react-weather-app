import React from "react";

function WeatherInfo({ data }) {
  const {
    name,
    sys: { country },
    main: { temp, humidity },
    weather: [{ description, icon }],
    wind: { speed },
  } = data;

  const iconUrl = `http://openweathermap.org/img/w/${icon}.png`;

  const date = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    hour: "numeric",
    minute: "numeric",
  });

  return (
    <div className="weather-info">
      <h1 className="city-name">
        {name}, {country}
      </h1>
      <p className="date-time">{date}</p>
      <img src={iconUrl} alt="Weather Icon" />
      <div className="weather-details">
        <p className="temperature">{Math.round(temp)}°C</p>
        <p className="condition">{description}</p>
        <div className="humidity-wind">
          <p className="humidity">Humidity: {humidity}%</p>
          <p className="wind">Wind : {speed} km/h</p>
        </div>
      </div>
    </div>
  );
}

export default WeatherInfo;
