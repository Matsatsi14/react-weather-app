import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="weather-container">
      <form className="search-form">
        <div className="search-row">
          <input
            type="search"
            placeholder="Enter a city..."
            className="form-control search-input"
            name="city"
          />
          <input
            type="submit"
            value="Search"
            className="btn btn-primary search-button"
          />
        </div>
      </form>

      <div className="current-weather">
        <h1 className="city-name">Pretoria</h1>
        <p className="day-time">Tuesday 17:00</p>

        <div className="weather-details-row">
          <div className="weather-info">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="Partly Cloudy"
              className="weather-img"
            />

            <p className="temperature">21°C</p>
          </div>
          <div className="additional-info">
            <p>
              Precipitation: <strong>0%</strong>
            </p>
            <p>
              Humidity: <strong>78%</strong>
            </p>
            <p>
              Wind: <strong>26 km/h</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
