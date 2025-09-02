import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import HomeFooter from '../HomeFooter/HomeFooter';
import Service_Details from '../contents/Reuse_Components/Global/Service_Details/Service_Details';
import maskgroup1 from '../contents/Reuse_Components/Global/Service_Details/Service_Details_Assests/Mask Group 245.png';
import maskgroup2 from '../contents/Reuse_Components/Global/Service_Details/Service_Details_Assests/Mask Group 246.png';
import maskgroup3 from '../contents/Reuse_Components/Global/Service_Details/Service_Details_Assests/Mask Group 250.png';
import maskgroup4 from '../contents/Reuse_Components/Global/Service_Details/Service_Details_Assests/Mask Group 248.png';
import maskgroup5 from '../contents/Reuse_Components/Global/Service_Details/Service_Details_Assests/Mask Group 247.png';
import maskgroup6 from '../contents/Reuse_Components/Global/Service_Details/Service_Details_Assests/Mask Group 251.png';
import Contact_Us from '../contents/Reuse_Components/Global/Contact_Us/Contact_Us';
import Contact_Us_V2 from '../contents/Reuse_Components/Global/Contact_Us/Contact_Us_V2';
import Banner_V2 from '../contents/Reuse_Components/Global/Banner/Banner_V2';
import linkedin from '../contents/Reuse_Components/Global/Contact_Us/Contact_Us_Assests/linkedin icons_.png';
import imagehfcallion from '../contents/Reuse_Components/Global/Contact_Us/Contact_Us_Assests/hfcallicon.png';
import imagehflocicon from '../contents/Reuse_Components/Global/Contact_Us/Contact_Us_Assests/hflocicon.png';
import imagehfmssgicon from '../contents/Reuse_Components/Global/Contact_Us/Contact_Us_Assests/hfmssgicon.png';
import Image_Left_V5 from '../contents/Reuse_Components/Global/Image_Left/Image_Left_V5';

