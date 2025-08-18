import React ,{useState, useEffect} from 'react';
import "./Practices.css";
import { Link } from 'react-router-dom';
import OurDigitalPractices from "./OurDigitalPractices/OurDigitalPractices";
import ball2 from '../Assets/Rectangle 349.png';
import  global from '../Assets/Group 593.png';
import global2 from '../Assets/Group 594.png';
const Practices = () => {

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
    <div className="practices-wrapper">
      <h1 className="p-title">
       {page.dluxHomePage[0].dluxHeading}
      </h1>
      <div className="p-ball2">
        <img src={ball2} alt="p-ball2" />
      </div>

      <div className="p-image-container">
        <img className="img1" src={page.dluxHomePage[0].dluxImageCollection.items[0].url} />
        <div className="p-ball3">
          <img src={ball2} alt="p-ball2" />
        </div>
        <div className="p-global2">
          <img src={global2} alt="p-global2" />
        </div>
        <div>
          <OurDigitalPractices />
        </div>
        <div className="p-global">
          <img src={global} alt="p-global" />
        </div>
      </div>

      <div className="p-card-container">
        <div className="p-card">
          <div className="p-left-img">
            <img className="p-adobe-pic" src={page.dluxHomePage[0].dluxImageCollection.items[5].url} />
          </div>
          <div className="p-right-img">
            <div className="p-content">
            <img className="p-specalitized" src={page.dluxHomePage[0].dluxImageCollection.items[6].url} />
            
            </div>
          </div>
        </div>
      </div>

      <div className="p-btn-div">
        <Link to="/adobe-workfront">
        <button><h6>Know More</h6></button>
        </Link>
      </div>
    </div>
  );
};

export default Practices;
