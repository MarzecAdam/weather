import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from '@mui/material/Button';

import '../../Assets/Styles/header.scss';

const Header = () => {
    const location = (props) => {
        if (useLocation().pathname === props) {
            return 'contained';
        } else {
            return 'outlined';
        };
    };
    return (
        <nav className="header">
            <Link to="/home" className="header__link">
                <Button className="header__button" variant={location('/home')}>
                    Home Page
                </Button>
            </Link>
            <Link to="/weather" className="header__link">
                <Button className="header__button" variant={location('/weather')}>
                    Current Weather
                </Button>
            </Link>
            <Link to="/daily" className="header__link">
                <Button className="header__button" variant={location('/daily')}>
                    Weather forecast
                </Button>
            </Link>
        </nav>
    );
};

export default Header;
