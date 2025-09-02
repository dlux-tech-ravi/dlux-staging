import React, { useRef, useState } from 'react';
import './Image_Left_V5.css';

const Image_Left_V5 = ({ videoUrl, description, poster }) => {
  const videoRef = useRef(null);
  const popoutVideoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleVideoClick = () => {
    if (!isPlaying) {
      setIsPlaying(true);
      // Play popout video when it appears
      setTimeout(() => {
        if (popoutVideoRef.current) {
          popoutVideoRef.current.play();
        }
      }, 0);
    } else {
      // Pause and reset popout video
      if (popoutVideoRef.current) {
        popoutVideoRef.current.pause();
        popoutVideoRef.current.currentTime = 0;
      }
      setIsPlaying(false);
    }
  };

  // When popout video ends, close popout
  const handlePopoutEnded = () => {
    setIsPlaying(false);
  };

  return (
    <div className="cmp-video-left_wrapper">
      <div className="cmp-video-container">
        {!isPlaying && (
          <div
            className="play-button-overlay"
            onClick={handleVideoClick}
            role="button"
            aria-label="Play video"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') handleVideoClick();
            }}
          >
            <div className="play-button-icon">▶</div>
          </div>
        )}
        <video
          ref={videoRef}
          poster={poster}
          className="cmp-video-left-videos"
          controls={false}
          onClick={handleVideoClick}
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="cmp-video-left_description">
        <p>{description}</p>
        <p>
          Whether you're <span>launching</span>, scaling, or replatforming, our
          expertise and <span>rapid deployment</span> accelerators ensure
          cost-effective, unified commerce solutions for
          <span> optimized customer journeys</span>.
        </p>
      </div>

      {/* Popout video overlay */}
      {isPlaying && (
        <>
          <div className="overlay-bg" onClick={handleVideoClick} />
          <div className="popout-video-wrapper" onClick={handleVideoClick}>
            <video
              ref={popoutVideoRef}
              className="popout-video"
              onEnded={handlePopoutEnded}
              controls
              autoPlay
              muted={false}
            >
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </>
      )}
    </div>
  );
};

export default Image_Left_V5;
