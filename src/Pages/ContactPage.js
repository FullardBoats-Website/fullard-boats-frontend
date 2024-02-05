import React from 'react';
import ContactFormCard from '../Components/ContactFormCard';
import ContactDetailsCard from '../Components/ContactDetailsCard';

const ContactPage = () => {
  return (
    <div>
      <div className='page-heading'>
        <h2 className='line1'>Reach Out.</h2>
        <h2 className='line2'>We're Here To Help.</h2>
      </div>
      
      <div className='contact-container'>
      <ContactFormCard />
      <ContactDetailsCard />
    </div>
    </div>
  );
};

export default ContactPage;