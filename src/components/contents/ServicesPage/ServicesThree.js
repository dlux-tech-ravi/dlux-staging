import React from 'react';
import "./ServicesThree.css";
import ServicesFour from "./ServicesFour";
function ServicesThree() {
  return (
    <>
      <div className="servicespage-three-Main">
        <div className="servicespage-three-title"><h1>Why DLUX</h1></div>
        <div className="servicespage-three-contents">
         <p> We're not your run-of-the-mill MarTech solution partner - We drive tangible results, propelling your businesses<br/>
         toward success and building a strong foundation of trust, achievement, and excellence. </p>
        </div>
        <div className="servicespage-three-Boxes">
        <div className="servicespage-three-BoxUp">
          <div className="servicespage-three-enhanceBox">
        
          <div className="servicespage-three-enhanceH">
          <h2>Simplifying Operations</h2>
          </div>
          <div className="servicespage-three-enhanceP">
          <p>Optimize your marketing workflows by<br/>  implementing tailored solutions to<br/>  meet specific operational<br/>needs.</p>
          </div>
          </div>
          <div className="servicespage-three-maximizeBox">
      
          <div className="servicespage-three-maximizeH">
          <h2>Client-Centered Services</h2>
          </div>
          <div className="servicespage-three-maximizeP">
          <p>Prompt solutions and friendly <br/>communication, prioritizing our <br/>clients with a sense of tranquility, <br/>reassurance and empathy.</p>
          </div>
          </div>
          <div className="servicespage-three-collaborativeBox">       
          <div className="servicespage-three-collaborativeH">
          <h2>Empowering Growth</h2>
          </div>
          <div className="servicespage-three-collaborativeP">
          <p>Leading change and shaping success,<br/>empowering your company through<br/>every step of the marketing<br/>technology evolution.</p>
          </div>
          </div>
          </div>

          <div className="servicespage-three-BoxDown">
        <div className="servicespage-three-agileBox">
          <div className="servicespage-three-agileH">
          <h2>Partnering in MarTech</h2>
          </div>
          <div className="servicespage-three-agileP">
         <p>Your trusted partner, guiding you<br/>through the complexities of new<br/>technologies and helping you<br/>capitalize on emerging trends.</p>
          </div>
          </div>
          <div className="servicespage-three-reliableBox">

          <div className="servicespage-three-reliableH">
          <h2>Providing Continuous Support</h2>
          </div>
          <div className="servicespage-three-reliableP">
          <p>Receive ongoing support and guidance<br/>from our dedicated team to ensure<br/>the successful implementation and<br/>optimization of our solutions.</p>
          </div>
          </div>
          </div>
          </div>
        </div>

        <div className='servicespage-four-component'>
          <ServicesFour/>
        </div>

        </>
  );
}
export default ServicesThree;