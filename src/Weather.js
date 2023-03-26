import React from "react";
import axios from "axios";
import "./css/weather.css"

export default function Weather() {
    return (
        <div className="Temperature">
          <div className="weather-app">
            <form className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Find a city"
                required
              />
              <button className="btn btn-outline-secondary" type="submit">
                Search
              </button>
              <button className="btn btn-outline-secondary" type="button">
                Current
              </button>
            </form>
    
            <div className="row">
              <div className="col-auto">
                <span className="current-city">Berlin</span>
                <ul>
                  <li className="main-weather">26/06 Saturday,</li>
                  <li className="main-weather">
                    <span>13:29</span>
                    <span> Sunny</span>
                  </li>
                </ul>
              </div>
              <div className="col-auto">
                <img src="http://openweathermap.org/img/wn/03d@2x.png" alt="icon" />
              </div>
              <div className="col-auto">
                <span className="temperature">
                  <span>29</span>
                  <a href="#">°C</a>|<a href="#">°F</a>
                </span>
                <ul>
                  <li className="additional-weather">
                    Humidity <span>50</span>%
                  </li>
                  <li className="additional-weather">
                    Wind <span>6 </span> m/s
                  </li>
                </ul>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      );
}