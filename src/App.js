import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ContactPage from './Components/ContactPage';
import HomePage from './Components/HomePage';
import './Styles/styles.css';

function App() {
  return (
    <Router>
      <header >
        {/* Navigation links */}
        <nav> 
          <Link to="/">Home</Link>
          <Link to="/contact-us">Contact</Link>
        </nav>
        {/* Define routes using the Routes component */}
        <Routes>
          <Route path="/contact-us" element={<ContactPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </header>
    </Router>
  );
}

export default App;