import React from 'react';
import './Four_Step_Process.css';



const Four_Step_Process = ({ steps = [], description = {} }) => {
  return (
    <div className="cmp-four-step__section">
      <div className="cmp-four-step__content">
        <h1>{description.heading || "Our 4-step Process for Adobe Commerce Excellence"}</h1>
      </div>

      <div className="cmp-four-step__wrapper">
        {steps && steps.length > 0 ? (
          steps.map((step, index) => (
            <div key={index} className="cmp-four-step__contents">
              <img src={step.image || ''} alt={`${step.title}`} />
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))
        ) : (
          <p>No steps available</p>
        )}
      </div>

      {/* <div className="cmp-four-step__description">
        <h1>{description.footerHeading || "Ready to Transform Your Digital Commerce?"}</h1>
        <p>{description.footerText || "Partner with us to leverage Adobe Commerce and exceed customer expectations."}</p>
      </div> */}
    </div>
  );
};

export default Four_Step_Process;
