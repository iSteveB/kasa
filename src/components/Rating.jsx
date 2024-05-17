import React from 'react';
import Star from './Star';

const RatingStars = ({ rating = 0 }) => {
  const stars = Array.from({ length: 5 }, (value, index) =>
    index < rating ? <Star key={index} filled={true} /> : <Star key={index} filled={false} />
  );

  return <div className="rating">{stars}</div>;
}

export default RatingStars;
