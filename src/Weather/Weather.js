import React, { useState, useEffect } from "react";
import axios from "axios";

function Weather() {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [city, setCity] = useState("Hyderabad");
  const [searchCity, setSearchCity] = useState("");

  const apiKey = "eda8015e0d6031635dce311b4e8a8982";

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const currentWeatherResponse = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
        );
        const forecastResponse = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`
        );

        setWeatherData(currentWeatherResponse.data);

        const hourlyForecast = forecastResponse.data.list
          .filter((item, index) => index % 8 === 0)
          .slice(0, 4);
        setForecastData(hourlyForecast);
      } catch (err) {
        setError(err);
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, [city]);
  const handleSearchChange = (event) => {
    setSearchCity(event.target.value);
  };
  const handleSearchClick = () => {
    setCity(searchCity);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!weatherData) {
    return <div>No data available.</div>;
  }

  const getWeatherIcon = (iconCode) => {
    return `http://openweathermap.org/img/w/${iconCode}.png`;
  };

  return (
    <>
      <div className="container">
        <div className="weather-card">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Enter city name"
              value={searchCity}
              onChange={handleSearchChange}
              style={{
                borderRadius: "10px",
                padding: "8px",
                marginBottom: "20px",
              }}
            />
            <button
              onClick={handleSearchClick}
              style={{
                borderRadius: "10px",
                padding: "4px",
                margin: "5px",
                width: "80px",
              }}
            >
              Search
            </button>
          </div>
          <div className="location-info">
            <h2>
              {weatherData.name}, {weatherData.sys.country}
            </h2>

            <p>Today, {new Date().toLocaleDateString()}</p>
          </div>
          <div className="temperature">
            <h1>{Math.round(weatherData.main.temp)}°C</h1>
            <div className="temp-range">
              <span>
                Today: {Math.round(weatherData.main.temp_max)}° /{" "}
                {Math.round(weatherData.main.temp_min)}°
              </span>
            </div>
          </div>
          <div className="details">
            <div className="detail-item">
              <img
                src={getWeatherIcon(weatherData.weather[0].icon)}
                alt="Weather Icon"
              />
              <span>{weatherData.weather[0].description}</span>{" "}
            </div>
          </div>

          <div className="forecast-container">
            <h3>Hourly Forecast</h3>
            <div className="hourly-forecast">
              {forecastData.map((item) => (
                <div className="forecast-item" key={item.dt}>
                  {" "}
                  <span>
                    {new Date(item.dt * 1000).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>{" "}
                  <img
                    src={getWeatherIcon(item.weather[0].icon)}
                    alt="Forecast Icon"
                  />
                  <span>{Math.round(item.main.temp)}°</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Weather;
