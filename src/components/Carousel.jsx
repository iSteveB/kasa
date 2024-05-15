import React, { useState } from 'react';

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
    <div>
      <span className='previous-button' onClick={handlePreviousClick}> Prev </span>
      <img src={currentPicture} alt={lodging.title} />
      <span className='next-button' onClick={handleNextClick}> Next </span>    
    </div>
  );
};

export default Carousel;