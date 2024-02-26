import React from 'react';
import WillCard from '../Components/WillCard';
import KellyCard from '../Components/KellyCard';
import AidenCard from '../Components/AidenCard';

const AboutUs = () => {
  return (
    <div>
      <div className='page-heading'>
        <h2 className='line1'>Navigating Excellence.</h2>
        <h2 className='line2'>Your Journey Starts with Our Craftsmanship.</h2>
      </div>
      <div className='about-us-blurb-container'>
        <p className='about-us-blurb'>
          Established in 2018, Fullard Boats is a small, family-run  business based around the Gippsland Lakes in Victoria. 
          They offer a comprehensive service for all wooden and fibreglass boats, specialising in both timber and fibreglass repairs, restorations and new builds.
        </p>
      </div>
      <h1 className='our-team-heading'>Our Team</h1>
      <div className='about-us-container'>
        <WillCard />
        <KellyCard />
        <AidenCard />
      </div>
    </div>
  );
};

export default AboutUs;