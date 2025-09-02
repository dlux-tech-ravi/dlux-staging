import React from "react";
import "./Image_LeftV2.css";

function Image_LeftV2({ playBook, dlux, dluxplaybook, eqiqImagesCollection }) {
  return (
    <div className="cmp-playbook-container">
      <div className="cmp-playbook-content">
        <img
          src={eqiqImagesCollection[2]?.url}
          alt="Background"
          className="background-img"
        />
        <div className="cmp-playbook-wrapper">
          <div className="cmp-heading-section">
            <h1>{dlux}</h1>
            <h1>{dluxplaybook}</h1>
          </div>
          <div className="cmp-content-grid">
            {playBook?.map((item, index) => {
              return (
                <div key={index} className="cmp-grid-item">
                  <div className="cmp-image-icons img-float">
                    <img src={item?.url} alt={`Icon ${index + 1}`} />
                  </div>
                  <h3>{item?.title}</h3>
                  <p>{item?.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Image_LeftV2;
