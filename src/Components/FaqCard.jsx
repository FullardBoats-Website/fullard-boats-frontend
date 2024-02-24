import water from '../assets/water.png';

export default function OurServicesCard() {

  return (
    <div className='card-container' id='faq-card'>
      <div className='faq-card-contents'>
      <img className='waterbg' src={water} alt="Water Background" />
        <h2 className="faq-heading">
          FAQ
        </h2>
        <div className='faq-body'>
          <p className='faq-blurb'>
          Have a question that isn't answered below? <br></br>
          Get in touch with us using the contact form below or give us a call</p>
          <b>Where is your workshop located?</b>
          <p className="faq-questions">
          We are a mobile business, which means we come to your boat to complete work. 
          We can also complete work on your boat at one of the many local facilities if required. 
          We do also have a small machine shop where we can fabricate parts and work on some projects, but we don't have a conventional shop front.
          </p>
          <b>Can you come to my boat to do the work?</b>
          <p className="faq-questions">
          Being a mobile business, we come to your boat and do most types of work on location without you needing to move your boat anywhere. 
          There is however, a few different types of work that can't be done over water in the Gippsland Lakes. 
          If this is the case, we can work with you to organise the work to be completed at one of the facilities in the local area.
          </p>
          <b>What facilities can you work out of?</b>
          <p className="faq-questions">
          We can organise to complete work on your vessel at the Paynesville & Bullock Island Gippsland Ports Facilities, 
          as well as a number of smaller private boat yards and workshops around the area.
          </p>
          <b>My job needs you to work with other trades. Can you organise everything?</b>
          <p className="faq-questions">
          We offer a comprehensive/complete service. 
          There are a number of high quality and professional local businesses that we work closely with as needed including, 
          marine electricians, marine mechanics, metal fabricators and many more. If you would like us to, we can liaise with 
          whoever else is needed to complete the works, handling your job from start to finish!
          </p>
          <b>Can I see some photos of your work?</b>
          <p className="faq-questions">
            Of course! We regularly post photos of our hard work on the Fullard Boats Facebook page. 
            Check out our most recent work <a id='facebook-link' href="https://www.facebook.com/FullardBoats" target="_blank" rel="noopener noreferrer"><u>here!</u></a>
          </p>
          <b>Have some work you'd like to discuss with us?</b>
          <p className="faq-questions">
          Click here to in touch today. Generally, we'll come out and meet you at your vessel 
          to look at the work, then make a plan with you from there.
          </p>
        </div>
      </div>
    </div>
  );
}