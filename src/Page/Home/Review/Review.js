import React from 'react';
import './Review.css';
import reviewVector from '../../../Assets/review-img/review_vector.png';
import reviewerImg from '../../../Assets/review-img/reviewer.png';
import icon from '../../../Assets/review-img/icon.png';
import LeftArrowBtn from '../../../Components/LeftArrowBtn/LeftArrowBtn';
import RightArrowBtn from '../../../Components/RightArrowBtn/RightArrowBtn';

const Review = () => {

    const reviewStyle = {
        backgroundImage:
            `url(${reviewVector})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    };

    return (
        <div className='h-[804px] flex items-center'>
            <div className='w-[1211px] h-[598px] flex items-center'>

                <div className='rounded-r-2xl w-[666px] h-[598px] flex items-center justify-end reviewImgCardBG'>

                    <div className='border border-base-200 w-[430px] h-[530px] rounded-2xl mr-6' style={reviewStyle}>
                        <img src={reviewerImg} alt="" className='w-full h-full' />
                    </div>

                </div>
                <div className='m-20 p-8'>
                    <div>
                        <div className='flex items-center'>
                            <h2 className='text-xl font-bold'>Justin Pierre</h2>
                            <img src={icon} alt="" />
                        </div>
                        <small>Products Seller</small>
                    </div>
                    <p className='my-8 text-justify'>“In 2 years, my business went from just me and my Shop site to 40 employees, my own fulfillment center and over 22 million dollars in revenue.”</p>
                    <div className='flex gap-5'>
                        <LeftArrowBtn></LeftArrowBtn>
                        <RightArrowBtn></RightArrowBtn>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Review;