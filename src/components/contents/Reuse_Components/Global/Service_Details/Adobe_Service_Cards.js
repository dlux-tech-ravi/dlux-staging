import React, { useEffect, useState } from "react";
import "./Adobe_Service_Cards.css";

const Adobe_Service_Cards = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchAdobeServices = async () => {
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
                    adobeServiceCollection {
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

        const data = await response.json();
        setServices(
          data?.data?.platformAdobeCommerces?.adobeServiceCollection?.items || []
        );
      } catch (error) {
        console.error("Error fetching Adobe services:", error);
      }
    };

    fetchAdobeServices();
  }, []);

  return (
    <section className="adobe-services-section">
      <h2 className="adobe-services-heading">Our Adobe Commerce Services</h2>
      <div className="adobe-services-grid">
        {services.map((service, index) => (
          <div
            key={index}
            className={`adobe-service-card card-${(index % 3) + 1}`}
          >
            {/* Removed silver slice line */}

            {/* Front Face */}
            <div className="card-face card-front">
              <div className="adobe-card-icon">
                <img src={service.url} alt={service.title} />
                <h3>{service.title}</h3>
              </div>
              <div className="adobe-card-content">
                <p>{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Adobe_Service_Cards;
