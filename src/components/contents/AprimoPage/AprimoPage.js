import React from 'react'
import './AprimoPage.css';
import a1 from './AprimoAssets/Group 1257.png';
import a2 from './AprimoAssets/Group 1260.png';
import a3 from './AprimoAssets/Rectangle 766.png';
import a4 from './AprimoAssets/Mask Group 192.png';
import a5 from './AprimoAssets/Group 1263.png';
import a6 from './AprimoAssets/Mask Group 193.png';
import a7 from './AprimoAssets/Mask Group 195.png';
import a8 from './AprimoAssets/Mask Group 198.png';
import a9 from  './AprimoAssets/Mask Group 196.png';
import a10 from './AprimoAssets/Mask Group 197.png';
import a11 from './AprimoAssets/Mask Group 194.png';
import aprimo_wave from './AprimoAssets/aprimo-wave.png';
import aprimo_blink1 from './AprimoAssets/aprimo-blink1.png';
import aprimo_blink2 from './AprimoAssets/aprimo-blink2.png';
import aprimo_diamond from './AprimoAssets/aprimo-diamond.png';
import aprimo_globe from './AprimoAssets/aprimo-globe.png';
import aprimo_cube from './AprimoAssets/aprimo-cube.png';
import HForm from '../../HForm/HForm'
import Navbar from '../../Navbar'
import HomeFooter from '../../HomeFooter/HomeFooter';

import { Helmet } from 'react-helmet';

