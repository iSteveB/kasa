import React from 'react';

function Star({ filled }) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			className='rating-star'
			fill='none'
			viewBox='0 0 36 36'>
			<path
				fill={filled ? '#FF6060' : '#E3E3E3'}
				d='M19.721 6.844a1.502 1.502 0 00-2.7 0l-3.013 6.2-6.73.994a1.497 1.497 0 00-1.205 1.017 1.508 1.508 0 00.37 1.533l4.884 4.832-1.153 6.83a1.505 1.505 0 002.189 1.574l6.013-3.21 6.013 3.21a1.5 1.5 0 001.585-.108c.464-.337.698-.905.604-1.467l-1.157-6.829 4.883-4.832a1.498 1.498 0 00-.834-2.55l-6.735-.994-3.014-6.2z'></path>
		</svg>
	);
}

export default Star;
