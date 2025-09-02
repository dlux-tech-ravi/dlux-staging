import React, { useState, useEffect } from "react";
import "./Testimonial_V1.css";
import images1 from "./Testimonial_Asset/thumbmail.jpg";

const Testimonial_V1 = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [closing, setClosing] = useState(false);
  const [activeVideo, setActiveVideo] = useState(null);

  const openPopup = (videoUrl) => {
    setActiveVideo(videoUrl);
    setShowPopup(true);
  };

  const handleClose = () => {
    setClosing(true);
    const video = document.getElementById("testimonial-v1-video-player");
    if (video) video.pause();

    setTimeout(() => {
      setShowPopup(false);
      setClosing(false);
      setActiveVideo(null);
    }, 400);
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") handleClose();
    };
    if (showPopup) {
      window.addEventListener("keydown", handleEscape);
    }
    return () => window.removeEventListener("keydown", handleEscape);
  }, [showPopup]);

  const testimonialData = [
    { name: "John Doe", desc: "DLUX Tech transformed our ecommerce platform..." },
    { name: "Jane Smith", desc: "Exceptional service and scalability!" },
    { name: "Sam Wilson", desc: "Reliable and professional team!" },
  ];

  return (
    <section className="testimonial-v1-section">
      <div className="testimonial-v1-wrapper">
        {testimonialData.map((item, index) => (
          <div
            className="testimonial-v1-card"
            key={index}
            onClick={() =>
              openPopup("https://www.w3schools.com/html/mov_bbb.mp4")
            }
          >
            <div className="testimonial-v1-thumbnail-box">
              <img
                src={images1}
                alt={item.name}
                className="testimonial-v1-thumbnail"
              />

              <button className="testimonial-v1-play-button">
                <svg
                  className="play-button"
                  viewBox="0 0 200 200"
                  aria-label="Play video"
                >
                  <circle
                    cx="100"
                    cy="100"
                    r="90"
                    fill="#333"
                    fillOpacity="0.6"
                  />
                  <polygon points="70,55 70,145 145,100" fill="white" />
                </svg>
              </button>

              <div className="testimonial-v1-content">
                <h3>{item.name}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showPopup && (
        <div
          className={`testimonial-v1-modal ${closing ? "slide-close" : ""}`}
          onClick={handleClose}
        >
          <div
            className="testimonial-v1-modal-inner"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="testimonial-v1-close" onClick={handleClose}>
              ×
            </button>
            <video
              id="testimonial-v1-video-player"
              className="testimonial-v1-video"
              controls
              autoPlay
              src={activeVideo}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Testimonial_V1;
