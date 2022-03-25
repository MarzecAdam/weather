import React from 'react';

import '../../Assets/Styles/header.scss';

import { Button } from './components/Button';

import { HOME_PAGE, CURRENT_WEATHER_PAGE, DAILY_FORECAST_PAGE } from '../../Config/constants';

export const Header = () => {
    return (
        <nav className="header">
            <Button to={HOME_PAGE} label="home" />
            <Button to={CURRENT_WEATHER_PAGE} label="current weather" />
            <Button to={DAILY_FORECAST_PAGE} label="daily forecast" />
        </nav>
    );
};
