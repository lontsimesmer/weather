import './App.css';
import React from 'react';
import { BsCloudRainHeavy } from 'react-icons/bs';
import { FiWind } from 'react-icons/fi';
import { MdOutlineWaterDrop } from 'react-icons/md';
import sunshine from './images/sunny.png';
import cloud from './images/cloudy1.png';

function App() {
  return (
    <div className="App">
      <div className="App-container">
        <div className="centralBox">
          <div className="Element1">
            <h3>Monreal</h3>
            <div className="Temp-icon">
              <h1 className="head">19˚</h1>
              <img
                src={cloud}
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
          <h2>Hello world!</h2>
        </div>
        <div className="Content">
          <div className="Four_small_boxe">
            <div className="smallBox">
              <h2>Hello world!</h2>
            </div>
            <div className="smallBox">
              <h2>Hello world!</h2>
            </div>
            <div className="smallBox">
              <h2>Hello world!</h2>
            </div>
            <div className="smallBox">
              <h2>Hello world!</h2>
            </div>
          </div>
          <div className="Box1">
            <div className="Icon-temp">
              <img
                src={sunshine}
                alt="Sun"
                style={{ height: 180, width: 180 }}
              />
              <div className="tempStats">
                <h1 className="head">19˚C</h1>
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
                <div className="dayStats">
                  <div className="day-icon">
                    <h4>Mon</h4>
                    <img
                      src={sunshine}
                      alt="Sun"
                      style={{ height: 40, width: 40 }}
                    />
                  </div>
                  <h4>17˚</h4>
                </div>
                <div className="dayStats">
                  <div className="day-icon">
                    <h4>Mon</h4>
                    <img
                      src={sunshine}
                      alt="Sun"
                      style={{ height: 40, width: 40 }}
                    />
                  </div>
                  <h4>17˚</h4>
                </div>
                <div className="dayStats">
                  <div className="day-icon">
                    <h4>Mon</h4>
                    <img
                      src={sunshine}
                      alt="Sun"
                      style={{ height: 40, width: 40 }}
                    />
                  </div>
                  <h4>17˚</h4>
                </div>
                <div className="dayStats">
                  <div className="day-icon">
                    <h4>Mon</h4>
                    <img
                      src={sunshine}
                      alt="Sun"
                      style={{ height: 40, width: 40 }}
                    />
                  </div>
                  <h4>17˚</h4>
                </div>
                <div className="dayStats">
                  <div className="day-icon">
                    <h4>Mon</h4>
                    <img
                      src={sunshine}
                      alt="Sun"
                      style={{ height: 40, width: 40 }}
                    />
                  </div>
                  <h4>17˚</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="MainContent">
          <div className="Box">
            <h1>Hello world!</h1>
          </div>
          <div className="Four_small_boxes">
            <div className="smallBox">
              <h2>Hello world!</h2>
            </div>
            <div className="smallBox">
              <h2>Hello world!</h2>
            </div>
            <div className="smallBox">
              <h2>Hello world!</h2>
            </div>
            <div className="smallBox">
              <h2>Hello world!</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
