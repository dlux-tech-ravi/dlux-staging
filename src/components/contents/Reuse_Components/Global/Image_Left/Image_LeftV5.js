import React, { useEffect, useState } from "react";
import "./Image_LeftV5.css";

const Image_LeftV5 = () => {
  const [contentData, setContentData] = useState(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch(
          "https://graphql.contentful.com/content/v1/spaces/pj0maraabon4/environments/production",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer 6t-wgSsZnD80bBuG3_VNcGKE0lF-LAE7EPa5NE286HU",
            },
            body: JSON.stringify({
              query: `
                {
                  platformAdobeCommerces(id: "231JBLMJLXr5L3FUHFNGEI") {
                    imageLeftContent {
                      title
                      description
                      url
                    }
                  }
                }
              `,
            }),
          }
        );

        const { data } = await response.json();
        setContentData(data?.platformAdobeCommerces?.imageLeftContent);
      } catch (error) {
        console.error("Error fetching data from Contentful:", error);
      }
    };

    fetchContent();
  }, []);

 const renderWithLineBreaks = (text) => {
  return text?.split("_").map((line, index) => {
    const parts = [];
    const regex = /"([^"]+)"/g;
    let lastIndex = 0;
    let match;

    while ((match = regex.exec(line)) !== null) {
      // Push text before the quote
      if (match.index > lastIndex) {
        parts.push(line.slice(lastIndex, match.index));
      }

      // Push bold + large quoted text
      parts.push(
        <span key={`bold-${index}-${match.index}`} style={{ fontWeight: "bold", fontSize: "1.2em" }}>
          {match[1]}
        </span>
      );

      lastIndex = regex.lastIndex;
    }

    // Push remaining text after last quote
    parts.push(line.slice(lastIndex));

    return (
      <React.Fragment key={index}>
        {parts}
        <br />
      </React.Fragment>
    );
  });
};


  return (
    <div className="adobe-commerce-section">
      <div className="adobe-commerce-container">
        <div className="adobe-commerce-content">
          <img
            src={contentData?.url || "https://via.placeholder.com/320x400"}
            alt="Adobe Commerce Banner"
            height="400px"
            width="320px"
            style={{ borderRadius: "20px" }}
          />
          <div className="adobe-commerce-text-box">
            <h2>{renderWithLineBreaks(contentData?.title)}</h2>
            <p>{renderWithLineBreaks(contentData?.description)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Image_LeftV5;
