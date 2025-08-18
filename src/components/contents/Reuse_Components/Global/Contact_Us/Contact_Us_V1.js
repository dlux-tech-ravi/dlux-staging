import React from 'react';
import './Contact_Us_V1.css';

const Contact_Us_V1 = ({ description = {}}) => {
    
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="cmp-four-step__description">
      <h1>
        {description.footerHeading || "Ready to Transform Your Digital Commerce?"}
      </h1>
      <p>
        {description.footerText || "Partner with us to leverage Adobe Commerce and exceed customer expectations."}
      </p>
      <div>
        <button className="cmp-button" onClick={() => { scrollToTop(); }}>
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Contact_Us_V1;

