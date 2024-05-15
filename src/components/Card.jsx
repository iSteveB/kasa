import React from 'react';

const Card = ({data}) => {
  return (
    <article className="card">
      <h2 className="card__title">{data.title}</h2>
      <img className="card__cover" src={data.cover} alt={data.title} />
    </article>
  );
};

export default Card;