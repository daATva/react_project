import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import logo from '../Imagies/logo.png';

const Header = () => {
  return (

    <header className="header">
    <div className="container">
    <nav>
        <div className="logo-group">

        <Link to="/">
        <img src={logo} alt="Logo" className="logo" /> 
        </Link> 

        <Link to="/">
        Frontend Sobes 
        </Link>
          
        </div>
        
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/interview">Interview</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </div>
     
    </header>
  );
};

export default Header;