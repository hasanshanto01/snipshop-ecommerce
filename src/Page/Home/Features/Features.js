import React from 'react';
import './Features.css';
import PopularBrands from './PopularBrands';
import SellEasily from './SellEasily';

const Features = () => {
    return (
        <div className='featuresBG'>
            <PopularBrands></PopularBrands>
            <SellEasily></SellEasily>
        </div>
    );
};

export default Features;