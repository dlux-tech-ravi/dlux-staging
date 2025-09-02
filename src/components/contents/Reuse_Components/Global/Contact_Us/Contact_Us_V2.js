import React from 'react';
import './Contact_Us_V2.css';

const Contact_Us_V2 = ({ description = {}}) => {
    
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="cmp-four-step__descriptionss">
      <h1>
        {description.footerHeading || "Reimagine Your eCommerce Future with DLUX"}
      </h1>
      <p>
        {description.footerText || "Discover what's possible with a partner who understands your unique business goals. At DLUX, we don't just implement solutions-we craft experiences that connect, inspire, and drive growth."}
      </p>
      <div>
        <button className="cmp-buttonss" onClick={() => { scrollToTop(); }}>
          Let’s Talk – No Cost
        </button>
      </div>
    </div>
  );
};

export default Contact_Us_V2;