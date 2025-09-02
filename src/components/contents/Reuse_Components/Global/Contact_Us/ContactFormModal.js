// ContactFormModal.js
import React, { useRef, useState } from "react";
import "./ContactFormModal.css";
import icon1 from "./Contact_Us_Assests/icon1.png";
import icon2 from "./Contact_Us_Assests/icon2.png";
import icon3 from "./Contact_Us_Assests/icon3.png";
import pdfFile from "./Contact_Us_Assests/HealthCheck.pdf";

function ContactFormModal({ onClose }) {
  const [formData, setFormData] = useState({
    SingleLine: "",
    Email: "",
    PhoneNumber_countrycode: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef(null);

  const validate = () => {
    const tempErrors = {};
    if (!formData.SingleLine.trim()) {
      tempErrors.SingleLine = "Name is required";
    } else if (!/^[A-Za-z\s]+$/.test(formData.SingleLine)) {
      tempErrors.SingleLine = "Name must contain only letters";
    }

    if (!formData.Email.trim()) {
      tempErrors.Email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.Email)) {
      tempErrors.Email = "Invalid email format";
    }

    if (!formData.PhoneNumber_countrycode.trim()) {
      tempErrors.PhoneNumber_countrycode = "Phone number is required";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     if (!validate()) return;

  //     setSubmitted(true);

  //     setTimeout(() => {
  //       if (formRef.current) {
  //         formRef.current.submit();

  //         setTimeout(() => {
  //           const a = document.createElement("a");
  //           a.href = pdfFile;
  //           a.download = "#";
  //           document.body.appendChild(a);
  //           a.click();
  //           document.body.removeChild(a);

  //           onClose(); // Close the form after download
  //         }, 1000);
  //       }
  //     }, 0);
  //   };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitted(true);

    if (formRef.current) {
      formRef.current.submit();
    }

    onClose(); // Just close the form
  };

  return (
    <div className="signup-modal">
      <form
        // ref={formRef}
        className="signup-content"
        // action="https://forms.zohopublic.in/dluxtech/form/WorkfrontFusionHealthCheck1/formperma/m4yg6Dh5jowgPIwOyJP4mVJKsCTp706PLWwJc71KtVA/htmlRecords/submit"
        // method="POST"
        // target="_blank"
        acceptCharset="UTF-8"
        encType="multipart/form-data"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="zf_referrer_name" value="" />
        <input type="hidden" name="zf_redirect_url" value="" />
        <input type="hidden" name="zc_gad" value="" />

        <span className="close-btns" onClick={onClose}>
          ×
        </span>

        <h2>
          <span style={{ color: "#fff" }}>Sign up</span>{" "}
          <span style={{ color: "#f85032" }}>in Seconds</span>
        </h2>

        <div className="contact-input-group">
          <img src={icon1} alt="user" className="contact-input-icon" />
          <input
            type="text"
            name="SingleLine"
            value={formData.SingleLine}
            onChange={handleChange}
            placeholder="Your Name"
          />
        </div>
        {errors.SingleLine && <p className="error-msg">{errors.SingleLine}</p>}

        <div className="contact-input-group">
          <img src={icon2} alt="email" className="contact-input-icon" />
          <input
            type="email"
            name="Email"
            value={formData.Email}
            onChange={handleChange}
            placeholder="Your Email"
          />
        </div>
        {errors.Email && <p className="error-msg">{errors.Email}</p>}

        <div className="contact-input-group">
          <img src={icon3} alt="phone" className="contact-input-icon" />
          <input
            type="text"
            name="PhoneNumber_countrycode"
            value={formData.PhoneNumber_countrycode}
            onChange={handleChange}
            placeholder="Your Phone Number"
          />
        </div>
        {errors.PhoneNumber_countrycode && (
          <p className="error-msg">{errors.PhoneNumber_countrycode}</p>
        )}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactFormModal;
