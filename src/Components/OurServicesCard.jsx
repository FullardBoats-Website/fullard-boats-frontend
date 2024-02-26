
import brush from '../assets/brush.png';

export default function OurServicesCard() {

  return (
    <div className='card-container' id='our-services-card'>
      <div className='service-card-contents'>
        <img className='brushbg' src={brush} alt="Brush Background" />
          <h2 className="our-services-heading">OUR SERVICES</h2>
            <div className='our-services-body'>
              <p className='our-services-blurb'>
                At Fullard Boats we offer the following range of services. 
                We have built a solid reputation and pride ourselves on our attention to detail and high-quality finishes at competitive prices. 
                The services we offer include:
              </p>
              <ul className='our-services-list'>
                <li>Traditional Timber Shipwrighting</li>
                <li>Fibreglass Repairs</li>
                <li>Bespoke Cabinetry and Joinery</li>
                <li>Bow and Stern Thruster Installation</li>
                <li>Gel Coat Repairs</li>
                <li>Perspex Window Installation</li>
                <li>Custom Parts</li>
                <li>Teak Decking Restoration, Replacement and Rebuilds</li>
                <li>Antifouling and Maintenance</li>
                <li>Restorations</li>
                <li>Complete Boat Management</li>
              </ul>
            </div>
      </div>
    </div>
  );
}