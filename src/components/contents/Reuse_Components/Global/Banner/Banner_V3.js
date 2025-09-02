import React, { useState, useRef } from "react";
import "./Banner_V3.css";
import rightArrowIcon from "./Banner_Assests/down-arrows.png";
import icon1 from "./Banner_Assests/icon1.png";
import icon2 from "./Banner_Assests/icon2.png";
import icon3 from "./Banner_Assests/icon3.png";
import icon4 from "./Banner_Assests/icon4.png";

function Banner_V3({ banner, eqiqImagesCollection }) {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    Name_First: "",
    Email: "",
    PhoneNumber_countrycode: "",
    MultiLine: "",
  });
  const [errors, setErrors] = useState({});
  const [videoSrc, setVideoSrc] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const videoRef = useRef(null);

  const toggleForm = () => setShowForm((prev) => !prev);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const tempErrors = {};
    if (!formData.Name_First.trim()) {
      tempErrors.Name_First = "First name is required";
    }
    if (!formData.Email.trim()) {
      tempErrors.Email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.Email)) {
      tempErrors.Email = "Invalid email format";
    }
    if (!formData.PhoneNumber_countrycode.trim()) {
      tempErrors.PhoneNumber_countrycode = "Phone number is required";
    }
    if (!formData.MultiLine.trim()) {
      tempErrors.MultiLine = "Message is required";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    if (!validate()) {
      e.preventDefault();
      return;
    }

    setTimeout(() => {
      toggleForm();
      setFormData({
        Name_First: "",
        Email: "",
        PhoneNumber_countrycode: "",
        MultiLine: "",
      });
      setErrors({});
    }, 2000);
  };

  const scrollToPercent = () => {
    const scrollHeight = document.body.scrollHeight;
    const targetPosition = scrollHeight * 0.35;
    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  };

  return (
    <div className="cmp-bannerV3-container">
      <div className="cmp-bannerV3-content">
        <div className="cmp-bannerV3-text">
          <p className="cmp-bannerV3-orange-text">{banner?.title}</p>
          <p className="cmp-bannerV3-white-text">
            {banner?.description?.split(".")[0]}
          </p>
        </div>
        <div className="cmp-bannerV3-image">
          <div className="cmp-bannerV3-image-background"></div>
          <div className="bannerV3-video-wrapper">
            <img
              src={eqiqImagesCollection[3]?.url}
              className="bannerV3-thumbnail"
              onClick={() => {
                setVideoSrc(banner?.url);
                setIsModalOpen(true);
                setTimeout(() => videoRef.current?.play(), 100);
              }}
              alt="Fusion Video Thumbnail"
            />
            <button
              className="bannerV3-play-btn"
              onClick={() => {
                setVideoSrc(banner?.url);
                setIsModalOpen(true);
                setTimeout(() => videoRef.current?.play(), 100);
              }}
            >
              <svg className="play-button" viewBox="0 0 200 200">
                <circle
                  cx="100"
                  cy="100"
                  r="90"
                  fill="#333"
                  fillOpacity="0.6"
                />
                <polygon points="70, 55 70, 145 145, 100" fill="white" />
              </svg>
            </button>
            <div className="cmp-bannerV3-overlay-box">
              <svg className="progress-circle" viewBox="0 0 36 36">
                <defs>
                  <linearGradient
                    id="circleGradient"
                    x1="1"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="0%" stopColor="#f7941d" />
                    <stop offset="50%" stopColor="#ec008c" />
                    <stop offset="100%" stopColor="#662d91" />
                  </linearGradient>
                </defs>
                <path
                  className="bg"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className="progress"
                  stroke="url(#circleGradient)"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  strokeDasharray="72, 100"
                />
                <text x="18" y="20.5" className="percentage">
                  72%
                </text>
              </svg>
              <div className="overlay-text">
                <span>Business-First,</span>
                <span>Value-Led Integrations</span>
              </div>
            </div>
          </div>

          {isModalOpen && (
            <div
              className="fusion-popup-overlays"
              onClick={() => setIsModalOpen(false)}
            >
              <div
                className="fusion-popup-content"
                onClick={(e) => e.stopPropagation()}
              >
                <span
                  className="fusion-popup-close-button fusion-popup-close"
                  onClick={() => {
                    videoRef.current?.pause();
                    videoRef.current.currentTime = 0;
                    setVideoSrc("");
                    setIsModalOpen(false);
                  }}
                >
                  ×
                </span>
                <video
                  id="fusion-video-player"
                  ref={videoRef}
                  src={videoSrc}
                  controls
                  autoPlay
                  disablePictureInPicture
                  onContextMenu={(e) => e.preventDefault()}
                  controlsList="nodownload"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="cmp-bannerV3-buttons">
        <button onClick={toggleForm}>Get In Touch</button>
        <div className="tech-fusion-video-btn" onClick={scrollToPercent}>
          <span>Tech Fusion Video</span>
          <img src={rightArrowIcon} alt="Arrow Down" className="arrow-img" />
        </div>
      </div>

      {showForm && (
        <div className="signup-modal">
          <form
            className="signup-content"
            action="https://forms.zohopublic.in/dluxtech/form/LandingpageWorkfontFusion/formperma/tc3jsnNkK-fJu9OAvEseHdK0yFgBw16G2PjtyaX9KTc/htmlRecords/submit"
            method="POST"
            acceptCharset="UTF-8"
            encType="multipart/form-data"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="zf_referrer_name" value="" />
            <input type="hidden" name="zf_redirect_url" value="" />
            <input type="hidden" name="zc_gad" value="" />

            <span className="close-btns" onClick={toggleForm}>
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
                name="Name_First"
                value={formData.Name_First}
                onChange={handleChange}
                placeholder="First Name"
                maxLength="100"
              />
            </div>
            {errors.Name_First && (
              <p className="error-msg">{errors.Name_First}</p>
            )}

            {/* HIDDEN Last Name */}
            <input type="hidden" name="Name_Last" value="DLUX" />

            <div className="contact-input-group">
              <img src={icon2} alt="email" className="contact-input-icon" />
              <input
                type="email"
                name="Email"
                value={formData.Email}
                onChange={handleChange}
                placeholder="Your Email"
                maxLength="100"
                required
              />
            </div>
            {errors.Email && <p className="error-msg">{errors.Email}</p>}

            <div className="contact-input-group">
              <img src={icon4} alt="phone" className="contact-input-icon" />
              <input
                type="text"
                name="PhoneNumber_countrycode"
                value={formData.PhoneNumber_countrycode}
                onChange={handleChange}
                placeholder="Your Phone Number"
                maxLength="20"
              />
            </div>
            {errors.PhoneNumber_countrycode && (
              <p className="error-msg">{errors.PhoneNumber_countrycode}</p>
            )}

            <div className="contact-input-group">
              <img src={icon3} alt="message" className="contact-input-icon" />
              <textarea
                name="MultiLine"
                className="custom-textarea"
                value={formData.MultiLine}
                onChange={handleChange}
                placeholder="Message"
                maxLength="300"
              />
            </div>
            {errors.MultiLine && (
              <p className="error-msg">{errors.MultiLine}</p>
            )}

            <button type="submit">SIGN ME UP!</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Banner_V3;
