import React from 'react';

const iconHelper = (weather) => {
    const response = weather.map(({ description, icon }, key) => {
        const src = `http://openweathermap.org/img/wn/${icon}.png`;
        return <img key={key} src={src} alt={description} title={description}></img>;
    });

    return response;
};

export default iconHelper;
