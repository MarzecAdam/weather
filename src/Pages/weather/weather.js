import React, { useEffect, useState } from 'react';
import { useLocation, useHistory, useParams } from 'react-router-dom';
import { TextField } from '@mui/material';

import '../../Assets/Styles/weather.scss';

import currentWeatherRequest from '../../api/currentWeatherRequest';
import currentGeoWeatherRequest from '../../api/currentGeoWeatherRequest';

import { debounceHelper } from '../../common/helpers/debounceHelper';
import WeatherData from '../../Components/weather/WeatherData';
import Map from '../../Components/map/Map';

const Weather = () => {
    const [weather, setWeather] = useState({});
    const [coord, setCoord] = useState({});
    const [city, setCity] = useState('');
    const history = useHistory();
    const localization = useLocation().pathname;
    const Params = useParams();

    useEffect(() => {
        if (localization === '/weather' || localization === '/weather/') {
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

    const handleCity = (e) => {
        setCity(e?.target?.value);
        history.push(`/weather/${e?.target?.value}`);
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
                error={!!weather?.message}
                helperText={weather?.message}
            />
            {weather.name && weather.sys && weather.main && weather.wind && (
                <WeatherData name={weather.name} main={weather.main} wind={weather.wind} sys={weather.sys} />
            )}
            {weather.coord && <Map lat={weather.coord.lat} lon={weather.coord.lon} />}
        </main>
    );
};

export default Weather;
