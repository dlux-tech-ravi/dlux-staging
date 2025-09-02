import React, { useEffect } from 'react'
import './Platform_Adobe_AEM.css'
import Navbar from '../../Navbar'
import platform_aem_mainimg from './Platform_Adobe_Assets/AEM_main-img.png';
import aemLogo from './Platform_Adobe_Assets/AEM_Logo.png'
import content_hand from './Platform_Adobe_Assets/content.png'
import implementation from './Platform_Adobe_Assets/implementation.png'
import teamAugmentation from './Platform_Adobe_Assets/teamAugmentation.png'
import migrationUpgrade from './Platform_Adobe_Assets/migration.png'
import experienceDesign from './Platform_Adobe_Assets/designStrategy.png'
import customIntegration from './Platform_Adobe_Assets/customIntegrations.png'
import assetAutomation from './Platform_Adobe_Assets/assetAutomation.png'
import implementationIntegration from './Platform_Adobe_Assets/implementationIntegration.png'
import supportOptimize from './Platform_Adobe_Assets/supportOptimization.png'
import migrationExp from './Platform_Adobe_Assets/migrationExpertise.png'
import criticalTime from './Platform_Adobe_Assets/criticalSupport.png'
import amg from './Platform_Adobe_Assets/amg.png'
import dr from './Platform_Adobe_Assets/dr.png'
import blurDot from './Platform_Adobe_Assets/blurDot.png'
import pyramidAr from './Platform_Adobe_Assets/pyramidA.png';

import HForm from '../../HForm/HForm'
import HomeFooter from '../../HomeFooter/HomeFooter';
import { Helmet } from 'react-helmet';

