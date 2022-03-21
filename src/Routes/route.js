import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Header from '../Layouts/header/header';
import Footer from '../Layouts/footer/footer';
import NotFound from '../Pages/NotFound/NotFound';
import Weather from '../Pages/weather/weather';
import WeatherDaily from '../Pages/weatherDaily/weatherDaily';
import Home from '../Pages/home/Home';

const route = () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route exact path="/home" component={Home}></Route>
                <Route path="/weather/:props?" component={Weather}></Route>
                <Route exact path="/daily/:props?" component={WeatherDaily}></Route>
                <Route exact path="/not_found" component={NotFound}></Route>
                <Redirect exact path="/" to="/home" />
                <Redirect to="/not_found" />
            </Switch>
            <Footer />
        </Router>
    );
};

export default route;
