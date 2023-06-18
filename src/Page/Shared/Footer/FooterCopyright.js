import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const FooterCopyright = () => {
    return (
        <footer className="footer items-center px-28 py-4 copyrightBG text-white">
            <div className="items-center grid-flow-col">
                <p>© 2021-2023 SnipShop.com</p>
            </div>
            <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                <Link to='/' className="link link-hover">Terms of use</Link>
                <Link to='/' className="link link-hover">Privacy</Link>
                <Link to='/' className="link link-hover">Interest-based ads</Link>
            </div>
        </footer>
    );
};

export default FooterCopyright;