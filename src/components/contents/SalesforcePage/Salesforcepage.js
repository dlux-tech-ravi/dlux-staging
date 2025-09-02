import React from 'react'
import './SalesforcePage.css';
import s1 from './SalesforceAssets/Group 971.png';
import s2 from './SalesforceAssets/Group 1307.png';
import s3 from './SalesforceAssets/Mask Group 217.png';
import s4 from  './SalesforceAssets/Mask Group 218.png';
import s5 from './SalesforceAssets/Mask Group 219.png';
import s6 from './SalesforceAssets/Mask Group 220.png';
import s7 from './SalesforceAssets/Mask Group 221.png';
import s8 from './SalesforceAssets/Mask Group 227.png';
import s9 from './SalesforceAssets/Mask Group 224.png';
import s10 from './SalesforceAssets/Mask Group 226.png';
import s11 from './SalesforceAssets/Mask Group 225.png';
import salesdiamond from './SalesforceAssets/Group 1207.png';
import salescube from './SalesforceAssets/Group 1334.png';
import salesblink1 from './SalesforceAssets/Rectangle 727.png';
import salesblink2 from './SalesforceAssets/Rectangle 829.png';
import salesblink3 from './SalesforceAssets/Rectangle 829.png';
import HForm from '../../HForm/HForm'
import Navbar from '../../Navbar'
import HomeFooter from '../../HomeFooter/HomeFooter';
import { Helmet } from 'react-helmet';
const Salesforcepage = () => {
  return (
    <>
    <div className='salesforce-page-wrapper'>
    <div className='salesforce-page-nav'>
                <Navbar/>
                <Helmet>
        <title>Salesforce Implementation Partner | Marketing Cloud Solution | DLUX</title>
        <meta name="description" content="Your customer universe, all in one place. Your trusted Salesforce partner company integrating sales, service, marketing, and commerce on a single platform." />
        </Helmet>
            </div>
    <div className="serviceSalesForce-container">
        <img src={s1} alt="" className="serviceSalesForce-img" />
        <div className="serviceSalesForce-headsection">
          <h1 className="serviceSalesForce-headtext">
         
          Let's Salesforce Your Success Story <br/>
          Integrate. Automate. Optimize  
          </h1>
        </div>
    </div>
    <section className="serviceSalesForce-section">
        <div className="serviceSalesForce-content">
          <div className="serviceSalesForce-left">
            <img src={s2} alt="Service Image" />
            {/* <p className="leftSalesForce-text">
            We specialize in designing and implementing e-commerce and marketing programs infused with the power of analytics and AI. The goal is to facilitate seamless, personalized conversations for customers across all departments and channels. 
            </p> */}
          </div>

          <div className="serviceSalesForce-right">
            <h1>Crafting Customer 360 Experiences for <br/>Enhanced Relationships</h1>
            <p className="rightSalesForce-text">
            As a Salesforce Consulting Partner, we specialize in leveraging Salesforce cloud services<br/> to drive business transformation, focusing on streamlining customer relationship<br/> management and core business operations. With certified professionals who deeply<br/> understand your business challenges, we design and implement e-commerce and <br/>marketing programs infused with analytics and AI to facilitate personalized<br/>conversations across all channels. Backed by a team with a strong digital legacy,<br/> we deliver best-in-class solutions and frictionless customer experiences, deploying<br/> the Customer 360 model for top Fortune companies.
            </p>

            <p className="hide-on-laptop4">
            As a Salesforce Consulting Partner, we specialize in leveraging Salesforce cloud services to drive business transformation, focusing on streamlining customer relationship management and core business operations. With certified professionals who deeply understand your business challenges, we design and implement e-commerce and marketing programs infused with analytics and AI to facilitate personalized conversations across all channels. Backed by a team with a strong digital legacy, we deliver best-in-class solutions and frictionless customer experiences, deploying the Customer 360 model for top Fortune companies.
            </p>
          </div>
        </div>
      </section>
      {/* our services */}
      <section>
        <div className="serviceSalesForce-Ourservices">
          <div className='serviceSalesForce-ourservices1'>
            <h1>Our Services</h1>
            <p>Fueled by strategic marketing programs and fortified<br/> by analytics & AI, our approach addresses your customers'<br/> needs comprehensively. We seamlessly integrate sales,<br/> service, marketing, and ecommerce data across every<br/> touchpoint, amplifying the impact of meaningful<br/> customer moments. </p>
          </div>
          
          <div className='serviceSalesForce-ourservices2'>
            <img src ={s3} alt="" />
            <h1>Marketing Cloud</h1>
            <p>Elevate your marketing experience with our team of<br/> Certified Level II Marketing Cloud specialists. Armed<br/> with product certifications, we craft personalized<br/> marketing journeys at scale, ensuring the delivery of the<br/> right message at every opportunity. Going beyond<br/> traditional marketing approaches, our connected<br/> experience focus utilizes data across various domains <br/>to provide a holistic 360-degree view of customers.   </p>
          </div>
        </div>
        <div className="serviceSalesForce-Ourservices11">
        <div className='serviceSalesForce-ourservices3'>
            <img src ={s4} alt="" />
            <h1>Experience Cloud</h1>
            <p>As a top Experience Cloud partner with profound CMS<br/> experience and custom innovations, we redefine digital<br/> experiences. Leveraging our expertise in implementing<br/> enterprise CMS solutions and digital experience<br/> platforms, we empower global brands to fully harness<br/> Salesforce Experience Cloud.</p>
          </div>
          <div className='serviceSalesForce-ourservices4'>
            <img src ={s5} alt="" />
            <h1>Commerce B2B & B2C Cloud</h1>
            <p>Our seamless fusion of sales, service, and marketing<br/> data across Commerce destinations enhances customer<br/> shopping experiences. This end-to-end approach caters<br/> to customers' demands for convenience,<br/> personalization, and satisfaction, cultivating deeper<br/> relationships that encourage repeat business. </p>
          </div>
        </div>

        <div className="serviceSalesForce-Ourservices12">
        <div className='serviceSalesForce-ourservices5'>
            <img src ={s6} alt="" />
            <h1>Analytics AI Mastery</h1>
            <p>Harness the power of real-time experiences with our<br/> certified Tableau CRM and Einstein specialists. Anticipate <br/>customer needs and stay ahead with cutting-edge <br/>analytics and AI solutions</p>
          </div>
          <div className='serviceSalesForce-ourservices6'>
            <img src ={s7} alt="" />
            <h1>Cross-Cloud Systems Integration</h1>
            <p>As a legacy leader in integrating cross-cloud and<br/> external systems, we deliver connected data across<br/> sales and service, ensuring a cohesive and<br/> streamlined approach. 
Your complex challenges<br/> meet our complete expertise, driving enhanced personalized <br/>journeys at a rapid pace </p>
          </div>
        </div>
      </section>

      <section>
        <div className="serviceSalesForce-Follow">
          <h1>Best Practices We Follow </h1>
          <div className='serviceSalesForce-main'>
          <div className='ServiceSalesForce-Business'>
            <h2>360º View: Understanding of <br/>Your Business</h2>
            <p>Our consultants adopt a comprehensive 360º view of your <br/>current IT systems and Salesforce implementation,<br/> ensuring a thorough understanding. </p>
          </div>
          <div className='ServiceSalesForce-Business1'>
          <h2>01. Current Process Analysis </h2>
          <p>Focused on evaluating existing processes, our Salesforce consultants <br/>employ techniques to carry forward the strengths<br/> of the current implementation into the new iteration.</p>
          <h6 className='hide-on-laptop105'>Focused on evaluating existing processes, our Salesforce consultants employ techniques  to carry forward the strengths of the current implementation into the new iteration.</h6>
          <h2>02. In-Depth Exploration of Challenges  </h2>
          <p>The consulting process progresses by identifying bottlenecks in your<br/> existing IT systems and business functions, aiming to pinpoint the root<br/> of the problem and eliminate silos.</p>
          <h6 className='hide-on-laptop105'>The consulting process progresses by identifying bottlenecks in your existing IT systems and business functions, aiming to pinpoint the root of the problem and eliminate silos.</h6>
          </div>
          </div>


          <div className='serviceSalesForce-main'>
          <div className='ServiceSalesForce-Business'>
            <h2>Strategic Blueprint for Success </h2>
            <p>After gathering requirements, our consultants develop a<br/> strategic blueprint tailored to each client and their<br/> business, ensuring uniqueness.  </p>
          </div>
          <div className='ServiceSalesForce-Business1'>
          <h2>01. Salesforce Org Check <br/>(For Existing Salesforce Customers)</h2>
          <p>For businesses already using Salesforce, our consultants conduct a<br/> comprehensive analysis of the current Salesforce Org, forming the<br/> focal point for the new implementation.</p>
          <h6 className='hide-on-laptop105'>For businesses already using Salesforce, our consultants conduct a comprehensive analysis of the current Salesforce Org, forming the focal point for the new implementation.</h6>
          <h2>02. Creating a High-Level Architecture  </h2>
          <p>This document serves as the foundation for the new implementation, <br/>specifying Salesforce products, required licenses, and providing a<br/> general overview for the development phase</p>
          <h6 className='hide-on-laptop105'>This document serves as the foundation for the new implementation, specifying Salesforce products, required licenses, and providing a general overview for the development phase</h6>
          </div>
          </div>

          <div className='serviceSalesForce-main'>
          <div className='ServiceSalesForce-Businesspro'>
            <h2>Project Kick-Off</h2>
            <p>We facilitate acquisition of necessary Salesforce licenses<br/> by connecting you with Salesforce's account executives. </p>
          </div>
          <div className='ServiceSalesForce-Businessmain'>
          <div className='ServiceSalesForce-Business1main'>
          <h2>01. Connecting You with Salesforce <br/>(For New Customers) </h2>
          <p>Identifying the required licenses, we assist in acquiring them<br/> by involving Salesforce's account executives.</p>
          <h6 className='hide-on-laptop105'>Identifying the required licenses, we assist in acquiring them by involving Salesforce's account executives.</h6>
          <h2>02. Implementation/Customization Start  </h2>
          <p>In addition to consulting, we support you in implementing <br/>and customizing the Salesforce platform according to the<br/> devised solutions.</p>
          <h6  className='hide-on-laptop105'>In addition to consulting, we support you in implementing and customizing the Salesforce platform according to the devised solutions.</h6>
         </div>
          </div>
          </div>
            </div>
      </section>
      {/* next section */}
      <section>
        <div className='ServiceSalesforce-Dlux'>
          <h1>Why DLUX is the Right<br/>Choice for You</h1>
          
          <div className='PageSalesForce'>
          <div className='ServiceSalesForce-Dlux1'>
            <div className='ServiceSalesForce-Dluxmain'>
          <img src ={s8} alt="" />
          <h2>Certified Professionals</h2>
          <p>Our team comprises certified Salesforce professionals<br/> with expertise in multi-cloud environments.</p>
          </div>
          </div>
        
          <div className='ServiceSalesForce-Dlux2'>
            <div className='ServiceSalesForce-Dluxmain'>
          <img src ={s9} alt="" />
          <h2>Multi-Cloud Salesforce Expertise</h2>
          <p>We bring comprehensive expertise in Salesforce across <br/>multiple clouds, ensuring a holistic approach to your<br/> requirements.</p>
          </div>
          </div>
          </div>
          <div className='ServiceSalesForce-boxline2'>
          <div className='PageSalesForce'>
          <div className='ServiceSalesForce-Dlux1'>
            <div className='ServiceSalesForce-Dluxmain'>
          <img src ={s10} alt="" />
          <h2>Comprehensive End-To-End Support</h2>
          <p> DLUX provides extensive support throughout the<br/> consulting process, ensuring a seamless experience.</p>
          </div>
          </div>
        
          <div className='ServiceSalesForce-Dlux2'>
            <div className='ServiceSalesForce-Dluxmain'>
          <img src ={s11} alt="" />
          <h2>Vertical and Horizontal<br/> Realignment Planning</h2>
          <p>Our consultants assist in planning both vertical and<br/> horizontal realignment strategies for your business.</p>
          </div>
          </div>
          </div>
          </div>
        </div>
      </section>

      <div className='salesblinkystuffs'>
        <div className='salesblink1'>
          <img src={salesblink1} alt="salesblink1" />
        </div>

        <div className='salesblink2'>
          <img src={salesblink2} alt="salesblink2" />
        </div>

        <div className='salesblink3'>
          <img src={salesblink3} alt="salesblink3" />
        </div>

        <div className='salescube'>
          <img src={salescube} alt="salescube" />
          </div>

          <div className='salesdiamond'>
            <img src={salesdiamond} alt="salesdiamond" />
            </div>
      </div>


      <div className='salesforcepage-form'>
            <HForm/>
        </div>

        <div className='salesforcepage-footer'>
            <HomeFooter/>
        </div> 

      </div>
        
        </>
  )
}

export default Salesforcepage