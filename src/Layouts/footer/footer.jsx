import React from 'react';

import '../../Assets/Styles/footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <p className="footer__text footer__text--italic">
                Copyright &copy; 1995-2022 umbrella Inc. <span className="footer__text--breakline">All Rights Reserved.</span>
            </p>
            <p className="footer__text footer__text--bold">Adam Marzec</p>
        </footer>
    );
};

export default Footer;
