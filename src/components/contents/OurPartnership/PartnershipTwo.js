import React from 'react';
import './PartnershipTwo.css';
import adobeWorkfrontP from './Adobe Workfront.png';
import aprimoP from './Aprimo.png';
import salesforceP from './Salesforce.png';
import circleP from './circleRotate.png';
import loadPic from './loadPic.png';
import dataiku_partners from './dataiku_partners.png';
import mediavalet from './mediavalet.png'
import invocare from './invocare.png'

import PartnershipThree from './PartnershipThree';
function PartnershipTwo()
{
    return(
        <div className="partners-whole-p">
            <div className="partners-partnership-title">
                <h1>A Solid Partnership</h1>
            </div>
            <div className="partners-loadImg">
            <div className="partners-loading">
                <img src={loadPic}/>
            </div>
            <div className='partners-partnersheart-para'><p>At the heart of our success lies a solid network of collaborative partnership that fosters a constant trade of ideas <br/> and propels the engine of innovation. We partner up to navigate the ever-changing tech world, creating solutions<br/>that set new industry standards.
            </p></div>
            </div>
            <div className="partners-squaresOne-p">
            <div className="partners-square">
                <img src={adobeWorkfrontP}></img>
            </div>
            <div className="partners-square">
                <img src={mediavalet}></img>
            </div>
            <div className="partners-square">
                <img src={aprimoP}></img>
            </div>
            
           
            </div>

            <div className="partners-squaresTwo-p">
            <div className="partners-square">
                <img src={salesforceP}></img>
            </div>
           

            <div className="partners-square">
                <img src={dataiku_partners}></img>
            </div>

            </div>
            
            <div className="partners-circleRotate">
                <img src={circleP}></img>
            </div>

            <div className='partners-three-component'>
                <PartnershipThree/>
            </div>
            </div>
            
    )
}
export default PartnershipTwo;