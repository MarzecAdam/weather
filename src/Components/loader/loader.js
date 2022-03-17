import React from 'react';
import { CircularProgress } from '@mui/material';

import './loader.scss';

const Loader = () => {
    return (
        <div className="loader">
            <CircularProgress />
        </div>
    );
};

export default Loader;
