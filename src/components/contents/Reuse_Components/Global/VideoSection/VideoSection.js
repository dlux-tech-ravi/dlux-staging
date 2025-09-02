import React, { useState, useEffect, useRef } from 'react';
import './VideoSection.css';

const VideoSection = ({ videos = [], thumbnails = [] }) => {
  const [centerIndex, setCenterIndex] = useState(Math.floor(videos.length / 2));
  const [playingIndex, setPlayingIndex] = useState(null);

  const containerRef = useRef(null);
  const videoRefs = useRef([]);

  useEffect(() => {
    if (!containerRef.current || !videoRefs.current.length) return;

    videoRefs.current.forEach((el, i) => {
      const video = el?.querySelector('video');
      if (video) {
        video.pause();
        video.currentTime = 0;
      }
    });

    const container = containerRef.current;
    const selected = videoRefs.current[centerIndex];

    if (selected) {
      const containerWidth = container.offsetWidth;
      const selectedLeft = selected.offsetLeft;
      const selectedWidth = selected.offsetWidth;

      const scrollTo = selectedLeft - containerWidth / 2 + selectedWidth / 2;

      container.scrollTo({
        left: scrollTo,
        behavior: 'smooth',
      });
    }

    setPlayingIndex(null);
  }, [centerIndex]);

  const handlePlayClick = (index) => {
    setCenterIndex(index);
    setPlayingIndex(index);
    setTimeout(() => {
      const video = videoRefs.current[index]?.querySelector('video');
      if (video) {
        video.play();
      }
    }, 50);
  };

  return (
    <div className="video-section">
      <div className="video-section__content">
        <h1 className="video-section__head">DLUX CoE Video Vault</h1>
        <p className="video-section__para">
          Watch real solutions unfold - with video walkthroughs across Adobe Workfront, Fusion, DAM, Salesforce, and more.
        </p>
      </div>

      <div className="video-section__videos-wrapper" ref={containerRef}>
        <div className="video-section__videos">
          {videos.map((video, index) => {
            const positionClass =
              index === centerIndex
                ? 'video-center'
                : index < centerIndex
                ? 'video-side left'
                : 'video-side right';

            const isCenter = index === centerIndex;
            const isPlaying = playingIndex === index;

            return (
              <div
                key={index}
                className={`video-box ${positionClass}`}
                ref={(el) => (videoRefs.current[index] = el)}
                onClick={() => {
                  if (!isPlaying) handlePlayClick(index);
                }}
              >
                {isCenter ? (
  !isPlaying ? (
    <div
      className="video-thumbnail-wrapper"
      onClick={() => handlePlayClick(index)}
      style={{ cursor: 'pointer' }}
    >
      <img
        src={thumbnails[index]?.url}
        alt="video thumbnail"
        className="video-section-thumbnail"
      />
      <div className="play-button-overlay">▶</div>
    </div>
  ) : (
    <video
      controls
      playsInline
      muted={false}
      poster={thumbnails[index]?.url}
      preload="auto"
      className="video-active"
    >
      <source
        src={video.url.startsWith('http') ? video.url : `https:${video.url}`}
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video>
  )
) : (
  <div className="video-thumbnail-wrapper">
    <img
      src={thumbnails[index]?.url}
      alt="video thumbnail"
      className="video-section-thumbnail"
    />
  </div>
)}

              </div>
            );
          })}
        </div>
      </div>

      <div className="video-pagination">
        {videos.map((_, index) => (
          <span
            key={index}
            className={`video-pagination__dot ${index === centerIndex ? 'active' : ''}`}
            onClick={() => setCenterIndex(index)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                setCenterIndex(index);
              }
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default VideoSection;
