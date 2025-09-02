import React from 'react';
import './Image_Left.css';

const Image_Left = ({ imageUrl, description }) => {
  return (
    <div className='cmp-image-left_section'>
      {imageUrl && (
        <div className='cmp-image-left_wrapper'>
          <img src={imageUrl}  />
          <div className='cmp-image-left_description'>
            <p>{description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Image_Left;
