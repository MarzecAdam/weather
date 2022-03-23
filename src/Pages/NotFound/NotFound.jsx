import React, { useEffect } from 'react';

import '../../Assets/Styles/notfound.scss';

import { useTitle } from '../../common/hooks/useTitle';

const NotFound = () => {
    useTitle('Not Found');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main data-testid="notfound" className="notfound">
            <h1 className="notfound__title notfound--NoMargin">404</h1>
            <p className="notfound__text notfound--NoMargin">Page not found</p>
        </main>
    );
};

export default NotFound;
