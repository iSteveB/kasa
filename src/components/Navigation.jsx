import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
	return (
		<nav className='navigation'>
			<ul>
				<li>
          <NavLink className={(navData) => navData.isActive ? 'navigation--active' : ''} end to='/'>Accueil</NavLink>
        </li>
				<li>
          <NavLink className={(navData) => navData.isActive ? 'navigation--active' : ''} to="/about">À propos</NavLink>
        </li>
			</ul>
		</nav>
	);
};

export default Navigation;
