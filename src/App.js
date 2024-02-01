import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ContactPage from './Pages/ContactPage';
import HomePage from './Pages/HomePage';
import AboutUs from './Pages/AboutUsPage';
import OurSerivces from './Pages/OurSerivcesPage';
import './Styles/styles.css';
function App() {
  return (
    <Router>
      <header >
        {/* Navigation links */}
        <nav> 
          <Link to="/">Home</Link>
          <Link to="/about-us">About Us</Link>
          <Link to="/our-services">Our Serivces</Link>
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

export default App;