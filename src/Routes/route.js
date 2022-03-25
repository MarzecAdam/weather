import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { CURRENT_WEATHER_PAGE, DAILY_FORECAST_PAGE, HOME_PAGE, NOT_FOUND_PAGE } from '../Config/constants';
import { Footer } from '../Layouts/footer/footer';
import { Header } from '../Layouts/header/header';
import Home from '../Pages/home/Home';
import { NotFound } from '../Pages/NotFound/NotFound';
import Weather from '../Pages/weather/weather';
import WeatherDaily from '../Pages/weatherDaily/weatherDaily';

const route = () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route exact path={HOME_PAGE} component={Home}></Route>
                <Route path={`${CURRENT_WEATHER_PAGE}/:props?`} component={Weather}></Route>
                <Route exact path={`${DAILY_FORECAST_PAGE}/:props?`} component={WeatherDaily}></Route>
                <Route exact path={NOT_FOUND_PAGE} component={NotFound}></Route>
                <Redirect exact path="/" to={HOME_PAGE} />
                <Redirect to={NOT_FOUND_PAGE} />
            </Switch>
            <Footer />
        </Router>
    );
};

export default route;
