import React from 'react';
import './BannerV1.css';

function BannerV1({ imageUrl, title, description }) {
  return (
    imageUrl && (
      <div className="cmp-banners">
        <img
          className="cmp-banners__img"
          src={imageUrl}
          alt={title || 'Banner'}
        />
        <div className="cmp-banners__head">
          {title && <h1 className="cmp-banners__title">{title}</h1>}
          {description && <p className="cmp-banners__description">{description}</p>}
        </div>
      </div>
    )
  );
}

export default BannerV1;
