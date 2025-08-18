import React from 'react';
import './Four_Step_ProcessV1.css';

const Four_Step_Process = ({ steps = [], description = {} }) => {
  return (
    <div className="cmp-four-step__section">
      <div className="cmp-four-step__content">
        <h1>{description.heading || "Adobe Analytics Managed Services"}</h1>
      </div>

      <div className="cmp-four-step__wrapper">
        {steps && steps.length > 0 ? (
          steps.map((step, index) => (
            <div key={index} className="cmp-four-step__contents">
              <img src={step.image || ''} alt={step.title || 'Step image'} />
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))
        ) : (
          <p>No steps available</p>
        )}
      </div>

     
    </div>
  );
};

export default Four_Step_Process;
