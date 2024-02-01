import React from 'react';
import logoBg from '../assets/logobg.svg';
import homeBg from '../assets/homebg.png';

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
      
    </div>
  );
};

export default HomePage;
