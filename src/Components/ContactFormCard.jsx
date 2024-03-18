import React, { useState } from 'react';

export default function ContactFormCard() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(process.env.REACT_APP_API_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        // Email sent successfully
        setSuccessMessage('Thank you for contacting us!');
        setErrorMessage(''); // Clear any previous error messages

        // Clear the form data on successful submission
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
        });
      } else {
        // Handle the error if the email failed to send
        setErrorMessage('Failed to send email.');
        setSuccessMessage(''); // Clear any previous success messages
      }
    } catch (error) {
      console.error('Error sending email', error);
      setErrorMessage('Error sending email');
      setSuccessMessage(''); // Clear any previous success messages
    }
  };

  return (
    <div className='card-container' id='contact-form-card'>
      <div className='card-contents'>
          {successMessage ? (
            <h2 className="success-message">{successMessage}</h2>
          ) : errorMessage ? (
            <h2 className="error-message">{errorMessage}</h2>
          ) : (
            <h2 className="contact-us-heading">CONTACT US</h2>
          )}
          <form onSubmit={handleSubmit}>

          <label>Name*</label>
            <input
              placeholder="Your full name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <label htmlFor="email">Email*</label>
            <input
              type="email"
              placeholder="Your email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              placeholder="Your contact number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />

            <label htmlFor="subject">Subject* </label>
            <textarea
              placeholder="Your message"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            ></textarea>
            <input className="submit-btn" type="submit" value="Submit" />
          </form>
      </div>
    </div>
  );
}
