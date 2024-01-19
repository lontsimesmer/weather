import './SearchBar.css';

import { useState, useEffect, useRef } from 'react';

export default function Search() {
  const [cityInput, setCityInput] = useState('');

  const searchRef = useRef();

  const apiKey = '220df04dc0c20f789cac20d653fc02c6';

  const handleFetch = async () => {
    // eslint-disable-next-line
    console.log('cityinput', cityInput);

    if (searchRef.current.innerHTML === '') {
      return 0;
    }
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${
      searchRef.current.innerHTML || ''
    }&units=Metric&appid=${apiKey}`;
    const res = await fetch(url);
    const data = await res.json();
    // eslint-disable-next-line
    console.log(data);

    const Temperature = document.getElementsByClassName('weatherTemp');
    const Temperature1 = document.getElementsByClassName('weatherTemp1');
    const Temperature2 = document.getElementsByClassName('weatherTemp2');
    const Precipitation = document.getElementsByClassName('rainfall');
    const Wind = document.getElementsByClassName('wind-speed');
    const Humidity = document.getElementsByClassName('humid');
    const Maxtemp = document.getElementsByClassName('tempMax');
    const Mintemp = document.getElementsByClassName('tempMin');
    const Maxtemp1 = document.getElementsByClassName('temp-max');
    const Mintemp1 = document.getElementsByClassName('temp-min');
    const Maxtemp2 = document.getElementsByClassName('tempmax');
    const Mintemp2 = document.getElementsByClassName('tempmin');
    const Description = document.getElementsByClassName('describ');
    const Name = document.getElementsByClassName('cityName');
    const Name1 = document.getElementsByClassName('cityName1');
    const Name2 = document.getElementsByClassName('cityName2');
    const Country = document.getElementsByClassName('country');
    const Country1 = document.getElementsByClassName('country1');
    const Property = document.getElementsByClassName('property');
    const Property1 = document.getElementsByClassName('property1');
    const Property2 = document.getElementsByClassName('property2');

    Temperature[0].innerHTML = Math.ceil(data.main.temp);
    Temperature1[0].innerHTML = Math.ceil(data.main.temp);
    Temperature2[0].innerHTML = Math.ceil(data.main.temp);
    Precipitation[0].innerHTML = data.wind.deg;
    Wind[0].innerHTML = Math.floor(data.wind.speed);
    Humidity[0].innerHTML = data.main.humidity;
    Maxtemp[0].innerHTML = Math.round(data.main.temp_max);
    Maxtemp1[0].innerHTML = Math.round(data.main.temp_max);
    Maxtemp2[0].innerHTML = Math.round(data.main.temp_max);
    Mintemp[0].innerHTML = Math.round(data.main.temp_min);
    Mintemp1[0].innerHTML = Math.round(data.main.temp_min);
    Mintemp2[0].innerHTML = Math.round(data.main.temp_min);
    Description[0].innerHTML = data.weather[0].description;
    Name[0].innerHTML = data.name;
    Name1[0].innerHTML = data.name;
    Name2[0].innerHTML = data.name;
    Country[0].innerHTML = data.sys.country;
    Country1[0].innerHTML = data.sys.country;
    Property[0].innerHTML = data.weather[0].main;
    Property1[0].innerHTML = data.weather[0].main;
    Property2[0].innerHTML = data.weather[0].main;

    return 0;
  };

  useEffect(() => {
    const delayInputTimeoutId = setTimeout(() => {
      handleFetch();
    }, 1000);
    return () => clearTimeout(delayInputTimeoutId);
  }, [cityInput, 1000]);

  return (
    <span className="Search-bar">
      Right now in{' '}
      <span
        className="search"
        contentEditable="true"
        ref={searchRef}
        onInput={(e) => setCityInput(e.target.innerHTML)}
      >
        Montreal, Canada
      </span>
      there are <span className="describ" />
    </span>
  );
}
