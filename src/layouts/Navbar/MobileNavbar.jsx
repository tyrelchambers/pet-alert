import React from 'react';
import './Navbar.css'
import { NavLink } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

const MobileNavbar = ({GeneralStore}) => {
  return (
    <nav className={`mobile-navbar ${GeneralStore.navOpen ? "expanded" : ""}`}>
      <NavLink to="/" className="nav-link" onClick={() => GeneralStore.setNavOpen(false)}>
        <i className="fas fa-home mr-2"></i>
        Home
      </NavLink>
      <NavLink to="/" className="nav-link" onClick={() => GeneralStore.setNavOpen(false)}>
        <i className="fas fa-question-circle mr-2"></i>
        About
      </NavLink>
      <NavLink to="/register" className="nav-link" onClick={() => GeneralStore.setNavOpen(false)}>
        <i className="fas fa-arrow-circle-right mr-2"></i>
        Sign Up
      </NavLink>
    </nav>
  );
}

export default inject("GeneralStore")(observer(MobileNavbar));
