import React, { useEffect, useState } from "react";
import { request } from "graphql-request";
import "./Testimonial_V3.css";

const endpoint =
  "https://graphql.contentful.com/content/v1/spaces/pj0maraabon4/environments/production";
const accessToken = "6t-wgSsZnD80bBuG3_VNcGKE0lF-LAE7EPa5NE286HU";

const query = `
  {
    platformAdobeCommerces(id: "231JBLMJLXr5L3FUHFNGEI") {
      dluxClientsSayCollection {
        items {
          title
          description
          url
        }
      }
    }
  }
`;

const Testimonial_V3 = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const data = await request(
          endpoint,
          query,
          {},
          {
            Authorization: `Bearer ${accessToken}`,
          }
        );

        const items =
          data.platformAdobeCommerces.dluxClientsSayCollection.items;
        setTestimonials(items);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <section className="testimonials-v3-section">
      <h2 className="testimonials-v3-title">What Our Clients Say</h2>
      <div className="testimonials-v3-container">
        {testimonials.map((item, index) => (
          <div className="testimonial-v3-card" key={index}>
            <div className="testimonial-v3-avatar">
              {item.url && <img src={item.url} alt="Client" />}
            </div>
            <div className="testimonial-v3-content">
              <p className="testimonial-v3-title">{item.title}</p>
              <p className="testimonial-v3-subtitle"> </p>
              <p className="testimonial-v3-quote">{item.description}</p>
              <div className="testimonial-v3-stars">
                {[...Array(5)].map((_, i) => (
                  <i className="fa-solid fa-star" key={i}></i>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial_V3;
