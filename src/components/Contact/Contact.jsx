import "./Contact.css"
function Contact(){
    return(
        <section className="contact-section">
            <h1 className="title">Contact Us</h1>
            <p className="description">Need help with your farm equipment? FarmFix is here to assist you. Contact our team for quick support, connect with verified mechanics, or learn more about our services. We are committed to providing reliable, transparent, and efficient repair solutions for every farmer.</p>
            <div className="contact-container">
                <div>
                    <h2>Contact Form</h2>
                     

                    <input
                        type="text"
                        placeholder="Full Name"
                    />

                    <input
                        type="email"
                        placeholder="Email Address"
                    />

                    <input
                        type="tel"
                        placeholder="Phone Number"
                    />

                    <textarea
                        placeholder="Enter your message..."
                        rows="5"
                    ></textarea>

                    <button>Send Message</button>

                </div>
                <div>

                    <h2>Contact Information</h2>

                    <p>📍 Guntur, Andhra Pradesh</p>

                    <p>📞 +91 XXXXXXXXXX</p>

                    <p>✉️ support@farmfix.com</p>

                    <p>🕒 Monday - Saturday | 9:00 AM - 6:00 PM</p>
                </div>
            </div>

        </section>
    )
}
export default Contact;