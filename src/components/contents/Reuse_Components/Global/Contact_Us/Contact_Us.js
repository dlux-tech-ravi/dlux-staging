import React from 'react';
import './Contact_Us.css';

const Contact_Us = ({
  heading = "Let's Connect",
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

      {/* Form Section */}
      <div className="form-home">
        {/* Left Section */}
        <div className="hform-ls">
          <h1>{heading}</h1>
          <p>{description}</p>
          <div className="hform-ls-icons">
            {contactDetails.map(({ icon, text }, index) => (
              <div key={index} className="hform-ls-icon-item">
                <img src={icon} alt="Contact Icon" />
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="hright">
          <div className="hright-content">
            <form action={formAction} method="POST" acceptCharset="UTF-8" encType="multipart/form-data">
              {formFields.map(({ type, name, placeholder, required, pattern, maxLength }, index) => (
                <div key={index} className="hinput-container">
                  {type === 'textarea' ? (
                    <textarea
                      name={name}
                      placeholder={placeholder}
                      required={required}
                      maxLength={maxLength}
                    ></textarea>
                  ) : (
                    <input
                      type={type}
                      name={name}
                      placeholder={placeholder}
                      required={required}
                      pattern={pattern}
                      maxLength={maxLength}
                      autoComplete="off"
                    />
                  )}
                </div>
              ))}
              <button className="hformButton" type="submit">
                <em>Submit</em>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact_Us;
