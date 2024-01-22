import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ContactFormCard from './Components/ContactFormCard';
import ContactDetailsCard from './Components/ContactDetailsCard';
import HomePage from './Components/HomePage';

function ContactUs() {
  return (
    <>
      <ContactFormCard />
      <ContactDetailsCard /> 
     
    </>
  );
}

function App() {
  return (
    <Router>
      <div>
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
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
