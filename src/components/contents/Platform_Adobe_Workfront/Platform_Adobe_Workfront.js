import React, { useState, useEffect } from 'react'
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import './Platform_Adobe_Workfront.css'
import { Link } from 'react-router-dom';
import Navbar from '../../Navbar'
import adwf_mainlogo from './Adobe_Workfront_Assests/adwf_mainlogo.png'
import adwf_adobe from './Adobe_Workfront_Assests/adwf_adobe.png'
import adwf_cer1 from './Adobe_Workfront_Assests/adwf_cer1.png'
import adwf_cer2 from './Adobe_Workfront_Assests/adwf_cer2.png'
import adwf_cer3 from './Adobe_Workfront_Assests/adwf_cer3.png'
import adwf_partner from './Adobe_Workfront_Assests/adwf_partner.png'
import adwf_c1 from './Adobe_Workfront_Assests/adwf_c1.png'
import adwf_c2 from './Adobe_Workfront_Assests/adwf_c2.png'
import adwf_c3 from './Adobe_Workfront_Assests/adwf_c3.png'
import adwf_icon1 from './Adobe_Workfront_Assests/adwf_icon1.png'
import adwf_icon2 from './Adobe_Workfront_Assests/adwf_icon2.png'
import adwf_icon3 from './Adobe_Workfront_Assests/adwf_icon3.png'
import adwf_icon4 from './Adobe_Workfront_Assests/adwf_icon4.png'
import adwf_icon5 from './Adobe_Workfront_Assests/adwf_icon5.png'
import adwf_sub1 from './Adobe_Workfront_Assests/adwf_sub1.png'
import adwf_sub2 from './Adobe_Workfront_Assests/adwf_sub2.png'
import adwf_sub3 from './Adobe_Workfront_Assests/adwf_sub3.png'
import adwf_sub4 from './Adobe_Workfront_Assests/adwf_sub4.png'
import adwf_sub5 from './Adobe_Workfront_Assests/adwf_sub5.png'
import adwf_lasvegas from './Adobe_Workfront_Assests/adwf_lasvegas.png'
import adwf_wave from './Adobe_Workfront_Assests/adwf_wave.png'
import adwf_blink1 from './Adobe_Workfront_Assests/adwf_blink1.png'
import adwf_blink2 from './Adobe_Workfront_Assests/adwf_blink2.png'
import adwf_blink3 from './Adobe_Workfront_Assests/adwf_blink3.png'
import adwf_blink4 from './Adobe_Workfront_Assests/adwf_blink4.png'
import adwf_cube from './Adobe_Workfront_Assests/adwf_cube.png'
import adwf_globe from './Adobe_Workfront_Assests/adwf_globe.png'
import HForm from '../../HForm/HForm'
import HomeFooter from '../../HomeFooter/HomeFooter';
import { Helmet } from 'react-helmet';



