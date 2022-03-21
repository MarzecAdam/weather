/* eslint-disable camelcase */
import React from 'react';

import './daily.scss';

import DailyContent from './dailyContent';

const weatherDailyData = ({ name, daily }) => {
    return (
        <main className="daily">
            {name && <h1 className="daily__text--title">{name}</h1>}
            {daily && (
                <div className="table">
                    <div className="table__body">
                        <div className="table__header table__border">
                            <p className="daily__text daily__text--bold">Data</p>
                            <p className="daily__text daily__text--bold">temperature</p>
                            <p className="daily__text daily__text--bold">details</p>
                        </div>
                        {daily.map(
                            (
                                { dt, temp, weather, feels_like, pressure, humidity, wind_speed, clouds, uvi, pop },
                                key,
                            ) => (
                                <DailyContent
                                    key={key}
                                    dt={dt}
                                    temp={temp}
                                    weather={weather}
                                    feels_like={feels_like}
                                    pressure={pressure}
                                    humidity={humidity}
                                    wind_speed={wind_speed}
                                    clouds={clouds}
                                    uvi={uvi}
                                    pop={pop}
                                />
                            ),
                        )}
                    </div>
                </div>
            )}
        </main>
    );
};

export default weatherDailyData;
