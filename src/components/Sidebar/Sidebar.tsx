// Sidebar.tsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Sidebar.scss';
import { logo, news, account, test, education } from '../../Imagies/imagies';

const Header: React.FC = () => {
  const [isNavVisible, setIsNavVisible] = useState<boolean>(false);
  const navigate = useNavigate();

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  const navbarHide = (path: string) => {
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
                  <img className="icon" src={account} alt="Account Icon" />
                  <Link to="/" onClick={() => navbarHide('/')}>
                    Личный кабинет
                  </Link>
                </div>
              </li>
              <li>
                <div className="header-group">
                  <img src={news} alt="News Icon" className="logo" />
                  <Link to="/News" onClick={() => navbarHide('/News')}>
                    Новости
                  </Link>
                </div>
              </li>
              <li>
                <div className="header-group">
                  <img src={education} alt="Education Icon" className="logo" />
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
                  <img src={test} alt="Test Icon" className="logo" />
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