const Platform_Adobe_Workfront = () => {
  const [counterState,setCounterState]=useState(false)

  useEffect(() => {
    const handleScrollAnimation = () => {
      const elements = document.querySelectorAll('.adwf-animate-on-scroll');
      elements.forEach(element => {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight && position.bottom >= 0) {
          element.classList.add('adwf-animate');
        } else {
          element.classList.remove('adwf-animate');
        }
      });
    };

    window.addEventListener('scroll', handleScrollAnimation);

    return () => {
      window.removeEventListener('scroll', handleScrollAnimation);
    };
  }, []);

  return (
    <div className='platform-adobe-workfront-wrapper'>
      <div className='platform-adobe-workfront-nav'>
        <Navbar/>
        <Helmet>
        <title>Adobe Workfront Services | Implementation & Integration Support | DLUX</title>
        <meta name="description" content="Boost Project Management with Workfront consulting services. Optimize efficiency and streamline work lifecycles with this powerful Workflow automation software" />
        </Helmet>
      </div>

      <div className='platform-adobe-workfront-img-section'>
            <img src={adwf_mainlogo} alt='adwf_mainlogo'/>
      </div> 

      <div className='adwf-img-text'>
       <h1>Break Free from Silos,<br/> Fast-Track your Workflows</h1>
      </div> 
      
      <div className='adwf-container'>

        <div className='adwf-adobelogo-section'>
          <img src={adwf_adobe} alt='adwf_adobe'/>
            <div className='adwf-adobelogo-text'>
              <h3>Adobe Workfront - Your Ultimate Collaborator </h3>
              <p>Whether in IT consulting or running a marketing firm, Adobe Workfront</p>
              <p>provides a comprehensive project management platform. Our proven </p>
              <p>Workfront services go beyond implementation, offering strategic guidance, </p>
              <p>seamless setup, expert management, and ongoing support.</p>
              <br/>
              <p>With our dedicated team supporting you every step of the way, rest</p>
              <p>assured that complicated dashboards are a relic of a bygone era.</p>
              <p>Welcome a user-friendly experience with Adobe Workfront, where</p>
              <p>capabilities meet simplicity, paving the way for enhanced organizational</p>
              <p>prowess.</p>
              </div>
              <p className='hide-on-laptop2'> Whether in IT consulting or running a marketing firm, Adobe Workfront
              provides a comprehensive project management platform. Our proven 
              Workfront services go beyond implementation, offering strategic guidance, 
              seamless setup, expert management, and ongoing support.
              <br/><br/>
              With our dedicated team supporting you every step of the way, rest
              assured that complicated dashboards are a relic of a bygone era.
              Welcome a user-friendly experience with Adobe Workfront, where
              capabilities meet simplicity, paving the way for enhanced organizational
              prowess.</p>
           
        </div> 

        <div className='adwf-partnership-section'>
          <h1>DLUX and Adobe: A Partnership that<br/>Clicks Like Lego Blocks!</h1>
          <div className='adwf-partnership-text'>          
            <div className='adwf-partnership-subtext1'>
              <p>Transform your businesses with DLUX and Adobe Workfront</p>
              <p>that combines strategy, design, and technology. With</p>
              <p>Adobe's technology, DLUX unlocks the rich data repository</p>
              <p>of customers so you can better understand them and create</p>
              <p>meaningful interactions.</p>
            </div>
            <p className='hide-on-laptop22'  style={{fontSize:'12px'}}>Transform your businesses with DLUX and Adobe Workfront
              that combines strategy, design, and technology. With
              Adobe's technology, DLUX unlocks the rich data repository
              of customers so you can better understand them and create
              meaningful interactions.</p>

            <div className='adwf-partnership-subtext2'>
              <p>With over two years of successful partnerships, our automation,</p>
              <p>and customer-centric design leadership has driven revolutionary</p>
              <p>experiences and outcomes across various industries. DLUX, as an</p>
              <p>Adobe Specialized Partner for Workfront in Asia Pacific, are experts at </p>
              <p>integrating it all seamlessly for organizations, so you can ditch</p>
              <p>the silos and work as one incredible team.</p>
            </div>
            <p className='hide-on-laptop22' style={{fontSize:'12px'}}><br/>With over two years of successful partnerships, our automation,
              and customer-centric design leadership has driven revolutionary
              experiences and outcomes across various industries. DLUX, as an
              Adobe Specialized Partner for Workfront in Asia Pacific, are experts at 
              integrating it all seamlessly for organizations, so you can ditch
              the silos and work as one incredible team.</p>
          </div>

          <div className='adwf-partnership-numberanimation'>
          <ScrollTrigger onEnter={() => setCounterState(true)} onExit={() => setCounterState(false)}>
            <div className='adwf-partnership-number-flex'>
            <div className='adwf-partnership-number-certifications'>
              <div className='adwf_cer1-icon'>
                <img src={adwf_cer1} alt='adwf_cer1'/>
              </div>          
              <div className='adwf_cer1-no'>
                <h1>{ counterState && <CountUp start ={0} end={36}  duration={1.5}></CountUp>}+<h3>Certifications</h3></h1>
              </div>
            </div>

            <div className='adwf-partnership-number-employees'>
              <div className='adwf_cer2-icon'>
                <img src={adwf_cer2} alt='adwf_cer2'/>
              </div>
              <div className='adwf_cer2-no'>
                <h1>{ counterState && <CountUp start ={0} end={20}  duration={1.5}></CountUp>}+<h3>Certified Employees</h3></h1>
                
              </div>
            </div>
            
            <div className='adwf-partnership-number-specializations'>
              <div className='adwf_cer3-icon'>
                <img src={adwf_cer3} alt='adwf_cer3'/>
              </div>
              <div className='adwf_cer3-no'>
                <h1>{ counterState && <CountUp start ={0} end={1}  duration={1.5}></CountUp>}+<h3>Specializations</h3></h1>
              </div>
            </div>
          </div>
          </ScrollTrigger>
          </div>
        </div>
       

        <div className='adwf-solution-partner-section'>
          <img src={adwf_partner} alt="adwf_partner"/> 
          <img src={adwf_c1} alt="adwf_c1"/>
          <img src={adwf_c2} alt="adwf_c2"/>
          <img src={adwf_c3} alt="adwf_c3"/>
        </div>

        <div className='adwf-choose-section'>

          <div className='adwf-choose-leftcontent'>
            <div className='adwf-choose-head'>
              <h1>Why Choose <br/>Workfront ?</h1>
              <h4>Work Simpler. Smarter. Connected</h4>
            </div>

            <div className='adwf-choose-text1'>
              <img src={adwf_icon1} alt="adwf_icon1"/>
              <h3>Centralized Workspace</h3>
              <p>Access all project-related information, documents, and</p>
              <p>communication on one centralized platform, promoting</p>
              <p>better organization and collaboration.</p>
              
            </div>
            {/* ----- */}
            <p className='hide-on-laptop211'>Access all project-related information, documents, and
              communication on one centralized platform, promoting
              better organization and collaboration.</p>

            <div className='adwf-choose-text2'>
              <img src={adwf_icon2} alt="adwf_icon2"/>
              <h3>Better Resource Management</h3>
              <p>Enhanced visibility into resource allocation, helping teams</p>
              <p>optimize their workforce and prevent bottlenecks. With</p>
              <p>real-time collaboration features, teams can communicate</p>
              <p>more effectively and stay aligned on project goals.</p>
            </div>
            {/* ----- */}
            <p  className='hide-on-laptop211'>Enhanced visibility into resource allocation, helping teams
              optimize their workforce and prevent bottlenecks. With
              real-time collaboration features, teams can communicate
              more effectively and stay aligned on project goals.</p>
          </div>

          <div className='adwf-choose-rightcontent'>
            <div className='adwf-choose-text3'>
              <img src={adwf_icon3} alt="adwf_icon3"/>
              <h3>Seamlessly Collaborate Anytime, Anywhere</h3>
              <p> Effortlessly facilitate collaboration across departments,</p>
              <p>automate workflows, establish standardized processes,</p>
              <p>and quickly strategize new projects from any location.</p>
            </div>
            {/* ----- */}

              <p  className='hide-on-laptop211'> Effortlessly facilitate collaboration across departments,
              automate workflows, establish standardized processes,
              and quickly strategize new projects from any location.</p>

            <div className='adwf-choose-text4'>
              <img src={adwf_icon4} alt="adwf_icon4"/>
              <h3>Customization and Scalability</h3>
              <p>Tailored platform to meet the unique requirements of</p>
              <p>different teams and projects and achieve the success of</p>
              <p>growing organizations.</p>
            </div>
            {/* ---- */}
            <p  className='hide-on-laptop211'>Tailored platform to meet the unique requirements of
              different teams and projects and achieve the success of
              growing organizations.</p>


            <div className='adwf-choose-text5'>
              <img src={adwf_icon5} alt="adwf_icon5"/>
              <h3>Analytics and Insights</h3>
              <p>Provides analytics and reporting tools to track project</p>
              <p>performance and identify areas for improvement.</p>
             
            </div>
             {/* ---- */}
             <p className='hide-on-laptop211'>Provides analytics and reporting tools to track project
              performance and identify areas for improvement.</p>
            </div>
          </div>         
        </div>

        <div className='adwf-success-story-section'>

          <div className='adwf-success-story-head'>
            <h1>Explore the DLUX Way: We craft your success story,<br/>one process at a time</h1>
          </div>

          <div className='adwf-success-story-imagescroll'>
            <div className='adwf-image-text-container1 adwf-animate-on-scroll'>
              <div className='adwf-images1animation' >
                <img src={adwf_sub1} alt="adwf_sub1"/>
               </div>
              <div className='adwf-text-animation'>
              <h3>Center of Excellence</h3>
              <p> Imagine work flowing seamlessly, your team</p>
              <p>collaborating effortlessly, and projects landing on time</p>
              <p>every time. That's the DLUX difference. We're your</p>
              <p>trusted partner in the Adobe universe, helping you</p>
              <p>unlock the full potential of Workfront.</p>

          
              </div>
         
            </div>
            <p className='hide-on-laptop23'> Imagine work flowing seamlessly, your team
              collaborating effortlessly, and projects landing on time
              every time. That's the DLUX difference. We're your
              trusted partner in the Adobe universe, helping you
              unlock the full potential of Workfront.</p>

            <div className='adwf-image-text-container2 adwf-animate-on-scroll'>
              <div className='adwf-images2animation'>
               <img src={adwf_sub2} alt="adwf_sub2"/>
              </div>
              <div className='adwf-text-animation'>
                <h3>Certified Expertise</h3>
                <p> Our team is packed with certified Adobe professionals</p>
                <p>who specialize in Workfront deployment across diverse</p>
                <p>domains. We train your team and are ready to guide</p>
                <p>you through every step. From strategic planning to</p>
                <p>flawless implementation, we'll be there, prepared to</p>
                <p>slay any roadblock that comes your way.</p>
              </div>
            </div>
            <p className='hide-on-laptop23'> Our team is packed with certified Adobe professionals
                who specialize in Workfront deployment across diverse
                domains. We train your team and are ready to guide
                you through every step. From strategic planning to
                flawless implementation, we'll be there, prepared to
                slay any roadblock that comes your way.</p>

            <div className='adwf-image-text-container3 adwf-animate-on-scroll'>
              <div className='adwf-images3animation'>
              <img src={adwf_sub3} alt="adwf_sub3"/>
              </div>
              <div className='adwf-text-animation'>
               <h3>Comprehensive Approach</h3>
               <p>Our approach encompasses strategic analysis and post-</p>
               <p>deployment support, ensuring tailored solutions that</p>
               <p>align with your organization's unique requirements. Our</p>
               <p>commitment extends beyond consultation; we become</p>
               <p>your trusted partners, working collaboratively to drive</p>
               <p>success.</p>
              </div>
            </div>
            <p className='hide-on-laptop23'>Our approach encompasses strategic analysis and post-
               deployment support, ensuring tailored solutions that
               align with your organization's unique requirements. Our
               commitment extends beyond consultation; we become
               your trusted partners, working collaboratively to drive
               success.</p>

            <div className='adwf-image-text-container4 adwf-animate-on-scroll'>
              <div className='adwf-images3animation'>
                <img src={adwf_sub4} alt="adwf_sub4"/>
              </div>
              <div className='adwf-text-animation'>
               <h3>Affordable Solutions</h3>
               <p>We acknowledge the significance of budgets and provide</p>
               <p>consulting solutions and Workfront accelerators.</p>
               <p>Through this strategic approach, we ensure our clients</p>
               <p>receive impactful outcomes that maximize value.</p>
              </div>
            </div>
            <p className='hide-on-laptop23'>We acknowledge the significance of budgets and provide
               consulting solutions and Workfront accelerators.
               Through this strategic approach, we ensure our clients
               receive impactful outcomes that maximize value.</p>

            <div className='adwf-image-text-container5 adwf-animate-on-scroll'>
              <div className='adwf-images5animation'>
                <img src={adwf_sub5} alt="adwf_sub5"/>
              </div>
              <div className='adwf-text-animation'>
                <h3>Proven Results</h3>
                <p>The digital world constantly evolves, and we're committed</p>
                <p>to outpacing the competition. We are equipped with the</p>
                <p>latest knowledge and tools to optimize your processes and</p>
                <p>keep you at the forefront. Our track record showcases</p>
                <p>successful transformations and enhanced work</p>
                <p>management efficiency for our clients.</p>
              </div>
            </div>
            <p className='hide-on-laptop23'>The digital world constantly evolves, and we're committed
                to outpacing the competition. We are equipped with the
                latest knowledge and tools to optimize your processes and
                keep you at the forefront. Our track record showcases
                successful transformations and enhanced work
                management efficiency for our clients.</p>
          </div>
        </div> 


      {/* levelupsection */}

        {/* <div className='adwf-levelup-section'>
            <h1>Level Up Your Marketing at<br/> Adobe Summit 2024</h1>
            <div className='adwf-levelup-text'>
              <div className='adwf-levelup-para'>
              <p className='hide-on-mobile222'>Experience the latest in AI, content management, and personalized<br/>  marketing at Adobe Summit 2024. Witness the groundbreaking potential<br/> of Adobe Cloud Services and explore innovative marketing strategies<br/>  from leading Aussie and North American brands. Join us and gain insights <br/> from industry leaders, including our CEO, Luxman Pai as we level up<br/>  marketing approaches together.</p>
             
                <div className='adwf-levelup-btn'>
  
                <Link to='https://calendly.com/luxmanpai/30min' ><button ><h6>Get on Lux's calendar</h6></button></Link> 
                </div> 
                
                </div>
                <div className='hide-on-laptop222'>
                <div className='adwf-levelup-adwf_lasvegass'>
                <img src={adwf_lasvegas} alt='adwf_lasvegas' />
                </div> 
                <p >Experience the latest in AI, content management, and personalized marketing at Adobe Summit 2024. Witness the groundbreaking potential of Adobe Cloud Services and explore innovative marketing strategies from leading Aussie and North American brands. Join us and gain insights from industry leaders, including our CEO, Luxman Pai as we level up  marketing approaches together.</p>
                </div>
                
              

              <div className='adwf-levelup-adwf_lasvegas'>
                <img src={adwf_lasvegas} alt='adwf_lasvegas' />
              </div>      
            </div>
          
        </div>  */}

        <div className='adwf-animationstuffs'>
          <div className='adwf-blinkystuff1'><img src={adwf_blink1} alt="adwf_blink1"/></div>
          <div className='adwf-blinkystuff2'><img src={adwf_blink2} alt="adwf_blink2"/></div>
          <div className='adwf-globe'><img src={adwf_globe} alt="adwf_globe"/></div>
          <div className='adwf-blinkystuff3'><img src={adwf_blink3} alt="adwf_blink3"/></div>
          <div className='adwf-blinkystuff4'><img src={adwf_blink4} alt="adwf_blink4"/></div>
          <div className='adwf-cube'><img src={adwf_cube} alt="adwf_cube"/></div>
         </div>

        <div className='adwf-wave'>
            <img src={adwf_wave} alt="adwf_wave" />
        </div>

        <div className='adwf-form'>
            <HForm/>
        </div>

        <div className='adwf-footer'>
            <HomeFooter/>
        </div> 

      </div>


    
  )
}

export default Platform_Adobe_Workfront