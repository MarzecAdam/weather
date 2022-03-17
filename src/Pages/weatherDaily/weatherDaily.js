import React, { useEffect, useState } from 'react';
import { TextField } from '@mui/material';

import '../../Assets/Styles/weather.scss';

import apiDaily from '../../api/DailyWeatherRequest';
import currentWeatherRequest from '../../api/currentWeatherRequest';
import { debounceHelper } from '../../common/helpers/debounceHelper';
import Map from '../../Components/map/Map';
import WeatherDailyData from '../../Components/weather-daily/WeatherDailyData';

const Weather = () => {
    const [weather, setWeather] = useState({});
    const [city, setCity] = useState('Warsaw');
    const [weatherDaily, setWeatherDaily] = useState({});

    useEffect(async () => {
        const response = await currentWeatherRequest(city);
        setWeather(response);
    }, [city]);

    useEffect(async () => {
        if (weather.coord) {
            const response = await apiDaily(weather.coord.lat, weather.coord.lon);
            setWeatherDaily(response);
        }
    }, [weather]);

    const handleCity = (e) => setCity(e?.target?.value);

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
                required
            />
            {weatherDaily.daily && weather.name && <WeatherDailyData name={weather.name} daily={weatherDaily.daily} />}
            {weather.name && <Map lat={weather.coord.lat} lon={weather.coord.lon} />}
        </main>
    );
};

export default Weather;
