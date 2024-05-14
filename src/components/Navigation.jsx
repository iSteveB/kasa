import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
	return (
		<nav className='navigation'>
			<ul className='navigation__list'>
				<li>
          <NavLink className={(navData) => navData.isActive ? 'navigation__list--active' : ''} end to='/'>Accueil</NavLink>
        </li>
				<li>
          <NavLink className={(navData) => navData.isActive ? 'navigation__list--active' : ''} to="/about">A Propos</NavLink>
        </li>
			</ul>
		</nav>
	);
};

export default Navigation;
