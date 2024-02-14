import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import ContactPage from './Pages/ContactPage';
import HomePage from './Pages/HomePage';
import AboutUs from './Pages/AboutUsPage';
import OurSerivces from './Pages/OurServicesPage';
import './Styles/styles.css';
import logo from './assets/logo.svg';
import logoMobile from './assets/logo-mobile.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [animationDirection, setAnimationDirection] = useState('down');

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setAnimationDirection(menuOpen ? 'up' : 'down');
  };

  return (
    <Router>
      <header>
        <Logo />
        <nav>
          <div className='nav-items'>
            <Link to="/about-us">About Us</Link>
            <Link to="/our-services">Our Services</Link>
            <Link to="/contact-us">Contact Us</Link>
          </div>
          <FontAwesomeIcon className='nav-mobile-icon' icon={faBars} onClick={toggleMenu} />
          {menuOpen && <FullMenu onClose={toggleMenu} animationDirection={animationDirection} />}
        </nav>

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

function FullMenu({ onClose, animationDirection }) {
  return (
    <div className={"full-menu-overlay open " + animationDirection} onClick={onClose}>
      <div className="full-menu-content">
        <Link to="/about-us" onClick={onClose}>About Us</Link>
        <Link to="/our-services" onClick={onClose}>Our Services</Link>
        <Link to="/contact-us" onClick={onClose}>Contact Us</Link>
      </div>
    </div>
  );
}

function Logo() {
  const location = useLocation();

  if (location.pathname !== '/') {
    return (
      <Link to="/">
        <img className='logo-mobile' src={logoMobile} alt="Fullard Boats Logo" />
        <img className='logo' src={logo} alt="Fullard Boats Logo" />
      </Link>
    );
  }
  return null;
}

export default App;
