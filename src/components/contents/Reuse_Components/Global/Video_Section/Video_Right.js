import React, { useState, useEffect } from "react";
import "./Video_Right.css";

const Video_Right = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [closing, setClosing] = useState(false);
  const [videoItems, setVideoItems] = useState([]);

  const handleClose = () => {
    setClosing(true);
    const video = document.getElementById("video-right-player");
    if (video) video.pause();

    setTimeout(() => {
      setShowPopup(false);
      setClosing(false);
    }, 400);
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") handleClose();
    };
    if (showPopup) {
      window.addEventListener("keydown", handleEscape);
    } else {
      window.removeEventListener("keydown", handleEscape);
    }
    return () => window.removeEventListener("keydown", handleEscape);
  }, [showPopup]);

  useEffect(() => {
    const fetchVideoData = async () => {
      const query = `
        {
          platformAdobeCommerces(id: "231JBLMJLXr5L3FUHFNGEI") {
            adobeCommerceRightVideoCollection {
              items {
                title
                description
                url
              }
            }
          }
        }
      `;

      try {
        const response = await fetch(
          "https://graphql.contentful.com/content/v1/spaces/pj0maraabon4/environments/production",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization:
                "Bearer 6t-wgSsZnD80bBuG3_VNcGKE0lF-LAE7EPa5NE286HU",
            },
            body: JSON.stringify({ query }),
          }
        );

        const { data } = await response.json();
        const items =
          data?.platformAdobeCommerces?.adobeCommerceRightVideoCollection
            ?.items;

        console.log("Fetched items:", items); // Debug

        if (items && items.length > 0) {
          setVideoItems(items);
        }
      } catch (error) {
        console.error("Failed to fetch video data:", error);
      }
    };

    fetchVideoData();
  }, []);

  const thumbnailVideo = videoItems[0]; // First video
  const modalVideo = videoItems[1]; // Second video

  return (
    <>
      <section className="video-right_block">
        <div className="video-right_content">
          <h2 className="video-right_title">
            {thumbnailVideo?.title || "No Title Found"}
          </h2>
          <p className="video-right_description">
            {thumbnailVideo?.description || "No Description Available"}
          </p>
          <div className="video-right_buttons">
            <button className="video-right_btn primary">Read More</button>
            <button className="video-right_btn secondary">Learn More</button>
          </div>
        </div>

        <div className="video-right_video">
          <div
            className="video-right_video-box"
            onClick={() => setShowPopup(true)}
          >
            <img
              src={thumbnailVideo?.url || "default-thumbnail.jpg"}
              alt="Video Thumbnail"
              className="video-right_thumbnail"
              width="100%"
            />
            <span className="video-right_play-button">
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
            </span>
          </div>
        </div>
      </section>

      {showPopup && (
        <div
          className={`video-right_popup-overlay ${
            closing ? "slide-close" : ""
          }`}
        >
          <div className="video-right_popup-content">
            <button className="video-right_popup-close" onClick={handleClose}>
              ×
            </button>
            <video
              id="video-right-player"
              controls
              autoPlay
              src={
                modalVideo?.url || "https://www.w3schools.com/html/mov_bbb.mp4"
              }
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Video_Right;
