import './WeatherApp.css';

import React from 'react';
import { BsCloudRainHeavy } from 'react-icons/bs';
import { FiWind } from 'react-icons/fi';
import { MdOutlineWaterDrop } from 'react-icons/md';
import Search from '../Search/SearchBar';
import WeatherDesc from '../Conditions/WeatherCon';

const cloud = '/Assets/images/cloudy.png';
const cloud1 = '/Assets/images/cloudy1.png';
const moon = '/Assets/images/moon-and-stars.png';
const moon1 = '/Assets/images/night.png';
const rainfall = '/Assets/images/rain.png';
const sunrain = '/Assets/images/rain1.png';
const sunshine = '/Assets/images/sunny.png';

function WeatherApp() {
  return (
    <div className="App">
      <Search />
      <div className="Weather-container">
        <div className="centralBox">
          <div className="Element1">
            <h3>Monreal</h3>
            <div className="Temp-icon">
              <h1 className="weatherTemp">19˚</h1>
              <img
                src={cloud1}
                alt="Cloudy"
                style={{ height: 150, width: 150 }}
              />
            </div>
            <div className="temp-desc">
              <div className="high-low">
                <p>H:24˚</p>
                <p>L:18˚</p>
              </div>
              <p>Cloudy</p>
            </div>
          </div>
          <div className="Element2">
            <div className="sub-Element2">
              <div className="Items">
                <div className="iconParams">
                  <BsCloudRainHeavy />
                  <p>Precipitation</p>
                </div>
                <h4>9 mm in 24h</h4>
              </div>
              <div className="Items">
                <div className="iconParams">
                  <FiWind />
                  <p>Wind</p>
                </div>
                <h4>9KM/H</h4>
              </div>
              <div className="Items">
                <div className="iconParams">
                  <MdOutlineWaterDrop />
                  <p>Humidity</p>
                </div>
                <h4>83%</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="smallBox1">
          <div className="iconParams">
            <BsCloudRainHeavy style={{ color: '#b0eeea', fontSize: 20 }} />
            <p>PRECIPITATION</p>
          </div>
        </div>
        <div className="Content">
          <WeatherDesc />

          <div className="Box1">
            <div className="Icon-temp">
              <img
                src={sunshine}
                alt="Sun"
                style={{ height: 180, width: 180 }}
              />
              <div className="tempStats">
                <h1 className="weatherTemp">19˚C</h1>
                <div className="high-low">
                  <p>H:24˚</p>
                  <p>L:18˚</p>
                </div>
              </div>
            </div>
            <div className="city-desc">
              <p>Sunny</p>
              <h4>Monreal, Canada</h4>
            </div>
            <div className="innerContent">
              <div className="Sub-content">
                <div
                  className="dayStats"
                  style={{ backgroundColor: '#48309D' }}
                >
                  <div className="day-icon">
                    <h4>Mon</h4>
                    <img
                      src={sunshine}
                      alt="Sun"
                      style={{ height: 35, width: 35 }}
                    />
                  </div>
                  <h4>17˚</h4>
                </div>
                <div className="dayStats">
                  <div className="day-icon">
                    <h4>Tue</h4>
                    <img
                      src={cloud1}
                      alt="Cloudy"
                      style={{ height: 35, width: 35 }}
                    />
                  </div>
                  <h4>16˚</h4>
                </div>
                <div className="dayStats">
                  <div className="day-icon">
                    <h4>Wed</h4>
                    <img
                      src={sunrain}
                      alt="sunrain"
                      style={{ height: 35, width: 35 }}
                    />
                  </div>
                  <h4>20˚</h4>
                </div>
                <div className="dayStats">
                  <div className="day-icon">
                    <h4>Thu</h4>
                    <img
                      src={cloud}
                      alt="Cloudy"
                      style={{ height: 35, width: 35 }}
                    />
                  </div>
                  <h4>22˚</h4>
                </div>
                <div className="dayStats">
                  <div className="day-icon">
                    <h4>Fri</h4>
                    <img
                      src={rainfall}
                      alt="rainfall"
                      style={{ height: 35, width: 35 }}
                    />
                  </div>
                  <h4>19˚</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="MainContent">
          <div className="Box">
            <img
              src={moon}
              alt="nightime"
              style={{ height: 150, width: 150 }}
            />
            <div className="descTemp">
              <h3>Montreal, Canada</h3>
              <h1 className="weatherTemp">19˚</h1>
            </div>
            <div className="variants">
              <div className="high-low">
                <p>H:24˚</p>
                <p>L:18˚</p>
              </div>
              <p>Cloudy night</p>
            </div>
          </div>
          <div className="Grid-box-2">
            <div className="smallBox">
              <div className="smallBox-content">
                <img
                  src={cloud}
                  alt="Cloudy"
                  style={{ height: 95, width: 95 }}
                />
                <div className="temp-days">
                  <h2 className="head1">21˚</h2>
                  <h4>TUE</h4>
                </div>
              </div>
            </div>
            <div className="smallBox">
              <div className="smallBox-content">
                <img
                  src={moon1}
                  alt="twilight"
                  style={{ height: 95, width: 95 }}
                />
                <div className="temp-days">
                  <h2 className="head1">21˚</h2>
                  <h4>WED</h4>
                </div>
              </div>
            </div>
            <div className="smallBox">
              <div className="smallBox-content">
                <img
                  src={sunrain}
                  alt="sunrain"
                  style={{ height: 95, width: 95 }}
                />
                <div className="temp-days">
                  <h2 className="head1">21˚</h2>
                  <h4>THU</h4>
                </div>
              </div>
            </div>
            <div className="smallBox">
              <div className="smallBox-content">
                <img
                  src={rainfall}
                  alt="rainfall"
                  style={{ height: 95, width: 95 }}
                />
                <div className="temp-days">
                  <h2 className="head1">21˚</h2>
                  <h4>FRI</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherApp;
