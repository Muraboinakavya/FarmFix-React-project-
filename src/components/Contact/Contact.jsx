import "./Contact.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";

function Contact() {
  return (
    <section className="contact-page">

      <div className="contact-header">
        <h1>Contact FarmFix</h1>
        <p>
          We're here to help. Reach out to us for any questions,
          support, or partnership opportunities.
        </p>
      </div>

      <div className="contact-container">

        <div className="contact-info">

          <div className="info-box">
            <FaMapMarkerAlt className="icon" />
            <div>
              <h3>Address</h3>
              <p>Guntur, Andhra Pradesh, India</p>
            </div>
          </div>

          <div className="info-box">
            <FaPhoneAlt className="icon" />
            <div>
              <h3>Phone</h3>
              <p>+91 98765 43210</p>
            </div>
          </div>

          <div className="info-box">
            <FaEnvelope className="icon" />
            <div>
              <h3>Email</h3>
              <p>support@farmfix.com</p>
            </div>
          </div>

          <div className="info-box">
            <FaClock className="icon" />
            <div>
              <h3>Working Hours</h3>
              <p>Mon - Sat : 9:00 AM - 6:00 PM</p>
            </div>
          </div>

        </div>

        <form className="contact-form">

          <input
            type="text"
            placeholder="Your Name"
          />

          <input
            type="email"
            placeholder="Your Email"
          />

          <textarea
            rows="6"
            placeholder="Write your message..."
          ></textarea>

          <button type="submit">
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
}

export default Contact;