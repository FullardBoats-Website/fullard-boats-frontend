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
          <br></br>
          <div className='hours-container'>
            <h3 className='hours-heading'>Opening Hours</h3>
            <p className='hours-text'>8:30am - 4pm</p>
            <p className='days-text'>Monday-Friday</p>
            <em className='public-hols-text'>*Except public holidays</em>
          </div>

          <div className='serivce-locations-container'>
            <h3 className='serivce-locations-heading'>Service Locations</h3>
            <ul className='test'>
              <li >Metung, VIC</li>
              <li >Bairnsdale, VIC</li>
              <li >Paynesville, VIC</li>
              <li >Lakes Entrance, VIC</li>
            </ul>

          </div>
          
        </div>
      </div>
    </div>
  );
}