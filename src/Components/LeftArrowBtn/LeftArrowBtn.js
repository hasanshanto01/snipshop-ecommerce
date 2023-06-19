import React, { useState } from 'react';
import { ChevronLeftIcon } from '@heroicons/react/24/solid';

const LeftArrowBtn = () => {

    const [hover, setHover] = useState(false);

    const handleMouseEnter = () => {
        setHover(true);
    };

    const handleMouseLeave = () => {
        setHover(false);
    };

    const arrowBtnStyle = {
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        color: hover ? 'white' : 'black',
        backgroundColor: hover ? '#001439' : '#F4F4F4'
    };

    return (
        <button
            style={arrowBtnStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <ChevronLeftIcon className="h-5 w-5 mx-auto" />
        </button>
    );
};

export default LeftArrowBtn;