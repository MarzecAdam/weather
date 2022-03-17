import React, { useState } from 'react';

import './Map.scss';

import Loader from '../loader/loader';

const Map = ({ lat, lon }) => {
    const [isLoading, setIsLoading] = useState(true);

    const hideLoading = () => setIsLoading(false);

    return (
        <aside className="map">
            {isLoading && <Loader />}
            {lat && lon && (
                <iframe
                    title="google Map"
                    className="map__item"
                    scrolling="no"
                    src={`https://www.google.com/maps?q=${lat},${lon}&z=13&hl=pl;z%3D15&amp&output=embed`}
                    onLoad={hideLoading}
                    visibility="hidden"
                ></iframe>
            )}
        </aside>
    );
};

export default Map;
