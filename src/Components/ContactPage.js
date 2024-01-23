import React from 'react';
import ContactFormCard from './ContactFormCard';
import ContactDetailsCard from './ContactDetailsCard';

const ContactPage = () => {
  return (
    <div>
      <div className='contact-page-heading'>
        <h2 className='reach-out'>Reach Out.</h2>
        <h2 className='here-to-help'>We're Here To Help.</h2>
      </div>
      
      <div className='contact-container'>
      <ContactFormCard />
      <ContactDetailsCard />
    </div>
    </div>
    
  );
};

export default ContactPage;