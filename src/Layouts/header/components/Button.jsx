import React from 'react';
import { Link } from 'react-router-dom';
import MUIButton from '@mui/material/Button';

import '../../../Assets/Styles/header.scss';

// import useNavPath from '../../../common/hooks/useNavPath';

export const Button = ({ label, to }) => {
    return (
        <Link to={to} className="header__link" tabIndex="-1">
            <MUIButton className="header__button" variant={'outlined'}>
                {label}
            </MUIButton>
            {/* <MUIButton className="header__button" variant={useNavPath(to)}>
                {label}
            </MUIButton> */}
        </Link>
    );
};
