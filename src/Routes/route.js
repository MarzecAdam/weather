import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Header from '../Layouts/header/header';
import Footer from '../Layouts/footer/footer';
import NotFound from '../Pages/NotFound/NotFound';
import Weather from '../Pages/weather/weather';
import WeatherDaily from '../Pages/weatherDaily/weatherDaily';
import Home from '../Pages/home/Home';
import { HOME_PAGE, CURRENT_WEATHER_PAGE, DAILY_FORECAST_PAGE, NOT_FOUND_PAGE } from '../Config/constants';

const route = () => {
    const weather = `${CURRENT_WEATHER_PAGE}/:props?`;
    const Daily = `${DAILY_FORECAST_PAGE}/:props?`;
    return (
        <Router>
            <Header />
            <Switch>
                <Route exact path={HOME_PAGE} component={Home}></Route>
                <Route path={weather} component={Weather}></Route>
                <Route exact path={Daily} component={WeatherDaily}></Route>
                <Route exact path={NOT_FOUND_PAGE} component={NotFound}></Route>
                <Redirect exact path="/" to={HOME_PAGE} />
                <Redirect to={NOT_FOUND_PAGE} />
            </Switch>
            <Footer />
        </Router>
    );
};

export default route;
