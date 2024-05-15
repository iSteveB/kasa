import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ data }) => {
	return (
		<Link to={`/lodging/${data.id}`} className='card'>
			<article className='card'>
				<h2 className='card__title'>{data.title}</h2>
				<img className='card__cover' src={data.cover} alt={data.title}/>
			</article>
		</Link>
	);
};

export default Card;
