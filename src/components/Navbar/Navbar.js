import React from 'react';
import './navbar.scss';
import logo from '../../logo.svg';

export default function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="city tours company" />
      <ul className="nav-links">
        <li>
          <a href="/" className="nav-link">
            Home
          </a>
        </li>
        <li>
          <a href="/" className="nav-link">
            about
          </a>
        </li>
        <li>
          <a href="/" className="nav-link active">
            tours
          </a>
        </li>
      </ul>
    </nav>
  );
}
