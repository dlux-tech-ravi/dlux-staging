import React, { useState } from "react";
import "./Testimonial_V2.css";

const caseStudies = [
  {
    category: "Customer Service",
    tag: "Customer Experience",
    text: "Enhancing Customer Support At ABC Tech",
  },
  {
    category: "Marketing",
    tag: "Marketing Strategy",
    text: "Boosting Social Media Engagement For DEF Innovations",
  },
  {
    category: "Marketing",
    tag: "Marketing Strategy",
    text: "Boosting Social Media Engagement For DEF Innovations",
  },
  {
    category: "Assistance",
    tag: "Operational Efficiency",
    text: "AI-Based Assistance For LMN Corp",
  },
  {
    category: "Customer Service",
    tag: "Customer Insights",
    text: "Improving Feedback Collection At QRS Ltd",
  },
  {
    category: "Marketing",
    tag: "Ad Campaign",
    text: "Launching Targeted Ads For UVW Inc",
  },

  {
    category: "Assistance",
    tag: "Helpdesk Automation",
    text: "Automating Support Channels For GHI Group",
  },
];

const categories = ["All", "Customer Service", "Marketing", "Assistance"];

const Testimonial_V2 = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredCaseStudies =
    selectedCategory === "All"
      ? caseStudies
      : caseStudies.filter((cs) => cs.category === selectedCategory);

  return (
    <div className="case-study">
      <div className="cs-header">
        <h2 className="cs-title">Case Study Spotlight</h2>
        <p className="cs-description">
          A global brand partnered with DLUX to launch Adobe Commerce across
          five regions, reducing bounce rate by 40% and boosting mobile
          conversions by 60% — all powered by Adobe Sensei and DLUX Fusion
          connectors.
        </p>
      </div>

      <div className="cs-top">
        <h3 className="cs-subheading">
          Smart Commerce at Scale <span className="cs-right">→</span>
        </h3>
        <div className="cs-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`tab ${selectedCategory === cat ? "active" : ""}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="cs-cards">
        {filteredCaseStudies.map((item, index) => (
          <div className="cs-card" key={index}>
            <div className="cs-img" />
            <div className="cs-body">
              <p className="cs-tag">{item.tag}</p>
              <p className="cs-text">{item.text}</p>
              <span className="cs-arrow">↗</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial_V2;
