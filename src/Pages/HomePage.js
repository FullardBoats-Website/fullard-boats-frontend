import React from 'react';
import logoBg from '../assets/logobg.svg';
import homeBg from '../assets/homebg.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, } from '@fortawesome/free-solid-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'

const HomePage = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${homeBg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '100vh',
  };

  return (
    <div className="home-page" style={backgroundImageStyle}>
      <img className='logobg' src={logoBg} alt="Logo Background" />
      <div className='tag-container'>
        <p className='tagline'>Modern,</p>
        <p className='tagline'>Traditional,</p>
        <p className='tagline'>Boat Building.</p>
      </div>
      <div className='homepg-contact-details'>
        <h2 > <FontAwesomeIcon className='icons' icon={faPhone} /> 0434 819 553</h2>
        <h2 > <FontAwesomeIcon className='icons' icon={faEnvelope} /> fullardboats@gmail.com</h2>
        <h2 > <FontAwesomeIcon className='icons' icon={faFacebook} /> facebook.com/FullardBoats</h2>
      </div>

      <div className='home-serivce-locations-container'>
            <h3 className='hours-heading'>Opening Hours</h3>
            <p className='hours-text'>8:30am - 4pm</p>
            <p className='days-text'>Monday-Friday</p>
            <em className='public-hols-text'>*Except public holidays</em>
            <h3 className='serivce-locations-heading'>Service Locations</h3>
            <ul className='serivce-locations-text'>
              <li >Metung, VIC</li>
              <li >Bairnsdale, VIC</li>
              <li >Paynesville, VIC</li>
              <li >Lakes Entrance, VIC</li>
            </ul>
            
          </div>
      
    </div>
  );
};

export default HomePage;
