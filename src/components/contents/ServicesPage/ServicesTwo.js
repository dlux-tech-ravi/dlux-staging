import React,{ useState, useEffect } from "react";
import "./ServicesTwo.css";
import globeRotate from "./servicespage-assests/Globe PicOne.png";
import cRotate from "./servicespage-assests/circleR.png";
import cubeR from "./servicespage-assests/CubeR.png";
import arow from "./servicespage-assests/Arow.png";
import {Link} from "react-router-dom";
import ServicesThree from "./ServicesThree";
function ServicesTwo() {

  const query = `
  {
    dluxServiceMainPage(id:"5Dhcuj0Jk2azlfEICwx5Xu"){
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
      <div className="servicespage-two-Main">
        <div className="servicespage-two-title">
          <h1>{page.dluxServiceMainPage[0].dluxServiceHeading}</h1>
          </div>
       
        <div className="servicespage-two-paragraph">
        <p>{page.dluxServiceMainPage[0].dluxServicepara}</p>
        </div>
        <div className="servicespage-two-twoBoxes">
          <div className="servicespage-two-BoxesLeft">
          <Link to ='/digital-martech-consulting'>
            <div className="servicespage-two-consultBox">
              <div className="servicespage-two-consultImg">
                <img src={page.dluxServiceMainPage[0].dluxServiceImageManyCollection.items[0].url} />
              </div>
              <div className="servicespage-two-consultH">
                <h3>Digital and MarTech<br/> Consulting</h3>
                <Link to='/digital-martech-consulting'>
                  <img className="servicespage-two-img1" src={arow} />
                </Link>
              </div>
            </div>
            </Link>
            <Link to ='/content-management-dam'>
            <div className="servicespage-two-maxBox">
              <div className="servicespage-two-maxImg">
                <img src={page.dluxServiceMainPage[0].dluxServiceImageManyCollection.items[1].url} />
              </div>
                  <div className="servicespage-two-maxH">
                <h3>Content Management <br/>and DAM</h3>
                <Link to="/content-management">
                  <img className="servicespage-two-img2" src={arow} />
                </Link>
              </div>
            </div>
            </Link>
          </div>
          
          <div className="servicespage-two-BoxesRight">
          <Link to='/training-change-management'>
            <div className="servicespage-two-techBox">
              <div className="servicespage-two-tImg">
                <img src={page.dluxServiceMainPage[0].dluxServiceImageManyCollection.items[2].url} />
              </div>
             
              <div className="servicespage-two-tH">
                <h3>Training and Change <br/>Management</h3>
                <Link to="/training-and-change-management">
                  <img className="servicespage-two-img3" src={arow} />
                </Link>
              </div>
          
            </div>
            </Link>
            <Link to ='/managed-application-services'>
            <div className="servicespage-two-appBox">
              <div className="servicespage-two-appImg">
                <img src={page.dluxServiceMainPage[0].dluxServiceImageManyCollection.items[3].url} />
              </div>
            
              <div className="servicespage-two-appH">
                <h3>Managed Application<br/> Services</h3>
                <Link to="/app-development">
                  <img className="servicespage-two-img4" src={arow} />
                </Link>
              </div>
           
            </div>
            </Link>
          </div>
        </div>
        <div className="servicespage-two-globe-rotate">
          <img src={globeRotate} />
        </div>
        <div className="servicespage-two-c-blink">
          <img src={cRotate} />
        </div>
        <div className="servicespage-two-c-blinkA">
          <img src={cRotate} />
        </div>
        <div className="servicespage-two-cubic">
          <img src={cubeR} />
        </div>
      </div>

      
      <div className='servicespage-three-component'>
         <ServicesThree/>
      </div>
    </>
  );
}
export default ServicesTwo;
