// import Hero from "../components/Hero/Hero";
import Services from "../components/Services/Service";
import HowItWorks from "../components/HowItworks/HowItworks";
// import FeatureCard from "../components/FeatureCard/FeatureCard";
import Contact from "../components/Contact/Contact";
import Hero from "../components/Hero/Hero";
import "./Home.css";

function Home() {
  return (
     <main className="home">
     <Hero />

      <section className="section">
        <Services />
      </section>

      <section className="section light-bg">
        <HowItWorks />
      </section>

      {/* <section className="section">
        <FeatureCard />
      </section> */}

      <section className="section green-bg">
        <Contact />
      </section>
    </main>
  );
}

export default Home;