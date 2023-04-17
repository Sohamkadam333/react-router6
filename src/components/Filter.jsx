import React, { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
const Filter = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const [params, setParams] = useState({
		age: null,
		name: '',
	});

	const location = useLocation();

	const handleAgeChange = (e) => {
		setParams({ age: e.target.value, name: params.name });
	};

	const handleNameChange = (e) => {
		setParams({ age: params.age, name: e.target.value });
	};

	const updateParams = () => {
		setSearchParams({ age: params.age, name: params.name });
		console.log(location);
	};
	return (
		<div>
			<h1>Filter Page</h1>
			<h3>Age = {params.age}</h3>
			<h3>Name = {params.name}</h3>

			<input type='text' placeholder='Enter Age' onChange={handleAgeChange} />
			<input type='text' placeholder='Enter Age' onChange={handleNameChange} />
			<button onClick={updateParams}>Update Params</button>
		</div>
	);
};

export default Filter;
