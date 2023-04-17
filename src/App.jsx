import React from 'react';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Page404 from './components/Page404';
import Filter from './components/Filter';
import CompA from './components/CompA';
import CompC from './components/CompC';
import CompB from './components/CompB';

const App = () => {
	return (
		<div>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/about/' element={<About />}>
						<Route path='compa' element={<CompA />} />
						<Route path='compb' element={<CompB />} />
						<Route path='compc' element={<CompC />} />
					</Route>
					<Route path='/filter' element={<Filter />} />
					<Route path='/contact' element={<Navigate to={'/'} />} />
					<Route path='/*' element={<Page404 />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;
