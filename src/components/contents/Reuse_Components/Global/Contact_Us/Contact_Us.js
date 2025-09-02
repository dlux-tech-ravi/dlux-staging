import React from 'react';
import './Contact_Us.css';

const Contact_Us = ({
  heading ,
  description,
  contactDetails,
  formAction,
  formFields
}) => {
  return (
    <div className="contact-us-container">
      {/* Background Image */}
      <div className="boxContainer">
        <img
          src="https://images.ctfassets.net/pj0maraabon4/2BH6j1KDX1It5wARjzymTC/4aa70b7ee0b765049b22e89c5df3c9ae/Group_771.png"
          alt="Background"
        />
      </div>

     
    </div>
  );
};

export default Contact_Us;
