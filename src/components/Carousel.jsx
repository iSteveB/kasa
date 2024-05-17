import React, { useState } from 'react';
import arrowLeft from '../assets/icons/arrow-left.svg';
import arrowRight from '../assets/icons/arrow-right.svg';

const Carousel = ({ lodging }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const pictures = lodging && lodging.pictures ? lodging.pictures : [];

  const handlePreviousClick = () => {
    if (activeIndex === 0) {
      setActiveIndex(pictures.length - 1);
    } else {
      setActiveIndex(activeIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (activeIndex === pictures.length - 1) {
      setActiveIndex(0);
    } else {
      setActiveIndex(activeIndex + 1);
    }
  };

  const currentPicture = pictures[activeIndex];

  return (
    <div className='carousel'>
      <span className='carousel__arrow arrow--left' onClick={handlePreviousClick}> <img src={arrowLeft} /> </span>
      <img className='carousel__picture' src={currentPicture} alt={lodging.title} />
      <span className='carousel__arrow arrow--right' onClick={handleNextClick}> <img src={arrowRight} /> </span>    
    </div>
  );
};

export default Carousel;