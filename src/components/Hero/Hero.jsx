import "./Hero.css";
import heroImage from "./image.png";
import {Link} from "react-router-dom"

function Hero() {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="hero-overlay"></div>

      <div className="hero-container">
        <div className="hero-content">
          <span className="hero-tag">🌿 Smart Farming Solution</span>

          <h1>
            Helping Farmers <br />
            <span>Find Trusted Mechanics</
            span>
          </h1>

          <p>
            FarmFix connects farmers with verified mechanics for quick and
            reliable farm equipment repair. Report your issue, upload the
            details, and receive fast assistance from nearby professionals to
            keep your work moving.
          </p>

          <div className="hero-buttons">
            <Link to="/report-issue">
            <button className="report-btn">Report an Issue</button>
            </Link>

           <Link to="/register">
            <button className="mechanic-btn">
              Become a Mechanic
            </button>
            </Link>
          </div>

          <div className="hero-stats">
            <div className="stat-card">
              <h2>10K+</h2>
              <p>Farmers Helped</p>
            </div>

            <div className="stat-card">
              <h2>2K+</h2>
              <p>Verified Mechanics</p>
            </div>

            <div className="stat-card">
              <h2>98%</h2>
              <p>Customer Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;