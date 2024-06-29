import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <nav>
    <h2>OnlyPets</h2>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/services">Services</Link></li>
      <li><Link to="/testimonial">Testimonial</Link></li>
      <li><Link to="/contact">Contact</Link></li>
      <li><Link to="/login">Login</Link></li>
      <li><Link to="/dashboard">Dashboard</Link></li>
    </ul>
  </nav>
);

export default Nav;
