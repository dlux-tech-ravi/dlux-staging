import React from "react";
import "./Image_LeftV4.css";
import { Link } from "react-router-dom";
import cap from "./imageAsset/cap.png";
import eqiq from "./imageAsset/eqiq.png";
import call from "./imageAsset/call.png";
import global from "./imageAsset/globe.png";

function Image_LeftV4({
  blogSection,
  blogTitle,
  blogDescription,
  eqiqImagesCollection = [],
}) {
  return (
    <section className="cmp-training-news-section">
      <div className="cmp-training-news-wrapper">
        <div className="cmp-news-box">
          <h2 className="cmp-news-title">{blogTitle}</h2>
          <p className="cmp-news-subtitle">{blogDescription}</p>

          {blogSection?.map((item, index) => (
            <div className="cmp-news-item" key={index}>
              <div className="cmp-news-thumbnail">
                <Link to={item.description}>
                  <img src={item?.url} alt={`Icon ${index + 1}`} />
                </Link>
              </div>
              <div className="cmp-news-meta">
                <Link to={item.description}>
                  <h6>{item.title}</h6>
                </Link>
              </div>
            </div>
          ))}

          <div className="cmp-explore-btn-wrapper">
            <Link to="/blogs">
              <button className="cmp-explore-btn">
                <span className="text">Explore More</span>
                <span className="arrow">&gt;</span>
              </button>
            </Link>
          </div>
        </div>

        {/* === Left Side Learning Card === */}

        <div
          className="cmp-training-card custom-layout"
          style={{
            backgroundImage: `url(${eqiqImagesCollection[0]?.url})`,
            backgroundPosition: "center",
          }}
        >
          <div class="card-contents">
            <h3 className="cmp-training-heading top-heading">
              Looking to master Workfront Fusion?
            </h3>

            <div className="card-content-container">
              {/* Top-Left Course Card */}
              <a
                href="https://www.dluxeqiq.com/course/adobe-workfront---fusion-course"
                target="noblank"
                rel="noopener noreferrer"
              >
                <div className="badge-card top-left">
                  <div className="badge-content">
                    <p className="badge-title">
                      Adobe Workfront : <br /> Fusion Course
                    </p>
                    <div className="badge-white-line"></div>
                    <div className="badge-stars">⭐⭐⭐⭐⭐</div>
                  </div>
                  <img
                    src={cap}
                    alt="Cap Icon"
                    className="badge-icon right-icon"
                  />
                </div>
              </a>
              {/* Top-Right Contact Card */}
              <div className="badge-card top-right">
                <a
                  href="https://www.dluxeqiq.com/#/contactus"
                  target="noblank"
                  rel="noopener noreferrer"
                >
                  <div className="badge-content contact">
                    <p className="badge-title">Connect With Us:</p>
                    <p className="badge-description">
                      <img src={call} alt="Phone" className="icon-img" />
                      +91 9498727767
                      <br />
                      <img src={global} alt="Website" className="icon-img" />
                      www.dluxeqiq.com
                    </p>
                  </div>
                </a>
              </div>

              {/* Center Instructor Image */}
              <div className="person-container">
                <img src={eqiq} alt="EqiqImage" className="eqiq-image" />
                <img
                  src={eqiqImagesCollection[1]?.url}
                  alt="Instructor"
                  className="person-image"
                />
              </div>

              {/* Bottom-Left: Online Learning */}
              <div className="badge-card bottom-left">
                <a
                  href="https://www.dluxeqiq.com/#/home"
                  target="noblank"
                  rel="noopener noreferrer"
                >
                  <p className="badge-title">Online Learning</p>
                </a>
              </div>

              {/* Bottom-Right: Enroll Now */}
              <div className="enroll-now-btn bottom-right">
                <a
                  href="https://www.dluxeqiq.com/#/signup"
                  target="noblank"
                  rel="noopener noreferrer"
                >
                  <button className="enroll-us-btn">Enroll Now</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
}

export default Image_LeftV4;
