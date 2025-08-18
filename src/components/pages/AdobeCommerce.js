import React, { useState, useEffect } from 'react';
import Banner from '../contents/Reuse_Components/Global/Banner/Banner';
import HomeFooter from '../HomeFooter/HomeFooter';
import Navbar from '../Navbar';
import Secondary_Process_Steps from '../contents/Reuse_Components/Global/Secondary_Process/Secondary_Process_Steps';
import Service_Details from '../contents/Reuse_Components/Global/Service_Details/Service_Details';
import Four_Step_Process from '../contents/Reuse_Components/Global/Four_Step_Process/Four_Step_Process';
import Body_Content from '../contents/Reuse_Components/Global/Body_Content/Body_Content';
import Image_Left from '../contents/Reuse_Components/Global/Image_Left/Image_Left';
import Content_Highlight from '../contents/Reuse_Components/Global/Content_Highlight/Content_Highlight';
import Contact_Us from '../contents/Reuse_Components/Global/Contact_Us/Contact_Us';
import maskgroup1 from '../contents/Reuse_Components/Global/Service_Details/Service_Details_Assests/Mask Group 245.png';
import maskgroup2 from '../contents/Reuse_Components/Global/Service_Details/Service_Details_Assests/Mask Group 246.png';
import maskgroup3 from '../contents/Reuse_Components/Global/Service_Details/Service_Details_Assests/Mask Group 250.png';
import maskgroup4 from '../contents/Reuse_Components/Global/Service_Details/Service_Details_Assests/Mask Group 248.png';
import maskgroup5 from '../contents/Reuse_Components/Global/Service_Details/Service_Details_Assests/Mask Group 247.png';
import maskgroup6 from '../contents/Reuse_Components/Global/Service_Details/Service_Details_Assests/Mask Group 251.png';
import images from '../contents/Reuse_Components/Global/Four_Step_Process/Four_Step_Process_Assests/Mask Group 227.png';
import images1 from '../contents/Reuse_Components/Global/Four_Step_Process/Four_Step_Process_Assests/Mask Group 224.png';
import images2 from '../contents/Reuse_Components/Global/Four_Step_Process/Four_Step_Process_Assests/Mask Group 226.png';
import images3 from '../contents/Reuse_Components/Global/Four_Step_Process/Four_Step_Process_Assests/Mask Group 225.png';
import shoppingImage from '../contents/Reuse_Components/Global/Content_Highlight/Content_Highlight_Assests/shopping.jpg';
import stepsimage from '../contents/Reuse_Components/Global/Secondary_Process/Secondary_process_Assests/steps.webp';
import imagehfcallion from '../contents/Reuse_Components/Global/Contact_Us/Contact_Us_Assests/hfcallicon.png'
import imagehflocicon from '../contents/Reuse_Components/Global/Contact_Us/Contact_Us_Assests/hflocicon.png'
import imagehfmssgicon from '../contents/Reuse_Components/Global/Contact_Us/Contact_Us_Assests/hfmssgicon.png'


