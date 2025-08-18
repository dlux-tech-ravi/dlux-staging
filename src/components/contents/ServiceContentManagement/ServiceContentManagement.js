import React, { useEffect, useState } from 'react'
import './ServiceContentManagement.css'
import crave from './ServiceContentAssets/Mask Group 90.png';
import damblink from './ServiceContentAssets/damblink.png';
import damdiamond from './ServiceContentAssets/damdiamond.png';
import damglobe from './ServiceContentAssets/damglobe.png';
import HForm from '../../HForm/HForm'
import Navbar from '../../Navbar'
import HomeFooter from '../../HomeFooter/HomeFooter';
import { Helmet } from 'react-helmet';

const ServiceContentManagement = () => {

/*Contentful*/
const query = `{
  dluxServiceMainPage(id:"3AT96xWfZNTg7hlxEdqlyz"){
    dluxServiceHeading
     dluxServiceImage{
              url
      }
    } 
    Content_DAM_Content_and_DAM: dluxServiceMainPage(id:"1k5WQKqVmzK1Vm0r8Rrf2g"){
      dluxServiceHeading
       dluxServiceImage{
                url
        }
     }
     Content_DAM_OurServices: dluxServiceMainPage(id:"1DEqTzP2Jo1l9IwpFwd4uh"){
      dluxServiceHeading
         dluxServiceImageManyCollection{
         items{
              url
        }
      }
    }
    Content_DAM_Key_Features:dluxServiceMainPage(id:"5uhaLT4joRQ6qosfxE1leR"){
      dluxServiceHeading
         dluxServiceImageManyCollection{
         items{
              url
        }
      }
    }

    Content_DAM_Why_Choose_Dlux:dluxServiceMainPage(id:"5zkNACqlxDX4j3LbdH2zGn"){
      dluxServiceHeading
       dluxServiceImage{
                url
        }
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
                 Content_DAM_Content_and_DAM: [
                     data.Content_DAM_Content_and_DAM,
                 ],
                 Content_DAM_OurServices: [
                     data.Content_DAM_OurServices,
                 ],
                 Content_DAM_Key_Features: [
                     data.Content_DAM_Key_Features,
                 ],
                 Content_DAM_Why_Choose_Dlux: [
                  data.Content_DAM_Why_Choose_Dlux,
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
    <div className="serviceContent-wrapper">
    <div className='cmad-nav'>
        <Navbar/>
        <Helmet>
        <title>Content Management & DAM | Leading DAM Services ANZ | DLUX</title>
        <meta name="description" content="Experience effortless collaboration and productivity with our one-of-a-kind CMS + DAM software solution. Simplify content management and enhance asset control." />
        </Helmet>
      </div>
    <div className="serviceContent-container">
        <img src={page.dluxServiceMainPage[0].dluxServiceImage.url} alt="" className="serviceContent-img" />
        <div className="serviceContent-headsection">
          <h1 className="serviceContent-headtext">{page.dluxServiceMainPage[0].dluxServiceHeading}</h1>
        </div>
        </div>
        <section className="serviceContent-section">
          <div className="serviceContent-content">
            <div className='serviceContent-content-wrap'>
            <div className="serviceContent-left">
              <img src={page.Content_DAM_Content_and_DAM[0].dluxServiceImage.url} alt="Service Image" />

              <div className="serviceContent-right">
              <h1>{page.Content_DAM_Content_and_DAM[0].dluxServiceHeading}</h1>
                <p className="rightContent-text">
                Do you find yourself grappling with disorganized content management, hindering your ability to<br/> reach your target audience effectively? Search no more!
<br/><br/>DLUX is partnered with Adobe and Aprimo, offering you a seamless solution to centralize the <br/>management of all your digital content. 
Embrace a simplified approach to content creation,<br/> organization, and delivery for enhanced efficiency.<br/><br/> We offer a comprehensive solution that fully empowers you to leverage your digital assets.<br/> Seamlessly create compelling content, efficiently organize it based on specific criteria, and <br/>easily distribute it to your intended audience.    
Employ the capabilities of our all-encompassing<br/> digital content and asset management solution, empowering your team to craft impactful brand <br/>experiences like never before. Also, experience a paradigm shift with our content management<br/> and digital asset management services, simplifying processes and letting
                creativity shine in the<br/> spotlight without the burden of manual efforts. 
                </p>
                {/* ----- */}
                      {/* ----- */}
            <p className="hide-on-laptop61">
                Do you find yourself grappling with disorganized content management, hindering your ability to reach your target audience effectively? Search no more!
<br/><br/>DLUX is partnered with Adobe and Aprimo, offering you a seamless solution to centralize the management of all your digital content. 
Embrace a simplified approach to content creation, organization, and delivery for enhanced efficiency.<br/><br/> We offer a comprehensive solution that fully empowers you to leverage your digital assets.Seamlessly create compelling content, efficiently organize it based on specific criteria, and easily distribute it to your intended audience.    
Employ the capabilities of our all-encompassing digital content and asset management solution, empowering your team to craft impactful brand experiences like never before. Also, experience a paradigm shift with our content management and digital asset management services, simplifying processes and letting
                creativity shine in the spotlight without the burden of manual efforts. 
                </p>
              </div>
            </div>
            </div>
      

            <div className='serviceContent-dlux-onestop-section'>
                <h1>DLUX - One-Stop Shop for Your <br/> Organization's Digital Assets!</h1>
               <p className='hide-on-mobile62'> We specialize in optimizing your content operations and maximizing the potential of our DAM implementation services. Our dedicated team<br/>
                of specialists excels at implementing automation and delivering exceptional content services, ensuring you generate valuable leads<br/>
                and drive substantial sales. Our streamlined approach fosters lead and sales growth and provides significant cost savings. DLUX<br/>
                makes content management tasks a breeze, injecting creativity and transforming them into something extraordinary!
                <br/><br/>
                 With DLUX, you can ensure your message reaches the right
                audience and delivers the right impact at the right time. Join us as we<br/> venture into the staggering arena of content management!</p>
{/* ------ */}
            </div>
            <p className='hide-on-laptop62'> We specialize in optimizing your content operations and maximizing the potential of our DAM implementation services. Our dedicated team
                of specialists excels at implementing automation and delivering exceptional content services, ensuring you generate valuable leads
                and drive substantial sales. Our streamlined approach fosters lead and sales growth and provides significant cost savings. DLUX
                makes content management tasks a breeze, injecting creativity and transforming them into something extraordinary!
                <br/><br/>
                 With DLUX, you can ensure your message reaches the right.
                audience and delivers the right impact at the right time. Join us as we venture into the staggering arena of content management!</p>


            <div className='serviceContent-OurServices'>
            <h1>Our Services</h1>
            <div className='serviceContent-OurServices-contentsection'>        
                <div className='serviceContent-OurServices-left'>
                    <img src={page.Content_DAM_OurServices[0].dluxServiceImageManyCollection.items[0].url} alt="scbulbicon" />
                    <h3 class="Serviceh3">Seamless Implementation</h3>
                    <p>Experience a smooth transition into advanced content <br/>management and DAM systems. Our team of experts will<br/> work closely with you to understand your business goals<br/> and optimize your content management and DAM systems,<br/> empowering you to efficiently organize, distribute, and<br/> track your digital assets.</p>

                </div>

                <div className='serviceContent-OurServices-right'>
                    <img src={page.Content_DAM_OurServices[0].dluxServiceImageManyCollection.items[1].url} alt="scpadicon" />
                    <h3>Strategic Consulting</h3>
                    <p>Navigate the complexities of content management with <br/>confidence. We provide strategic consulting services to<br/> guide your organization in maximizing the benefits of AEM<br/>  and Aprimo DAM. From optimizing workflows to enhancing <br/>collaboration, our consultants are dedicated to elevating<br/> your digital content strategies.  
</p>
                </div>
            </div>
            </div>
          </div>
        </section>
        <section>
            <div className='serviceContent-OurServices-Partnership'>
                <h1>{page.Content_DAM_Key_Features[0].dluxServiceHeading}</h1>
                <div className='ServiceContent-OurServices-Partnership-content'>
                    <div className='serviceContent-OurServices-Partnership-content1'>
                   <img src={page.Content_DAM_Key_Features[0].dluxServiceImageManyCollection.items[0].url} alt="part1"/>
                   <h2>Innovation-driven Solutions</h2>
                   <p>Stay ahead in the digital landscape with DLUX's innovation-<br/>driven solutions. Our partnership ensures that your <br/>organization is equipped with the most contemporary tools<br/> and strategies to create, organize, and deliver impactful <br/>brand experiences. </p>
                    </div>
                    <div className='serviceContent-OurServices-Partnership-content2'>
                   <img src={page.Content_DAM_Key_Features[0].dluxServiceImageManyCollection.items[1].url} alt="part1"/>
                   <h2>Powerhouse Collaboration</h2>
                   <p> DLUX collaborates with Adobe Experience Manager DAM and<br/> Aprimo DAM to create a powerhouse alliance, bringing<br/> together cutting-edge technologies to amplify your content<br/> management capabilities.</p>
                    </div>
                    </div>
                </div>
        </section>
        <section>
            <div className='serviceContent-OurServices-dlux'>
                <h1>{page.Content_DAM_Why_Choose_Dlux[0].dluxServiceHeading}</h1>
                <div className='serviceContent-OurServices-dlux-content-gif-wrap'>
                <div className='serviceContent-OurServices-dlux-content'>
                    <div className='serviceContent-OurServices-dlux-content1'>
                      <div className='serviceContent-OurServices-dlux-img-wrap'>
                      <div className='serviceContent-OurServices-dlux-img'>
                    <img src={page.Content_DAM_Why_Choose_Dlux[0].dluxServiceImageManyCollection.items[0].url} alt="d1"/>
                    </div>
                    <div className='serviceContent-OurServices-dlux-text'>
                    <h3> Expertise</h3>
                    <p>Benefit from our team's expertise in implementing and optimizing<br/> Adobe Experience Manager DAM and Aprimo DAM. Our consultants<br/> are committed to enhancing your content management journey. </p>
                    </div>
                    </div>
                    </div>
                    <div className='serviceContent-OurServices-dlux-content1'>
                    <div className='serviceContent-OurServices-dlux-img-wrap'>
                      <div className='serviceContent-OurServices-dlux-img'>
                    <img src={page.Content_DAM_Why_Choose_Dlux[0].dluxServiceImageManyCollection.items[1].url} alt="d1"/>
                    </div>
                    <div className='serviceContent-OurServices-dlux-text'>
                    <h3> Tailored Solutions</h3>
                    <p>Recognizing that every organization has unique requirements,<br/> DLUX provides tailored solutions that align with your specific goals<br/> and challenges. </p>
                    </div>
                    </div>
                    </div>
                  
                    <div className='serviceContent-OurServices-dlux-content1'>
                    <div className='serviceContent-OurServices-dlux-img-wrap'>
                      <div className='serviceContent-OurServices-dlux-img'>
                    <img src={page.Content_DAM_Why_Choose_Dlux[0].dluxServiceImageManyCollection.items[2].url} alt="d1"/>
                    </div>
                    <div className='serviceContent-OurServices-dlux-text'>
                    <h3>Future-Ready Approach</h3>
                    <p>Stay future-ready with DLUX's forward-thinking approach. Our<br/> partnership with Adobe Experience Manager DAM and Aprimo<br/> DAM ensures that your organization is prepared for evolving <br/>digital content trends.  </p>
                    </div>
                    </div>
                    </div>
                    </div>
                <div className='serviceContent-OurServices-dlux-Dgif'>
                <video className="dgif" autoPlay loop muted>
              <source src={page.Content_DAM_Why_Choose_Dlux[0].dluxServiceImage.url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
                    </div>
                    </div>             
                </div>              
        </section>
        <div className='crave1'>
         <img src={crave} alt="ogs_wave" />
          </div>

          <div className='dam-blinkystuffs'>
            <div className='dam-blink1'>
              <img src={damblink} alt="dam_blink" />

            </div>
            <div className='dam-blink2'>
            <img src={damblink} alt="dam_blink" />

            </div>
            <div className='dam-blink3'>
            <img src={damblink} alt="dam_blink" />

            </div>

            <div className='dam-diamond'>
              <img src={damdiamond} alt="dam_diamond" />            
              </div>

              <div className='dam-globe'>
                <img src={damglobe} alt="dam_globe" />
                </div>

          </div>

        <div className='cmad-form'>
            <HForm/>
        </div>

        <div className='cmad-footer'>
            <HomeFooter/>
        </div>


        </div>
       
    </>
  )
}

export default ServiceContentManagement