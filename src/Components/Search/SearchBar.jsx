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
    Temperature[0].innerHTML = data.main.temp;

    // tempRef.current.innerHTML = data.main.temp;
    // describRef.current.innerHTML = data.weather[0].description;

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
      it is Cloudy
    </span>
  );
}
