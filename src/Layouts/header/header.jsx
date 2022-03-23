import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

import '../../Assets/Styles/header.scss';

import useNavPath from '../../common/hooks/useNavPath'

const Header = () => {
    return (
        <nav className="header">
            <Link to="/home" className="header__link" tabIndex="-1">
                <Button className="header__button" variant={useNavPath('/home')}>
                    Home Page
                </Button>
            </Link>
            <Link to="/weather" className="header__link" tabIndex="-1">
                <Button className="header__button" variant={useNavPath('/weather')}>
                    Current Weather
                </Button>
            </Link>
            <Link to="/daily" className="header__link" tabIndex="-1">
                <Button className="header__button" variant={useNavPath('/daily')}>
                    Weather forecast
                </Button>
            </Link>
        </nav>
    );
};

export default Header;
