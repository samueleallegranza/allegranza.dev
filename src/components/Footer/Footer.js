import React from 'react';
import './Footer.css';
import Logo from '../Logo/Logo';

const Footer = () => {
    return (
        <div className="Footer">
            <Logo />
            <h1>Samuele Allegranza</h1>
            <div className="socials">
            </div>
            <div className="copy">© 2021 Samuele Allegranza. All rights reserved</div>
        </div>
    );
}

export default Footer;