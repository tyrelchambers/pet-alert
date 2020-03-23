import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css';

export default function Navbar() {
  return (
    <div className="navbar-wrapper">
      <nav className="navbar">
        <ul>
          <NavLink to="/" className="nav-link">Home</NavLink>
          <NavLink to="/" className="nav-link">About</NavLink>
          <NavLink to="/" className="nav-link">Sign Up</NavLink>

        </ul>
      </nav>
    </div>
  )
}
