import React, { useState, useEffect } from 'react';
import VideoSection from '../contents/Reuse_Components/Global/VideoSection/VideoSection';
import VideoImageSection from '../contents/Reuse_Components/Global/VideoImageSection/VideoImageSection';
import Navbar from '../Navbar';
import VideoMiddleSection from '../contents/Reuse_Components/Global/VideoMiddleSection/VideoMiddleSection';
import HomeFooter from '../HomeFooter/HomeFooter';
import VideoBottomSection from '../contents/Reuse_Components/Global/VideoBottomSection/VideoBottomSection';
import VideoPartnersSection from '../contents/Reuse_Components/Global/VideoPartnersSection/VideoPartnersSection';

const VideoVault = () => {
  const [mediaTitle, setMediaTitle] = useState('');
  const [subTitle, setSubTitle] = useState('');
  const [videoUrl, setVideoUrl] = useState([]);

  const [secTitle, setSecTitle] = useState('');
  const [secSubTitle, setSecSubTitle] = useState('');
  const [secimg, setSecimg] = useState([]);

  const [videoThumbnails, setVideoThumbnails] = useState([]);

  const [ourPartners, setOurPartners] = useState(null);
  
  const [midTitle, setMidTitle] = useState('');
  const [midText, setMidText] = useState('');

  const [workfrontTitle, setWorkfrontTitle] = useState('');
  const [workfront, setWorkfront] =useState([]);

  const [aemTitle, setAemTitle] = useState('');
  const [aem, setAem] = useState('');

  const [salesforceTitle, setSalesforceTitle] = useState('');
  const [salesforce, setSalesforce] = useState('');

  const [adobecommerceTitle, setAdobecommerceTitle] = useState('');
  const [adobeCommerce, setAdobeCommerce] = useState('');

  const [finalTitle, setFinalTitle] = useState('');
  const [finalDescription, setFinalDescription] = useState('');
  const [finalImage, setFinalImage] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const accessToken = process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN;

  const query = `
query ($preview: Boolean) {
  resourcesMediaLibraryCollection(preview: $preview) {
    items {
      mediaTitle
      subtitle
      topSectionCollection(limit: 11) {
        items {
          url
        }
      }
      topSectionThumbnailCollection(limit: 11){
        items{
          url
        }
      }
      secondaryTitle
      secondarySubTitle
      secondaryImage {
        url
      }
      middleTitle
      middleText
      workfrontTitle
      workfrontThumbnailCollection(limit:10){
        items{
          url
          title
          description
        }
      }
      workfrontMediaCollection(limit:10){
        items{
          url
          title
          description
        }
      }
      aemTitle
      aemThumbnailCollection(limit:10){
        items{
          url
          title
          description
        }
      }
      aemMediaCollection(limit:10){
        items{
          url
          title
          description
        }
      }
      salesforceTitle
      salesforceThumbnailCollection(limit:10){
        items{
          url
          title
          description
        }
      }
      salesforceMediaCollection(limit:10){
        items{
          url
          title
          description
        }
      }
      adobeCommerceTitle
      adobeCommerceThumbnailCollection(limit: 10){
        items{
          url
          title
          description
        }
      }
      adobeCommerceMediaCollection(limit: 10){
        items{
          url
          title
          description
        }
      } 
      finalSection{
        title
        description
        url
      } 
    }
  }
  ourPartners: dluxHomePage(id: "6VgcKuDO1NsIGXj2zP0Zm2") {
    dluxHeading
    dluxPara
    dluxImageCollection {
      items {
        url
      }
    }
  }
}
  `;

  useEffect(() => {
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
          throw new Error(`Failed to fetch: ${response.status}`);
        }

        const result = await response.json();
        const item = result?.data?.resourcesMediaLibraryCollection?.items?.[0];
        const partners = result?.data?.ourPartners;

        if (item) {
          setMediaTitle(item.mediaTitle);
          setSubTitle(item.subtitle);
          setVideoUrl(item.topSectionCollection?.items || []);

          setVideoThumbnails(item.topSectionThumbnailCollection?.items || []);

          setSecTitle(item.secondaryTitle);
          setSecSubTitle(item.secondarySubTitle);
          setSecimg(item.secondaryImage?.url || '');

          setMidTitle(item?.middleTitle || '');
          setMidText(item?.middleText || '');

          setWorkfrontTitle(item?.workfrontTitle);

            const workfrontMedias = item.workfrontMediaCollection?.items || [];
            const workfrontThumbnail = item.workfrontThumbnailCollection?.items || [];

            const combinedWorkfront = workfrontMedias.map((workfrontMedia, index) => ({
                ...workfrontMedia, 
                thumbnail: workfrontThumbnail[index]?.url || '',
                thumbnailTitle: workfrontThumbnail[index]?.title || '',
                thumbnailDescription: workfrontThumbnail[index]?.description || '',
            }));

          setWorkfront(combinedWorkfront);

          setAemTitle(item?.aemTitle);

            const aemMedias = item.aemMediaCollection?.items || [];
            const aemThumbnail = item.aemThumbnailCollection?.items || [];

            const combinedAem = aemMedias.map((aemMedia, index) => ({
                ...aemMedia, 
                thumbnail: aemThumbnail[index]?.url || '',
                thumbnailTitle: aemThumbnail[index]?.title || '',
                thumbnailDescription: aemThumbnail[index]?.description || '',
            }));

          setAem(combinedAem);

          setSalesforceTitle(item?.salesforceTitle);

            const salesforceMedias = item.salesforceMediaCollection?.items || [];
            const salesforceThumbnail = item.salesforceThumbnailCollection?.items || [];

            const combinedSalesforce = salesforceMedias.map((salesforceMedia, index) => ({
                ...salesforceMedia, 
                thumbnail: salesforceThumbnail[index]?.url || '',
                thumbnailTitle: salesforceThumbnail[index]?.title || '',
                thumbnailDescription: salesforceThumbnail[index]?.description || '',
            }));

          setSalesforce(combinedSalesforce);

          setAdobecommerceTitle(item?.adobeCommerceTitle);

            const adobeCommerceMedias = item.adobeCommerceMediaCollection?.items || [];
            const adobeCommerceThumbnail = item.adobeCommerceThumbnailCollection?.items || [];

            const combinedAdobeCommerce = adobeCommerceMedias.map((adobeCommerceMedia, index) => ({
                ...adobeCommerceMedia,
                thumbnail: adobeCommerceThumbnail[index]?.url || '',
                thumbnailTitle: adobeCommerceThumbnail[index]?.title || '',
                thumbnailDescription: adobeCommerceThumbnail[index]?.description || '',
            }));

          setAdobeCommerce(combinedAdobeCommerce);

          setFinalTitle(item.finalSection?.title);
          setFinalDescription(item.finalSection?.description);
          setFinalImage(item.finalSection?.url || '');
        }
        
        if (partners) {
            setOurPartners(partners);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [accessToken]);
  
  if (loading) return <p></p>;
  if (error) return <p>Error: {error}</p>;

  return (
    
    <div>
     
        <Navbar />
        
        <VideoSection title={mediaTitle} stitle={subTitle} videos={videoUrl} thumbnails={videoThumbnails} />
        <VideoImageSection title={secTitle} stitle={secSubTitle} images={secimg} />

        {ourPartners && (
  <div
    className="partners-section"
    style={{
      textAlign: 'center',
      marginTop: '40px',
      fontWeight: '100',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}
  >
    <div>
      <p className="proud-partners">Our Proud Partners</p>
    </div>

    <VideoPartnersSection images={ourPartners.dluxImageCollection.items} />
  </div>
)}


        <VideoMiddleSection title={midTitle} text={midText} videoTitle={workfrontTitle} workfrontmedias={workfront} />
        <VideoMiddleSection  videoTitle={aemTitle} workfrontmedias={aem} />
        <VideoMiddleSection  videoTitle={adobecommerceTitle} workfrontmedias={adobeCommerce} />
        <VideoMiddleSection  videoTitle={salesforceTitle} workfrontmedias={salesforce} />
        <VideoBottomSection title={finalTitle} subtitle={finalDescription} media={finalImage} />
        
        <HomeFooter />
        
    </div>
  );
};

export default VideoVault;
