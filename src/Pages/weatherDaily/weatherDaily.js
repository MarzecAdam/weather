import React, { useEffect, useState } from 'react';
import { TextField } from '@mui/material';

import '../../Assets/Styles/weather.scss';

import currentGeoWeatherRequest from '../../api/currentGeoWeatherRequest';
import apiDaily from '../../api/DailyWeatherRequest';
import currentWeatherRequest from '../../api/currentWeatherRequest';
import { debounceHelper } from '../../common/helpers/debounceHelper';
import Map from '../../Components/map/Map';
import WeatherDailyData from '../../Components/weather-daily/WeatherDailyData';

const Weather = () => {
    const [weather, setWeather] = useState({});
    const [city, setCity] = useState('');
    const [coord, setCoord] = useState({});
    const [weatherDaily, setWeatherDaily] = useState({});

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                setCoord(position.coords);
            },
            () => {
                setCity('warsaw');
            },
        );
    }, []);

    useEffect(async () => {
        if (coord.latitude && coord.longitude) {
            const response = await currentGeoWeatherRequest(coord.latitude, coord.longitude);
            setWeather(response);
        }
        if (coord.lat && coord.lon) {
            const response = await currentGeoWeatherRequest(coord.lat, coord.lon);
            setWeather(response);
        }
    }, [coord]);

    useEffect(async () => {
        if (city) {
            const response = await currentWeatherRequest(city);
            response.coord && setCoord(response.coord);
            response.message && setWeather(response);
        }
    }, [city]);

    useEffect(async () => {
        if (coord.lat && coord.lon) {
            const response = await apiDaily(coord.lat, coord.lon);
            setWeatherDaily(response);
        }
        if (coord.latitude && coord.longitude) {
            const response = await apiDaily(coord.latitude, coord.longitude);
            setWeatherDaily(response);
        }
    }, [coord]);

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
