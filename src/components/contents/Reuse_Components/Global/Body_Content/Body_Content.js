import React from 'react';
import './Body_Content.css';

const Body_Content = ({ title, descriptionLines }) => {
  return (
    <div className="cmp-body-content__section">
      <div className="cmp-body-content__title">
        <h1>{title}</h1>
      </div>
      <div className="cmp-body-content__description">
        {descriptionLines.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
    </div>
  );
};

export default Body_Content;