const AdobeCommerce = () => {
  const [bannerImage, setBannerImage] = useState(null);
  const [bannerTitle, setBannerTitle] = useState('');
  const [secondaryImage, setSecondaryImage] = useState(null);
  const [secondaryDescription, setSecondaryDescription] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const steps = [
    {
      title: 'Strategy and Blueprinting',
      description: 'Establish project objectives and develop a comprehensive blueprint for functionality and growth.',
      image: images
    },
    {
      title: 'Conceptualization and Layout Design',
      description: 'Create visually compelling, user-centered designs guided by the wireframes.',
      image: images1
    },
    {
      title: 'Mapping and Framework Development',
      description: 'Bring the design to life by implementing features and functionality into a fully operational Adobe Commerce store.',
      image: images2
    },
    {
      title: 'Testing and Launch',
      description: 'Conduct extensive testing for performance, security, and functionality, ensuring a flawless deployment.',
      image: images3
    }
  ];

  const description = {
    heading: 'Our 4-step Process for Adobe Commerce Excellence',
    footerHeading: 'Ready to Transform Your Digital Commerce?',
    footerText: 'Partner with DLUX Tech to leverage the full potential of Adobe Commerce. Let\'s build an e-commerce experience that not only meets but exceeds customer expectations.'
  };

  const services = [
    {
      image: maskgroup1,
      title: 'Consulting & Strategy',
      description: 'Define and refine your e-commerce strategy with our experts. We analyze your target audience and industry landscape to craft a strategic roadmap.',
    },
    {
      image: maskgroup2,
      title: 'Custom Development & Integration',
      description: 'Elevate your e-commerce capabilities with tailored development and seamless integrations with CRM, ERP, and other systems.',
    },
    {
      image: maskgroup3,
      title: 'Migration to Adobe Commerce',
      description: 'Move to Adobe Commerce with confidence. We ensure a secure and optimized migration process from other platforms.',
    },
    {
      image: maskgroup4,
      title: 'Managed Services & Support',
      description: 'Get ongoing support to maintain, monitor, and update your Adobe Commerce store for a seamless experience.',
    },
    {
      image: maskgroup5,
      title: 'Commerce Analytics & Insights',
      description: 'Leverage advanced analytics to understand user behavior and optimize performance, driving higher satisfaction and conversions.',
    },
    {
      image: maskgroup6,
      title: 'Existing Support',
      description: 'Our 24/7 support team monitors and swiftly resolves issues on your Adobe Commerce site to ensure smooth operations.',
    },
  ];

  const highlightData = {
    heading: "Experience the features that are advanced and designed with the customer in mind.",
    points: [
      ["Headless Commerce", "Magento PWA Studio", "Inventory & Order Management", "Business Intelligence", "Page Builder"],
      ["Product Recommendations", "Customer Account Management", "Integrated B2B", "Adobe Commerce Marketplace", "Robust Data Analysis"]
    ],
    imageUrl: shoppingImage
  };

  // const secondaryProcessData = {
  //   heading: "At DLUX, we blend technical expertise and industry insight with a customer-first approach.",
  //   image: stepsimage,
  //   stepTitle: "Strategy and Blueprinting:",
  //   stepDescription: "Establish project objectives and develop a comprehensive blueprint for functionality and design."
  // };
  const bodyContentData = {
    title: "Why Adobe Commerce (Magento) and Why DLUX?",
    descriptionLines: [
      "Adobe Commerce provides unmatched flexibility, scalability, and security for brands delivering premium,",
      "omnichannel shopping experiences. With AI-driven personalization, headless commerce, and robust B2B",
      "capabilities, it's the ideal platform for growth and innovation."
    ],
  };
  const contactUsData = {
    heading: "Let's Connect",
    description: "Hop on board to discover how DLUX can wield its marketing magic tool.",
    contactDetails: [
      { icon: imagehfcallion, text: '+61 411 048 090' },
      { icon: imagehfmssgicon, text: 'sales@dluxtech.com' },
      { icon: imagehflocicon, text: 'Suite-3, Level 2, 9 George Street Parramatta CBD, Sydney - NSW 2150' },
    ],
    formAction: "https://forms.zohopublic.in/dluxtech/form/ContactUs/formperma/...",
    formFields: [
      { type: 'text', name: 'Name_First', placeholder: 'First Name', required: true, maxLength: 255 },
      { type: 'text', name: 'Name_Last', placeholder: 'Last Name', required: true, maxLength: 255 },
      { type: 'email', name: 'Email', placeholder: 'E-Mail', required: true, maxLength: 255 },
      { type: 'tel', name: 'PhoneNumber_countrycode', placeholder: 'Phone Number', required: true, maxLength: 20, pattern: '[0-9]*' },
      { type: 'textarea', name: 'MultiLine', placeholder: 'How Can We Help?', required: true, maxLength: 65535 },
    ],
  };

  useEffect(() => {
    const accessToken = process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN;

    const query = `
      query {
        platformAdobeCommerce(id: "3Vn8JGs0dbTd9CjxcVF2FI") {
          adobeBannerImage {
            title
            url
          }
          adobeSecondaryImage {
            url
            description
          }
        }
      }
    `;

    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://graphql.contentful.com/content/v1/spaces/pj0maraabon4/environments/production',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${accessToken}`,
            },
            body: JSON.stringify({ query }),
          }
        );

        if (!response.ok) {
          throw new Error('Failed to load data');
        }

        const data = await response.json();
        setBannerImage(data.data.platformAdobeCommerce.adobeBannerImage.url);
        setBannerTitle(data.data.platformAdobeCommerce.adobeBannerImage.title);
        setSecondaryImage(data.data.platformAdobeCommerce.adobeSecondaryImage.url);
        setSecondaryDescription(data.data.platformAdobeCommerce.adobeSecondaryImage.description);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p></p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <Banner imageUrl={bannerImage} title={bannerTitle} />
      <Image_Left imageUrl={secondaryImage} description={secondaryDescription} />
      <Body_Content {...bodyContentData} />
      <Content_Highlight
        heading={highlightData.heading}
        points={highlightData.points}
        imageUrl={highlightData.imageUrl}
      />
      {/* <Secondary_Process_Steps {...secondaryProcessData} /> */}
      <Service_Details services={services} />
      <Four_Step_Process steps={steps} description={description} />
      <Contact_Us {...contactUsData} />
      <HomeFooter />
      <Navbar />
    </div>
  );
};

export default AdobeCommerce;
