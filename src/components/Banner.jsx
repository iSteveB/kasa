import React from 'react';

const Banner = ({text, image}) => {
  return (
    <div className="banner">
      <img className="banner__img" src={image} alt="banner" />
      {text && <h1 className="banner__text">{text}</h1>}
    </div>
  );
};

export default Banner;