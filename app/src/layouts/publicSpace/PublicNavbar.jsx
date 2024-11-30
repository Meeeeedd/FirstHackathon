import { Link } from 'react-router-dom';
import './PublicNavbar.css'; // Import the updated CSS

function PublicNavbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/" className="navbar-link">Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/about" className="navbar-link">About</Link>
        </li>
        <li className="navbar-item">
          <Link to="/contact" className="navbar-link">Contact</Link>
        </li>
        <li className="navbar-item">
          <Link to="/home" className="navbar-link">Public Space</Link>
        </li>
        <li className="navbar-item">
          <Link to="/school" className="navbar-link">School Space</Link>
        </li>
        <li className="navbar-item">
          <Link to="/student" className="navbar-link">Student Space</Link>
        </li>
      </ul>
    </nav>
  );
}

export default PublicNavbar;
