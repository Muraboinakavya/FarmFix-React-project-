import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        🌿 <span>FarmFix</span>
      </div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/how-it-works">How It Works</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>

      <div className="nav-buttons">
        <button className="report-btn">
          Report an Issue
        </button>

        <button className="mechanic-btn">
          Become a Mechanic
        </button>
      </div>

    </nav>
  );
}

export default Navbar;