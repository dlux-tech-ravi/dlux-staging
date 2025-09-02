import React, { useEffect, useState } from "react";
import "./Image_LeftV1.css";
import icon1 from "./imageAsset/icon-1.png";
import icon2 from "./imageAsset/icon-2.png";
function Image_LeftV1({ imageLeft, content1, content2 }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const content = [
    {
      text: <>{content1}</>,
      icon: icon1,
    },
    {
      text: <>{content2}</>,
      icon: icon2,
    },
  ];

  return (
    <div className="cmp-ecosystem-container">
      <div className="cmp-ecosystem">
        <div className="cmp-ecosystem-left">
          <div className="cmp-image-wrapper">
            <svg
              className="cmp-bottom-curve"
              viewBox="0 0 200 100"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path
                d="M0,20 C50,100 150,0 200,80"
                stroke="#FF5A1F"
                strokeWidth="4"
                fill="none"
              />
            </svg>

            <img
              src={imageLeft?.url}
              alt="Tech Ecosystem"
              className="cmp-main-image"
            />
            <div className="cmp-overlay">
              <div className="cmp-overlay-card">
                <div key={activeIndex} className="cmp-overlay-content fade-in">
                  <img
                    src={content[activeIndex].icon}
                    alt="Icon"
                    className="cmp-icon"
                  />
                  <p className="cmp-overlay-text">
                    {content[activeIndex].text}
                  </p>
                </div>
                <div className="cmp-card-dots">
                  {content.map((_, index) => (
                    <span
                      key={index}
                      className={`dot ${activeIndex === index ? "filled" : ""}`}
                      onClick={() => setActiveIndex(index)}
                    ></span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="cmp-ecosystem-right">
          <div className="cmp-heading">
            <p>{imageLeft?.title?.split(".")[0]}</p>
            <p>{imageLeft?.title?.split(".")[1]}</p>
          </div>
          <p className="cmp-description">
            {imageLeft?.description?.split(".")[0] +
              ". " +
              imageLeft?.description?.split(".")[1] +
              "."}
          </p>
          <p className="cmp-description">
            {imageLeft?.description?.split(".")[2] + ". "}
          </p>
        </div>
      </div>
    </div>
  );
}
export default Image_LeftV1;
