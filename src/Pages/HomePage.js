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
      <div className='tag-container'>
        <p className='tagline' id='modern'>Modern,</p>
        <p className='tagline' id='traditional'>Traditional,</p>
        <p className='tagline' id='boat-building'>Boat Building.</p>
        <div className='see-our-services'><a id='' href="/our-services" ><p>Check out our services! {'>'}</p></a></div>
      </div>
      <img className='logobg' src={logoBg} alt="Logo Background" />
      <div className='homepg-contact-details'>
        <h2 > <FontAwesomeIcon className='icons' icon={faPhone} /> 0434 819 553</h2>
        <h2 > <FontAwesomeIcon className='icons' icon={faEnvelope} /> office@fullardboatco.com</h2>
        <a id='facebook-link' href="https://www.facebook.com/FullardBoats" target="_blank" rel="noopener noreferrer">
          <h2>
            <FontAwesomeIcon className='icons' icon={faFacebook} /> facebook.com/FullardBoatCo
          </h2>
        </a>
      </div>
      <div className='home-serivce-locations-container'>
        <h3 className='hours-heading'>Opening Hours</h3>
        <p className='hours-text'>8:00am - 4:30pm</p>
        <p className='days-text'>Monday - Friday</p>
        <em className='public-hols-text'>*Except public holidays</em>
        <h3 className='home-serivce-locations-heading'>Service Locations</h3>
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
