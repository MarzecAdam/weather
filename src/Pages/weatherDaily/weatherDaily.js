import React, { useEffect, useState } from 'react';
import { useLocation, useHistory, useParams } from 'react-router-dom';
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
    const history = useHistory();
    const localization = useLocation().pathname;
    const Params = useParams();

    useEffect(() => {
        if (localization === '/daily' || localization === '/daily/') {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const coord = {
                        lat: position.coords.latitude,
                        lon: position.coords.longitude,
                    };
                    setCoord(coord);
                },
                () => {
                    setCity('warsaw');
                },
            );
        } else {
            setCity(`${Params.props}`);
        }
    }, []);

    useEffect(async () => {
        if (coord.lat && coord.lon) {
            let response = await currentGeoWeatherRequest(coord.lat, coord.lon);
            setWeather(response);
            response = await apiDaily(coord.lat, coord.lon);
            setWeatherDaily(response);
        }
    }, [coord]);

    useEffect(async () => {
        if (city) {
            const response = await currentWeatherRequest(city);
            response.coord && setCoord(response.coord);
            response.message && setWeather(response);
        }
    }, [city]);

    const handleCity = (e) => {
        setCity(e?.target?.value);
        history.push(`/daily/${e?.target?.value}`);
    };

    const handleInputChange = debounceHelper(handleCity, 300);

    return (
        <main className="main">
            <TextField
                className="main__searchbox"
                id="outlined-basic"
                label="enter city"
                variant="outlined"
                onChange={handleInputChange}
                error={weather?.message > 0}
                helperText={weather?.message}
            />
            {weatherDaily.daily && weather.name && <WeatherDailyData name={weather.name} daily={weatherDaily.daily} />}
            {weather.coord && <Map lat={weather.coord.lat} lon={weather.coord.lon} />}
        </main>
    );
};

export default Weather;
