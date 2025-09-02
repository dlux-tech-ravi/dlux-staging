import "./ServiceTraningAndChange.css";
import React, { useEffect, useState } from "react";
import ScrollReveal from "scrollreveal";
import round from './ServiceTraning-Assets/Rectangle 718.png';
import cubeT from './ServiceTraning-Assets/Group 500.png';
import train from './ServiceTraning-Assets/Mask Group 90.png';
import HForm from '../../HForm/HForm'
import Navbar from '../../Navbar'
import HomeFooter from "../../HomeFooter/HomeFooter";
import { Helmet } from 'react-helmet';

const ServiceTraningAndChange = () => {
  document.addEventListener("scroll", function () {
    const progressBar = document.querySelector(".Training-progress-bar");
    const filled = document.querySelector(".Training-filled");
    const standSectionTraining = document.querySelector(".standTraining-section");
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const standSectionTrainingTop = standSectionTraining.getBoundingClientRect().top || 0;
    const scrolled = Math.max(0, -standSectionTrainingTop);
    const scrolledPercentage = (scrolled / standSectionTraining.clientHeight) * 133;
    filled.style.height = Math.min(scrolledPercentage, 100) + "%";
  });

  // scroll Reveal
  useEffect(() => {
    ScrollReveal().reveal(".Training-journey", {
      delay: 200,
      distance: "50px",
      origin: "bottom",
      duration: 1000,
      easing: "ease-in-out",
    });

    ScrollReveal().reveal(".Training-journey-img", {
      delay: 400,
      distance: "50px",
      origin: "bottom",
      duration: 1000,
      easing: "ease-in-out",
    });

    ScrollReveal().reveal(".Training-journey-text", {
      delay: 600,
      distance: "50px",
      origin: "bottom",
      duration: 1000,
      easing: "ease-in-out",
    });

    ScrollReveal().reveal(".Training-analysis", {
      delay: 800,
      distance: "50px",
      origin: "bottom",
      duration: 1000,
      easing: "ease-in-out",
    });

    ScrollReveal().reveal(".Training-analysis-img", {
      delay: 1000,
      distance: "50px",
      origin: "bottom",
      duration: 1000,
      easing: "ease-in-out",
    });

    ScrollReveal().reveal(".Training-analysis-text", {
      delay: 1200,
      distance: "50px",
      origin: "bottom",
      duration: 1000,
      easing: "ease-in-out",
    });

    ScrollReveal().reveal(".Training-rates", {
      delay: 200,
      distance: "50px",
      origin: "bottom",
      duration: 1000,
      easing: "ease-in-out",
    });

    ScrollReveal().reveal(".Training-rates-img", {
      delay: 1000,
      distance: "50px",
      origin: "bottom",
      duration: 1000,
      easing: "ease-in-out",
    });

    ScrollReveal().reveal(".Training-rates-text", {
      delay: 1200,
      distance: "50px",
      origin: "bottom",
      duration: 1000,
      easing: "ease-in-out",
    });

    ScrollReveal().reveal(".Training-practices", {
      delay: 200,
      distance: "50px",
      origin: "bottom",
      duration: 1000,
      easing: "ease-in-out",
    });

    ScrollReveal().reveal(".Training-practices-img", {
      delay: 1000,
      distance: "50px",
      origin: "bottom",
      duration: 1000,
      easing: "ease-in-out",
    });

    ScrollReveal().reveal(".Training-practices-text", {
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
  dluxServiceMainPage(id: "7wQHdmJaVRKl1c6ZV0KDqu") {
    dluxServiceHeading
    dluxServiceImageManyCollection {
      items {
        url
      }
    }
  }
  Traning_ChangePage_TrainingandChangeManagement: dluxServiceMainPage(
    id: "5TkQSfwBxHfYX1cRpZAlOr"
  ) {
    dluxServiceHeading
    dluxServiceImage {
      url
    }
  }
  Traning_ChangePage_BuildingaFutureReadyWorkforce: dluxServiceMainPage(
    id: "5ywysJgDTkYQ6UwGZK5tnB"
  ) {
    dluxServiceHeading
    dluxServiceImageManyCollection {
      items {
        url
      }
    }
  }
  Traning_changePage_WhyChooseDLUX: dluxServiceMainPage(
    id: "7qIQuJULAmokyEPJ1DVRwa"
  ) {
    dluxServiceHeading
    dluxServiceImageManyCollection {
      items {
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
                 Traning_ChangePage_TrainingandChangeManagement: [
                     data.Traning_ChangePage_TrainingandChangeManagement,
                 ],
                 Traning_ChangePage_BuildingaFutureReadyWorkforce: [
                     data.Traning_ChangePage_BuildingaFutureReadyWorkforce,
                 ],
                 Traning_changePage_WhyChooseDLUX: [
                     data.Traning_changePage_WhyChooseDLUX,
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
    <div className="ServiceTraningandChange-wrapper">
    <div className='stac-nav'>
                <Navbar/>
                <Helmet>
        <title>Training & Change Management | Elevating Leaders | DLUX</title>
        <meta name="description" content="Gain insights, foster engagement, and drive positive transformations with our comprehensive change management training programs. Explore our expert solutions." />
        </Helmet>
            </div>
    <div className="serviceTraining-container">
      {/* Head section */}
      <div className="serviceTraning-img">
      <img src={page.dluxServiceMainPage[0].dluxServiceImageManyCollection.items[0].url} alt="Service Image"/>
      </div>
      <div className="serviceTraning-head-section">
        <h1 className="serviceTraning-head-text">
        {page.dluxServiceMainPage[0].dluxServiceHeading}
        </h1>
      </div>

      {/* Service section */}
      <section className="serviceTraning-section">
        <div className="serviceTraning-content">
          <div className="serviceTraning-left">
            <img src={page.Traning_ChangePage_TrainingandChangeManagement[0].dluxServiceImage.url} alt="Service Image" />
            
            <p className="leftTraning-text">
            As a top MarTech business consultant and an Adobe Bronze Solution Partner, we can help maximize the value of Adobe products and ensure the company maintains its competitiveness in the quickly changing marketing technology industry. We guarantee this through effective training and change management.  
            </p>
          </div>

          <div className="serviceTraning-right">
          <h1>{page.Traning_ChangePage_TrainingandChangeManagement[0].dluxServiceHeading}</h1>
            <p className="rightTraning-text">
            
            Change is a governing factor driving companies to navigate and adapt to changing market dynamics. At various junctures, businesses must adjust their operations to align with the ever-evolving MarTech landscape to reach the company's goals and objectives. <br/><br/> 
           Our team is well equipped with the latest insights, best practices, and industry trends. With training programs, we enable your team to welcome the change confidently, and our tailored strategy ensures that the guidance and assistance you get are in line with your aims and objectives. The training programs focus on marketing and technology tools that are designed to supercharge your team's proficiency in seamlessly utilizing Adobe Workfront, AEM, and other comprehensive tools like Salesforce, Aprimo, and DataIKU. <br/><br/>The purpose of change management is to cultivate innovation in technologies, workflows, and strategic approaches, propelling the organization to move up a gear from its current state to a desired future state.  
By fully leveraging our services, your organization embarks on a historic journey towards unparalleled adaptability to emerging market trends.<br/><br/> Within our organization, we proudly feature a team of certified experts whose proficiency enables them to tackle substantial challenges, particularly in facilitating effective team training and change management initiatives.  
            </p>
          </div>
        </div>
      </section>

      {/* Stack section */}
      <section className="stackTraning-section">
          <div className="vector1Traning-div">
          <img src={cubeT} alt="" className="vector1Traning" />
          </div>
          <div className="vector2Traning-div"> <img src={round} alt="" className="vector2" /></div>
         <div className="vector3Traning-div"><img src={round} alt="" className="vector3" /></div>
          </section>

      {/* Stand Gain section */}
      <section className="standTraining-section">
        <div className="standTraining-head"> {page.Traning_ChangePage_BuildingaFutureReadyWorkforce[0].dluxServiceHeading} </div>
        <div className="Training-progress-bar">
          <div className="Training-filled"></div>
        </div>
        <div className="Training-journey">
          <h1 className="Training-journey-head">Fostering Adaptability</h1>
          <p className="Training-journey-text">
          Employees who undergo extensive training and <br/>receive change management support are better <br/>equipped to adapt swiftly to changes, boosting<br/> efficiency faster. This flexibility promotes a constant<br/> improvement culture, enabling the workforce to stay<br/> ahead of challenges and seize growth opportunities.   
          </p>
        </div>
        <img src={page.Traning_ChangePage_BuildingaFutureReadyWorkforce[0].dluxServiceImageManyCollection.items[0].url} alt="" className="Training-journey-img" />

        <div className="Training-analysis">
          <h1 className="Training-analysis-head">Empowering Leaders Through Training</h1>
          <p className="Training-analysis-text">
          Training sessions cultivate empowering leaders within <br/>your team and equip them with skills essential for effective<br/> change management. The ability to understand and<br/> communicate information gained through training increases their<br/> capacity to guide team members, ensuring a flawless transition<br/> during periods of change
          </p>
          <p className="hide-on-laptop">
          Training sessions cultivate empowering leaders within your team and equip them with skills essential for effective change management. The ability to understand and communicate information gained through training increases their capacity to guide team members, ensuring a flawless transition during periods of change.
          </p>
        </div>
        <img src={page.Traning_ChangePage_BuildingaFutureReadyWorkforce[0].dluxServiceImageManyCollection.items[1].url} alt="" className="Training-analysis-img" />

        <div className="Training-rates">
        <h1 className="Training-rates-head">Encouraging Resilience and Productivity  </h1>
          <p className="Training-rates-text">
          Efficient change management can uplift spirits and enhance<br/> productivity, fostering a positive outlook among the teams <br/>toward the process of marketing evolution. This optimistic<br/> perspective strengthens resilience and motivates active<br/> participation, eventually pulling the organization closer to<br/> reaching its objectives.
          </p>
          <p className="hide-on-laptop1">
          Efficient change management can uplift spirits and enhance productivity, fostering a positive outlook among the teams toward the process of marketing evolution. This optimistic  perspective strengthens resilience and motivates active participation, eventually pulling the organization closer to reaching its objectives.
          </p>
        </div>
        <img src={page.Traning_ChangePage_BuildingaFutureReadyWorkforce[0].dluxServiceImageManyCollection.items[2].url} alt="" className="Training-rates-img" />
      </section>
     
      <section>
            <div className='serviceTraning-dlux'>
                <h1>{page.Traning_changePage_WhyChooseDLUX[0].dluxServiceHeading}</h1>
                <div className='serviceTraning-dlux-wrap'>
                <div className='serviceTraning-dlux-content'>
                    <div className='serviceTraning-dlux-content1'>
                    <div className='serviceTraning-dlux-img-text-wrap'>
                      <div className="serviceTraning-dlux-img">
                    <img src={page.Traning_changePage_WhyChooseDLUX[0].dluxServiceImageManyCollection.items[0].url}  alt="d1"/>
                    </div>
                    <div className="serviceTraning-dlux-text-left">
                    <h3>Cutting-Edge DL Technology</h3>
                    <p>Cutting-edge Deep Learning technology for adaptive and <br/>personalized training experiences.</p>
                    </div>
                    </div>
                    </div>
                    <div className='serviceTraning-dlux-content1'>
                    <div className='serviceTraning-dlux-img-text-wrap'>
                      <div className="serviceTraning-dlux-img">
                    <img src={page.Traning_changePage_WhyChooseDLUX[0].dluxServiceImageManyCollection.items[1].url} alt="d1"/>
                    </div>
                    <div className="serviceTraning-dlux-text-left">
                    <h3>  Seamless Change Integration</h3>
                    <p>Seamlessly integrates with change management processes,<br/> facilitating smooth transitions and targeted skill development.</p>
                    </div>
                    </div>
                    </div>
              
                    <div className='serviceTraning-dlux-content1'>
                    <div className='serviceTraning-dlux-img-text-wrap'>
                      <div className="serviceTraning-dlux-img">
                    <img src={page.Traning_changePage_WhyChooseDLUX[0].dluxServiceImageManyCollection.items[2].url} alt="d1"/>
                    </div>
                    <div className="serviceTraning-dlux-text-left">
                    <h3>  Data-Driven Improvement</h3>
                    <p>Detailed analytics for continuous optimization of training <br/>strategies, ensuring effective employee development and<br/> organizational growth. </p>
                    </div>
                    </div>
              
                    </div>
               
                    </div>
                    <div className='tranining-change-management-Dgif'>
                    <video className="gifT" autoPlay loop muted>
              <source src={page.Traning_changePage_WhyChooseDLUX[0].dluxServiceImageManyCollection.items[3].url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
                   </div>
                   </div>
               
               
                </div>
                
        </section>

        
        
      </div>
       <div className="train">
          <img src={train} alt="" />
        </div>

        <div className='stac-form'>
            <HForm/>
        </div>

        <div className='stac-footer'>
            <HomeFooter/>
        </div> 

        </div>
        
        </>
  );
};

export default ServiceTraningAndChange;