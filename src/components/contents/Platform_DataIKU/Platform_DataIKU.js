import React,{ useEffect } from 'react'
import './Platform_DataIKU.css'
import Navbar from '../../Navbar'
import platform_dataiku_mainimg from './Platform_DataIKU_Assests/pdiku_main.png'
import pdiku_logo1 from './Platform_DataIKU_Assests/pdiku_logo1.png'
import pdiku_icon1 from './Platform_DataIKU_Assests/pdiku_icon1.png'
import pdiku_icon2 from './Platform_DataIKU_Assests/pdiku_icon2.png'
import pdiku_icon3 from './Platform_DataIKU_Assests/pdiku_icon3.png'
import pdiku_icon4 from './Platform_DataIKU_Assests/pdiku_icon4.png'
import pdiku_icon5 from './Platform_DataIKU_Assests/pdiku_icon5.png'
import pdiku_logo2 from './Platform_DataIKU_Assests/pdiku_logo2.png'
import pdiku_blink from './Platform_DataIKU_Assests/pdiku_blink.png'
import pdiku_globe from './Platform_DataIKU_Assests/pdiku_globe.png'
import pdiku_sub1 from './Platform_DataIKU_Assests/pdiku_sub1.png'
import pdiku_sub2 from './Platform_DataIKU_Assests/pdiku_sub2.png'
import pdiku_sub3 from './Platform_DataIKU_Assests/pdiku_sub3.png'
import pdiku_sub4 from './Platform_DataIKU_Assests/pdiku_sub4.png'
import pdiku_sub5 from './Platform_DataIKU_Assests/pdiku_sub5.png'
import pdiku_wave from './Platform_DataIKU_Assests/pdiku_wave.png'

import HForm from '../../HForm/HForm'
import HomeFooter from '../../HomeFooter/HomeFooter';
import { Helmet } from 'react-helmet';




