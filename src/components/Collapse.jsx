import React, { useState } from 'react';

const Collapse = ({ text, list, title }) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className={`collapse ${isOpen ? 'open' : ''}`}>
			<h2 className='collapse__title' onClick={() => setIsOpen(!isOpen)}>{title}</h2>

			<div className='collapse__content'>

				{text && <p className='collapse__content__text'>{text}</p>}
				{list && (
					<ul className='collapse__content__list'>
						{list.map((item, index) => (
							<li className='collapse__content__list--item' key={index}>
								{item}
							</li>
						))}
					</ul>
				)}
				</div>
		</div>
	);
};

export default Collapse;
