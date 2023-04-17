import React from 'react';
import { Link } from 'react-router-dom';

const Page404 = () => {
	return (
		<div>
			<h1 style={{ color: 'red', fontSize: '50px' }}>Page Not Found</h1>
			<p>
				<Link to={'/'}>Go to Home Page</Link>
			</p>
		</div>
	);
};

export default Page404;
