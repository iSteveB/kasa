import React from 'react';
import Home from '../pages/Home';
import About from '../pages/About';
import NotFound from '../pages/NotFound';
import CardDetails from '../pages/CardDetails';

import { Routes, Route } from 'react-router-dom';

const HandleRoutes = () => {
  return (
    <Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/lodging/:id' element={<CardDetails />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
  );
};

export default HandleRoutes;