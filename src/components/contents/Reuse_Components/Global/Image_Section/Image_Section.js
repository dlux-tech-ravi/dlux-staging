import React from 'react';
import './Image_Section.css';

function Image_Section({ imageUrl, altText = 'Image', className = '' }) {
  return (
    <div className={`cmp-image_section ${className}`}>
      {imageUrl ? (
        <img src={imageUrl} alt={altText} className="cmp-section__img" />
      ) : (
        <p className="cmp-section__placeholder">Image not available</p>
      )}
    </div>
  );
}

export default Image_Section;
