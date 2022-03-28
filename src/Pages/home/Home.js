import React, { useEffect } from 'react';
import { Card } from './components/card';

import '../../Assets/Styles/home.scss';

import { useTitle } from '../../common/hooks/useTitle';

import { CURRENT_WEATHER_PAGE, DAILY_FORECAST_PAGE } from '../../Config/constants';

const Home = () => {
    useTitle();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="home">
            <h1 className="home__title">Weather Page</h1>
            <Card
                to={CURRENT_WEATHER_PAGE}
                title="Current weather"
                label="Cras eget volutpat turpis. Nulla dignissim vitae nisl nec varius. Suspendisse nec purus suscipit,
                    dignissim leo eu, tempor nibh. Fusce aliquet, nibh at hendrerit porta, purus augue pulvinar mi, sit
                    amet pellentesque eros ligula non eros. Ut semper velit vel ex mattis pulvinar. Nulla lorem lorem,
                    mattis eget massa et, convallis feugiat urna. Sed bibendum finibus justo, feugiat vulputate arcu
                    interdum id."
            />
            <Card
                to={DAILY_FORECAST_PAGE}
                title="weather forecast"
                label="Sed at lorem lectus. Fusce lacus sem, tincidunt iaculis tincidunt id, laoreet rutrum metus. Integer
                    quis suscipit nunc. Nulla commodo nunc a maximus convallis. Fusce nec diam rutrum, aliquam nibh et,
                    malesuada ipsum. Duis non turpis a arcu tincidunt varius eu vitae lorem. Donec scelerisque non orci
                    id condimentum. Quisque id urna dui. Donec cursus tellus nulla, vel vestibulum ex sagittis vel. Nunc
                    tortor velit, hendrerit vel ullamcorper eget, rhoncus sit amet magna."
            />
        </main>
    );
};

export default Home;
