import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">

            <h2 className="footer-logo">FarmFix</h2>

            <p className="footer-description">
                FarmFix is dedicated to connecting farmers with trusted mechanics
                through a simple, reliable, and efficient digital platform.
                Our mission is to reduce equipment downtime and support
                productive farming across rural communities.
            </p>

            <div className="footer-container">

                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li>Home</li>
                        <li>Services</li>
                        <li>How It Works</li>
                        <li>Features</li>
                        <li>Contact</li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Services</h3>
                    <ul>
                        <li>Equipment Repair</li>
                        <li>Mechanic Registration</li>
                        <li>Emergency Support</li>
                        <li>Repair History</li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Contact</h3>
                    <p>📍 Guntur, Andhra Pradesh</p>
                    <p>📞 +91 XXXXXXXXXX</p>
                    <p>✉️ support@farmfix.com</p>
                </div>

            </div>

            <hr />

            <p className="copyright">
                © 2026 FarmFix. All Rights Reserved.
            </p>

        </footer>
    );
}

export default Footer;