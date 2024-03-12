import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.scss';
import logo from '../Imagies/logo.png';

const Header = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const navigate = useNavigate();

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  const navbarHide = (path) => {
    navigate(path);
    setIsNavVisible(false);
  };

  return (
    <>
      <button onClick={toggleNav} className="burger-menu">
        &#9776;
      </button>
      <header className={`header ${isNavVisible ? 'show' : ''}`}>
        <div className="container">
          <nav>
            <div className="logo-group">
              <Link to="/" onClick={() => navbarHide('/')}>
                <img src={logo} alt="Logo" className="logo" />
              </Link>
              <Link to="/" onClick={() => navbarHide('/')}>
                Soft Up
              </Link>
            </div>
            <ul className="nav-links">
              <li>
                <Link to="/" onClick={() => navbarHide('/')}>
                  Личный кабинет
                </Link>
              </li>
              <li>
                <Link to="/News" onClick={() => navbarHide('/News')}>
                  Новости
                </Link>
              </li>
              <li>
                <Link to="/interview" onClick={() => navbarHide('/interview')}>
                  Обучение
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={() => navbarHide('/about')}>
                  Тесты
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
