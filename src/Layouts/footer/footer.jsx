import React from 'react';

import '../../Assets/Styles/footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <p className="footer__text footer__text--italic">
                Copyright &copy; 1995-2022 eBay Inc. All Rights Reserved.
            </p>
            <p className="footer__text footer__text--bold">Adam Marzec</p>
        </footer>
    );
};

export default Footer;
