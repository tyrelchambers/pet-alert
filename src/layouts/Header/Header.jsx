import React from 'react';
import './header.css'
import Navbar from '../Navbar/Navbar';

const Header = () => {
  return (
    <div className="header">
      <h1 className="brand-title">Some Company</h1>
      <Navbar />
    </div>
  );
}

export default Header;
