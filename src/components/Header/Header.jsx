import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.scss';
import logo from '/Imagies/header-logo.png';
import news from '/Imagies/header-news.svg';
import { ReactComponent as AccountIcon } from '/Imagies/header-private-account.svg';
import test from '/Imagies/header-tests.svg';

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
                <div className="header-group">
                  <AccountIcon fill="#fff" />
                  <Link to="/" onClick={() => navbarHide('/')}>
                    Личный кабинет
                  </Link>
                </div>
              </li>
              <li>
                <div className="header-group">
                  <img src={news} alt="news__logo" className="logo" />
                  <Link to="/News" onClick={() => navbarHide('/News')}>
                    Новости
                  </Link>
                </div>
              </li>
              <li>
                <div className="header-group">
                  <Link
                    to="/interview"
                    onClick={() => navbarHide('/interview')}
                  >
                    Обучение
                  </Link>
                </div>
              </li>
              <li>
                <div className="header-group">
                  <img src={test} alt="test__logo" className="logo" />
                  <Link to="/about" onClick={() => navbarHide('/about')}>
                    Тесты
                  </Link>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
