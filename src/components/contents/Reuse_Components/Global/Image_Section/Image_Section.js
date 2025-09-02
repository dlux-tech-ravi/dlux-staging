import React from 'react';
import './Image_Section.css';

const Image_Section = ({
  imageUrls = [],
  altTexts = [],
  className = '',
}) => {
  if (!imageUrls.length) {
    return <p className="cmp-section__placeholder">No images available</p>;
  }

  return (
    <div className={`cmp-image_section ${className}`}>
      {imageUrls.map((url, index) => (
        <img
          key={index}
          src={url}
          alt={altTexts[index] || `Image ${index + 1}`}
          className="cmp-section__img"
        />
      ))}
    </div>
  );
};

export default Image_Section;
