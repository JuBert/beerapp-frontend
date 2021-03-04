import '../index.scss';
import { Link } from 'react-router-dom';
const Navbar: React.FC = () => {
  return (
    <div className="navbar-container">
      <Link to="/" className="navbar-links">
        <div className="navbar-logo">appLogo</div>
      </Link>
      <div className="navbar-items-container">
        <Link to="/about" className="navbar-links">
          <div className="navbar-items">about us</div>
        </Link>
        <Link to="/contact" className="navbar-links">
          <div className="navbar-items">contact</div>
        </Link>
        <div className="navbar-items">login</div>
      </div>
    </div>
  );
};

export default Navbar;
