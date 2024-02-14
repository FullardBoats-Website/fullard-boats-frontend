import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import ContactPage from './Pages/ContactPage';
import HomePage from './Pages/HomePage';
import AboutUs from './Pages/AboutUsPage';
import OurSerivces from './Pages/OurServicesPage';
import './Styles/styles.css';
import logo from './assets/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function App() {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Router>
      <header >
        {/* Render the image only if it's not the home page */}
        <Logo />
        <nav>   
          <div className='nav-items'>
          <Link to="/about-us">About Us</Link>
          <Link to="/our-services">Our Services</Link>
          <Link to="/contact-us">Contact Us</Link>
          </div>      
          <FontAwesomeIcon className='nav-mobile-icon' icon={faBars} onClick={toggleMenu} />
          {menuOpen && <FullMenu onClose={toggleMenu} />}
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

function FullMenu({ onClose }) {
  return (
    <div className="full-menu-overlay" onClick={onClose}>
      <div className="full-menu-content">
        <Link to="/about-us" onClick={onClose}>About Us</Link>
        <Link to="/our-services" onClick={onClose}>Our Services</Link>
        <Link to="/contact-us" onClick={onClose}>Contact Us</Link>
      </div>
    </div>
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
