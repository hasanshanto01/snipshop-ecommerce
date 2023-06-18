import React from 'react';
import brandVector from '../../../Assets/brands-img/brand_vector.png';
import adidasImg from '../../../Assets/brands-img/adidas.png';
import appleImg from '../../../Assets/brands-img/apple.png';
import bmwImg from '../../../Assets/brands-img/bmw.png';
import filaImg from '../../../Assets/brands-img/fila.png';
import miImg from '../../../Assets/brands-img/mi.png';
import nikeImg from '../../../Assets/brands-img/nike.png';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/solid';

const PopularBrands = () => {

    const brandStyle = {
        backgroundImage:
            `url(${brandVector})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    };

    return (
        <div className='px-20 pt-20'>
            <div className='w-[1180px] h-[718px] px-5 flex items-center gap-10'>
                <div className='w-[672px] h-[672px] flex items-center justify-center' style={brandStyle}>
                    <div className='w-[635px] h-[424px] relative'>

                        <div className='w-[475px] h-[475px] mx-auto -mt-6 rounded-3xl brandsInnerBoxBG relative'>

                        </div>

                        <div className='absolute top-[14px] left-[6px] w-[635px] h-[424px] grid grid-cols-3'>
                            <img src={appleImg} alt="" />
                            <img src={bmwImg} alt="" />
                            <img src={nikeImg} alt="" />
                            <img src={filaImg} alt="" />
                            <img src={miImg} alt="" />
                            <img src={adidasImg} alt="" />
                        </div>

                    </div>
                </div>

                <div>
                    <h2 className='text-2xl font-bold'>Explore Most Popular<br />Brands</h2>
                    <p className='mt-5 mb-10'>Life is hard enough already. Let us<br />make it a little easier.</p>
                    <Link to='/'><small className='flex items-center gap-1 font-bold'>
                        <span>See All</span>
                        <ArrowRightIcon className="h-5 w-5 text-black" />
                    </small></Link>
                </div>
            </div>
        </div >
    );
};

export default PopularBrands;