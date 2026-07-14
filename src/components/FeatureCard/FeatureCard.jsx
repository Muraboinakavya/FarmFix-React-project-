import "./Feature.css";
import { FaUserShield, FaClock, FaMapMarkerAlt, FaHeadset } from "react-icons/fa";

function FeatureCard() {
  return (
    <section className="features">

      <h2>Why Choose FarmFix?</h2>

      <div className="feature-container">

        <div className="feature-card">
          <FaUserShield className="feature-icon" />
          <h3>Verified Mechanics</h3>
          <p>Every mechanic is verified to ensure reliable and trusted service.</p>
        </div>

        <div className="feature-card">
          <FaClock className="feature-icon" />
          <h3>Quick Response</h3>
          <p>Receive faster assistance during urgent farm equipment breakdowns.</p>
        </div>

        <div className="feature-card">
          <FaMapMarkerAlt className="feature-icon" />
          <h3>Nearby Service</h3>
          <p>Find mechanics near your village to reduce waiting time.</p>
        </div>

        <div className="feature-card">
          <FaHeadset className="feature-icon" />
          <h3>24/7 Support</h3>
          <p>Our support team is available whenever you need help.</p>
        </div>

      </div>

    </section>
  );
}

export default FeatureCard;
