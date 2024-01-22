
import '../Styles/OurDetails.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, } from '@fortawesome/free-solid-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'



export default function ContactDetailsCard() {



  return (
    <div className='card-container'>
      <div className='card-contents'>
        <h2 className="our-details-heading">
          OUR DETAILS
        </h2>
        <div className='our-deatils-body'>
          <h2 className='contact-text'> <FontAwesomeIcon className='icons' icon={faPhone} /> 0434 819 553</h2>
          <h2 className='contact-text'> <FontAwesomeIcon className='icons' icon={faEnvelope} /> fullardboats@gmail.com</h2>
          <h2 className='contact-text'> <FontAwesomeIcon className='icons' icon={faFacebook} /> facebook.com/FullardBoats</h2>
        </div>
      </div>
    </div>
  );
}