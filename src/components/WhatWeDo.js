
import CounterPage from './CounterPage';
import { Link } from "react-router-dom";
import React ,{useState, useEffect} from 'react';

const WhatWeDo = () => {
  const query = `
  {
    dluxHomePage(id:"2rfsYJ4wDt9L1AzVxx3i0s"){
      
      dluxHeading
      dluxPara
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
                   dluxHomePage: [
                       data.dluxHomePage,
                   ],
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

  return (
    <div className="what-we-do-main">
      <div className="what-we-do">
        <h1>{page.dluxHomePage[0].dluxHeading}</h1>
        <p className=' hide-on-mobile'>
         {page.dluxHomePage[0].dluxPara}
        </p><br/>
        <p className=' hide-on-mobile'>Welcome to a new era of exceptional digital experiences.</p>
        <p className=' hide-on-laptop'>
        {page.dluxHomePage[0].dluxPara}
        </p>
        <p className=' hide-on-laptop'>Welcome to a new era of exceptional digital experiences.</p>

        <Link to="/services">
          <button><h6>Know More</h6></button>
        </Link>
      </div>

      <div>
        <CounterPage />
      </div>
    </div>
  );
};

export default WhatWeDo;
