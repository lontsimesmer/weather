import './WeatherCon.css';
import { useMemo } from 'react';

import { FiWind, FiSunrise } from 'react-icons/fi';
import { MdOutlineWaterDrop } from 'react-icons/md';
import { LiaThermometerThreeQuartersSolid } from 'react-icons/lia';

export default function WeatherDesc() {
  const DESC_CONTENT = useMemo(
    () => [
      {
        ICON: FiWind,
        color: '#FFFFFF',
        fontSize: '20px',
        text: 'WIND',
        unit: 'Km/h',
        value: 8,
      },
      {
        ICON: LiaThermometerThreeQuartersSolid,
        color: '#ED5E56',
        fontSize: '24px',
        text: 'FEELS LIKE',
        value: '28˚',
      },
      {
        ICON: MdOutlineWaterDrop,
        color: '#32A9E2',
        fontSize: '20px',
        text: 'HUMIDITY',
        unit: '%',
        value: 48,
      },
      {
        ICON: FiSunrise,
        color: '#FFCC01',
        fontSize: '20px',
        text: 'SUNRISE',
        unit: 'Km/h',
        value: 8,
      },
    ],
    []
  );

  return (
    <div className="Grid-box-1">
      {DESC_CONTENT.map(({ value, unit, text, fontSize, color, ICON }) => (
        <div className="smallBox" key={text}>
          <div className="iconParams">
            <ICON style={{ fontSize, color }} />
            <p>{text}</p>
          </div>
          <div className="val-unit">
            <h1 style={{ fontSize: '3rem', fontWeight: 300 }}>{value}</h1>
            <p>{unit}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
