import React from 'react';
import './Contact_Us_V3.css';

const Contact_Us_V3 = ({
  heading,
  description,
  contactDetails,
  formAction,
  formFields,
}) => {
  return (
    <div className="forms-home">
      {/* Left Section */}
      <div className="hforms-ls">
        <h1>{heading}</h1>
        <p>{description}</p>
        <div className="hforms-ls-icons">
          {contactDetails?.map(({ icon, text }, index) => (
            <div key={index} className="hforms-ls-icon-item">
              <img src={icon} alt="Contact Icon" />
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Right Section */}
      <div className="hrights">
        <div className="hright-contents">
          <form action={formAction} method="POST" acceptCharset="UTF-8" encType="multipart/form-data">
            {formFields?.map(({ type, name, placeholder, required, pattern, maxLength }, index) => (
              <div key={index} className="hinput-containers">
                {/* {type === 'textarea' ? (
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
                )} */}
              </div>
            ))}
            {/* <button className="hformButton" type="submit">
              <em>Submit</em>
            </button> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact_Us_V3;
