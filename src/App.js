import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ContactPage from './Components/ContactPage';
import HomePage from './Components/HomePage';
import './Styles/styles.css';

function App() {
  return (
    <Router>
      <header>
        {/* Navigation links */}
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contact-us">Contact</Link>
            </li>
          </ul>
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