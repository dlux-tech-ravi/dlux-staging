import React ,{useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './OurDigitalPractices.css';
import lineimage from '../../OurDigitalImage/Digitallines.png';

const OurDigitalPractices = () => {

  const query = `
  {
    dluxHomePage(id:"1JPO4TStFUu2ehcDA9ApGR"){
      dluxHeading
       dluxImageCollection{
        items{
          url
        }
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
    <div className="grid">
      <Link to="/adobe-workfront" className="cell1">
        <img src={page.dluxHomePage[0].dluxImageCollection.items[1].url} alt="Logo 1" />
      </Link>
      <Link to="/salesforce" className="cell2">
        <img src={page.dluxHomePage[0].dluxImageCollection.items[2].url} alt="Logo 2" />
      </Link>
      <Link to="/aprimo" className="cell3">
        <img src={page.dluxHomePage[0].dluxImageCollection.items[3].url} alt="Logo 3" />
      </Link>
      <Link to="/Dataiku'" className="cell4">
        <img src={page.dluxHomePage[0].dluxImageCollection.items[4].url} alt="Logo 4" />
      </Link>
      <img src={lineimage} alt="Background" className="lineimage" />
    </div>
  );
};


export default OurDigitalPractices;
