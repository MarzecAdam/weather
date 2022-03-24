import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

import '../../Assets/Styles/header.scss';

import useNavPath from '../../common/hooks/useNavPath'
import { HOME_PAGE, CURRENT_WEATHER_PAGE, DAILY_FORECAST_PAGE } from '../../Config/constants';

const Header = () => {
    return (
        <nav className="header">
            <Link to={HOME_PAGE} className="header__link" tabIndex="-1">
                <Button className="header__button" variant={useNavPath(HOME_PAGE)}>
                    Home Page
                </Button>
            </Link>
            <Link to={CURRENT_WEATHER_PAGE} className="header__link" tabIndex="-1">
                <Button className="header__button" variant={useNavPath(CURRENT_WEATHER_PAGE)}>
                    Current Weather
                </Button>
            </Link>
            <Link to={DAILY_FORECAST_PAGE} className="header__link" tabIndex="-1">
                <Button className="header__button" variant={useNavPath(DAILY_FORECAST_PAGE)}>
                    Weather forecast
                </Button>
            </Link>
        </nav>
    );
};

export default Header;
