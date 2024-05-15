import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import data from '../data/data.json';

import Tag from '../components/Tag';

const CardDetails = () => {
	const { id } = useParams();
	const [lodging, setLodging] = useState([]);

	useEffect(() => {
		const filteredLodging = data.filter((item) => item.id === id);
		setLodging(filteredLodging[0]);
	}, [id]);

	return (
		<main>
			{lodging && (
				<div className='card-details'>
					<div className='card-details__carousel'>
						<img src={lodging.cover} alt={lodging.title} />
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
							<div>
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
								<p>{lodging.rating}</p>
							</div>
						</div>
					</div>

          <div className='card-details__description'>
            <p>{lodging.description}</p>
          </div>
          <div className='card-details__equipments'>
            <p>{lodging.equipments?.join(', ')}</p>
          </div>
				</div>
			)}
		</main>
	);
};

export default CardDetails;
