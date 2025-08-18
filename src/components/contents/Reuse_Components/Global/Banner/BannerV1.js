import React from 'react';
import './BannerV1.css';

function BannerV1({ imageUrl, title }) {
  return (
    <div className="cmp-banner">
      {imageUrl && (
        <img
          className="cmp-banner__img"
          src={imageUrl}
          alt={title || 'Banner'}
        />
      )}
      {title && <h1 className="cmp-banner__title">{title}</h1>}
    </div>
  );
}

export default BannerV1;
