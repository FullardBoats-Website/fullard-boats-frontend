
import Will from '../assets/Will.png';

export default function WillCard() {

  return (
    <div className='card-container' id='our-services-card'>
      <img className='headshot' src={Will} alt="Will headsdhot" />
        <div className='about-us-contents'>
          <h2 className="will-heading">Will Fullard</h2>
          <div className='about-us-body'>
            <p className='about-us-blurb-card'>
              Will is a qualified shipwright who began working in the boat building industry in 2007. 
              He has worked as a shipwright on various projects from the restoration of a traditional timber tall ship, 
              to modern composite new build yacht tenders both here in Australia and in the UK.
            </p>
        </div>
      </div>
    </div>
  );
}