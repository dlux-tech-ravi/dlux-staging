import React, { useState, useRef, useEffect, useCallback } from "react";
import "./Image_LeftV3.css";
import leftArrowIcon from "./imageAsset/left.png";
import rightArrowIcon from "./imageAsset/right.png";
import customIcon from "./imageAsset/1000.png";
import { Link } from "react-router-dom";

function Image_LeftV3({
  fusionStaticVideos = [],
  fusionStaticThumbmail = [],
  fusionVideos = [],
  fusionVideosThumbmail = [],
  fusionStaticContent,
}) {
  const [videoSrc, setVideoSrc] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const videoRef = useRef(null);
  const scrollRef = useRef(null);
  const staticVideos = fusionStaticVideos[0];
  const staticThumbnail = fusionStaticThumbmail[0];

  const mergedVideos = [];
  for (let i = 0; i < fusionVideos.length; i++) {
    const video = fusionVideos[i];
    const thumbnail = fusionVideosThumbmail[i];

    if (video && thumbnail) {
      mergedVideos.push({
        title: video.title,
        videoUrl: video.url,
        thumbnailUrl: thumbnail.url,
      });
    }
  }

  const totalItems = mergedVideos.length;

  const getCardDimensions = useCallback(() => {
    const container = scrollRef.current;
    if (!container) return { cardWidth: 0, gap: 0 };

    const firstCard = container.querySelector(".fusion-card");
    if (!firstCard) return { cardWidth: 0, gap: 0 };

    const cardWidth = firstCard.offsetWidth;
    const style = getComputedStyle(container);
    const gap = parseFloat(style.getPropertyValue("gap")) || 16;

    return { cardWidth, gap };
  }, []);

  const updateArrowVisibility = useCallback(() => {
    const container = scrollRef.current;
    if (!container) return;

    const { scrollLeft, scrollWidth, clientWidth } = container;

    setShowLeftArrow(scrollLeft > 0);
    setShowRightArrow(scrollLeft + clientWidth < scrollWidth - 1);
  }, []);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container || totalItems === 0) return;
    container.scrollTo({ left: 0, behavior: "instant" });
    updateArrowVisibility();
    container.addEventListener("scroll", updateArrowVisibility);
    return () => container.removeEventListener("scroll", updateArrowVisibility);
  }, [totalItems, updateArrowVisibility]);

  const openVideo = (src) => {
    setVideoSrc(src);
    setIsModalOpen(true);
    setTimeout(() => videoRef.current?.play(), 100);
  };

  const closeVideo = () => {
    const overlay = document.querySelector(".fusion-popup-overlay");
    const closeButton = document.querySelector(".fusion-popup-close-button");

    if (overlay) {
      closeButton?.classList.add("closing");
      overlay.classList.add("slide-close");

      setTimeout(() => {
        videoRef.current?.pause();
        videoRef.current.currentTime = 0;
        setVideoSrc("");
        setIsModalOpen(false);
        overlay.classList.remove("slide-close");
        closeButton?.classList.remove("closing");
      }, 400);
    }
  };

  const scrollVideos = (direction) => {
    const container = scrollRef.current;
    if (!container || totalItems === 0) return;

    const { cardWidth, gap } = getCardDimensions();
    if (cardWidth === 0) return;

    const scrollStep = cardWidth + gap;
    const newScroll =
      direction === "right"
        ? container.scrollLeft + scrollStep
        : container.scrollLeft - scrollStep;

    container.scrollTo({
      left: newScroll,
      behavior: "smooth",
    });

    setTimeout(updateArrowVisibility, 300);
  };

  if (
    mergedVideos.length === 0 &&
    (!fusionStaticVideos[0] || fusionStaticVideos.length === 0)
  ) {
    return (
      <div className="fusion-grid">
        <p
          style={{ color: "white", textAlign: "center", gridColumn: "1 / -1" }}
        >
          No carousel items to display.
        </p>
      </div>
    );
  }

  return (
    <div className="fusion-grid">
      {fusionStaticVideos[0] && (
        <div className="fusion-card fusion-card1">
          <div className="fusion-video-wrapper">
            <img
              src={staticThumbnail.url}
              className="fusion-thumbnail"
              onClick={() => openVideo(staticVideos.url)}
              alt="Static Video Thumbnail"
            />
            <button
              className="fusion-play-btn"
              onClick={() => openVideo(staticVideos.url)}
            >
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
            </button>
          </div>

          <h3>{staticVideos.title}</h3>
        </div>
      )}

      <div className="fusion-right">
        <h2 className="fusion-heading">{fusionStaticContent.split(".")[0]}</h2>
        <p className="fusion-description">
          {fusionStaticContent.split(".")[1] + "."}
        </p>
        <p className="fusion-description">
          {fusionStaticContent.split(".")[2] + "."}
        </p>
        <br />
        <Link to="/video-library">
          <button className="arrow-button">
            <span className="text">Explore More</span>
            <span className="arrow">&gt;</span>
          </button>
        </Link>
      </div>

      <div className="fusion-carousel-wrapper">
        <div className="fusion-carousel-scroll" ref={scrollRef}>
          {mergedVideos.map((item, index) => (
            <div key={index} className="fusion-card">
              <div className="fusion-video-wrapper">
                <img
                  src={item.thumbnailUrl}
                  className="fusion-thumbnail"
                  onClick={() => openVideo(item.videoUrl)}
                  alt={item.title}
                />
                <button
                  className="fusion-play-btn"
                  onClick={() => openVideo(item.videoUrl)}
                >
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
                </button>
              </div>
              <h3>{item.title}</h3>
            </div>
          ))}
        </div>

        <div className="fusion-carousel-arrows">
          {showLeftArrow && (
            <button onClick={() => scrollVideos("left")}>
              <img
                src={leftArrowIcon}
                alt="Previous"
                className="carousel-arrow-icon"
              />
            </button>
          )}
          {showRightArrow && (
            <button onClick={() => scrollVideos("right")}>
              <img
                src={rightArrowIcon}
                alt="Next"
                className="carousel-arrow-icon"
              />
            </button>
          )}
        </div>
      </div>

      {isModalOpen && (
        <div className="fusion-popup-overlay" onClick={closeVideo}>
          <div
            className="fusion-popup-content"
            onClick={(e) => e.stopPropagation()}
          >
            <span
              className="fusion-popup-close-button fusion-popup-close"
              onClick={closeVideo}
            >
              ×
            </span>
            <video
              id="fusion-video-player"
              ref={videoRef}
              src={videoSrc}
              controls
              autoPlay
              controlsList="nodownload"
              onContextMenu={(e) => e.preventDefault()}
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </div>
  );
}

export default Image_LeftV3;