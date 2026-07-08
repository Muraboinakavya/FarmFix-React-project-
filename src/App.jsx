import './App.css'
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Service";
import HowItworks from "./components/HowItworks/HowItworks";
import FeatureCard from "./components/FeatureCard/FeatureCard";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";


function App() {
 
  return (
    <>
    <Navbar/>
    <Hero/>
    <Services/>
    <HowItworks/>
    <FeatureCard/>
    <Contact/>
    <Footer/>
    
    </>
  );
}
export default App;
      