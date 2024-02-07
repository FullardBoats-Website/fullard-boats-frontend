import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import ContactPage from './Pages/ContactPage';
import HomePage from './Pages/HomePage';
import AboutUs from './Pages/AboutUsPage';
import OurSerivces from './Pages/OurServicesPage';
import './Styles/styles.css';
import logo from './assets/logo.svg';

function App() {
  return (
    <Router>
      <header >
        {/* Render the image only if it's not the home page */}
        <Logo />
        <nav>         
          <Link to="/about-us">About Us</Link>
          <Link to="/our-services">Our Services</Link>
          <Link to="/contact-us">Contact Us</Link>
        </nav>
        {/* Define routes using the Routes component */}
        <Routes>
          <Route path="/contact-us" element={<ContactPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/our-services" element={<OurSerivces />} />
        </Routes>
      </header>
    </Router>
  );
}

// Component to conditionally render the logo
function Logo() {
  const location = useLocation();

  // Render the image only if it's not the home page
  if (location.pathname !== '/') {
    return (
      <Link to="/">
        <img className='logo' src={logo} alt="Logo Background" />
      </Link>
    );
  }
  return null;
}

export default App;
