import React from 'react';
import {NavLink} from 'react-router-dom'
import './HomeSubNav.css'

const HomeSubNav = () => {
  return (
    <nav className="flex flex-row">
      <NavLink to="/contacts" className="link flex flex-row items-center">
        <i className="fas fa-id-card mr-2"></i>
        Contacts
      </NavLink>
    </nav>
  );
}

export default HomeSubNav;
