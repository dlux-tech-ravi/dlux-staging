import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./HomeFooter.css";
import instaicon from "./instaicon.png";
import lnkldnicon from "./lnkldnicon.png";
import locicon from "./locicon.png";
import utubeicon from "./utubeicon.png";
import xicon from "./xicon.png";
import fbicon from "./fbicon.png";
import cmpnylogo from "./Mask Group 284.svg";
import globefooter from "./Globefooter.png";

const HomeFooter = () => {
  const [showPopup, setShowPopup] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowPopup(true);
        window.removeEventListener("scroll", handleScroll);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // LinkedIn script started
    // LinkedIn partner ID
    const partnerId = "6161826";

    // Add LinkedIn partner ID to the global window object
    window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
    window._linkedin_data_partner_ids.push(partnerId);

    // Function to load LinkedIn script
    const loadLinkedInScript = () => {
      (function (l) {
        if (!l) {
          window.lintrk = function (a, b) {
            window.lintrk.q.push([a, b]);
          };
          window.lintrk.q = [];
        }
        const s = document.getElementsByTagName("script")[0];
        const b = document.createElement("script");
        b.type = "text/javascript";
        b.async = true;
        b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
        s.parentNode.insertBefore(b, s);
      })(window.lintrk);
    };

    // Load the LinkedIn script
    loadLinkedInScript();

    // Cleanup function to remove script if needed (not typically necessary for this use case)
    return () => {
      // Remove the LinkedIn script if needed
      const script = document.querySelector(
        'script[src="https://snap.licdn.com/li.lms-analytics/insight.min.js"]'
      );
      if (script) {
        script.remove();
      }
    };
  }, []); // LinkedIn script ended

  return (
    <div className="hfooter-container">
      <div className="hfooterl1">
        <div className="hfooter-icon-logo-wrap">
          <div className="hfooter-logo">
            <img src={cmpnylogo} alt="cmpnylogo" />
          </div>

          <div className="hfooter-icons">
            <Link to="https://www.linkedin.com/company/dlux-tech-corp">
              <img src={lnkldnicon} alt="lnkldnicon" />
            </Link>
            <Link to="https://twitter.com/Dlux_Tech">
              <img src={xicon} alt="xicon" />
            </Link>
            <Link to="https://www.youtube.com/@DLUXTECH">
              <img src={utubeicon} alt="utubeicon" />
            </Link>
            <Link to="https://www.facebook.com/DLUXTech/">
              <img src={fbicon} alt="fbicon" />
            </Link>
            <Link to="https://www.instagram.com/dlux_tech/">
              <img src={instaicon} alt="instaicon" />
            </Link>
          </div>
        </div>

        <div className="popup-wrap-animations">
          <div className="tezt1">
            <div className="hfooterl1-c1">
              <div className="globe-footer-wrap">
                <img src={globefooter} alt="sampleglobe" />
              </div>

              <div className="popup-test2">
                {showPopup && (
                  <div className="popup-container1">
                    <div className="popup-image1">
                      <img src={locicon} alt="Popup Image" />
                    </div>
                    <div className="vertical-line1"></div>
                    <div className="popup-text1">
                      <p>HQ</p>
                      <p style={{ color: "#FE780C" }}>Sydney, Australia</p>
                    </div>
                  </div>
                )}
              </div>

              {showPopup && (
                <div className="popup-container2">
                  <div className="popup-image2">
                    <img src={locicon} alt="Popup Image" />
                  </div>
                  <div className="vertical-line2"></div>
                  <div className="popup-text2">
                    <p>Offshore Delivery</p>
                    <p style={{ color: "#FE780C" }}>Coimbatore, India</p>
                  </div>
                </div>
              )}

              {/* {showPopup && (
        <div className="popup-container3">
          <div className="popup-image3">
        <img src={locicon} alt="Popup Image3" />
      </div>
      <div className="vertical-line3"></div>
      <div className='popup-text3'>
        <p>Offshore Delivery</p>
        <p style={{ color: '#FE780C' }}>Utah, United States</p>
      </div>
    </div>
      )} */}
            </div>
          </div>
        </div>

        <div className="hfooterl2">
          <div className="hfooterl2-services_about">
            <div className="hfooterl2-c1">
              <Link to="/services">
                {" "}
                <h3>Services</h3>
              </Link>
              <Link to="/digital-martech-consulting">
                {" "}
                <p>Digital and Martech Consulting</p>
              </Link>
              <Link to="/managed-application-services">
                <p>Managed Application Services</p>
              </Link>
              <Link to="/content-management-dam">
                <p>Content Management and DAM</p>
              </Link>
              <Link to="/training-change-management">
                <p>Training and Change Management</p>
              </Link>
            </div>

            <div className="hfooterl2-c2">
              <Link to="/About-Us">
                <h3>About us</h3>
              </Link>
              <Link to="/our-growth-story">
                <p>Our Growth Story</p>
              </Link>
              <Link to="/ourteam">
                <p>Our Team</p>
              </Link>
              <Link to="/partners">
                <p>Partners</p>
              </Link>
              <Link to="/careers">
                <p>Careers</p>
              </Link>
              <Link to="/contact-us">
                <p>Contact us</p>
              </Link>
            </div>
          </div>

          <div className="hfooterl2-Platform_Resources">
            <div className="hfooterl2-c3">
              <Link to="">
                <h3>Platform</h3>
              </Link>
              <Link to="/adobe-workfront">
                <p>Adobe Workfront</p>
              </Link>
              <Link to="/adobe-aem">
                <p>AEM</p>
              </Link>
              <Link to="/salesforce">
                <p>Salesforce</p>
              </Link>
              <Link to="/aprimo">
                <p>Aprimo</p>
              </Link>
              <Link to="/Dataiku">
                <p>Dataiku</p>
              </Link>
            </div>

            <div className="hfooterl2-c4">
              <Link to="">
                {" "}
                <h3>Resources</h3>
              </Link>
              <Link to="/blogs">
                <p>Blogs</p>
              </Link>
              <Link to="/success-stories">
                <p>Case Studies</p>
              </Link>
              <Link to="">
                {" "}
                <p>Life@DLUX</p>
              </Link>
            </div>
          </div>

          <div className="hfooterl2-Policies">
            <div className="hfooterl2-c5">
              <h3>Policies</h3>
              <Link to="/privacy-policy">
                <p>Privacy Policy</p>
              </Link>
              <Link to="/cookie-policy">
                <p>Cookie Policy</p>
              </Link>
              <Link to="/trust-policy">
                <p>Trust & Security</p>
              </Link>
            </div>
          </div>
        </div>

        <div className="hfooterl3">
          <p>Copyright © 2024 DLUX TECH CORP PTY LTD - All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default HomeFooter;
