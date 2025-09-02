import React from 'react';
import './VideoPartnersSection.css';

const VideoPartnersSection = ({ images }) => {
  return (
    <div className="icon-row">
      {images.map((img, index) => (
        <div
          key={index}
          className="partner-icon"
          style={{ '--i': index }}  
        >
          <img src={img.url} alt={`partner-icon-${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default VideoPartnersSection;
