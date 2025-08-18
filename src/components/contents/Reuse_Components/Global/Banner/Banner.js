import React, { useState, useEffect } from 'react';
import './Banner.css';

function Banner({ imageUrl, title }) {
  return (
    imageUrl && title && (
      <div className="cmp-banner">
        <img
          className="cmp-banner__img"
          src={imageUrl}
          alt={title || 'Banner'}
        />
        <h1 className="cmp-banner__title">{title}</h1>
      </div>
    )
  );
}

export default Banner;
