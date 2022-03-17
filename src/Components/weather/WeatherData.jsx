import React from 'react';

import './weatherData.scss';

import tempStatus from './tempStatus';
import UnixTimeConvert from '../../common/helpers/unixTimeHelper';

const WeatherData = ({ weather }) => {
    return (
        <main className="details">
            <h1 className="details__title">{weather.name}</h1>
            <p className="details__text details__text--noMargin">
                temperature: <span className="details__text--bold"> {weather.main.temp} &#176;C</span> <br />
                {tempStatus(weather.main.temp)}
            </p>
            <p className="details__text">
                wind: <span className="details__text--bold"> {weather.wind.speed} km/h</span>
            </p>
            <p className="details__text">
                humidity <span className="details__text--bold"> {weather.main.humidity} %</span>
            </p>
            <p className="details__text">
                pressure <span className="details__text--bold"> {weather.main.pressure} hPa</span>
            </p>
            <p className="details__text">
                sunrise &#127774; :&#160;
                <span className="details__text--bold">
                    {UnixTimeConvert(weather.sys.sunrise)} - {UnixTimeConvert(weather.sys.sunset)}
                </span>
                &#160;: sunset &#127769;
            </p>
        </main>
    );
};

export default WeatherData;
