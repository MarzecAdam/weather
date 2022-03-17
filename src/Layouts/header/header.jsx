import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

import '../../Assets/Styles/header.scss';

const Header = () => {
    return (
        <nav className="header">
            <Link to="/home" className="header__link">
                <Button className="header__button" variant="outlined">
                    Home Page
                </Button>
            </Link>
            <Link to="/weather" className="header__link">
                <Button className="header__button" variant="outlined">
                    Weather
                </Button>
            </Link>
            <Link to="/daily" className="header__link">
                <Button className="header__button" variant="outlined">
                    Weather Daliy
                </Button>
            </Link>
        </nav>
    );
};

export default Header;
