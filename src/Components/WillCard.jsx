
import Will from '../assets/Will.png';

export default function WillCard() {

  return (
    <div className='card-container' id='our-services-card'>
      <div className='about-us-contents'>
      <img className='headshot' src={Will} alt="Brush Background" />
        <h2 className="will-heading">
          Will Fullard
        </h2>
        <div className='our-services-body'>
          <p className='about-us-blurb-card'>
          Will is a qualified shipwright with more than 16 years experience in the boat building industry. He has worked as a shipwright on various projects from the restoration of a traditional timber tall ship, to modern composite new build yacht tenders both here in Australia and in the UK.
          </p>
        </div>
      </div>
    </div>
  );
}