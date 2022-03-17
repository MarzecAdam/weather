import React from 'react';

import './weatherData.scss';

const tempStatus = (props) => {
    return (
        <>
            {props <= 5 && <span className="details_text--italic">&#10052; cold &#10052;</span>}
            {props > 5 && props < 15 && <span className="details_text--italic">&#127777;chilli &#127777;</span>}
            {props > 15 && <span className="details_text--italic">&#127774; warm &#127774;</span>}
        </>
    );
};
export default tempStatus;
