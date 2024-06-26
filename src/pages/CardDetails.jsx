import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import data from '../data/data.json';

import Tag from '../components/Tag';
import Carousel from '../components/Carousel';
import Rating from '../components/Rating';
import Collapse from '../components/Collapse';

const CardDetails = () => {
	const { id } = useParams();
	const [lodging, setLodging] = useState([]);

	const navigate = useNavigate();

	useEffect(() => {
		const filteredLodging = data.filter((item) => item.id === id);

		if (filteredLodging.length === 0) {
			navigate('/not-found');
		}

		setLodging(filteredLodging[0]);
	}, [id]);

	return (
		<main>
			{lodging && (
				<div className='card-details'>
					<div className='card-details__carousel'>
						<Carousel lodging={lodging} />
					</div>

					<div className='card-details__content'>
						<div className='card-details__content__infos'>
							<h1>{lodging.title}</h1>
							<p>{lodging.location}</p>
							<ul>
								{lodging.tags?.map((tag) => (
									<li key={tag}>
										<Tag tag={tag} />
									</li>
								))}
							</ul>
						</div>

						<div className='card-details__host'>
							<div className='card-details__host__info'>
								<div className='card-details__host__name'>
									<p>{lodging.host?.name}</p>
								</div>
								<div className='card-details__host__picture'>
									<img
										src={lodging.host?.picture}
										alt={lodging.host?.name}
									/>
								</div>
							</div>
							<div className='card-details__host__rating'>
								<Rating rating={lodging.rating} />
							</div>
						</div>
					</div>
					
					<div className='card-details__collapse-container'>
						<div className='card-details__collapse-container__description'>
							<Collapse text={lodging.description}  title='Description' />
						</div>
						<div className='card-details__collapse-container__equipments'>
							<Collapse list={lodging.equipments} title='Équipements' />
						</div>
					</div>
				</div>
			)}
		</main>
	);
};

export default CardDetails;
