import React, { useState, useEffect } from 'react';
import './weather.css';

function Weather() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState(null);
  const [state, setState] = useState(null);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords;
        fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=0551a94bb3f0440d9700b24ef7a68bcc`)
          .then(response => response.json())
          .then(data => {
            const city = data.results[0].components.city;
            const state = data.results[0].components.state_code;
            setCity(city);
            setState(state);
            fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=922574b9d5d83d1199eae45856020dd5`)
              .then(response => response.json())
              .then(data => setWeather(data))
              .catch(error => console.error(error));
          })
          .catch(error => console.error(error));
      }, error => console.error(error));
    } else {
      console.error("Geolocation not available");
    }
  }, []);

  return (
    <div className="Weather">
      {city && state && <div>Weather for {city}, {state}</div>}
      {weather &&
        <div className="forecast">
          {weather.list.slice(0, 5).map((item, index) => (
            <div className="weather-info" key={index}>
              <div className="time">{new Date(item.dt * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
              <div className="temperature">{Math.round(item.main.temp)}°F</div>
              <div className="description">{item.weather[0].description}</div>
              <div className="icon">
                <img src={`https://openweathermap.org/img/w/${item.weather[0].icon}.png`} alt="weather icon" />
              </div>
            </div>
          ))}
        </div>
      }
    </div>
  );
}

export default Weather;
