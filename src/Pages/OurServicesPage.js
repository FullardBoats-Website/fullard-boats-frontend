import React from 'react';
import OurServicesCard from '../Components/OurServicesCard';
import FaqCard from '../Components/FaqCard';

const OurServicesPage = () => {
  return (
    <div>
      <div className='page-heading'>
        <h2 className='line1'>Hands-On Expertise:</h2>
        <h2 className='line2'>Where Our Services Exceed Your Aspirations.</h2>
      </div>
      <div className='our-services-container'>
        <OurServicesCard />
        <FaqCard />
      </div>
    </div>
  );
};

export default OurServicesPage;