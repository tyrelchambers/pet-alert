import React from 'react';
import './header.css'
import Navbar from '../Navbar/Navbar';
import {NavLink} from 'react-router-dom'

const Header = () => {
  return (
    <div className="header">
      <h1 className="brand-title">
        <NavLink to="/">Some Company</NavLink>
      </h1>
      <Navbar />
    </div>
  );
}

export default Header;
