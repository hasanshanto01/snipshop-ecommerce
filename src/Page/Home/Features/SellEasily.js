import React from 'react';
import sellVector from '../../../Assets/sell-img/sell_vector.png';
import manImg from '../../../Assets/sell-img/man.png';
import sunglassImg from '../../../Assets/sell-img/sunglass.png';
import shoeImg from '../../../Assets/sell-img/shoe.png';
import watchImg from '../../../Assets/sell-img/watch.png';
import fbLogo from '../../../Assets/sell-img/fb_logo.png';
import instaLogo from '../../../Assets/sell-img/insta_logo.png';
import twittLogo from '../../../Assets/sell-img/twitt_logo.png';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/solid';

const SellEasily = () => {

    const sellStyle = {
        backgroundImage:
            `url(${sellVector})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    };

    return (
        <div className='h-[862px] flex justify-end items-center'>
            <div className='w-[1280px] h-[718px] flex items-center justify-between gap-10'>
                <div className='ml-16'>
                    <h2 className='text-2xl font-bold'>Sell Easily on  Socialmedia</h2>
                    <p className='mt-5 mb-10'>Life is hard enough already. Let us<br />make it a little easier.</p>
                    <Link to='/'><small className='flex items-center gap-1 font-bold'>
                        <span>See All</span>
                        <ArrowRightIcon className="h-5 w-5 text-black" />
                    </small></Link>
                </div>
                <div className='w-[718px] h-[718px] flex justify-end items-center'>

                    <div className='w-[622px] h-[622px] mr-10 flex justify-center items-center relative' style={sellStyle}>

                        <div className='w-[475px] h-[475px] rounded-3xl sellInnerBoxBG'>

                        </div>

                        <div className='absolute top-12 right-12'>
                            <img src={manImg} alt="" />
                        </div>

                        <div className='absolute bottom-24 grid grid-cols-3 gap-4'>
                            <div className='relative'>
                                <img src={fbLogo} alt="" className='absolute top-3 left-3' />
                                <img src={sunglassImg} alt="" />
                                <small className='absolute bottom-3 left-2 font-bold'>$12.00</small>
                            </div>
                            <div className='relative'>
                                <img src={instaLogo} alt="" className='absolute top-3 left-3' />
                                <img src={shoeImg} alt="" />
                                <small className='absolute bottom-3 left-2 font-bold'>$35.00</small>
                            </div>
                            <div className='relative'>
                                <img src={twittLogo} alt="" className='absolute top-3 left-3' />
                                <img src={watchImg} alt="" />
                                <small className='absolute bottom-3 left-2 font-bold'>$22.00</small>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default SellEasily;