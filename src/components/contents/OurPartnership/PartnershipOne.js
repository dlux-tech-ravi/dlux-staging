import React from 'react';
import Navbar from '../../Navbar'
import './PartnershipOne.css';
import PartnershipTwo from './PartnershipTwo';
import shakePic from './Shake Pic.png';
import { Helmet } from 'react-helmet';

function PartnershipOne(){

    return(
        <>
        <div className='partners-one-wrapper'>
        <div className='partners-one-nav'>
            <Navbar/>
            <Helmet>
        <title>Adobe Bronze Solution Partner | Salesforce, Aprimo, Dataiku | DLUX</title>
        <meta name="description" content="DLUX: Partnered with Adobe, we thrive in Marketing Technology! Resilient, we embrace challenges & seize opportunities for a dynamic future." />
        </Helmet>
        </div>

        <div className='partners-one-img'>
            <img src={shakePic} alt='shakePic' />
        </div>

        <div  className='partners-one-head-text'>
        <h1>Elevating Excellence<br /> Where Creativity Unites</h1>
      </div>

        <div className='partners-one-container'>
        <div className='partners-two-component'>
          <PartnershipTwo/>
        </div>
        </div>
    </div>

  
        </>
    );
    
}
export default PartnershipOne;