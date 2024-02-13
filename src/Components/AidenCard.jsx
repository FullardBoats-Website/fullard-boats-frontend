
import Aiden from '../assets/Aiden.png';

export default function AidenCard() {

  return (
    <div className='card-container' id='our-services-card'>
      <div className='about-us-contents'>
      <img className='headshot' src={Aiden} alt="Brush Background" />
        <h2 className="aiden-heading">
          Aiden Kell
        </h2>
        <div className='our-services-body'>
          <p className='about-us-blurb-card'>
          Aidan joined the Fullard Boats family as a school-based apprentice in 2021, whilst also completing his VCE. He has now finished his VCE and is a full time apprentice. He has a fantastic work ethic and we look forward to watching him grow and develop throughout the rest of his apprenticeship and beyond.
          </p>
        </div>
      </div>
    </div>
  );
}