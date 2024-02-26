
import Kelly from '../assets/Kelly.png';

export default function KellyCard() {

  return (
    <div className='card-container' id='our-services-card'>
      <img className='headshot' src={Kelly} alt="Kelly headsdhot" />
      <div className='about-us-contents'>
        <h2 className="kelly-heading">Kelly Fullard</h2>
        <div className='about-us-body'>
          <p className='about-us-blurb-card'>
            Kelly plays the 'behind the scenes' role and handles the administration and accounts for Fullard Boats. 
            She is a full time mum to their two little boys and works part time as a teacher in the local area.
          </p>
        </div>
      </div>
    </div>
  );
}