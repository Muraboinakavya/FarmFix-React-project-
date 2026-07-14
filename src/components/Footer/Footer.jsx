import "./Footer.css";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-section">
          <h2>🌿 FarmFix</h2>
          <p>
            FarmFix connects farmers with trusted mechanics for fast,
            reliable and affordable farm equipment repair services.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>How It Works</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>

          <p><FaMapMarkerAlt /> Guntur, Andhra Pradesh</p>

          <p><FaPhoneAlt /> +91 9876543210</p>

          <p><FaEnvelope /> support@farmfix.com</p>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>

          <div className="social-icons">
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
            <FaLinkedin />
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 FarmFix. All Rights Reserved.</p>
      </div>

    </footer>
  );
}

export default Footer;