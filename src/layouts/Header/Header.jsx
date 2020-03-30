import React from 'react';
import './header.css'
import Navbar from '../Navbar/Navbar';
import {NavLink} from 'react-router-dom'
import MobileNavbar from '../Navbar/MobileNavbar';
import { inject, observer } from 'mobx-react';

const Header = ({GeneralStore}) => {
  return (
    <div className="header flex flex-row items-center">
      <div className={`nav-toggle ${GeneralStore.navOpen ? "expanded" : ""}`} onClick={() => {
        GeneralStore.setNavOpen(!GeneralStore.navOpen)
      }}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <MobileNavbar />
      <h1 className="brand-title flex flex-row items-center">
        <NavLink to="/">Some Company</NavLink>
      </h1>
      <Navbar />
    </div>
  );
}

export default inject("GeneralStore")(observer(Header));
