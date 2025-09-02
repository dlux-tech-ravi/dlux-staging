import React,{ useState, useEffect } from "react";
import Navbar from '../../Navbar';
import './ServicesOne.css';
import ServicesTwo from './ServicesTwo';
import { Helmet } from 'react-helmet';
function ServicesOne()
{

    
  const query = `{
    dluxServiceMainPage(id:"2SxSolSBurlJYWwUX2DT02"){
      dluxServiceHeading
       dluxServiceImage{
                url
        }
      } 
    }
   `;


   const accessToken = process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN;
   const [page, setPage] = useState(null);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
       const fetchPageData = async () => {
           try {
               const response = await fetch(`https://graphql.contentful.com/content/v1/spaces/pj0maraabon4/environments/production`, {
                   method: 'POST',
                   headers: {
                       'Content-Type': 'application/json',
                       'Authorization': `Bearer ${accessToken}`,
                   },
                   body: JSON.stringify({ query }),
               });
               const { data, errors } = await response.json();
               if (errors) {
                   console.error(errors);
               }
               setPage({
                   dluxServiceMainPage: [
                       data.dluxServiceMainPage,
                   ]
               });
               setLoading(false); // Set loading to false once data is fetched
           } catch (error) {
               console.error('Error fetching data:', error);
           }
       };
       fetchPageData();
   }, []);


   if (loading) {
       return <div className="blog-loading-spinner"></div>; // Render loading spinner
   }

   if (!page) {
       return <div>No content available.</div>;
   }


    return(
        <>
         <div className='servicespage-one-wrapper'>
            <div className='services-nav'>
                <Navbar/>
                <Helmet>
        <title>Digital Consulting Services | Adobe, Salesforce, Dataiku, Aprimo</title>
        <meta name="description" content="Discover our comprehensive range of professional services tailored to meet your specific requirements. Trusted solutions for success" />
        </Helmet>
            </div>
            <div className='servicespage-one-img-section'>
            <img src={page.dluxServiceMainPage[0].dluxServiceImage.url} alt='servicesmainimg' />
            </div>
            <div className='servicespage-one-head-text'>
            <h1>{page.dluxServiceMainPage[0].dluxServiceHeading}</h1>
            </div>
            <div className='servicespage-one-container'>
                <div className='servicespage-two-component'>
                     <ServicesTwo/>
                </div>

            </div>
            
        
        </div>
        </>
    );
}
export default ServicesOne;