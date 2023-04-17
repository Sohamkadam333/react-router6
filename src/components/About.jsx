import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
const About = () => {
	const navigate = useNavigate();
	const handleNavigate = () => {
		navigate('/filter');
	};
	return (
		<div>
			<h1>About Page</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium impedit aperiam minima ad vel vitae at
				officiis, deserunt debitis vero! Doloribus molestias alias, veniam delectus ut sit porro perferendis aperiam
			</p>

			<button onClick={() => navigate('/')}>Go to Home Page</button>

			<button onClick={handleNavigate}>Go to Filter Page</button>

			<div className='sections-container'>
				<Link to={'compa'}>CompA</Link>
				<Link to={'compb'}>CompB</Link>
				<Link to={'compc'}>CompC</Link>
				<Outlet />
			</div>
		</div>
	);
};

export default About;