const AprimoPage = () => {
  return (
    <>
    <div className='AprimoPage-wrapper'>

    <div className='aprimo-nav'>
                <Navbar/>
        <Helmet>
        <title>Aprimo Consulting Services | DAM Software | DLUX</title>
        <meta name="description" content="DLUX offers expert Aprimo consulting services to help businesses optimize their marketing operations and maximize the potential of the Aprimo platform." />
        </Helmet>
            </div>

    <div className="Aprimo-container">
        <img src={a1} alt="" className="Aprimo-img" />
        <div className="Aprimo-headsection">
          <h1 className="Aprimo-headtext">
          DAM Mastery: Your Digital Assets,<br/> Secured and Accessible
           
          </h1>
        </div>
    </div>

<section className="AprimoSecond-section">
<div className="AprimoSecond-content">
  <div className="AprimoSecond-left">
    <img src={a2} alt="AprimoSecondImage" />

    <div className="AprimoSecond-right">
    <h1>  DLUX + Aprimo Consulting Services</h1>
      <p className="AprimoSecond-rightContent-text">
      Embark on a transformative journey with DLUX Aprimo Consulting Services, a <br/> collaboration merging technology and expertise to reshape how organizations<br/> manage and leverage digital content. 

<br/><br/>In partnership with Aprimo, DLUX offers seamless implementation and expert<br/>  consulting services designed to revolutionize content management and Digital<br/>  Asset Management (DAM) and  Marketing Resource Management (MRM). From<br/>  streamlining workflows to optimizing asset organization, we deliver end-to-end<br/>  solutions empowering your organization to maximize content value.
      </p>

     
    </div>
    <p className="hide-on-laptop41">
      Embark on a transformative journey with DLUX Aprimo Consulting Services, a collaborationmerging technology and expertise to reshape how organizations manage and leverage digital content. 

<br/><br/>In partnership with Aprimo, DLUX offers seamless implementation and expert consulting services designed to revolutionize content management and Digital  Asset Management (DAM) and  Marketing Resource Management (MRM). From streamlining workflows to optimizing asset organization, we deliver end-to-end  solutions empowering your organization to maximize content value.
      </p>
  </div>
  </div>
  </section>

  <section>
    <div className='AprimoThird-section'>
        <h2>With Aprimo, you get</h2>
        <div className='AprimoThird-content'>
            <img src ={a3} alt=''/>
            <p>Content Management platform for efficient collaboration and automation.</p>
            <img src ={a3} alt=''/>
            <p>Powerful Digital Asset Management (DAM) suite. </p>
            <img src ={a3} alt=''/>
            <p>Comprehensive Distributed Marketing platform. </p>
        </div>
        <div className='AprimoThird1-content'>
            <img src ={a3} alt=''/>
            <p>Campaign tool for targeted lists and campaign execution.</p>
            <img src ={a3} alt=''/>
            <p>Plan & Spend tool for aligning marketing spend with goals and proving MROI. 
</p>
        </div>
    </div>
  </section>

  <section>
    <div className='Aprimovalue-Dam'>
        <h1>The Value of DAM</h1>
        <div className='AprimoValue-start'>
        <div className='Aprimovalue1-main'>
            <div className='Aprimovalue1'>
            <p>Aprimo DAM streamlines and manages content creation, organization, and delivery for personalized experiences.</p>
             </div>
        </div>
        <div className='Aprimovalue11-main'>
            <div className='Aprimovalue11'>
             <p>Simplify the review process and expedite time-to-market through a centralized hub that facilitates collaboration, workflows, annotations, and approvals.</p>
             </div>
        </div>
    </div>
    <div className='AprimoValue-start'>
        <div className='Aprimovalue1-main'>
            <div className='Aprimovalue1'>
            <p>Effortlessly generate compelling content by ensuring accessibility, ease of editing, and seamless reuse across various markets and channels.</p>
             </div>
        </div>
        <div className='Aprimovalue11-main'>
            <div className='Aprimovalue11'>
             <p>Optimize, organize, and enrich content for on-brand customer experiences, incorporating robust rights management for added security and compliance.</p>
             </div>
        </div>
    </div>
    </div>
  </section>
  {/* fifth */}
  <section>
    <div className='Aprimo-partnership'>
        <div className='Aprimosecond-Partnership'>
            <h1>Aprimo Alliance Partnership</h1>
            <p>As an Aprimo Consulting Services Partner, DLUX ensures that<br/> versatile and highly customizable software enhances customer<br/> experiences, fostering loyalty and driving revenue.</p>
          <h6 className='hide-on-laptopap'>As an Aprimo Consulting Services Partner, DLUX ensures that versatile and highly customizable software enhances customer experiences, fostering loyalty and driving revenue.</h6>
        </div>
        <div className='Aprimosecond1-Partnership'>
            <img src={a4} alt=''/>
        </div>
    </div>
  </section>
  <section className="AprimoExpertise-section">
        <div className="AprimoExpertise-content">
          <div className="AprimoExpertise-left">
            <h1>Our <br/> Expertise</h1>
            <img src={a5} alt="AprimoExpertise Image" />
          </div>
          <div className="AprimoExpertise-right">
            <img src ={a6} alt='Trailored'/>
            <h2>Tailored Consulting</h2>
            <p className="AprimoExpertise-text">
            DLUX understands the uniqueness of each organization,<br/> offering consulting services designed to align with<br/> specific business objectives. Whether optimizing existing<br/> Aprimo implementations or venturing into new DAM<br/> journeys, our consultants guide you. 
            </p>
            <div className='AprimoExpertise-right1'>
            <img src ={a11} alt='Trailored'/>
            <h2>Aprimo Implementation Excellence</h2>
            <p className="AprimoExpertise-text">
            Partnering with Aprimo, DLUX brings expertise in<br/> implementing robust Content Management and DAM<br/> solutions. Our certified consultants ensure seamless<br/> integration of Aprimo's capabilities tailored to your <br/>organization's unique needs. </p>
          </div>
          </div>
        </div>
      </section>
      <section>
        <div className='AprimoConsulting'>
            <h1>DAM Consulting Approach</h1>
            <div className='AprimoConsulting-main'>
                <div className='AprimoConsulting-second'>
                    <img src={a7} alt='Analisys'/>
                </div>
                <div className='AprimoConsulting-second1'>
                    <h2>Business Analysis Focus</h2>
                    <p>Understanding the organization's DAM <br/>needs is our foundation.<br/><br/>

                       Enriched analysis through extensive<br/> experience in DAM system implementation.</p>
                </div>
                <div className='AprimoConsulting-second'>
                    <img src={a8} alt='Analisys'/>
                </div>
                <div className='AprimoConsulting-second1'>
                    <h2>Industry Expertise</h2>
                    <p>DLUX's consultants possess hands-on experience<br/> in diverse sectors.<br/><br/> 
                     Expertise spans retail, manufacturing, fintech,<br/> technology, and many more.</p>
                </div>
            </div>

            <div className='AprimoConsulting-main1'>
            <div className='AprimoConsulting-second'>
                    <img src={a9} alt='Analisys'/>
                </div>
                <div className='AprimoConsulting-second11'>
                    <h2>Future-Ready Solutions</h2>
                    <p>Analysis serves as the foundation for<br/> constructing ideal DAM systems.<br/><br/>
                    The blueprint guides the development of a <br/>DAM system tailored to organizational needs.</p>
                </div>
                <div className='Aprimo-consulting'>
                <div className='AprimoConsulting-second12'>
                    <img src={a10} alt='Analisys'/>
                </div>
                </div>
                <div className='AprimoConsulting-second12'>
                    <h2>Workflow Assessment</h2>
                    <p>Our consultants initiate Q&A sessions to<br/> comprehend existing workflows, extracting vital<br/> data points essential for future improvements.<br/><br/>
Insights acquired reveal potential opportunities<br/> for implementing industry-standard processes<br/> and technologies.</p>
                </div>
               
            </div>
        </div>
      </section>

      <div className='aprimo-wave'>
          <img src={aprimo_wave} alt='wave'/>

        </div>

        <div className='aprimo-blinkstuffs'>
          <div className='aprimo-blinkstuff1'>
            <img src={aprimo_blink1} alt='aprimo_blink1'/>
            </div>

            <div className='aprimo-blinkstuff2'>
            <img src={aprimo_blink2} alt='aprimo_blink2'/>
            </div>

            <div className='aprimo-blinkstuff3'>
            <img src={aprimo_blink1} alt='aprimo_blink3'/>
            </div>

            <div className='aprimo-diamond'>
              <img src={aprimo_diamond} alt='aprimo_diamond'/>
              </div>

              <div className='aprimo-globe'>
              <img src={aprimo_globe} alt='aprimo_globe'/>
              </div>

              <div className='aprimo-cube'>
              <img src={aprimo_cube} alt='aprimo_cube'/>
              </div>
          
          </div>

      <div className='aprimo-form'>
            <HForm/>
        </div>

        <div className='aprimo-footer'>
            <HomeFooter/>
        </div>

      </div>

  </>
  )
}

export default AprimoPage