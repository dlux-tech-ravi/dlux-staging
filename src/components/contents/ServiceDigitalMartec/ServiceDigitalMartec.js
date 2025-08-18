import "./ServiceDigital.css";
import React, { useEffect, useState } from "react";
import ScrollReveal from "scrollreveal";
import vector from "./Service-Assets/Group 1038.png";
import vector2 from "./Service-Assets/Rectangle 644.png";
import vector3 from "./Service-Assets/Group 1037.png";
import Cornerwing from './Service-Assets/Mask Group 90.png';
import HForm from '../../HForm/HForm'
import Navbar from '../../Navbar'
import HomeFooter from "../../HomeFooter/HomeFooter";
import { Helmet } from 'react-helmet';

const ServiceDigitalMartec = () => {
  document.addEventListener("scroll", function () {
    const standSectiondigital = document.querySelector(".stand-section");
    if (standSectiondigital) {
      const standSectionTop = standSectiondigital.getBoundingClientRect().top || 0;
      const progressBar = document.querySelector(".progress-bar");
      const filled = document.querySelector(".filled");
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrolled = Math.max(0, -standSectionTop);
      const scrolledPercentage = (scrolled / standSectiondigital.clientHeight) * 133;
      filled.style.height = Math.min(scrolledPercentage, 100) + "%";
    }
  });
  // scroll Reveal
  useEffect(() => {
    ScrollReveal().reveal(".journey", {
      delay: 200,
      distance: "50px",
      origin: "bottom",
      duration: 1000,
      easing: "ease-in-out",
    });

    ScrollReveal().reveal(".journey-img", {
      delay: 400,
      distance: "50px",
      origin: "bottom",
      duration: 1000,
      easing: "ease-in-out",
    });

    ScrollReveal().reveal(".journey-text", {
      delay: 600,
      distance: "50px",
      origin: "bottom",
      duration: 1000,
      easing: "ease-in-out",
    });

    ScrollReveal().reveal(".analysis", {
      delay: 800,
      distance: "50px",
      origin: "bottom",
      duration: 1000,
      easing: "ease-in-out",
    });

    ScrollReveal().reveal(".analysis-img", {
      delay: 1000,
      distance: "50px",
      origin: "bottom",
      duration: 1000,
      easing: "ease-in-out",
    });

    ScrollReveal().reveal(".analysis-text", {
      delay: 1200,
      distance: "50px",
      origin: "bottom",
      duration: 1000,
      easing: "ease-in-out",
    });

    ScrollReveal().reveal(".rates", {
      delay: 200,
      distance: "50px",
      origin: "bottom",
      duration: 1000,
      easing: "ease-in-out",
    });

    ScrollReveal().reveal(".rates-img", {
      delay: 1000,
      distance: "50px",
      origin: "bottom",
      duration: 1000,
      easing: "ease-in-out",
    });

    ScrollReveal().reveal(".rates-text", {
      delay: 1200,
      distance: "50px",
      origin: "bottom",
      duration: 1000,
      easing: "ease-in-out",
    });

    ScrollReveal().reveal(".practices", {
      delay: 200,
      distance: "50px",
      origin: "bottom",
      duration: 1000,
      easing: "ease-in-out",
    });

    ScrollReveal().reveal(".practices-img", {
      delay: 1000,
      distance: "50px",
      origin: "bottom",
      duration: 1000,
      easing: "ease-in-out",
    });

    ScrollReveal().reveal(".practices-text", {
      delay: 1200,
      distance: "50px",
      origin: "bottom",
      duration: 1000,
      easing: "ease-in-out",
    });
  }, []);
 
/*Contentful*/
  const query = `
  {
    dluxServiceMainPage(id:"4pyqUFmuhzVsjCCi5KaGLE"){
      dluxServiceHeading
       dluxServiceImage{
              url
       }
     }
    DigitalPage_Digital: dluxServiceMainPage(id:"5AOeVFJm42tHg2UBqgdTzc"){
      dluxServiceHeading
       dluxServiceImage{
              url
       }
     }
    DigitalPage_Whatdoyoustandtogain: dluxServiceMainPage(id:"4GEsvnyuz5zlEPWN6Mcabx"){
      dluxServiceHeading
       dluxServiceImageManyCollection{
         items{
              url
        }
       }
    }
    DigitalPage_BusinessProcessOptimizationServices: dluxServiceMainPage(id:"4HrftGoj8GhQ89WR8sutQ8"){
      dluxServiceHeading
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
                   ],
                   DigitalPage_Digital: [
                       data.DigitalPage_Digital,
                   ],
                   DigitalPage_Whatdoyoustandtogain: [
                       data.DigitalPage_Whatdoyoustandtogain,
                   ],
                   DigitalPage_BusinessProcessOptimizationServices: [
                       data.DigitalPage_BusinessProcessOptimizationServices,
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
    <div className="service-digital-martec-wrapper">
    <div className='service-digital-martec-nav'>
      <Helmet>
      <title>Digital & MarTech Consulting | Implementation & Integration Services | DLUX</title>
        <meta name="description" content="Lead the evolution of MarTech excellence with DLUX. Enhance your marketing strategies with personalized AI solutions for transformative business growth." />
      </Helmet>
               <Navbar/>
            </div>
    <div className="service-container">
      {/* Head section */}
      <img src={page.dluxServiceMainPage[0].dluxServiceImage.url} alt="" className="service-img" />
      <div className="service-head-section">
        <h1 className="service-head-text">
        {page.dluxServiceMainPage[0].dluxServiceHeading} 
        </h1>
      </div>

      {/* Service section */}
      <section className="service-section">
        <div className="service-content">
          <div className="service-left">
            <img src={page.DigitalPage_Digital[0].dluxServiceImage.url} alt="Service Image" />
            <p className="left-text">
            We are a team of seasoned professionals providing precise<br/> solutions into your unique needs. By utilizing leading-edge<br/>MarTech integration, we reinforce our efforts, promoting an <br/> organized and effective approach to accomplishing your<br/> business goals.
            </p>   
          </div>
         
          <div className="service-right">
          <h3>{page.DigitalPage_Digital[0].dluxServiceHeading} </h3>
            <p className="right-text">  
             
            Are your marketing measures creating a disorienting loop? No hassle! DLUX has got your <br/>back. We dedicate ourselves to aligning with your needs, understanding your challenges,<br/> and addressing your pain.  
           <br/> <br/>Our commitment is to streamline your path from disorganization to a  track record of seamless outcomes. We help you create, automate, track, and enhance your work management.
           Through our MarTech consulting services, we ensure that every step of<br/> your journey towards efficiency is guided with expertise and precision. 
           <br/><br/> Don't let your marketing strategy sit on the shelf! We optimize your marketing technology investments for real-time agility and maximumized ROI. Our team becomes your trusted partner, strategically managing your budget to ensure every dollar fuels your growth and accelerates goal achievement.  
           We guarantee a single digital ecosystem that seamlessly integrates different MarTech tools using precise engineering for the streamlined and effective functioning of your workflow.  
            </p>
            {/* ----- */}
          </div>
        </div>
      </section>

      {/* Stack section */}
      <section className="stack-section">
          <div className="vector1-div">
          <img src={vector} alt="" className="vector1" />
          </div>
          <div className="vector2-div"> <img src={vector2} alt="" className="vector2" /></div>
         <div className="vector3-div"><img src={vector3} alt="" className="vector3" /></div>
          
          <div className="stack-container">
            <h1>
            Stack your wins with  MarTech - it's the way to go!  
            </h1>
            <p>
              With the right MarTech solutions, you can streamline your operations,
              enhance your marketing  efforts, and deliver exceptional  <br />
             experiences that captivate your target audience and create new KPIs for success.
            </p>
         
          <div className="stack-mainDiv">
          <div className="stack-topics">
            <h3>DataIKU</h3>
            <ul className="stack-ul">
              <li>DSS</li>
            </ul>
          </div>
          <div className="stack-topics1">
            <h3>Adobe</h3>
            <ul className="stack-ul1">
              <li>Workfront</li>
              <li>AEM</li>
              </ul>
          </div>
          <div className="stack-topics2">
            <h3>Aprimo</h3>
            <ul className="stack-ul2">
              <li>DAM</li>
              <li>Content Management</li>
              </ul>
          </div>
          <div className="stack-topics3">
            <h3>Salesforce</h3>
            <ul className="stack-ul3">
              <li>Sales cloud</li>
              <li>B2C & B2B Cloud</li>
              <li>Service & Commerce Cloud</li>
              </ul>
          </div>
          </div>
          </div>
          </section>
          

      {/* Stand Gain section */}
      <section className="stand-section">
        <div className="stand-head">{page.DigitalPage_Whatdoyoustandtogain[0].dluxServiceHeading}</div>
        <div className="stand-section-container">
        <div className="progress-bar">
          <div className="filled"></div>
        </div>
        <div className="journey">
          <h3 className="journey-head">Streamlined Marketing Journey</h3>
          <p className="journey-text">
          From manual toil to data-driven agility! Set out on a path to  <br/>enhanced efficiency with MarTech as your guide. Navigate <br/> the intricacies of business landscapes with ease, fueled by <br/> seamless collaboration across marketing operations. This <br/> strategic synergy empowers your team to execute dynamic <br/> marketing strategies confidently, leaving behind the noise <br/> and uncertainty.  
          </p>
        </div>
        <img src={page.DigitalPage_Whatdoyoustandtogain[0].dluxServiceImageManyCollection.items[0].url} alt="" className="journey-img" />

        <div className="analysis">
          <h3 className="analysis-head">Your Strategic Roadmap Partners</h3>
          <p className="analysis-text">
          We believe that every successful business starts with a clear <br/>sense of purpose. That's why we're dedicated to helping you <br/>craft a strategy that fosters seamless collaboration within your<br/> team and drives continuous improvement in your performance<br/> metrics. Let's work together to identify your driving force and <br/> unite your team to bring your vision to fruition.
          </p>
        </div>
        <img src={page.DigitalPage_Whatdoyoustandtogain[0].dluxServiceImageManyCollection.items[1].url} alt="" className="analysis-img" />

        <div className="rates">
        <h3 className="rates-head">Implementation, Integration,<br/> and Development  </h3>
          <p className="rates-text">
          DLUX seamlessly integrates Adobe products with cutting<br/>-edge iPaaS (Integration-Platform-as-a-Service) solutions.<br/> Our personalized approach streamlines operations, boosts<br/> productivity, and cuts inefficiencies through automation.<br/> With expert guidance, we identify optimal integrations and <br/>essential stakeholders. Let DLUX empower your organization<br/> in today's digital landscape.
          </p>
        </div>
        <img src={page.DigitalPage_Whatdoyoustandtogain[0].dluxServiceImageManyCollection.items[2].url} alt="" className="rates-img" />

        <div className="practices">
          <h3 className="practices-head">
          Analytics-Driven Business<br/> Intelligence Solutions </h3>
          <p className="practices-text">
          Specializing in BI strategy, data warehousing, and integration  <br/>with Adobe Workfront, we ensure clarity on key metrics through <br/> expert data strategy and modeling. Our advanced extraction <br/> capabilities enable dynamic reporting by merging Workfront data  <br/>with others. With impactful visualizations in Tableau, PowerBI, <br/> and Adobe Analytics, DLUX empower clients for operational  <br/>excellence through informed decision-making.  
          </p>
        </div>
        </div>
        <img src={page.DigitalPage_Whatdoyoustandtogain[0].dluxServiceImageManyCollection.items[3].url} alt="" className="practices-img" />
      </section>
      </div>
      

      <section>
        <div className="process-section">    
            <h1>{page.DigitalPage_BusinessProcessOptimizationServices[0].dluxServiceHeading}</h1> 
          <div className="process-content-gif-wrap">
          <div className="process-content">
          <div className="process-conent1">
          <div className="process-content-img-wrap">
          <div className="process-content-img">
          <img src={page.DigitalPage_BusinessProcessOptimizationServices[0].dluxServiceImageManyCollection.items[0].url} alt="" />
          </div>
          <div className="process-content-text"> 
            <h3>Comprehensive Understanding</h3>
            <p>Gain deep insights into your marketing operations, setting the stage<br/> for process improvements and tech advances.  </p>
          </div>
          </div>
          </div>
          

          <div className="process-conent1">
          <div className="process-content-img-wrap">
          <div className="process-content-img">
            <img src={page.DigitalPage_BusinessProcessOptimizationServices[0].dluxServiceImageManyCollection.items[1].url} alt="" />
            </div>
            <div className="process-content-text">
            <h3>Process Revamps</h3>
            <p>Implement strategic process revamps tailored to your organization's<br/> unique needs, driving efficiency and effectiveness.  </p>
          </div>
          </div>
          </div>

          <div className="process-conent1">
          <div className="process-content-img-wrap">
          <div className="process-content-img">
            <img src={page.DigitalPage_BusinessProcessOptimizationServices[0].dluxServiceImageManyCollection.items[2].url} alt="" />
            </div>
            <div className="process-content-text">
            <h3>Technology Upgrades</h3>
            <p>Leverage cutting-edge technology upgrades to enhance your operational<br/> capabilities and stay ahead of the competition.</p>
         </div>
         </div>
         </div>
         </div>
         
          
          <div className="gif-process">
          <video className="dmvideo" autoPlay loop muted>
              <source src={page.DigitalPage_BusinessProcessOptimizationServices[0].dluxServiceImageManyCollection.items[3].url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
      
    
      </section>
      
   

      <div className='ogs-waves'>
        <img src={Cornerwing} alt="ogs_wave" />
      </div>

     <div className='servicedigitalmartec-form'>
            <HForm/>
        </div>

     <div className='servicedigitalmartec-footer'>
            <HomeFooter/>
      </div> 

      </div>
      
    </>
  
  );
};


export default ServiceDigitalMartec;
