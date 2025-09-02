import React, { useState, useEffect } from 'react';
import './Banner_V2.css';

function Banner_V2({ imageUrl, title, description }) {
  return (
    imageUrl && title && (
      <div className="cmp-banners">
        <img
          className="cmp-banner__imgs" 
          src={imageUrl}
          alt={title|| 'Banner'}
        />
        
        <div className="cmp-banner__container">
          <h1 className="cmp-banner__titles">{title}
            <span className="cmp-banner__descrip" >{description}</span>
            </h1>
          </div>
        </div>
    )
  );
}

export default Banner_V2;