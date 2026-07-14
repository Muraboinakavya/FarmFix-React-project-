import "./About.css";
import FeatureCard from "../components/FeatureCard/FeatureCard";

function About() {
  return (
    <div className="about">

      <section className="about-hero">
        <h1>About FarmFix</h1>

        <p>
          FarmFix is an innovative platform that connects farmers with
          trusted mechanics for fast and reliable farm equipment repair.
          We aim to reduce equipment downtime and improve agricultural
          productivity by providing quick, secure, and affordable repair
          services across rural communities.
        </p>
      </section>

      <FeatureCard />
    <section className="mission">
        <div className="mission-card">
          <h2>🌱 Our Mission</h2>
          <p>
            To empower farmers by providing quick access to trusted
            mechanics and minimizing equipment downtime through
            technology.
          </p>
        </div>

        <div className="mission-card">
          <h2>🚜 Our Vision</h2>
          <p>
            To become India's most trusted digital platform for
            agricultural equipment repair and support.
          </p>
        </div>
      </section>

    </div>
  );
}

export default About;