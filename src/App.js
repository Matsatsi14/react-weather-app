import React, { useState, useEffect } from "react";
import SearchForm from "./SearchForm";
import WeatherInfo from "./WeatherInfo";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Footer";
import axios from "axios";
import "./App.css";

function App() {
  const [city, setCity] = useState("Pretoria");
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
      );
      setWeatherData(response.data);
    };

    fetchWeather();
  }, [city]);

  const handleSearchSubmit = (newCity) => {
    setCity(newCity);
  };

  return (
    <div className="App">
      <div className="container">
        <SearchForm onSubmit={handleSearchSubmit} />
        {weatherData && <WeatherInfo data={weatherData} />}
      </div>
      <Footer />
    </div>
  );
}

export default App;
