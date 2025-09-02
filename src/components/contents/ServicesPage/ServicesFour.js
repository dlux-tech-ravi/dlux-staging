import React,{ useState, useEffect } from "react";
import "./ServicesFour.css";
import cR1 from "./servicespage-assests/circleR.png";
import {Link} from "react-router-dom";
import services_wave from "./servicespage-assests/services-wave.png";
import HForm from '../../HForm/HForm'
import HomeFooter from '../../HomeFooter/HomeFooter';
import Clients from "../../Clients/Clients";
function ServicesFour() {

  const query = `
  {
    dluxServiceMainPage(id:"01OpxiGoTBnQaSddghdG8s"){
      dluxServiceHeading
      dluxServicepara
       dluxServiceImageManyCollection{
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




  return (
    <>
      <div className="servicespage-four-Main">
        <div className="servicespage-four-X-both">
        <div className="servicespage-four-title"><h1>{page.dluxServiceMainPage[0].dluxServiceHeading}</h1></div>
        <div className="servicespage-four-contents">

        <p className=' hide-on-mobile'>
        {page.dluxServiceMainPage[0].dluxServicepara.split('\n').map((item, key) => {
           return <React.Fragment key={key}>{item}<br/></React.Fragment>
        })}
       </p>

{/* ---- */}

 </div>
 <p className='hide-on-laptop91'>
    {page.dluxServiceMainPage[0].dluxServicepara.split('\n').map((item, key) => {
      return <React.Fragment key={key}>{item}<br/></React.Fragment>
    })}
</p>
 
        <div className="servicespage-four-KnowMore">
        <Link to='/careers'><button><p><h6>Let's Huddle!</h6></p></button></Link>
        </div>
        <div className="servicespage-four-img">
        <video className="services-globe" autoPlay loop muted>
              <source src={page.dluxServiceMainPage[0].dluxServiceImageManyCollection.items[0].url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
        </div>
        <div className="servicespage-four-cc">
          <img src={cR1}/>
        </div>
        </div>
      </div>

      <div className="services-clients-component">
        <Clients/>
      </div>

      <div className='c-wave'> {/*Css used from clients for wave*/}
            <img src={services_wave} alt="services-wave" />
      </div>

      <div className='services-form'>
            <HForm/>      
        </div>
        
       <div className='services-footer'>
       <HomeFooter/>
        </div>  

    </>
  );
}
export default ServicesFour;