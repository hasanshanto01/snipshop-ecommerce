import React from 'react';
import { Link } from 'react-router-dom';
import ssIcon from '../../../Assets/footer-img/ss_logo.png';
import instagramIcon from '../../../Assets/footer-img/instagram_icon.png';
import facebookIcon from '../../../Assets/footer-img/facebook_icon.png';
import twitterIcon from '../../../Assets/footer-img/twitter_icon.png';
import dribbbleIcon from '../../../Assets/footer-img/dribbble_icon.png';
import pinterestIcon from '../../../Assets/footer-img/pinterest_icon.png';
import footerVector from '../../../Assets/footer-img/footer_vector.png';

const FooterDetails = () => {

    const footerStyle = {
        backgroundImage:
            `url(${footerVector})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };

    return (
        <footer className="footer py-14 detailsBG text-white justify-items-center" style={footerStyle}>
            <div>
                <span className="text-lg text-white font-bold">Shop</span>
                <Link to='/' className="link link-hover">Gift cards</Link>
                <Link to='/' className="link link-hover">SnipShop blog</Link>
            </div>
            <div>
                <span className="text-lg text-white font-bold">Sell</span>
                <Link to='/' className="link link-hover">Sell on SnipShop</Link>
                <Link to='/' className="link link-hover">Tearms</Link>
                <Link to='/' className="link link-hover">Forums</Link>
                <Link to='/' className="link link-hover">Affiliates</Link>
            </div>
            <div>
                <span className="text-lg text-white font-bold">About</span>
                <Link to='/' className="link link-hover">SnipShop, Inc.</Link>
                <Link to='/' className="link link-hover">Policies</Link>
                <Link to='/' className="link link-hover">Investors</Link>
                <Link to='/' className="link link-hover">Careers</Link>
                <Link to='/' className="link link-hover">Press</Link>
                <Link to='/' className="link link-hover">Impact</Link>
            </div>
            <div>
                <span className="text-lg text-white font-bold">Help</span>
                <Link to='/' className="link link-hover">Help center</Link>
                <Link to='/' className="link link-hover">Trust and safety</Link>
                <Link to='/' className="link link-hover">Privacy settings</Link>

                <Link to='/'>
                    <p className='flex px-3 py-2 border border-white rounded-full'>
                        <img src={ssIcon} alt="" />
                        <span className='ml-1'>Download the SnipShop App</span>
                    </p>
                </Link>

                <div className='flex gap-4'>
                    <Link to='https://www.instagram.com/'>
                        <img src={instagramIcon} alt="" />
                    </Link>
                    <Link to='https://www.facebook.com/'>
                        <img src={facebookIcon} alt="" />
                    </Link>
                    <Link to='https://twitter.com/'>
                        <img src={twitterIcon} alt="" />
                    </Link>
                    <Link to='https://dribbble.com/'>
                        <img src={dribbbleIcon} alt="" />
                    </Link>
                    <Link to='https://www.pinterest.com/'>
                        <img src={pinterestIcon} alt="" />
                    </Link>
                </div>

            </div>
        </footer>
    );
};

export default FooterDetails;