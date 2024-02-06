import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>

      <div className="current-weather">
        <h1>Pretoria</h1>
        <p>Tuesday 17:00</p>
        <p>Sunny</p>

        <div className="row">
          <div className="col-6">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="Partly Cloudy"
            />
            21°C
          </div>
          <div className="col-6">
            <p>Precipitation: 0%</p>
            <p>Humidity: 78%</p>
            <p>Wind: 26 km/h</p>
          </div>
        </div>
      </div>
    </div>
  );
}
