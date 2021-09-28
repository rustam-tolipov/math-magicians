import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <div className="navbar">
        <div className="navbar__title">Math Magicians</div>
        <ul className="navbar__items">
          <li className="item">
            <Link to="/">Home</Link>
          </li>
          <li className="item">
            <Link to="/calculator">Calculator</Link>
          </li>
          <li className="item">
            <Link to="/quote">Quote</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
