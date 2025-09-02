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
import HomeFooter from '../HomeFooter/HomeFooter';
import Contact_Us from '../contents/Reuse_Components/Global/Contact_Us/Contact_Us';
import imagehfcallion from '../contents/Reuse_Components/Global/Contact_Us/Contact_Us_Assests/hfcallicon.png'
import imagehflocicon from '../contents/Reuse_Components/Global/Contact_Us/Contact_Us_Assests/hflocicon.png'
import imagehfmssgicon from '../contents/Reuse_Components/Global/Contact_Us/Contact_Us_Assests/hfmssgicon.png'
import Contact_Us_V3 from '../contents/Reuse_Components/Global/Contact_Us/Contact_Us_V3';





const AdobeAnalytics = () => {
  const [bannerImageUrl, setBannerImageUrl] = useState('');
  const [bannerTitle, setBannerTitle] = useState('');
  const [bannerDescription, setBannerDescription] = useState('')
  const [secondaryImageData, setSecondaryImageData] = useState(null);
  const [imageSectionData, setImageSectionData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  const contactUsData = {
     
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
            description
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
          setBannerDescription(bannerImage.description);
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

  if (loading) return <p></p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="adobe-analytics-container">
            <Navbar />
      <BannerV1 imageUrl={bannerImageUrl} title={bannerTitle}  description={bannerDescription}/>
 
      
      <div className='form12 ' style={{height:"0px"}}>
      <form
        id="form2"
        className="form2 aaform"
       action='https://forms.zohopublic.in/dluxtech/form/AdobeAnalyticsRegistrationForm/formperma/gyY18jTSCMJRsNGiDaeKCfVJfDru2s_vljMwGmWHrP0/htmlRecords/submit'
        method="POST"
        acceptCharset="UTF-8"
        encType="multipart/form-data"
      >
        <label htmlFor="name">Name</label>
        <input type="text" name="SingleLine" id="name1" maxLength="255" required/>
        <label htmlFor="email">Email</label>
        <input type="email" name="Email" id="email1" maxLength="255" required />
        <label htmlFor="phone">Phone Number</label>
        <input type="tel" name="PhoneNumber_countrycode" id="phone1" maxLength="20" required />
        <label htmlFor="name">Requirement</label>
        <input type="text" name="names" id="names" maxlength="1000" />
        <button type="submit"><a>Get in Touch </a></button>
      </form>
      </div>

      {secondaryImageData && (
        <Image_Left imageUrl={secondaryImageData.url} description={secondaryImageData.description} />
      )}

      <Four_Step_ProcessV1 steps={steps} />

      {/* {imageSectionData.length > 0 && (
        <Image_Section
          imageUrls={imageSectionData.map((item) => item.url)}
          altTexts={imageSectionData.map((_, index) => `Image Section ${index + 1}`)}
        />
      )} */}
       
          <Contact_Us{...contactUsData}/>
         
      <Contact_Us_V1 />
      <Contact_Us_V3{...contactUsData}/>
     
      <HomeFooter/>
    </div>
  );
};

export default AdobeAnalytics;
