  import React from 'react'
  import './AboutUsPage.css';
  import { Link } from 'react-router-dom';
  import logo from '../../AboutAssets/Group 971.png';
  import logo2 from '../../AboutAssets/Group 954.png';
  import logo3 from '../../AboutAssets/Group 970.png';
  import logo4 from '../../AboutAssets/Mask Group 120.png';
  import logo5 from '../../AboutAssets/Mask Group 119.png';
  import logo6  from '../../AboutAssets/Mask Group 121.png';
  import logo7 from '../../AboutAssets/Group 966.png';
  import logo8 from '../../AboutAssets/Group 965.png';
  import logo9 from '../../AboutAssets/Group 964.png';
  import logo10 from'../../AboutAssets/Group 969.png';
  import logo11 from '../../AboutAssets/Group 968.png';
  import logo12 from '../../AboutAssets/Group 967.png';
  import about_circle from '../../AboutAssets/about-circle.mp4';
  import bottom from '../../AboutAssets/Group 771.png';
  import spin from '../../AboutAssets/Group 956.png';
  import Navbar from '../Navbar';
  import HForm from '../HForm/HForm'
import HomeFooter from '../HomeFooter/HomeFooter';
import { Helmet } from 'react-helmet';



const AboutUsPage = () => {
  return (
     <div className='aboutus-page-wrapper'> 
      <div className='aboutus-nav'>
            <Navbar/>
            <Helmet>
        <title>About Us | Digital Consulting Services | DLUX</title>
        <meta name="description" content="DLUX helps businesses transform & evolve quickly to seize new opportunities, scale successes, and mitigate risks that digital transformation creates." />
        </Helmet>
            </div>
            

    <div className='aboutus-container'>
      <img src={logo} alt="Logo" className="AboutUs-img" />
  <div className='AboutUs-head-section'>
    <h1 className='AboutUs-head-text' >Optimizing Every Move,
        <br /> Maximizing Every Outcome</h1>
      </div>
    {/* About Section */}
    <div className="about-section">
      <div className="about-content">
        <div className="about-left">
          <img
            src={logo2}
            alt="About Image"
          />
          </div>

          <div className="about-right">
            <h2 className="about-text">Who We Are</h2>
            <div className='about-text-content'>
            <p >
              We are a dynamic team of adroit thinkers who envision
              shaping a<br/> thriving digital economy that integrates marketing and
              Al technologies.<br/> We assist clients in the ANZ region and the
              USA, specializing in<br/> providing professional services for leading
              platforms such as Adobe,<br/> Aprimo, Salesforce, and Dataiku, we
              have leveraged our expertise and<br/> proven track record to forge
              impactful partnerships. <br/><br/>By joining forces with Adobe Workfront,
              We bring unparalleled success,<br/> knowledge and innovation to the
              forefront of the digital landscape.<br/> No matter how intricate your
              business needs are, our recommended<br/> solutions will help you get
              on a winning streak.
                        </p>
                        </div>
                  <div className='hide-on-laptop7'>
                        <p >
              We are a dynamic team of adroit thinkers who envision
              shaping a thriving digital economy that integrates marketing and
              Al technologies. We assist clients in the ANZ region and the
              USA, specializing in providing professional services for leading
              platforms such as Adobe, Aprimo, Salesforce, and Dataiku, we
              have leveraged our expertise and proven track record to forge
              impactful partnerships. 
                        </p>
                        <br /><br/>

                        </div>

            <div className='Aboutus-btn'>
            <Link to='/contact-us'><button><h6>Stay Connected</h6></button></Link>
            </div>
            
          </div>
          {/* connected Button */}
          </div>
    </div>

    <div className='hide-on-laptop71'>
    <Link to='/contact-us'><button><h6>Stay Connected</h6></button></Link>
    </div>
    
    <div className="triangle-mission">
        <div className="our-mission">
          <img
            src={logo4}
            alt="logo4"
            className="mission-image"
          />
          <h1 className='mission-head'>Our Mission </h1>
          <p className="mission-text">
            To craft MarTech excellence to your needs, fueled by
            diligence and precision. We aspire to emerge as a top leading
            MarTech consultancy service in the APAC region, empowering
            businesses with innovative solution.
          </p>
        </div>
        <img
          src={logo3}
          alt="logo3"
          className="triangle-image"
        />
        <div className="our-vision">
          <img src={logo5} alt="" className="triangle-vision" />
          <h1 className='vision-head'>Our Vision</h1>
          <p className="vision-text">
            To revolutionize the marketing future with MarTech. Our
            vision is to redefine the landscape of marketing technology where
            seamless experiences and excellence converge, crafting a journey
            that resonates with every industry.
          </p>
        </div>
      </div>
      
          <div className="our-moto">
          <img src={logo6} alt="logo6" className="moto-image"/>
          <h1 className="moto-head">Our Moto</h1>
          <p className="moto-text">
            Embracing Tomorrow, Empowering Today!<br/> Where Mar Tech
            offers limitless possibilities and customer satisfaction drives
            success.
          </p>
        </div>


        <section className="about-corevalues">
        <h1>Our Core Values</h1>
        <p>
          Our Growth? Its all about remaining steadfast in our adherence to
          these core values.<br/>They are like our North Star, keeping us on track as
          we push forward and expand.
        </p>
        <div className='spin'>
          <img src={spin} alt="spin" />
        </div>
        {/* <div className='roll'>
          <img src= {roll} alt="roll" />
        </div> */}
        <div className="about-columns">
          <div className="about-column">
            <img src={logo7} alt="logo7" className="core-image" /> 
            <h3 className="aboutcore-head">Fostering Transparency</h3>
            <h5 className='aboutcore-para'>Building a workplace where <br/>clarity thrives</h5>
          </div>
         
            
          <div className="about-column">
            <img src={logo8} alt="logo8" className="core-image2" />
            <h3 className="aboutcore-head">Empowering Growth</h3>
            <h5 className='aboutcore-para'>Transforming aspirations into <br/>meaningful actions</h5>
          </div>
          <div className="about-column">
            <img src={logo9} alt="logo9" className="core-image3" />
            <h3 className="aboutcore-head">Engineering Together</h3>
            <h5 className='aboutcore-para'>Joining forces and achieving<br/>greatness hand in hand</h5>
          </div>
          <div className="about-column">
            <img src={logo10}alt="logo10" className="core-image4" />
            <h3 className="aboutcore-head">Customer-Centric Excellence</h3>
            <h5 className='aboutcore-para'>Where your satisfaction is our<br/>sole focus and passion</h5>
           
          </div>
          <div className="about-column">
            <img src={logo11} alt="logo11" className="core-image5" />
            <h3 className="aboutcore-head">Seamless Adaptation</h3>
            <h5 className='aboutcore-para'>Embracing new technologies<br/>with swift precision</h5>
          </div>
          <div className="about-column">
            <img src={logo12} alt="logo12" className="core-image6" />
            <h3 className="aboutcore-head">Crafting Trust</h3>
            <h5 className='aboutcore-para'>Unwavering integrity at every<br/>stage of our journey</h5>
          </div>
        </div>
      </section>
          <section className='about-meet'>
          <div className='about-meet-container'>
             <h1> Meet Our Team</h1>
            <p> Introducing to you our team,a bunch of go-getters bringing a unique<br/> set of skills to the table.With unwavering dedication,we diligently work <br/>towards transforming the vision of "MarTech Excellence" into a tangible <br/>reality day after day.</p>
           
           {/* <div className='aboutMeet-button1'>
            <Link to ='/about-meet'>
            <button className='aboutMeet-button'>Know More</button> 
        </Link>
        </div> */}
        </div>
        <div className='about-gif'>
        <video className="about_circle" autoPlay loop muted>
              <source src={about_circle} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
        </div>
       </section>
       <div className='about-buttom'>
        <img src={bottom} alt="bottom" />
       </div>
  </div>

  <div className='aboutus-form'>
            <HForm/>
            <HomeFooter/>
        </div>
  </div>

  
  )
}

export default AboutUsPage