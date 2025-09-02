import React, { useEffect, useState } from "react";
import "./Banner_V4.css";
import ContactFormModal from "../Contact_Us/ContactFormModal";

function Banner_V4() {
  const [bannerData, setBannerData] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchBannerData = async () => {
      try {
        const response = await fetch(
          "https://graphql.contentful.com/content/v1/spaces/pj0maraabon4/environments/production",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization:
                "Bearer 6t-wgSsZnD80bBuG3_VNcGKE0lF-LAE7EPa5NE286HU",
            },
            body: JSON.stringify({
              query: `
              {
                platformAdobeCommerces(id: "231JBLMJLXr5L3FUHFNGEI") {
                  adobeCommerceHeroBannerCollection {
                    items {
                      title
                      description
                      url
                    }
                  }
                }
              }
            `,
            }),
          }
        );

        const json = await response.json();
        const items =
          json?.data?.platformAdobeCommerces?.adobeCommerceHeroBannerCollection
            ?.items || [];
        setBannerData(items);
      } catch (error) {
        console.error("Error fetching Contentful data:", error);
      }
    };

    fetchBannerData();
  }, []);

  const title = bannerData[0]?.title;
  const description = bannerData[0]?.description;
  const leftImage = bannerData[0]?.url;
  const rightImage = bannerData[1]?.url;

  return (
    <div className="banner-v4-container">
      <div className="banner-v4-hero-section">
        {/* Floating squares with images */}
        <div className="banner-v4-floating-square left-square">
          {leftImage && <img src={leftImage} alt="Left Square" />}
        </div>

        <div className="banner-v4-floating-square right-square">
          {rightImage && <img src={rightImage} alt="Right Square" />}
        </div>

        {/* Content Grid */}
        <div className="banner-v4-grid">
          <h1 className="banner-v4-hero-heading">{title}</h1>
          <p className="banner-v4-hero-description">{description}</p>

          <div className="banner-v4-input-wrapper">
            <button
              className="banner-v4-generate-button"
              onClick={() => setShowModal(true)}
            >
              Get Start
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && <ContactFormModal onClose={() => setShowModal(false)} />}
    </div>
  );
}

export default Banner_V4;