const CommerceCloud = () => {
  const [bannerSection, setBannerSection] = useState(null);
  const [secondaryImageData, setSecondaryImageData] = useState(null);
  const [imageSectionData, setImageSectionData] = useState([]);
  const [videoUrl, setVideoUrl] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [posterUrl, setPosterUrl] = useState(null);

  const services = {
    title: "Our Salesforce Commerce Cloud",
    items: [
    {
      image: maskgroup6,
      title: 'Implementation Excellence',
      description: 'As a leading SFCC partner, we deliver high-performance, multi-brand, and multi-country sites tailored for growth—on budget and on time.',
    },
    {
      image: maskgroup2,
      title: 'Managed Services',
      description: 'Get 24/7 monitoring, audits, version upgrades, and certified SFCC support for platform optimization and issue resolution.',
    },
    {
      image: maskgroup3,
      title: 'SiteGenesis to SFRA Migration',
      description: 'Seamlessly migrate from SiteGenesis to SFRA or implement new SFRA setups with our expert planning and execution.',
    },
    {
      image: maskgroup4,
      title: 'Cross-Platform Migration',
      description: 'Transition smoothly to SFCC from platforms like Magento, Shopify, Oracle Commerce, and more with our proven expertise.',
    },
    {
      image: maskgroup5,
      title: 'Comprehensive Integrations',
      description: 'As SFCC and MuleSoft partners, we integrate SFCC with OMS, CMS, ERP, and over 100 apps and services for unified operations.',
    },
    {
      image: maskgroup1,
      title: 'Dedicated SFCC Developers',
      description: 'Stay ahead with skilled developers for platform enhancements, new implementations, and managed support—cost-effectively.',
    },
  ]
};

  const contactUsData = {
    contactDetails: [
      { icon: imagehfcallion, text: '+61 411 048 090' },
      { icon: imagehfmssgicon, text: 'sales@dluxtech.com' },
      { icon: imagehflocicon, text: '28 Beacon Drive, Schofields NSW 2762' },
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

  const accessToken = process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN;
  const query = `
    query {
      platformCommerceCloud(id: "3nTMVnqCMpAp2Vf1n20pkh") {
        commerceCloudBannerSection {
          url
          description
          title
        }
        commerceCloudImageSectionCollection {
          items {
            url
          }
        }
        commerceCloudVideoCollection {
          items {
            url
          }
        }
      }
      platformCommerceCloudCollection {
        items {
          commerceCloudSecondaryImage {
            url
            description
          }
          commerceCloudImageSectionCollection {
            items {
              url
            }
          }
        }
      }
    }
  `;

  useEffect(() => {
    const fetchCommerceCloudData = async () => {
      try {
        const response = await fetch('https://graphql.contentful.com/content/v1/spaces/pj0maraabon4/environments/production', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`,
          },
          body: JSON.stringify({ query }),
        });

        if (!response.ok) {
          const responseBody = await response.text();
          throw new Error(`Failed to fetch: ${response.status} - ${responseBody}`);
        }

        const result = await response.json();

        const bannerData = result?.data?.platformCommerceCloud?.commerceCloudBannerSection;
        const videoData = result?.data?.platformCommerceCloud?.commerceCloudVideoCollection?.items[0]?.url;
        const secondaryImg = result?.data?.platformCommerceCloudCollection?.items[0]?.commerceCloudSecondaryImage;
        const imageSection = result?.data?.platformCommerceCloudCollection?.items[0]?.commerceCloudImageSectionCollection?.items;
        const posterUrl = result?.data?.platformCommerceCloud?.commerceCloudImageSectionCollection?.items[0]?.url;

        setBannerSection(bannerData);
        setVideoUrl(videoData);
        setSecondaryImageData(secondaryImg);
        setImageSectionData(imageSection);
        setPosterUrl(posterUrl)

      } catch (err) {
        console.error('Error fetching data:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCommerceCloudData();
  }, [accessToken]);

  if (loading) return <p></p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="commerce-cloud-container">
      <Navbar />

      {bannerSection && (
        <Banner_V2
          imageUrl={bannerSection.url}
          title={bannerSection.title}
          description={bannerSection.description}
        />
      )}

     <div className="form12" style={{ height: "0px" }}>
  <form
    id="form3"
    className="form3"
    action="https://forms.zohopublic.in/dluxtech/form/SalesforceCommerceCloud4/formperma/ikVeF81Xr2aRUyk1ZNICyUitcKCyy89wr_QwHMUPKhQ/htmlRecords/submit"
    name="form"
    method="POST"
    acceptCharset="UTF-8"
    encType="multipart/form-data"
  >
    <input type="hidden" name="zf_referrer_name" value="" />
    <input type="hidden" name="zf_redirect_url" value="" />
    <input type="hidden" name="zc_gad" value="" />

    <h2>Sign up <span>in Seconds</span></h2>

    <input
      type="text"
      name="SingleLine"
      className="input-field"
      maxLength="255"
      placeholder="What's Your Username"
      fieldType="1"
      required
    />

    <input
      type="text"
      name="Email"
      className="input-field"
      maxLength="255"
      placeholder="What's Your Email"
      fieldType="9"
      required
    />

    <input
      type="text"
      name="SingleLine1"
      className="input-field"
      maxLength="255"
      placeholder="Message"
      fieldType="1"
      required
    />

    <button type="submit">
      <a>Get a Query</a>
    </button>

    {/* <label>Follow us</label> */}
    <a
      href="https://www.linkedin.com/company/dlux-tech-corp"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img className="linkedicon" src={linkedin} alt="LinkedIn" />
    </a>
  </form>
</div>

      <Image_Left_V5 videoUrl={videoUrl} description={secondaryImageData?.description}  poster={posterUrl}/>

      <Service_Details title={services.title} services={services.items} />

      <Contact_Us_V2 />
      <Contact_Us
        contactDetails={contactUsData.contactDetails}
        formAction={contactUsData.formAction}
        formFields={contactUsData.formFields}
      />

      <HomeFooter />
    </div>
  );
};

export default CommerceCloud;
