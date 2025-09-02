import React, { useEffect, useState } from "react";
import "./Adobe_Commerce_Video_V1.css";
import image1 from "./Video_Assets/thumbmail1.png";
import image2 from "./Video_Assets/thumbmail2.png";
import image3 from "./Video_Assets/thumbmail3.png";

const videoCards = [
  {
    title: "One Day",
    category: "Family, Coming of Age",
    videoUrl: "video1.mp4",
    thumbnail: image1,
  },
  {
    title: "Adventure Time",
    category: "Adventure, Fantasy",
    videoUrl: "video2.mp4",
    thumbnail: image2,
  },
  {
    title: "Mystery Night",
    category: "Mystery, Thriller",
    videoUrl: "video3.mp4",
    thumbnail: image3,
  },
];

const Adobe_Commerce_Video_V1 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(null);
  const [popupVideo, setPopupVideo] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      goToNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const openVideo = (videoUrl) => {
    setPopupVideo(videoUrl);
  };

  const closePopup = () => {
    setPopupVideo(null);
  };

  const goToNext = () => {
    setPrevIndex(currentIndex);
    setCurrentIndex((prev) => (prev + 1) % videoCards.length);
  };

  const goToPrev = () => {
    setPrevIndex(currentIndex);
    setCurrentIndex((prev) =>
      (prev - 1 + videoCards.length) % videoCards.length
    );
  };

  return (
    <div className="commerce-video-v1-container">
      <h1>
        Behind Every Workflow, There's a Story!
      </h1>
      <p className="commerce-subtitle">Real guidance from the tech architects who build smarter systems. <br />
      See how top-tier strategy, platform knowledge, and innovation come together to drive results. 
      </p>

      <div className="commerce-video-swipe-wrapper">
        {/* {videoCards.length > 1 && (
          <>
            <button className="commerce-arrow left" onClick={goToPrev}>
              ◀
            </button>
            <button className="commerce-arrow right" onClick={goToNext}>
              ▶
            </button>
          </>
        )} */}

        {videoCards.map((card, index) => {
          let className = "commerce-video-card-swipe";
          if (index === currentIndex) className += " enter";
          else if (index === prevIndex) className += " exit";
          else className += " hidden";

          return (
            <div
              className={className}
              key={index}
              onClick={() => openVideo(card.videoUrl)}
            >
              <div className="commerce-video-thumbnail">
                <img
                  src={card.thumbnail}
                  alt={card.title}
                  className="commerce-video-thumb-img"
                />
              </div>
              <div className="commerce-video-footer">
                <span className="commerce-category">{card.category}</span>
                <div className="commerce-footer-bottom">
                  <h2>{card.title}</h2>
                  <div className="commerce-play-btn">
                    <svg
                      className="play-button"
                      viewBox="0 0 200 200"
                      alt="Play video"
                    >
                      <circle
                        cx="100"
                        cy="100"
                        r="90"
                        fill="#333"
                        fillOpacity="0.6"
                      />
                      <polygon points="70, 55 70, 145 145, 100" fill="white" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {popupVideo && (
        <div className="commerce-video-popup-overlay" onClick={closePopup}>
          <div
            className="commerce-video-popup-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="commerce-closed-btn" onClick={closePopup}>
              ✖
            </button>
            <video src={popupVideo} autoPlay controls />
          </div>
        </div>
      )}
    </div>
  );
};

export default Adobe_Commerce_Video_V1;
