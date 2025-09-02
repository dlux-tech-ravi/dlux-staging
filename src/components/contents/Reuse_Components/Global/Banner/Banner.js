import React, { useState, useEffect } from 'react';
import './Banner.css';

function Banner({ imageUrl, title, description }) {
  return (
    imageUrl && title &&  (
      <div className="cmp-banner">
        <img
          className="cmp-banner__img"
          src={imageUrl}
          alt={title|| 'Banner'}
        />
        <div  className="cmp-banner__title">
        <h1 className="cmps-banners__titles">{title}</h1>
        {/* <h1 className="cmpss-banner__title"></h1> */}
        <h1 className="cmps-banner__title">DLUX +</h1>
        <h1 className="cmps-banners__title">Adobe Commerce</h1>
        <div className="cmp-banner__description">
        <p >{description}</p>
        </div>
        </div>
      </div>
    )
  );
}

export default Banner;