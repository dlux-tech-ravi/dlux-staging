import React, { useEffect, useRef, useState } from "react";
import "./Adobe_Commerce_Video.css";
import image1 from "./Video_Assets/thumbmail1.png";
import image2 from "./Video_Assets/thumbmail2.png";
import image3 from "./Video_Assets/thumbmail3.png";

const videos = [
  {
    id: 1,
    title: "Video 1",
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    thumbnail: image1,
  },
  {
    id: 2,
    title: "Video 2",
    src: "https://www.w3schools.com/html/movie.mp4",
    thumbnail: image2,
  },
  {
    id: 3,
    title: "Video 3",
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    thumbnail: image3,
  },
];

const AdobeCommerceVideo = () => {
  const scrollRef = useRef(null);
  const scrollAnimationRef = useRef(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videoContent, setVideoContent] = useState(null);

  const scroll = () => {
    const container = scrollRef.current;
    if (!container) return;

    container.scrollLeft += 0.5;
    const maxScroll = container.scrollWidth / 2;

    if (container.scrollLeft >= maxScroll) {
      container.scrollLeft = 0;
    }

    scrollAnimationRef.current = requestAnimationFrame(scroll);
  };

  const stopScroll = () => cancelAnimationFrame(scrollAnimationRef.current);
  const resumeScroll = () =>
    (scrollAnimationRef.current = requestAnimationFrame(scroll));

  useEffect(() => {
    resumeScroll();
    return () => stopScroll();
  }, []);

  useEffect(() => {
    document.body.style.overflow = selectedVideo ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedVideo]);

  const handleClick = (video) => {
    stopScroll();
    setSelectedVideo(video);
  };

  const closeModal = () => {
    setSelectedVideo(null);
    resumeScroll();
  };

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch(
          "https://graphql.contentful.com/content/v1/spaces/pj0maraabon4/environments/production",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer 6t-wgSsZnD80bBuG3_VNcGKE0lF-LAE7EPa5NE286HU`,
            },
            body: JSON.stringify({
              query: `
                {
                  platformAdobeCommerces(id: "231JBLMJLXr5L3FUHFNGEI") {
                    adobeCommerceVideoLibraryContent {
                      title
                      description
                      url
                    }
                  }
                }
              `,
            }),
          }
        );

        const json = await response.json();
        const content =
          json?.data?.platformAdobeCommerces?.adobeCommerceVideoLibraryContent;

        setVideoContent(content);
      } catch (error) {
        console.error("Error fetching Contentful data:", error);
      }
    };

    fetchContent();
  }, []);

  return (
    <section className="commerce-video-library-section">
      <h2 className="commerce-main-title">Adobe Commerce Video Library</h2>

      <div className="commerce-video-library-wrapper">
        {videoContent?.title && (
          <h3 className="commerce-video-subtitle">{videoContent.title}</h3>
        )}
        {videoContent?.description && (
          <p className="commerce-video-description">
            {videoContent.description}
          </p>
        )}

        <div
          className="commerce-video-scroll-container"
          ref={scrollRef}
          onMouseEnter={stopScroll}
          onMouseLeave={resumeScroll}
        >
          {[...videos, ...videos].map((video, index) => (
            <div
              className="commerce-video-card"
              key={`${video.id}-${index}`}
              onClick={() => handleClick(video)}
            >
              <div className="commerce-thumbnail">
                <img
                  src={video.thumbnail}
                  alt={`Thumbnail for ${video.title}`}
                  className="commerce-thumbnail-img"
                />
                <div className="commerce-badge">
                  <span>⭐ 4.0</span>
                  <span>❤️ 1.5 M</span>
                </div>
              </div>

              <div className="commerce-card-footer">
                <div className="commerce-video-info">
                  <h4>{video.title}</h4>
                  <p>Sub Content</p>
                </div>
                <div className="commerce-play-btn">
                  <svg className="play-button" viewBox="0 0 200 200">
                    <circle
                      cx="100"
                      cy="100"
                      r="90"
                      fill="#333"
                      fillOpacity="0.6"
                    />
                    <polygon points="70,55 70,145 145,100" fill="white" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedVideo && (
        <div className="commerce-video-modal" onClick={closeModal}>
          <div
            className="commerce-video-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="commerce-closes-btn" onClick={closeModal}>
              ×
            </button>
            <div className="commerce-video-frame">
              <video
                controls
                autoPlay
                playsInline
                muted
                className="commerce-modal-video"
              >
                <source src={selectedVideo.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AdobeCommerceVideo;
