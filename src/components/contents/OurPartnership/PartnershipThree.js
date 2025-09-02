import "./PartnershipThree.css";
import adobe from "./Group 1600.svg";
import media from './Group 7473.png'
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
       
        <div class="partners-left-pane">
        <div className="partners-contents-p1">
              <Link to ='https://www.mediavalet.com/'>
          <div className="partners-partnerscard">
            <div className="partners-up-img">
            <img className="media-pic" src={media} alt="media"/>
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
        
              {/* <div className="partners-bllk-p1">
                <div className="partners-lineThree-p1">
                  <p>With DLUX Tech’s expertise in MarTech consulting and implementation and</p>
                  <p>MediaValet’s advanced DAM solutions, this collaboration empowers your</p>
                  <p>teams to focus on what matters most—creating impactful, engaging campaigns.</p>
                </div>
              </div> */}
            </div>
        
          <div class="partners-right-pane">
          <div className="partners-contents-p1">
            <div className="partners-media-title"><h1>DLUX Partners with MediaValet</h1></div>
            <h3 className="why_partner"><b>Why This Partnership Matters </b></h3>
            <div className="partners-line">
              <div className="partners-lineTwo-p2">
                <p>We’re excited to announce a ground breaking partnership between</p>
                <p>DLUX Tech and MediaValet, combining our expertise in marketing</p>
                <p> technology with MediaValet’s industry-leading Digital </p>
                <p>Asset Management (DAM) platform.</p>
              </div>
              <p className='hide-on-laptop73'>We’re excited to announce a groundbreaking partnership
                 between DLUX Tech and MediaValet, combining our expertise in marketing technology with MediaValet’s 
                 industry-leading Digital Asset Management (DAM) platform. Together, we’re 
                redefining how businesses manage, share, and optimize their digital content. </p>
               </div>
              <div className="partners-lineTwo-p2-content">
                <p>Together, we’re redefining how businesses manage, share, and </p>
                <p>optimize their digital content. From enhanced searchability to </p>
                <p>automated workflows, businesses can now achieve greater efficiency and </p>
                  <p>scalability in content management.</p>
              </div>
              <p className='hide-on-laptop73'>
              Together, we’re redefining how businesses manage, share, and optimize their 
              digital content. From enhanced searchability to automated workflows, businesses
              can now achieve greater efficiency and scalability in content management.
              </p>
              
            
          </div>
          </div>
        </div>

        <div className="partners-globe">
          {/* <img src={globe} alt="globe" /> */}
        </div>
        <div className="partners-four-component">
        <PartnershipFour/>
        </div>

      </div>
      
      
  );
}
export default PartnershipThree;