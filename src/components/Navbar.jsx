import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
	return (
		<div className='navbar-container'>
			<ul className='navbar'>
				<h1>React Router Dom</h1>
				<div className='navbar-links'>
					<li>
						<NavLink
							style={({ isActive }) => {
								return { color: isActive ? 'purple' : null };
							}}
							to={'/'}>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink to={'/about'}>About</NavLink>
					</li>
					<li>
						<NavLink to={'/contact'}>Contact</NavLink>
					</li>
					<li>
						<NavLink to={'/filter'}>Filter</NavLink>
					</li>
				</div>
			</ul>
		</div>
	);
};

export default Navbar;
