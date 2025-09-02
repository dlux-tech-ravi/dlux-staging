import React ,{useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './OurServices.css';
import Lap from '../../components/OurServices/HomeAsset/Lap.png';


const servicesData = [
  {  
    text: 'Digital and Martech Consulting', 
    para: 'Experience a seamless work management journey with \nDLUX. We create, automate, track, and enhance your \nmarketing efforts, ensuring a clear path to success.',
    linkTo: '/digital-martech-consulting',
  },
  { 
    text: 'Content Management and DAM', 
    para: 'Manage content marketing with AEM and Aprimo DAM. \nWe provide precise implementation and consulting to \nensure your content resonates with the right audience.',
    linkTo: '/content-management-dam', 
  },
  { 
    text: 'Training and Change Management', 
    para: 'Our proven training programs empower your teams for \nswift proficiency and success, fostering adaptability to \nemerging market trends.',
    linkTo: '/training-change-management', 
  },
  { 
    text: 'Managed Application Services', 
    para: 'We offer real-time application monitoring, workflow \noptimization and steadfast support. Our solutions ensure \nseamless deployment with continuous maintenance.',
    linkTo: '/managed-application-services', 
  },
  
];

const OurServices = () => {


  const query = `
  {
    dluxHomePage(id:"6a1vekkEFpq2CWeALcSu0s"){
      dluxHeading
      dluxPara
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
    <div className="containers">
    <div className="container">    
      <p>
      <h1>{page.dluxHomePage[0].dluxHeading}</h1>
        {page.dluxHomePage[0].dluxPara} 
      </p>

      <div className="service-row">
        {servicesData.map((service, index) => (
          <Link to={service.linkTo} key={index} className="service-link">
            <div className="service-box">
              <div className="OurServices-icon-container">
                <img src={page.dluxHomePage[0].dluxImageCollection.items[index].url} alt="Service Icon" className="icon" />
                <div className="service-text">
                  <h2>{service.text}</h2>
                  <p className="para">{service.para}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>

    <div className="home-wrapper">
      <div className="home-container">
        <div className='home-head'>
       <h1 className="home-container-head">Accelerate Your Career with Industry-Leading MarTech & Project Management Certifications</h1>
       </div>
        <div className="home-content">
         <div className="home-image">
             <img src={Lap} alt="Lap" className="homeimage" />
         </div>
         <div className="home-container-texts">

           <p className="home-container-text">Ready to access over 10,000+ high-paying jobs? </p>
           <p className="home-container-text1"> Gain the latest skills- Find the right instructor for you with DLUXEQIQ.<span> <a href="https://www.dluxeqiq.com/" target="_blank">DLUX EQIQ</a> </span> is rated as the <span> <a href="https://www.dluxeqiq.com/" target="_blank">No. 1 Technical Training Academy</a> </span>, offering you with expert skill-building in <span><a href="https://dluxtech.com/adobe-workfront" target="_blank">Adobe Workfront </a></span>, <span><a href="https://dluxtech.com/salesforce" target="_blank">Salesforce </a></span>, <span><a href="https://dluxtech.com/adobe-analytics" target="_blank">Adobe Analytics </a></span>, <span><a href="https://dluxtech.com/adobe-commerce" target="_blank">Adobe Commerce </a></span> and many more. </p>
           <p className="home-container-text2">Master leading <span><a href="https://www.dluxeqiq.com/" target="_blank">project management software </a></span> and innovative <span><a href="https://www.dluxeqiq.com/" target="_blank">work management tools </a></span> to enhance workflows and leadership. Our mission is to sharpen your skills and transforming you as a crucial asset in today’s marketing landscape. Whether you aim to be an <span> <a href="https://www.dluxeqiq.com/" target="_blank">Adobe Workfront Core Developer</a> </span> or a <span> <a href="https://www.dluxeqiq.com/" target="_blank">Salesforce expert</a> </span> our certification programs provide you with the in-demand skills that the employers much crave for </p>
           <p className="home-container-text3">Come on! LEVEL UP with <span> <a href="https://www.dluxeqiq.com/" target="_blank">DLUX EQIQ.</a> </span></p>
           
           <div className="btn-div">
            <a href ="https://www.dluxeqiq.com/" target="_blank"><button className = "btn-eqiq">Enroll Now</button></a>
           </div>
          </div>
        </div>  
      </div>
    </div>

  </div>
  );
};

export default OurServices;
