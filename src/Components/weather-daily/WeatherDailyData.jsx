import React from 'react';

import './daily.scss';

import unixTimeConvert from '../../common/helpers/unixTimeHelper';

const weatherDailyData = ({ name, daily }) => {
    return (
        <main className="daily">
            {name && <h1 className="daily__text--title">{name}</h1>}
            {daily && (
                <div className="table">
                    <div className="table__header">
                        <p className="daily__text daily__text--bold">Data</p>
                        <p className="daily__text daily__text--bold">temperature</p>
                        <p className="daily__text daily__text--bold">details</p>
                    </div>
                    <div className="table__body">
                        {daily.map(({ dt, temp, weather }, key) => (
                            <div key={key} className="table__row">
                                <div className="table__item">{unixTimeConvert(dt, 'date')}</div>
                                <div className="table__item">
                                    <p className="daily__text--noMargin">
                                        min <span className="daily__text--bold">{temp.min} </span>
                                    </p>
                                    <p className="daily__text--noMargin">
                                        max <span className="daily__text--bold">{temp.max} </span>
                                    </p>
                                    <p className="daily__text--noMargin">
                                        avg <span className="daily__text--bold">{temp.day} </span>
                                    </p>
                                </div>
                                <div className="table__item">
                                    <span className="daily__text--bold">
                                        {weather.map(({ description }) => description)}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </main>
    );
};

export default weatherDailyData;
