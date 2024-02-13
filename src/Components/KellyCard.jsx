
import Kelly from '../assets/Kelly.png';

export default function KellyCard() {

  return (
    <div className='card-container' id='our-services-card'>
      <div className='about-us-contents'>
      <img className='headshot' src={Kelly} alt="Brush Background" />
        <h2 className="kelly-heading">
          Kelly Fullard
        </h2>
        <div className='our-services-body'>
          <p className='about-us-blurb-card'>
          Kelly plays the 'behind the scenes' role and handles the administration and accounts for Fullard Boats.  She is a full time mum to their two little boys and works part time as a teacher in the local area.
          </p>
        </div>
      </div>
    </div>
  );
}