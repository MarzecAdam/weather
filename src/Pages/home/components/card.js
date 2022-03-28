import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

export const Card = ({ to, title, label }) => {
    return (
        <div className="home__card" id="card__current">
            <h2 className="home__subtitle">{title}</h2>
            <p className="home__text">{label}</p>
            <Link to={to} className="home__link">
                <Button className="home__button" variant="text">
                    go to the page
                </Button>
            </Link>
        </div>
    );
};
