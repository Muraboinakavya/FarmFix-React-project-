import "./Service.css";
import { FaTractor, FaMapMarkerAlt } from "react-icons/fa";

function Services() {
  return (
    <section className="services">

      <h2 className="service-title">
        🌿 Our Services 🌿
      </h2>

      <div className="service-container">

        <div className="service-card">

          <div className="service-icon">
            <FaTractor />
          </div>

          <div>
            <h3>Equipment Repair</h3>

            <p>
              Farmers can request repair services for
              tractors, harvesters, pumps and all
              farm equipment.
            </p>
          </div>

        </div>

        <div className="service-card">

          <div className="service-icon">
            <FaMapMarkerAlt />
          </div>

          <div>
            <h3>Nearby Mechanics</h3>

            <p>
              Find trusted mechanics near your village
              for fast and reliable assistance.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Services;