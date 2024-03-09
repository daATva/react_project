import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import logo from '../Imagies/logo.png';

const Header = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  return (
    <>
      {/* Кнопка бургер-меню */}
      <button onClick={toggleNav} className="burger-menu">
        &#9776;
      </button>

      {/* Заголовок */}
      <header className={`header ${isNavVisible ? 'show' : ''}`}>
        <div className="container">
          <nav>
            <div className="logo-group">
              <Link to="/">
                <img src={logo} alt="Logo" className="logo" />
              </Link>

              <Link to="/">Soft Up</Link>
            </div>

            <ul className="nav-links">
              <li>
                <Link to="/">Личный кабинет</Link>
              </li>
              <li>
                <Link to="/News">Новости</Link>
              </li>
              <li>
                <Link to="/interview">Обучение</Link>
              </li>
              <li>
                <Link to="/about">Тесты</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
