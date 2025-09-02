import WhatWeDo from '../WhatWeDo';
import OurServices from '../OurServices/OurServices';
import Practices from '../Practices';
import SetsUpApart from '../SetsUsApart/SetsUpApart';
import Clients from '../Clients/Clients';
import OurClients from '../OurClients/OurClients';
import React from 'react';
import './HomePage.css';
import HomeFooter from '../HomeFooter/HomeFooter';

const HomePage = () => {
 
    return (
        <>
          <WhatWeDo />
          <OurServices />
          <Practices />
          <SetsUpApart />
          <Clients />
          <OurClients />
          <HomeFooter />
        </>
      );
    };
    
    export default HomePage;
    