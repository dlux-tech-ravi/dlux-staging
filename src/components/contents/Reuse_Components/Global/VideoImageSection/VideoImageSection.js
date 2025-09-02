import React, { useState, useEffect } from 'react';
import './VideoImageSection.css';
import Bookmark from './VideoImageSection_Assets/bookmark.png';
import Quotation from './VideoImageSection_Assets/quotation.png';
import Client1 from './VideoImageSection_Assets/client1.png';
import Client2 from './VideoImageSection_Assets/client2.png';
import Client3 from './VideoImageSection_Assets/client3.png';

const commentsData = [
  {
    id: 1,
    icon: Client1,
    title: "Tremendous Job Team",
    body: "Really impressed with the UI responsiveness and code clarity application are.",
    author: "John Doe",
  },
  {
    id: 2,
    icon: Client2,
    title: "Great Execution!",
    body: "The team delivered the project on time and exceeded expectations.",
    author: "Jane Smith",
  },
  {
    id: 3,
    icon: Client3,
    title: "Clean Codebase",
    body: "Loved how modular and clean the architecture is tested with all the benefits.",
    author: "Carlos Rivera",
  },
];

const VideoImageSection = ({ title, stitle, images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % commentsData.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const getVisibleIcons = () => {
    const total = commentsData.length;
    const prev = (activeIndex - 1 + total) % total;
    const next = (activeIndex + 1) % total;
    return [commentsData[prev], commentsData[activeIndex], commentsData[next]];
  };

  const visibleIcons = getVisibleIcons();
  const activeComment = commentsData[activeIndex];

  return (
    <div className="video-image">
      <div className="video-image__header">
        <h1 className="video-image__title">{title}</h1>
        <p className="video-image__subtitle">{stitle}</p>
        {/* <h2 className="video-image__secsubtitle">Built on Trust, Proven by Results</h2> */}
      </div>

      <div className="video-image__wrapper">
        {images && (
          <div className="video-image__img-container">

            <div className="prof-content">
              <div className="comment-box">
  <div className="comment-border-box"></div>  
  <img src={Quotation} alt="Comment Icon" className="quotation" />
  <div className="scrolling-text">
    <div>
      <span className="comment-title">{activeComment.title}</span>
      <span className="comment-body">{activeComment.body}</span>
      <span className="comment-author">- {activeComment.author}</span>
    </div>
    <img src={Bookmark} alt="Bookmark" className="bookmark" />
  </div>
</div>


              <div className="icon-box three-icons">
                {visibleIcons.map((item) => (
                  <img
                    key={item.id}
                    src={item.icon}
                    alt={`Icon ${item.id}`}
                    className={`proficon ${item.id === activeComment.id ? 'center-icon' : ''}`}
                  />
                ))}
              </div>
            </div>

            <img className="video-image__vimg" src={images} alt="Main Visual" />
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoImageSection;
