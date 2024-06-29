// src/App.js

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import PetSitters from './components/PetSitters';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/services" element={<Services />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login setAuth={setIsAuthenticated} />} />
        <PrivateRoute path="/dashboard" element={<Dashboard />} isAuthenticated={isAuthenticated} />
        <PrivateRoute path="/pet-sitters" element={<PetSitters />} isAuthenticated={isAuthenticated} />
      </Routes>
    </Router>
  );
};

const PrivateRoute = ({ element: Element, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    element={isAuthenticated ? <Element /> : <Navigate to="/login" />}
  />
);

export default App;
