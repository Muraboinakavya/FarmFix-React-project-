import "./Service.css";
function Services() {
  return (
    <section className="services-section">
      <h2 className="services-title">Our Services</h2>

      <div className="services-container">

        <div className="service-card">
          <div className="service-icon">🔧</div>
          <h3>Equipment Repair</h3>
          <p>
            Farmers can request repair services for damaged farm equipment.
          </p>
        </div>

        <div className="service-card">
          <div className="service-icon">📍</div>
          <h3>Nearby Mechanics</h3>
          <p>
            Find trusted mechanics available near your village.
          </p>
        </div>

        <div className="service-card">
          <div className="service-icon">📷</div>
          <h3>Upload Equipment Photo</h3>
          <p>
            Upload an image of the damaged equipment for quick analysis.
          </p>
        </div>

        <div className="service-card">
          <div className="service-icon">📞</div>
          <h3>Direct Contact</h3>
          <p>
            Contact mechanics directly and schedule repair services.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Services;
