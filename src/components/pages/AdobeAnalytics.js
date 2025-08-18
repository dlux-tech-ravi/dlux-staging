import React, { useState, useEffect } from 'react';
import BannerV1 from '../contents/Reuse_Components/Global/Banner/BannerV1';
import Navbar from '../Navbar';
import Image_Left from '../contents/Reuse_Components/Global/Image_Left/Image_Left';
import Four_Step_ProcessV1 from '../contents/Reuse_Components/Global/Four_Step_Process/Four_Step_ProcessV1';
import images from '../contents/Reuse_Components/Global/Four_Step_Process/Four_Step_ProcessV1_Assests/con-01.png';
import images1 from '../contents/Reuse_Components/Global/Four_Step_Process/Four_Step_ProcessV1_Assests/imm-01.png';
import images2 from '../contents/Reuse_Components/Global/Four_Step_Process/Four_Step_ProcessV1_Assests/inter-01.png';
import images3 from '../contents/Reuse_Components/Global/Four_Step_Process/Four_Step_ProcessV1_Assests/mig-01.png';
import images4 from '../contents/Reuse_Components/Global/Four_Step_Process/Four_Step_ProcessV1_Assests/Re&op-01.png';
import Contact_Us_V1 from '../contents/Reuse_Components/Global/Contact_Us/Contact_Us_V1';
import Image_Section from '../contents/Reuse_Components/Global/Image_Section/Image_Section';

const AdobeAnalytics = () => {
  const [bannerImageUrl, setBannerImageUrl] = useState('');
  const [bannerTitle, setBannerTitle] = useState('');
  const [secondaryImageData, setSecondaryImageData] = useState(null);
  const [imageSectionData, setImageSectionData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const steps = [
    {
      title: 'Consulting',
      description: 'Leverage our expertise in Adobe Analytics and data assimilation to craft a results-driven strategy tailored to your business objectives.',
      image: images,
    },
    {
      title: 'Implementation',
      description: 'We deliver customized Adobe Analytics Implementations designed to meet your unique business needs. Our services include validating codes, reports, and tags to ensure accuracy across all environments.',
      image: images1,
    },
    {
      title: 'Adobe Analytics Integration',
      description: 'Our certified Adobe consultants provide seamless integration of Adobe Analytics with Adobe Commerce, Adobe Experience Manager (AEM), Adobe Marketo, Adobe Target, and a wide range of third-party systems.',
      image: images2,
    },
    {
      title: 'Adobe Analytics Migration',
      description: 'Migrate your data from other analytics platforms to Adobe Analytics with precision and confidence. Our experts ensure a smooth transition with no data loss or quality issues.',
      image: images3,
    },
    {
      title: 'Reporting & Optimization',
      description: 'Maximize the value of your data with tailored dashboards, insightful reports, and ongoing performance optimization powered by Adobe Analytics.',
      image: images4,
    },
  ];

  useEffect(() => {
    const accessToken = process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN;

    const query = `
      query {
        platformAdobeAnalytics(id: "1doPfi8PaEAcsRzVrEeC3k") {
          adobeAnalyticsBannerImage {
            url
            title
          }
        }
        platformAdobeAnalyticsCollection {
          items {
            adobeAnalyticsSecondaryImage {
              url
              description
            }
            adobeAnalyticsImageSectionCollection {
              items {
                url
              }
            }
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
          const responseBody = await response.text();
          console.error('Failed to fetch:', response.status, responseBody);
          throw new Error(`Failed to fetch data: ${response.status}`);
        }

        const result = await response.json();
        console.log('GraphQL Response:', result);

        const bannerImage = result?.data?.platformAdobeAnalytics?.adobeAnalyticsBannerImage;
        const collectionItems = result?.data?.platformAdobeAnalyticsCollection?.items;

        if (bannerImage?.url && bannerImage?.title) {
          setBannerImageUrl(bannerImage.url);
          setBannerTitle(bannerImage.title);
        }

        if (collectionItems?.length > 0) {
          const [firstItem] = collectionItems;

          if (firstItem?.adobeAnalyticsSecondaryImage) {
            setSecondaryImageData(firstItem.adobeAnalyticsSecondaryImage);
          }

          if (firstItem?.adobeAnalyticsImageSectionCollection?.items) {
            setImageSectionData(firstItem.adobeAnalyticsImageSectionCollection.items);
          }
        }
      } catch (err) {
        console.error('Error fetching data:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="adobe-analytics-container">
      <BannerV1 imageUrl={bannerImageUrl} title={bannerTitle} />
      <Navbar />
      <form
        action="https://forms.zohopublic.in/dluxtech/form/BannerSectionForm/formperma/XUwElVETXNP5O6B9qy946vzmYmC-yYrKPxJ2PGHV1K4/htmlRecords/submit"
        name="form"
        id="form"
        method="POST"
        acceptCharset="UTF-8"
        encType="multipart/form-data"
      >
        <label htmlFor="name">Name:</label>
        <input type="text" name="SingleLine" id="name" maxLength="255" placeholder="Enter your name" />
        <label htmlFor="email">Email:</label>
        <input type="email" name="Email" id="email" maxLength="255" placeholder="Enter your email" />
        <label htmlFor="phone">Phone Number (Optional):</label>
        <input type="text" name="PhoneNumber_countrycode" id="phone" maxLength="20" placeholder="Enter your phone number" />
        <button type="submit"><em>Submit</em></button>
      </form>

      {secondaryImageData && (
        <Image_Left imageUrl={secondaryImageData.url} description={secondaryImageData.description} />
      )}

      <Four_Step_ProcessV1 steps={steps} />
      {imageSectionData.length > 0 &&
        imageSectionData.map((image, index) => (
          <Image_Section key={index} imageUrl={image.url} altText={`Section Image ${index + 1}`} />
        ))}
      <Contact_Us_V1 />
    </div>
  );
};

export default AdobeAnalytics;
