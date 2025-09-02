import './PartnershipFour.css';
import enhancingEfficiencyImg from './Enhancing Efficiency.png';
import maximizingInsightImg from './Maximizing Insight.png';
import collaborativeInnovationImg from './Collaborative Innovation.png';
import agileIntegration from './Agile Integration.png';
import reliablePartnership from './Reliable Partnership.png';
import footerImg from './Footer Image.png';
import circleRotate from './circleRotate.png';
import React from 'react';
import HForm from '../../HForm/HForm'
import HomeFooter from '../../HomeFooter/HomeFooter';

function PartnershipFour()
{
    return(
    <div className="partners-four-p4">
      <div className="partners-x">
        <div className="partners-attribute">
        <h1>Our Defining Attributes</h1>
        </div>
        <div className="partners-m-boxes">
        
        <div className="partners-m-boxesUp">
          <div className="partners-m-boxOne">
          <div className="partners-m-boxOneImg">
          <img src={enhancingEfficiencyImg}/>
          </div>
          <div className="partners-m-boxOneH">
          <h3>Enhancing Efficiency</h3>
          </div>
          <div className="partners-m-boxOneP">
          <p>Streamlining workflows for seamless collaboration</p>
          </div>
          </div>
          <div className="partners-m-boxTwo">
          <div className="partners-m-boxTwoImg">
          <img src={maximizingInsightImg}/>
          </div>
          <div className="partners-m-boxTwoH">
          <h3>Maximizing Insight</h3>
          </div>
          <div className="partners-m-boxTwoP">
          <p>Providing unparallelled clarity from start to finish</p>
          </div>
          </div>
          <div className="partners-m-boxThree">
          <div className="partners-m-boxThreeImg">
          <img src={collaborativeInnovationImg}/>
          </div>
          <div className="partners-m-boxThreeH">
          <h3>Collaborative Innovation</h3>
          </div>
          <div className="partners-m-boxThreeP">
          <p>Uniting expertise to drive exceptional outcomes</p>
          </div>
          </div>
          </div>
          </div>
          <div className="partners-imgRotate">
          <img src={circleRotate}/>
          </div>
          <div className="partners-imgRotateOne">
          <img src={circleRotate}/>
          </div>
        <div className="partners-m-boxesDown">
        <div className="partners-m-boxFour">
          <div className="partners-m-boxFourImg">
          <img src={agileIntegration}/>
          </div>
          <div className="partners-m-boxFiveH">
          <h3>Agile Integration</h3>
          </div>
          <div className="partners-m-boxFiveP">
          <p>Seamlessly incorporating cutting-edge technologies</p>
          </div>
          </div>
          <div className="partners-m-boxFive">
          <div className="partners-m-boxFiveImg">
          <img src={reliablePartnership}/>
          </div>
          <div className="partners-m-boxFiveH">
          <h3>Reliable Partnership</h3>
          </div>
          <div className="partners-m-boxFiveP">
          <p>Building trust through transparency and integrity</p>
          </div>
          </div>
          </div> 
          
        </div>
        <div className="partners-footer-img">
          <img src={footerImg}/>
        </div>

        <div className='partners-form'>
            <HForm/>
          
        </div> 
          
        <div className='partners-footer'>
        <HomeFooter/>
        </div>
      
    </div>

    
    );
}
export default PartnershipFour;