import './App.css';
import React from 'react';
import sunshine from './images/sunny.png';

function App() {
  return (
    <div className="App">
      <div className="App-container">
        <div className="centralBox">
          <h1>Hello world!</h1>
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
