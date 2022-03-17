import React, { useEffect, useState } from 'react';
import { TextField } from '@mui/material';

import '../../Assets/Styles/weather.scss';

import { debounceHelper } from '../../common/helpers/debounceHelper';
import currentWeatherRequest from '../../api/currentWeatherRequest';
import WeatherData from '../../Components/weather/WeatherData';
import Map from '../../Components/map/Map';

const Weather = () => {
    const [weather, setWeather] = useState({});
    const [city, setCity] = useState('Warsaw');

    const handleCity = (e) => {
        setCity(e?.target?.value);
    };

    useEffect(async () => {
        const response = await currentWeatherRequest(city);
        setWeather(response);
    }, [city]);

    const handleInputChange = debounceHelper(handleCity, 500);

    return (
        <main className="main">
            <TextField
                className="main__searchbox"
                id="outlined-basic"
                label="enter city"
                variant="outlined"
                onChange={handleInputChange}
                defaultValue={city}
                error={weather?.message}
                helperText={weather?.message}
                required={true}
            />
            {weather.name && (
                <>
                    <WeatherData weather={weather} />
                    <Map lat={weather.coord.lat} lon={weather.coord.lon} />
                </>
            )}
        </main>
    );
};

export default Weather;
