import "./App.css";
import { Routes, Route } from "react-router-dom";

// Layout
import Layout from "./components/Layout/Layout";

// Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ServicesPage from "./Pages/Services";
import ContactPage from "./pages/Contact";
import HowItWorksPage from "./pages/HowItWorks";
import NotFound from "./Pages/NotFound";
import About from "./Pages/About";
import ReportIssue from "./Pages/ReportIssue"

function App() {
  return (
    <Routes>

      {/* Parent Route */}
      <Route path="/" element={<Layout />}>

        {/* Home Page */}
        <Route index element={<Home />} />

        {/* Other Pages */}
        <Route path="services" element={<ServicesPage />} />
        <Route path="how-it-works" element={<HowItWorksPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/report-issue" element={<ReportIssue/>}/>


      </Route>
      <Route path="*" element={<NotFound />} />

    </Routes>
  );
}

export default App;