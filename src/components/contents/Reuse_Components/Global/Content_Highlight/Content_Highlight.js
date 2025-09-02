import React from 'react';
import './Content_Highlight.css';

const Content_Highlight = ({ heading, points, imageUrl }) => {
  return (
    <div className="cmp-content-highlight__section">
      <div className="cmp-content-highlight__heading">
        <h3>{heading}</h3>
      </div>
      <div className="cmp-content-highlight__wrapper">
        <div className="cmp-content-highlight__image">
          <img src={imageUrl} alt="Highlight" />
        </div>

        <div className="cmp-content-highlight__points">
          {points.map((list, index) => (
            <ul key={index}>
              {list.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Content_Highlight;