const Platform_DataIKU = () => {

  useEffect(() => {
    const handleScrollAnimation = () => {
      const elements = document.querySelectorAll('.pdiku-animate-on-scroll');
      elements.forEach(element => {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight && position.bottom >= 0) {
          element.classList.add('pdiku-animate');
        } else {
          element.classList.remove('pdiku-animate');
        }
      });
    };

    window.addEventListener('scroll', handleScrollAnimation);

    return () => {
      window.removeEventListener('scroll', handleScrollAnimation);
    };
  }, []);


  return (
    <div className='platform-dataiku-wrapper'>
        <div className='platform-dataiku-nav'>
                <Navbar/>
                <Helmet>
        <title>Dataiku Consulting & Implementation Services | DLUX</title>
        <meta name="description" content="Dataiku empowers businesses with advanced analytics and insights, simplifying data workflows for smarter decision-making. Turn choices into conquests with us." />
        </Helmet>
            </div>

        <div className='platform-dataiku-img-section'>
            <img src={platform_dataiku_mainimg} alt='platform_dataiku_mainimg'/>
        </div>

        <div className='pdiku-img-text'>
            <h1>DLUX + Dataiku: AI your  Way,<br/> Tomorrow Today!</h1>
            </div>

        <div className='pdiku-container'>
            <div className='pdiku-partner-section'>
              <img src={pdiku_logo1} alt='pdiku_logo1'/>
                <div className='pdiku-partner-text'>
                  <h3>DLUX - Data Made Simple, Personalized Just for You!</h3>
                  <p>Tap into the potential of cutting-edge data analytics and AI with DLUX, a trusted  </p>
                  <p>leader as a Dataiku Consulting Partner. Operating as a premier service partner,</p>
                  <p>we leverage our profound expertise in systems integration and data to seamlessly</p>
                  <p>integrate and optimize the Dataiku platform for our clients. Our seasoned team,</p>
                  <p>equipped with profound industry expertise, support organizations of all sizes in</p>
                  <p>their Dataiku journey, serving both market-leading fortune companies and </p>
                  <p>emerging small to mid-size market entrants.</p>
                </div>
                <p className='hide-on-laptop5'>Tap into the potential of cutting-edge data analytics and AI with DLUX, a trusted  
                  leader as a Dataiku Consulting Partner. Operating as a premier service partner,
                  we leverage our profound expertise in systems integration and data to seamlessly
                  integrate and optimize the Dataiku platform for our clients. Our seasoned team,
                  equipped with profound industry expertise, support organizations of all sizes in
                  their Dataiku journey, serving both market-leading fortune companies and 
                  emerging small to mid-size market entrants.</p>
            </div>

            <div className='pdiku-services-section'>

              <div className='pdiku-services-heading'>
              <h1>Our services include</h1>
              </div>

              <div className='pdiku-services-boxes'>

                <div className="pdiku-services-BoxUp">
                  <div className="pdiku-services-Box1">
                    <div className="pdiku-services-Box1H">
                      <img src={pdiku_icon1} alt="pdiku_icon1"/>
                      <h3>ML/AI Enterprise Strategy <br/>Development</h3>
                    </div>
                    <div className="pdiku-services-Box1P">
                      <p>Tailor approaches seamlessly<br/>integrating cutting-edge ML/AI,<br/>ensuring strategic alignment with<br/>business objectives for optimal<br/>data-driven success.</p>
                    </div>
                  </div>

                    <div className="pdiku-services-Box2">
                      <div className="pdiku-services-Box2H">
                        <img src={pdiku_icon2} alt="pdiku_icon2"/>
                        <h3>DSS Training & Current <br/>State Evaluation</h3>
                      </div>
                      <div className="pdiku-services-Box2P">
                        <p>Empower teams with DSS training <br/>for advanced analytics capabilities. <br/>Conduct comprehensive current<br/>state evaluations to identify <br/>optimization opportunities and <br/>enhance data science capabilities.</p>
                      </div>
                    </div>

                    <div className="pdiku-services-Box3">       
                      <div className="pdiku-services-Box3H">
                        <img src={pdiku_icon3} alt="pdiku_icon3"/>
                        <h3>COE <br/>Development</h3>
                      </div>
                    <div className="pdiku-services-Box3P">
                        <p>Lead the creation of a strategic<br/>framework, empowering teams to<br/>effectively lead and optimize AI<br/>initiatives.</p>
                    </div>
                  </div>
                </div>

                <div className='pdiku-services-BoxDown'>
                  <div className="pdiku-services-Box4">
                    <div className="pdiku-services-Box4H">
                      <img src={pdiku_icon4} alt="pdiku_icon4"/>
                      <h3>Model Construction/Use Case Development</h3>
                    </div>
                    <div className="pdiku-services-Box4P">
                      <p> Leverage our model construction<br/>expertise for precision in developing<br/>robust machine learning models. Our<br/>use case development maximizes the<br/>practical application of AI, tailored to<br/>meet specific organizational needs.</p>
                    </div>
                  </div>

                  <div className="pdiku-services-Box5">
                    <div className="pdiku-services-Box5H">
                      <img src={pdiku_icon5} alt="pdiku_icon5"/>
                      <h3>DSS Implementation and Environment Set-Up</h3>
                    </div>
                    <div className="pdiku-services-Box5P">
                      <p>Ensure a smooth integration of Data<br/>Science Studio (DSS), establishing a<br/>robust environment that optimally<br/>supports advanced analytics and<br/>machine learning for data-driven<br/>workflows and analytics.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='pdiku-services-animationstuffs'>
                <div className='pdiku-services-blinkystuff1'><img src={pdiku_blink} alt="pdiku_blink"/></div>
                <div className='pdiku-services-blinkystuff2'><img src={pdiku_blink} alt="pdiku_blink"/></div>
                <div className='pdiku-services-globe'><img src={pdiku_globe} alt="pdiku_globe"/></div>
                <div className='pdiku-services-blinkystuff3'><img src={pdiku_blink} alt="pdiku_blink"/></div>
                <div className='pdiku-services-blinkystuff4'><img src={pdiku_blink} alt="pdiku_blink"/></div>
                {/* <div className='pdiku-services-load'><img src={pdiku_load} alt="pdiku_load"/></div> */}
              </div>
            </div>


          <div className='pdiku-client-centeric-section'>

            <div className='pdiku-client-centeric-content'>
              <h1>Our Client-Centric Approach</h1>
              <p>As a Dataiku Consulting Partner, we guide clients in
              architecting, deploying, and developing Dataiku platform
              solutions at an enterprise level.</p>
            </div>
            <img src={pdiku_logo2} alt="pdiku_logo2"/>

          </div>  

        </div>

        <div className='pdiku-differentiators-section'>

          <div className='pdiku-differentiators-head'>
            <h1>DLUX Dataiku <br/>Differentiators</h1>
          </div>

          <div className='pdiku-differentiators-imagescroll'>

            <div className='pdiku-image-text-container1 pdiku-animate-on-scroll'>
          <div className='pdiku-images1animation'>
            <img src={pdiku_sub1} alt="pdiku_sub1"/>
          </div>
          <div className='pdiku-text-animation'>
            <h1>01</h1>
            <h3>Dataiku Focus and Integration</h3>
            <p>As a Dataiku-first partner, our tight integration with</p>
            <p>their sales and engineering teams allows us to</p>
            <p>efficiently provide answers and solutions.</p>
          </div>
        </div>

            <div className='pdiku-image-text-container2 pdiku-animate-on-scroll'>
          <div className='pdiku-images2animation'>
            <img src={pdiku_sub2} alt="pdiku_sub2"/>
          </div>
          <div className='pdiku-text-animation'>
            <h1>02</h1>
            <h3>One-Stop Partner</h3>
            <p>As a comprehensive partner, we take charge of</p>
            <p>building, managing, coaching, and teaching teams on</p>
            <p>Dataiku, utilizing the best mindsets, skillsets, and </p>
            <p>toolsets in the industry. </p>
          </div>
        </div>
        <div className='pdiku-image-text-container3 pdiku-animate-on-scroll'>
          <div className='pdiku-images3animation'>
            <img src={pdiku_sub3} alt="pdiku_sub3"/>
          </div>
          <div className='pdiku-text-animation'>
            <h1>03</h1>
            <h3>Risk Reduction</h3>
            <p>By tapping into our Dataiku experts, critical path</p>
            <p>project risks are significantly reduced, ensuring</p>
            <p>successful outcomes. </p>
          </div>
        </div>
        <div className='pdiku-image-text-container4 pdiku-animate-on-scroll'>
          <div className='pdiku-images3animation'>
            <img src={pdiku_sub4} alt="pdiku_sub4"/>
          </div>
          <div className='pdiku-text-animation'>
            <h1>04</h1>
            <h3>Reduced Rework</h3>
            <p>Our experts ensure correct architecture and solution</p>
            <p>decisions from the start, minimizing technical debt</p>
            <p>and avoiding prolonged maintenance modes.</p>
          </div>
        </div>
        <div className='pdiku-image-text-container5 pdiku-animate-on-scroll'>
          <div className='pdiku-images5animation'>
            <img src={pdiku_sub5} alt="pdiku_sub5"/>
          </div>
          <div className='pdiku-text-animation'>
            <h1>05</h1>
            <h3>Outcomes Focus</h3>
            <p>We prioritize positive business outcomes over mere</p>
            <p>outputs, aligning our efforts to drive value and</p>
            <p>effective decision-making.</p>
          </div>
        </div>

        </div>

            

        </div> 

        <div className='pdiku-wave'>
              <img src={pdiku_wave} alt="pdiku_wave" />
        </div>

          <div className='pdiku-form'>
            <HForm/>
        </div>

        <div className='pdiku-footer'>
            <HomeFooter/>
        </div> 

    </div>
  );
};

export default Platform_DataIKU