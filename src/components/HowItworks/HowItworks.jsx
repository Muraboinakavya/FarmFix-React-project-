import "./HowItWorks.css";
import {
  FaClipboardList,
  FaUserCog,
  FaTools,
  FaCheckCircle,
} from "react-icons/fa";

function HowItWorks() {
  return (
    <section className="how">

      <h2>How It Works</h2>

      <div className="how-container">

        <div className="step">
          <div className="icon">
            <FaClipboardList />
          </div>

          <h3>Report Issue</h3>

          <p>
            Submit your equipment problem with details and location.
          </p>
        </div>

        <div className="arrow">➜</div>

        <div className="step">
          <div className="icon">
            <FaUserCog />
          </div>

          <h3>Mechanic Accepts</h3>

          <p>
            Nearby verified mechanics receive and accept your request.
          </p>
        </div>

        <div className="arrow">➜</div>

        <div className="step">
          <div className="icon">
            <FaTools />
          </div>

          <h3>Repair Service</h3>

          <p>
            The mechanic reaches your farm and repairs the equipment.
          </p>
        </div>

        <div className="arrow">➜</div>

        <div className="step">
          <div className="icon">
            <FaCheckCircle />
          </div>

          <h3>Job Completed</h3>

          <p>
            Confirm the repair and give your valuable feedback.
          </p>
        </div>

      </div>

    </section>
  );
}

export default HowItWorks;