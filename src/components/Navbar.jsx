import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (
    <nav>
      <div className="navbar__content">
        <div className="logo-group">
          <span>My SPA</span>
        </div>
        <div className="navbar__container">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;