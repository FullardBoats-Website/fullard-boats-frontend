
import Kelly from '../assets/Kelly.png';

export default function KellyCard() {

  return (
    <div className='card-container' id='our-services-card'>
      <img className='headshot' src={Kelly} alt="Kelly headsdhot" />
      <div className='about-us-contents'>
        <h2 className="kelly-heading">Kelly Fullard</h2>
        <div className='about-us-body'>
          <p className='about-us-blurb-card'>
            Kelly is the Operations Manager. She plays the 'behind the scenes' role and handles everything from administration to accounts and much more.
          </p>
        </div>
      </div>
    </div>
  );
}