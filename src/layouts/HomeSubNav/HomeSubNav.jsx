import React from 'react';
import {NavLink} from 'react-router-dom'
import './HomeSubNav.css'

const HomeSubNav = () => {
  return (
    <nav className="flex flex-col dash-nav" >
      <NavLink to="/dashboard" className="dash-link flex flex-row items-center" activeClassName="dash-link-active">
        <div className="nav-dot bg-gray-200"></div>
        <i className="fas fa-home mr-2"></i>
        Home
      </NavLink>
      <NavLink to="/contacts" className="dash-link flex flex-row items-center" activeClassName="dash-link-active">
        <div className="nav-dot bg-gray-200"></div>
        <i className="fas fa-id-card mr-2"></i>
        Contacts
      </NavLink>
    </nav>
  );
}

export default HomeSubNav;
