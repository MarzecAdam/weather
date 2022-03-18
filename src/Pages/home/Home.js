import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

import '../../Assets/Styles/home.scss';

const Home = () => {
    return (
        <main className="home">
            <h1 className="home__title">Weather Page</h1>
            <div className="home__card">
                <h2 className="home__subtitle">Current weather</h2>
                <p className="home__text">
                    Cras eget volutpat turpis. Nulla dignissim vitae nisl nec varius. Suspendisse nec purus suscipit,
                    dignissim leo eu, tempor nibh. Fusce aliquet, nibh at hendrerit porta, purus augue pulvinar mi, sit
                    amet pellentesque eros ligula non eros. Ut semper velit vel ex mattis pulvinar. Nulla lorem lorem,
                    mattis eget massa et, convallis feugiat urna. Sed bibendum finibus justo, feugiat vulputate arcu
                    interdum id.
                </p>
                <Link to="/weather" className="home__link">
                    <Button className="home__button" variant="text">
                        go to the page
                    </Button>
                </Link>
            </div>
            <div className="home__card">
                <h2 className="home__subtitle">Daily weather</h2>
                <p className="home__text">
                    Sed at lorem lectus. Fusce lacus sem, tincidunt iaculis tincidunt id, laoreet rutrum metus. Integer
                    quis suscipit nunc. Nulla commodo nunc a maximus convallis. Fusce nec diam rutrum, aliquam nibh et,
                    malesuada ipsum. Duis non turpis a arcu tincidunt varius eu vitae lorem. Donec scelerisque non orci
                    id condimentum. Quisque id urna dui. Donec cursus tellus nulla, vel vestibulum ex sagittis vel. Nunc
                    tortor velit, hendrerit vel ullamcorper eget, rhoncus sit amet magna.
                </p>
                <Link to="/daily" className="home__link">
                    <Button className="home__button" variant="text">
                        go to the page
                    </Button>
                </Link>
            </div>
        </main>
    );
};

export default Home;
