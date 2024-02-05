import React from 'react';
import ContactFormCard from '../Components/OurServicesCard';
import ContactDetailsCard from '../Components/FaqCard';

const AboutUs = () => {
  return (
    <div>
    <div className='page-heading'>
      <h2 className='line1'>Hands-On Expertise:</h2>
      <h2 className='line2'>Where Our Services Exceed Your Aspirations.</h2>
    </div>
    
    <div className='contact-container'>
    <ContactFormCard />
    <ContactDetailsCard />
  </div>
  </div>
  );
};

export default AboutUs;