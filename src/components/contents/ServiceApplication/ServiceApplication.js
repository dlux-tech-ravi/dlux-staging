import React, { useEffect, useState } from "react";
import './ServiceApplication.css'
import diamond from './ServiceApplicationAssets/diamond.png'
import loadingsymbol from './ServiceApplicationAssets/loading-symbol.png'
import corner11 from './ServiceApplicationAssets/Mask Group 90.png'
import HForm from '../../HForm/HForm'
import Navbar from '../../Navbar'
import HomeFooter from '../../HomeFooter/HomeFooter';
import { Helmet } from 'react-helmet';

const ServiceApplication = () => {

/*Contentful*/
const query = `
{
  dluxServiceMainPage(id:"2foNr3XkxX7F7DvuuJgc2S"){
    dluxServiceHeading
     dluxServiceImage{
            url
     }
   }
  ManagedApplicationPage_ManagedApplicationServices: dluxServiceMainPage(id:"BDo8geqovjCX5mWGTMy5e"){
    dluxServiceHeading
     dluxServiceImageManyCollection{
       items{
            url
      }
     }
   }
  ManagedApplicationPage_AMSReinvented: dluxServiceMainPage(id:"3nglsPthwGgyDdophhQjV6"){
    dluxServiceHeading
     dluxServiceImageManyCollection{
       items{
            url
      }
     }
  }
  ManageApplicationPage_Our_One_Of_A_KindApproach: dluxServiceMainPage(id:"7zkrrmRfhNQvYWmgEqmG2k"){
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
                 ManagedApplicationPage_ManagedApplicationServices: [
                     data.ManagedApplicationPage_ManagedApplicationServices,
                 ],
                 ManagedApplicationPage_AMSReinvented: [
                     data.ManagedApplicationPage_AMSReinvented,
                 ],
                 ManageApplicationPage_Our_One_Of_A_KindApproach: [
                     data.ManageApplicationPage_Our_One_Of_A_KindApproach,
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
    
    <div className='serviceApplication-wrapper'>
    <div className='serviceApplication-nav'>
               <Navbar/>
               <Helmet>
        <title>Managed Application Services | Expert Solutions | DLUX</title>
        <meta name="description" content="This is a description of my page" />
        </Helmet>
            </div>
    <div className="serviceApplication-container">
        <img src={page.dluxServiceMainPage[0].dluxServiceImage.url} alt="" className="serviceApplication-img" />
        <div className="service-head-Application">
          <h1 className="serviceApplication-head-text">
          {page.dluxServiceMainPage[0].dluxServiceHeading}
          </h1>
        </div>
        
        <section className="serviceApplication-section">
          <div className="serviceApplication-content">
            <div className="serviceApplication-left">
              <img src={page.ManagedApplicationPage_ManagedApplicationServices[0].dluxServiceImageManyCollection.items[0].url} alt="ServiceApplication Image" />

              <p className="leftApplication-text">
              Hold on a moment... What makes us break out of the mold of other application management providers? What distinguishes us as the unique trailblazers in the industry?   
<br/><br/>When it comes to services, we go beyond mere management and  strive to optimize your ROI in business applications. We focus on enhancing responsiveness and productivity, maximizing your resources for optimal results. Our team goes above and beyond by reimagining and using workflow automation to manage your most important business applications.    
              </p>

              <div className="serviceApplication-right">
                <h3>{page.ManagedApplicationPage_ManagedApplicationServices[0].dluxServiceHeading}</h3>
                <p className="rightApplication-text">
                Have you encountered a situation where handling business applications gets complex? Is a bug putting your entire team at risk? Here is where Managed Application Services (AMS) stands as a lifesaver whenever your IT team has lots to get on with. DLUX offers advisory-led Application Managed Services to address organizations' challenges in managing applications throughout their lifecycle.  <br/><br/>
We have dedicated, certified experts who specialize in maintaining and understanding your applications. Our approach assesses your organization's capabilities and personalizes services to meet your unique business needs. With our expertise and support, you can navigate custom and business application complexities effortlessly, and ensure maximum value and ROI from your applications.  <br/>
<br/> From strategic planning and smooth deployment to continuous maintenance and steadfast support, we manage every stage of your business's application lifecycle.  When the need arises in work management, we move quickly to ensure a fluid flow that seamlessly incorporates upgrades and changes into the framework of your organization.  
 <br/><br/> Our expert team collaborates closely with yours to design, build, and configure custom-tailored solutions that integrate seamlessly with your existing infrastructure. With rigorous testing and proven deployment strategies, we ensure a smooth transition and a flawless user experience. We also continuously monitor and optimize your application for peak performance, security, and alignment with your evolving needs. Trust us to handle every detail so you may zero in on your company's success.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="standApplication-section">
          <div className="standApplication-head">{page.ManagedApplicationPage_AMSReinvented[0].dluxServiceHeading}</div>
          <div className='StandApplication-div'>
          <div className='StandApplication-content'>
           <img src={page.ManagedApplicationPage_AMSReinvented[0].dluxServiceImageManyCollection.items[0].url} alt="StandApplication Image" />
           <h1>Data Management</h1>
           <p className='hide-mobile'>We meticulously manage your application data journey.<br/> From the initial import/export process to nurturing it with<br/> thorough data cleansing, we ensure every bit is carefully <br/>archived, stored, and safeguarded for the long haul. Your<br/> data's security and integrity are our top priorities, <br/>guaranteeing its resilience and reliability as your <br/>organization evolves.  

</p>       
{/* ------- */}
<p className='hide-on-laptop80'>We meticulously manage your application data journey.From the initial import/export process to nurturing it with thorough data cleansing, we ensure every bit is carefully archived, stored, and safeguarded for the long haul. Your data's security and integrity are our top priorities, guaranteeing its resilience and reliability as your organization evolves.  

</p>
          </div>
          <div className='StandApplication-content11'>
           <img src={page.ManagedApplicationPage_AMSReinvented[0].dluxServiceImageManyCollection.items[1].url} alt="StandApplication Image" />
           <h1>Application Performance and Management</h1>
           <p className='hide-mobile'>We're a diverse team of experts passionate about optimizing<br/> your applications for seamless efficiency. With our expertise, <br/>you  can trust your applications to work like clockwork without <br/>hiccups or slowdowns.We prioritize enhancing performance and <br/>user experience, exceeding your expectations as your business<br/> expands.</p>
         {/* ---- */}
         <p className='hide-on-laptop80'>We're a diverse team of experts passionate about optimizing your applications for seamless efficiency. With our expertise, you  can trust your applications to work like clockwork without hiccups or slowdowns.We prioritize enhancing performance and user experience, exceeding your expectations as your business expands.</p>
          </div>
          </div>
          <div className='StandApplication-div1'>
          <div className='StandApplication-content1'>
           <img src={page.ManagedApplicationPage_AMSReinvented[0].dluxServiceImageManyCollection.items[2].url} alt="StandApplication Image1" />
           <h1>Upgrades and Patching Best Practices</h1>
           <p className='hide-mobile'>Stay ahead of the curve with our seamless application upgrade<br/> and patching services. Our experts will ensure your applications <br/> are always up-to-date with the newest features, enhancements, <br/>and security patches to mitigate risks and maintain compliance. <br/>Let us take care of the technical complexities so you can fully<br/> refocus on fostering innovation and accomplishing your <br/>company's objectives.</p>
           <p className='hide-on-laptop80'>Stay ahead of the curve with our seamless application upgrade and patching services. Our experts will ensure your applications  are always up-to-date with the newest features, enhancements, and security patches to mitigate risks and maintain compliance. Let us take care of the technical complexities so you can fully refocus on fostering innovation and accomplishing your company's objectives.</p>
          </div>
          <div className='StandApplication-content12'>
           <img src={page.ManagedApplicationPage_AMSReinvented[0].dluxServiceImageManyCollection.items[3].url} alt="StandApplication Image1" />
           <h1>User-Focused  Monitoring Systems</h1>
           <p className='hide-mobile'>We oversee the entire development cycle, from testing to<br/>  production. Our team delves into SQL databases, extracting<br/> insights to optimize performance. We're not just about,<br/> numbers; we care about your application's ecosystem.,<br/> With meticulous tracking of metrics, we ensure smooth,<br/> operations and readiness for any challenge. Consider us your <br/>partners, committed to your success every step of the way.</p>
           <p className='hide-on-laptop80'>We oversee the entire development cycle, from testing to production. Our team delves into SQL databases, extracting, insights to optimize performance. We're not just about, numbers; we care about your application's ecosystem., With meticulous tracking of metrics, we ensure smooth, operations and readiness for any challenge. Consider us your partners, committed to your success every step of the way.</p>
          </div>
          </div>
          </section>

          <section className="ApplicationWorks-section">
          <div className="Works">
            <h1 className="Applicationprocess-head">
            {page.ManageApplicationPage_Our_One_Of_A_KindApproach[0].dluxServiceHeading}
            </h1>
            <div className='Applicationprocess-align'>
            <div className='Applicationprocess-align-img'>
            <img src={page.ManageApplicationPage_Our_One_Of_A_KindApproach[0].dluxServiceImageManyCollection.items[0].url} alt="" />
            </div>
            <div className='Applicationprocess-align-text'>
            <h5>Effective application management services</h5>
            <p className='hide-mobile'>DLUX manages your business's applications for peak performance, <br/>ensuring smooth operation and efficiency.</p>
            <p className='hide-on-laptop80'>DLUX manages your business's applications for peak performance, ensuring smooth operation and efficiency.</p>
            </div>
            </div>
            <div className='Applicationprocess-align'>
            <div className='Applicationprocess-align-img'>
            <img src={page.ManageApplicationPage_Our_One_Of_A_KindApproach[0].dluxServiceImageManyCollection.items[1].url} alt="" />
            </div>
            <div className='Applicationprocess-align-text'>
            <h5>Monitoring and troubleshooting</h5>
            <p className='hide-mobile'>We diligently maintain your applications, preempting disruptions<br/> with proactive troubleshooting.  </p>
            <p className='hide-on-laptop80'>We diligently maintain your applications, preempting disruptions with proactive troubleshooting.  </p>
            </div>
            </div>

            <div className='Applicationprocess-align'>
            <div className='Applicationprocess-align-img'>
            <img src={page.ManageApplicationPage_Our_One_Of_A_KindApproach[0].dluxServiceImageManyCollection.items[2].url} alt="" />
            </div>
            <div className='Applicationprocess-align-text'>
            <h5>Robust technical support team  </h5>
            <p  className='hide-mobile'>Our skilled team optimizes, upgrades, and troubleshoots to boost <br/>your system's performance.  </p>
            <p className='hide-on-laptop80'>Our skilled team optimizes, upgrades, and troubleshoots to boost your system's performance.  </p>
            </div>
            </div>
            </div>
          <div className='gifA'>
          <video className="gifA" autoPlay loop muted>
              <source src={page.ManageApplicationPage_Our_One_Of_A_KindApproach[0].dluxServiceImageManyCollection.items[3].url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className='applications-rotatestuffs'>
            <div className='applications-stuff1'>
              <img src={diamond} alt="diamond" />
            </div>

              <div className='applications-stuff2'>
              <img src={loadingsymbol} alt="loadingsymbol" />
              </div>


          </div>
          </section>
          </div>
         
          <div className='corner11'>
         <img src={corner11} alt="services_application_wave" />
          </div>
        

        <div className='serviceapplication-form'>
            <HForm/>
        </div>

        <div className='serviceapplication-footer'>
            <HomeFooter/>
        </div>

        </div>
        
    </>
   
  )
}

export default ServiceApplication