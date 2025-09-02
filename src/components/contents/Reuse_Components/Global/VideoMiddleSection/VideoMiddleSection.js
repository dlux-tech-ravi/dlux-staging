import { useState, useEffect } from 'react';
import './VideoMiddleSection.css';


const VideoMiddleSection = ({ title, text, videoTitle, workfrontmedias }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [itemsPerPage, setItemsPerPage] = useState(2);

  useEffect(() => {
    const updateItemsPerPage = () => {
      const newItemsPerPage = window.innerWidth <= 1023 ? 1 : 2;
      setItemsPerPage(newItemsPerPage);
    };

    updateItemsPerPage();
    window.addEventListener('resize', updateItemsPerPage);

    return () => window.removeEventListener('resize', updateItemsPerPage);
  }, []);

  const totalPages = Math.ceil(workfrontmedias.length / itemsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages - 1) setCurrentPage((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (currentPage > 0) setCurrentPage((prev) => prev - 1);
  };

  const openPopup = (media) => {
    setSelectedVideo(media);
  };

  const closePopup = () => {
    setSelectedVideo(null);
  };

  const startIndex = currentPage * itemsPerPage;
  const paginatedVideos = workfrontmedias.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="video-middle-section">
      <div className="video-middle-header">
        {title && <h1>{title}</h1>}
        {text && <h2>{text}</h2>}
      </div>

      <div className="workfront-section">
        <div className="workfront-pagination-header">
          <button onClick={handlePrev} disabled={currentPage === 0} className="video-arrow-button">
            &lt;
          </button>
          {workfrontmedias?.length > 0 && (
            <h2 className="workfront-heading">{videoTitle}</h2>
          )}
          <button onClick={handleNext} disabled={currentPage === totalPages - 1} className="video-arrow-button">
            &gt;
          </button>
        </div>

        <div className="workfront-content">
          <div className="workfront-videos">
            {paginatedVideos.map((media, index) => (
              <div key={index} className="workfront-video-wrapper">
                <div className="video-thumbnail">
                    <video className="workfront-video" muted poster={media.thumbnail}>
                      <source src={media.url} type="video/mp4" />
                    </video>
                     <div className="video-ratings">
                            ★★★★★
                     </div>
                    <button className="play-button" onClick={() => openPopup(media)}>▶</button>
                </div>

                <div className="video-details">
                  {media.title && <h3>{media.title}</h3>}
                  {media.thumbnailDescription && <p className="thumbnail-desc">{media.thumbnailDescription} 🕒</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Popup */}
      {selectedVideo && (
        <div className="video-popup-overlay" onClick={closePopup}>
          <div className="video-popup" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closePopup}>×</button>
            <video controls autoPlay className="popup-video">
              <source src={selectedVideo.url} type="video/mp4" />
            </video>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoMiddleSection;
