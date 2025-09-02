import { React, useEffect, useState } from "react";
import Navbar from "../Navbar";
import HomeFooter from "../HomeFooter/HomeFooter";
import Banner_V4 from "../contents/Reuse_Components/Global/Banner/Banner_V4";
import Testimonial_V1 from "../contents/Reuse_Components/Global/Testimonial_Slider/Testimonial_V1";
import Video_Right from "../contents/Reuse_Components/Global/Video_Section/Video_Right";
import Image_LeftV5 from "../contents/Reuse_Components/Global/Image_Left/Image_LeftV5";
import Adobe_Service_Cards from "../contents/Reuse_Components/Global/Service_Details/Adobe_Service_Cards";
import AdobeCommerceVideo from "../contents/Reuse_Components/Global/Video_Section/Adobe_Commerce_Video";
import Adobe_Commerce_Video_V1 from "../contents/Reuse_Components/Global/Video_Section/Adobe_Commerce_Video_V1";
import Testimonial_V2 from "../contents/Reuse_Components/Global/Testimonial_Slider/Testimonial_V2";
import Testimonial_V3 from "../contents/Reuse_Components/Global/Testimonial_Slider/Testimonial_V3";

import "./Adobecommerces.css";
const Adobecommerces = () => {
  const [banner, setBanner] = useState(null);
  useEffect(() => {
    const accessToken = process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN;
    const query = `
        {
          fusionData1: platformWorkfrontFusion(id: "7jHaQI4LMrYzWiGfgMpGz3") {
            bannersection { title description url }
            }

      }`;
    const fetchData = async () => {
      const r = await fetch(
        "https://graphql.contentful.com/content/v1/spaces/pj0maraabon4/environments/production",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify({ query }),
        }
      );
      if (!r.ok) {
        const body = await r.text();
        console.error("Fetch error:", r.status, body);
        throw new Error(`Failed to fetch data: ${r.status}`);
      }
      const res = await r.json();
      console.log("GraphQL res:", res);
    };
  }, []);
  return (
    <div >
      <Navbar />
      <div className="main-content">
      <Banner_V4 />
      <Testimonial_V1 />
      <Video_Right />
      <Image_LeftV5 />

      <section class="commerce-features-section">
        <h2 class="commerce-features-heading">
          Experience the features that are advanced and designed with the
          customer in mind.
        </h2>

        <div class="commerce-feature-wrapper">
          <div class="commerce-feature-item">
            <div class="commerce-icon">🔗</div>
            <p>System Integration</p>
          </div>
          <div class="commerce-feature-item">
            <div class="commerce-icon">📊</div>
            <p>Analytics & Insights</p>
          </div>
          <div class="commerce-feature-item">
            <div class="commerce-icon">💬</div>
            <p>Customer Engagement</p>
          </div>
          <div class="commerce-feature-item">
            <div class="commerce-icon">⚙️</div>
            <p>Automation Tools</p>
          </div>
          <div class="commerce-feature-item">
            <div class="commerce-icon">🔒</div>
            <p>Data Security</p>
          </div>
          <div class="commerce-feature-item">
            <div class="commerce-icon">🛒</div>
            <p>Smart Checkout</p>
          </div>
          <div class="commerce-feature-item">
            <div class="commerce-icon">🌐</div>
            <p>Global Reach</p>
          </div>
          <div class="commerce-feature-item">
            <div class="commerce-icon">💼</div>
            <p>Enterprise Support</p>
          </div>
          <div class="commerce-feature-item">
            <div class="commerce-icon">📦</div>
            <p>Inventory Management</p>
          </div>
          <div class="commerce-feature-item">
            <div class="commerce-icon">📈</div>
            <p>Performance Analytics</p>
          </div>
          <div class="commerce-feature-item">
            <div class="commerce-icon">📧</div>
            <p>Email Marketing</p>
          </div>
          <div class="commerce-feature-item">
            <div class="commerce-icon">🧠</div>
            <p>AI Recommendations</p>
          </div>
        </div>
      </section>
      <Adobe_Service_Cards />
      <AdobeCommerceVideo />
      <Adobe_Commerce_Video_V1 />
      {/* <Testimonial_V2 /> */}
      <Testimonial_V3 />

    </div>
      <HomeFooter />
    </div>
  );
};
export default Adobecommerces;
