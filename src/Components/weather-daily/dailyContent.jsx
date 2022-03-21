/* eslint-disable camelcase */
import React, { useState } from 'react';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import unixTimeConvert from '../../common/helpers/unixTimeHelper';
import iconHelper from '../../common/helpers/iconHelper';

const DailyContent = ({ dt, temp, weather, feels_like, pressure, humidity, wind_speed, clouds, uvi, pop }) => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className="table__row">
                <IconButton
                    className="table__collapse"
                    aria-label="expand row"
                    size="small"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                </IconButton>
                <div className="table__item">{unixTimeConvert(dt, 'date')}</div>
                <div className="table__item">
                    <p className="daily__text--noMargin">
                        <span className="daily__text--bold">{temp.day} &#176;C </span>
                    </p>
                </div>
                <div className="table__item">
                    <span className="daily__text--bold">{iconHelper(weather)}</span>
                </div>
            </div>
            <div className="table__row table__border">
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <div className="collapse">
                        <p className="collapse__text">
                            <span className="collapse__text--bold">Temperature</span>
                            <br></br>
                            at day<span className=""> : {temp.day} &#176;C</span>
                            <br></br>
                            at night<span className=""> : {temp.night} &#176;C</span>
                        </p>
                        <p className="collapse__text">
                            <span className="collapse__text--bold">Temp feels like</span>
                            <br></br>
                            at day<span className="collapse__text--bold"> : {feels_like.day} &#176;C</span>
                            <br></br>
                            at night<span className="collapse__text--bold"> : {feels_like.night} &#176;C</span>
                        </p>
                        <p className="collapse__text">
                            pressure <span className="collapse__text--bold"> : {pressure} HPa</span>
                        </p>
                        <p className="collapse__text">
                            humidity <span className="collapse__text--bold"> : {humidity} %</span>
                        </p>
                        <p className="collapse__text">
                            wind speed<span className="collapse__text--bold"> : {wind_speed} m/s</span>
                        </p>
                        <p className="collapse__text">
                            clouds<span className="collapse__text--bold"> : {clouds} %</span>
                        </p>
                        <p className="collapse__text">
                            uv index<span className="collapse__text--bold"> : {uvi}</span>
                        </p>
                        <p className="collapse__text">
                            precipitation<span className="collapse__text--bold"> : {pop * 100} %</span>
                        </p>
                    </div>
                </Collapse>
            </div>
        </>
    );
};

export default DailyContent;