function Platform_Adobe() 
{
  useEffect(() => {
    const handleScrollAnimation = () => {
      const elements = document.querySelectorAll('.paem-animate-on-scroll');
      elements.forEach(element => {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight && position.bottom >= 0) {
          element.classList.add('paem-animate');
        } else {
          element.classList.remove('paem-animate');
        }
      });
    };

    window.addEventListener('scroll', handleScrollAnimation);

    return () => {
      window.removeEventListener('scroll', handleScrollAnimation);
    };
  }, []);
  return (
     <>
    <div className='platform-AEM-wrapper'>
      <div className='platform-AEM-nav'>
        <Navbar />
        <Helmet>
        <title>Adobe Experience Manager Services | AEM Partner | DLUX</title>
        <meta name="description" content="Speak volumes with AEM—a synchronized content and digital asset management approach. Optimize with the best-in-class DAM and CMS solutions today" />
        </Helmet>
      </div>

      <div className='platform-AEM-img-section'>
        <img src={platform_aem_mainimg} alt='platform_AEM_mainimg' />
      </div>
      <div className='paem-img-text'>
        <h1>Conquer the Content Landscape <br/>DLUX + AEM</h1>
      </div>


      <div className='paem-container'>
        <div className='paem-logo-section'>
          <div className='paem-logo-img'>
            <img src={aemLogo} alt='aem-logo'></img>
          </div>
          <div className='paem-logo-textOne'>
          <p>When we talk about crafting user experiences through AEM, it's not just<br/> a promise; it's a commitment, marked with a capital 'E' that stands for<br/> EXCELLENCE.
          <br/> <br/>AEM is a powerhouse  that is about managing  digital content and<br/> drawing on your creativity to captivate your audience and ignite their<br/> engagement.</p>
          </div>
          <p  className='hide-on-laptop3'>When we talk about crafting user experiences through AEM, it's not just a promise; it's a commitment, marked with a capital 'E' that stands for EXCELLENCE.
          <br/> <br/>AEM is a powerhouse  that is about managing  digital content and drawing on your creativity to captivate your audience and ignite their engagement.</p>
        </div>


        <div className='paem-why-section'>
          <div className='paem-why-textOne'>
            <h2>Why AEM is the <br /> Content Kingmaker</h2>
            <p>
Content is king; AEM is the kingmaker! It is the secret weapon<br/> for any organization that wants to break new ground. It's about<br/> creating great content and delivering it in a way that resonates<br/> with your audience and drives results. With its powerful features,<br/> and endless customization options you can create personalized<br/> experience that caters to your unique needs.</p>
          </div>
          <p className='hide-on-laptop3'>
Content is king; AEM is the kingmaker! It is the secret weapon for any organization that wants to break new ground. It's about creating great content and delivering it in a way that resonates with your audience and drives results. With its powerful features, and endless customization options you can create personalized experience that caters to your unique needs.</p>
          <div className='paem-content-img'>
            <img src={content_hand} alt='content_hand'></img>
          </div>
        </div>



        <div className='paem-services-section'>
          <h1>Our AEM Services</h1>
          <div className='paem-services-section-one'>
            <div className='paem-img-one'>
              <img src={implementation} alt='implementationImg'></img>
              <h3>Implementation</h3>
              <p>Customized to meet your specific needs, our AEM<br/>consulting services cover everything from implementing<br/> Adobe Experience Manager to transitioning from <br/>outdated CMS platforms.</p>
            </div>
            <div className='paem-img-two'>
              <img src={teamAugmentation} alt='teamAugmentationImg'></img>
              <h3>Team Augmentation</h3>
              <p>Through our engagement models, we bolster your<br/> existing team or provide a dedicated team of AEM<br/> specialists to address your development, consulting,<br/> migration, or upgrade needs.</p>
            </div>
          </div>
          <div className='paem-services-section-two'>
            <div className='paem-img-three'>
              <img src={migrationUpgrade} alt='migrationUpgradeImg'></img>
              <h3>Migration & Upgrade</h3>
              <p>With a track record of success, we adeptly manage<br/> intricate migrations of content, templates, digital assets,<br/> configurations, and customizations from CMS platforms <br/>to Adobe AEM.</p>
            </div>
            <div className='paem-img-four'>
              <img src={experienceDesign} alt='experienceDesignImg'></img>
              <h3>Experience Design & Strategy</h3>
              <p>Utilizing a blend of design thinking and industry-leading <br/>practices, we strategize, construct, launch, and refine<br/> your websites to deliver immersive, dynamic, and<br/> engaging content experiences across various channels.</p>
            </div>
          </div>
          <div className='paem-services-section-three'>
            <div className='paem-img-five'>
              <img src={customIntegration} alt='customIntegrationImg'></img>
              <h3>Custom Integrations</h3>
              <p>Leveraging strategic expertise in integrating diverse third-<br/>party systems, we facilitate seamless integration with<br/> translation connectors, Marketo, Elasticsearch,<br/> Salesforce, and other platforms.</p>
            </div>
            <div className='paem-img-six'>
              <img src={assetAutomation} alt='assetAutomationImg'></img>
              <h3>Asset Automation</h3>
              <p>Automate asset-related tasks such as tagging, cropping,<br/> and other workflows using artificial intelligence (AI),<br/> drastically reducing the time required from hours to<br/> mere minutes.</p>
            </div>
          </div>
        </div>
        </div>  
        </div>

        <div className='paem-differentiators-imagescroll'>
        <div className='paem-redefining-section'>
            <h2>DLUX: Redefining what's possible</h2>
            <div className='paem-redefining-one paem-animate-on-scroll'>
              <img src={implementationIntegration} alt='implementationIntegrationImg'></img>
              <div className='paem-redefining-textOne'>
                <h3>End-to-end implementation and integration</h3>
                <p>Craft the perfect digital experience with your team,<br/> blending creative with lightning-fast<br/> implementation. Work side-by-side to design an AEM<br/> website that feels like an extension of your brand,<br/>seamlessly integrated with existing systems. No more <br/>clunky handoffs or delays-just smooth<br/> sailing from concept to launch.</p>
              </div>
            </div>

            <div className='paem-redefining-two paem-animate-on-scroll'>
              <img src={supportOptimize} alt='supportOptimizeImg'></img>
              <div className='paem-redefining-textTwo'>
                <h3>Continuous support and optimization</h3>
                <p>Our globally distributed Adobe AEM experts deliver<br/> around-the-clock critical support, encompassing<br/> disaster recovery, automated backups, and security<br/> checks to ensure a responsive AEM platform. Our<br/> continuous support and optimization ensure that your<br/> AEM site will be outdated or underperforming.<br/> We'll help you maximize its value and keep your digital <br/>presence thriving.</p>
              </div>
            </div>
            
            <div className='paem-redefining-three paem-animate-on-scroll'>
              <img src={migrationExp} alt='migrationExpImg'></img>
              <div className='paem-redefining-textThree'>
                <h3>Complex migration expertise</h3>
                <p>DLUX is your best Adobe AEM partner, offering a<br/> seamless transition with proven expertise. With us, you<br/> can streamline your digital experience. Our team of<br/> AEM migration rockstars tames complexity, ensuring a<br/> stress-free process. Trust DLUX to handle the heavy<br/> lifting while you focus on what matters most.</p>
              </div>
            </div>
            <div className='paem-redefining-four paem-animate-on-scroll'>
              <img src={criticalTime} alt='criticalTimeImg'></img>
              <div className='paem-redefining-textFour'>
                <h3>24/7 Critical support</h3>
                <p>Our global experts are on call 24/7, ensuring your<br/> platform runs smoothly while you focus on what<br/> matters. Count on us for expert support, automatic<br/> backups, and robust security measures. Trust us to<br/> bounce back from any bumps and shield your platform<br/> from security threats.</p>
              </div>
              </div>
            </div>
        </div>
        <div className="paem-wave-img">
          <img src={amg} alt='paem-wave-img'/>
        </div>
        <div className="paem-drImg">
          <img src={dr} alt='dot'/>
        </div>
        <div className="paem-drImgTwo">
          <img src={dr} alt='dot'/>
        </div>

        <div className="paem-blurDot">
          <img src={blurDot} alt='blurDot'/>
        </div>

        <div className="paem-pyramid-a">
          <img src={pyramidAr} alt='pyramid'/>
        </div>
          <div>
          </div>

          <div className='paem-form'>
            <HForm/>
        </div>

        <div className='paem-footer'>
            <HomeFooter/>
        </div>
  </>
     
  );
}
export default Platform_Adobe
