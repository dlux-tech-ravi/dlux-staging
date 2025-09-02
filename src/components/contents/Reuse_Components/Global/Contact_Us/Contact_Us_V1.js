import React from 'react';
import './Contact_Us_V1.css';

const Contact_Us_V1 = ({ description = {}}) => {
    
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="cmp-four-step__descriptions">
      <h1>
        {description.footerHeading || "Ready to Transform Your Digital Commerce?"}
      </h1>
      <p>
        {description.footerText || "Partner with the DLUX Tech to leverage the full potential of  Adobe Commerce. Let's build an e-commerce experience that not only meets but and exceed customer expectations."}
      </p>
      <div>
        <button className="cmp-buttons" onClick={() => { scrollToTop(); }}>
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Contact_Us_V1;

