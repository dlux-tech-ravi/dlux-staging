import "./PartnershipThree.css";
import adobe from "./Group 1600.svg";
import globe from "./Globe Pic.png";
import React from 'react';
import { Link } from 'react-router-dom';
import PartnershipFour from './PartnershipFour';
function PartnershipThree() {
  return (
      <div className="partners-next-p1">
        <div class="partners-left-pane">
          <div className="partners-contents-p1">
            <div className="partners-adobe-title"><h1>A Proud Adobe<br /> Solution Partner</h1></div>
            <div className="partners-line">
              <div className="partners-lineOne-p1">
                <p>As an esteemed Adobe Partner, we leverage various resources, tools,</p>
                <p>and support, empowering us to deliver tailored solutions to our clients'</p>
                <p>specific requirements. Our close collaboration with Adobe gives us an</p>
                <p> in-depth understanding of their offerings. It enabled us to offer our</p>
                <p>clients expert guidance and startegic counsel, ensuring they maximized</p>
                <p> the value of their Adobe investments.</p>
               
              </div>
               {/* ---- */}
               <p className='hide-on-laptop73'>As an esteemed Adobe Partner, we leverage various resources, tools,
                and support, empowering us to deliver tailored solutions to our clients'
                specific requirements. Our close collaboration with Adobe gives us an
                 in-depth understanding of their offerings. It enabled us to offer our
                clients expert guidance and startegic counsel, ensuring they maximized
                the value oftheir Adobe investments.</p>
            </div>
            <div className="partners-line">
              <div className="partners-lineTwo-p1">
                <p>Our partnership with Adobe is about far more than technology;</p>
                <p>it's about a shared dedication to creativity, innovtion and</p>
                <p>customer-centric values. Together, we enable our clients to</p>
                <p>achieve remarkable results and flourish in a dynamic digital</p>
                <p>landscape.</p>
              </div>
            </div>
          </div>
          <div class="partners-right-pane">
            <div className="partners-contents-p1">
              <Link to ='/adobe-workfront'>
          <div className="partners-partnerscard">
            <div className="partners-up-img">
            <img className="adobe-pic" src={adobe} alt="adobe"/>
            </div>
                <div className="partners-content">
                {/* <div className="partners-caps-text">
                    <p>SPECIALIZED</p> 
                </div> */}
                {/* <div className="partners-sub-text">
                    <p>Adobe Workfront</p>
                </div> */}
                </div>
            </div>
            </Link>
        
              <div className="partners-bllk-p1">
                <div className="partners-lineThree-p1">
                  <p>Whether you're looking to optimize your existing setup,</p>
                  <p>integrate with other systems, or migrate to Adobe Workfront</p>
                  <p>from legacy solutions, our team is here to guide you every step</p>
                  <p>of the way.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="partners-globe">
          <img src={globe} alt="globe" />
        </div>
        <div className="partners-four-component">
        <PartnershipFour/>
        </div>
      </div>
  );
}
export default PartnershipThree;
