import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import cgiftop from './careers-assests/cgiftop.mp4';
import './Careers.css'
import carrow1 from './careers-assests/carrow1.png';
import cinternimage from './careers-assests/cinternimg.png';
import cicon1 from './careers-assests/cicon1.png';
import cicon2 from './careers-assests/cicon2.png';
import cicon3 from './careers-assests/cicon3.png';
import cicon4 from './careers-assests/cicon4.png';
import cicon5 from './careers-assests/cicon5.png';
import cgalleryimg from './careers-assests/1.png';
import ctest from './careers-assests/6.png';
import c4 from './careers-assests/4.png';
import c5 from './careers-assests/5.png';
import c6 from './careers-assests/3.png';
import c7 from './careers-assests/2.png';
import cload from './careers-assests/cload.png';
import cblink1 from './careers-assests/cblink1.png';
import cblink2 from './careers-assests/cblink2.png';
import cblink3 from './careers-assests/cblink3.png';
import crectangle from './careers-assests/crectangle.png';
import c_wave from './careers-assests/c-wave.png';
import cmainimg from './careers-assests/cmainimg.png';

import EmployeeCardSlider from './EmployeeCardSlider';
import Navbar from '../../Navbar';
import HForm from '../../HForm/HForm'
import HomeFooter from '../../HomeFooter/HomeFooter';
import { Helmet } from 'react-helmet';



const Careers = () => {
    const [active, setActive] = useState(0);
    const images = [cgalleryimg, ctest, c4, c5, c6, c7]; // Replace with your image URLs
  
    const handleImageClick = (index) => {
      setActive(index % images.length);
    };
  


  return (
    <div className='careers-wrapper'>

            <div className='careers-nav'>
            <Navbar/>
            <Helmet>
        <title>Careers | Martech Consulting Services | DLUX</title>
        <meta name="description" content="Want to be a change-maker? Join our team at DLUX, where we prioritize hiring, celebrating, and nurturing top talents." />
        </Helmet>
            </div>
            <div className='careers-img-section'>
            <img src={cmainimg} alt='cmainimg' />
            </div>

            <div className='careers-head-text'>
            <h1>Unbarring Creativity at<br />Every Step</h1>
            </div>

            
        <div className='careers-container'>
{/* buildcareerssection */}

        <div className='c-buildcareerssection'>
            <div className='cgiftop'>
            <video className="cgiftop" autoPlay loop muted>
              <source src={cgiftop} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            </div>

            <div className='bcs-text'>
                <h1>Build a Career</h1>
                <p>Are you tired of feeling like your hard work goes unnoticed? Well, look no <br/>
                further because DLUX is here to change that! Our platform is all about<br/>
                valuing your work and ensuring you get the recognition you deserve. DLUX<br/>
                is the perfect foundation for your career to help you hit new heights and<br/>
                attain your aspirations. We cultivate a culture that honors values and<br/>
                customs. Excited to join the DLUX family? You're just a click away!</p>
            </div>

            <div className='cblink3'>
                <img src={cblink3} alt="cblink3" />
            </div>

        </div>

{/* openpositionsection */}

        <div className='c-openpositionsection'>
            <div className='ops-text'>
                <h1>Current Openings </h1>
            </div>
           
            <div className='ops-boxarea'>
                 <div className='ops-box1'>
                       
                        <Link to="https://careers.dluxtech.com/jobs/Careers">  <h3>Explore Jobs Here</h3><img src={carrow1} alt='carrow1' /></Link>
                </div>
                 {/* <div className='ops-box2'>
                        <h3>Fullstack PHP Developer</h3>
                        <Link to="https://careers.dluxtech.com/jobs/Careers"><img src={carrow1} alt='carrow1' /></Link> 
                </div>
                <div className='ops-box3'>
                        <h3>Fullstack PHP Developer</h3>
                        <Link to="https://careers.dluxtech.com/jobs/Careers"><img src={carrow1} alt='carrow1' /></Link> 
                </div>
                <div className='ops-box4'>
                        <h3>Fullstack PHP Developer</h3>
                        <Link to="https://careers.dluxtech.com/jobs/Careers"><img src={carrow1} alt='carrow1' /></Link> 
                </div>                */}
            </div>

            <div className='crectangle'>
                <img src={crectangle} alt="crectangle" />
            </div> 

            <div className='c_ops_blink2'>
                <img src={cblink2} alt="c_ops_blink2" />
            </div>


        </div>

{/* internshipsection */}

        <div className='c-internshipsection'>
            <div className='is-text'>
                <h1>Internship</h1>
                <p>Are you drowning in the endless pursuit of the ideal internship, causing<br/>
                doubt and frustration? You're not the only one grappling with these<br/>
                obstacles. DLUX understands the struggles of navigating the job market<br/>
                and securing meaningful experiences. Our mission is to offer guidance,<br/>
                assistance, and tools to empower you to overcome barriers. With our<br/>
                customized approach and expert insights, you can fearlessly plan a<br/>
                course toward your desired career.</p>

                <div className='is-btn'>
                <button> <Link to="https://careers.dluxtech.com/jobs/Careers"><h6>Apply Now</h6></Link></button>
            </div>
            
            </div>


            <div className='is-cinternimage'>
                <img src={cinternimage} alt='cinternimage' />
            </div>

        </div>

{/* ourculturesection */}

        <div className='c-ourculturesection'>
             <div className='oc-text'>
                <h1>Our Culture</h1>
                <p>We truly value our culture and live it every day. It's not just something we talk about; it's a way of life<br/>
                we invite you to experience. We understand how important it is to have a supportive environment,<br/>
                and we spare no effort to create one where you will feel right at home.</p>
            </div>

            <div className='oc-boxareawhole'>
                <div className='oc-boxarear1'>
                    <div className='oc-box1'>
                    <img src={cicon1} alt='cicon1' />
                    <h3>Transparency</h3>
                    </div>
                    <div className='oc-box2'>
                    <img src={cicon2} alt='cicon2' />
                    <h3>Diversity and Inclusion</h3>
                    </div>
                    <div className='oc-box3'>
                    <img src={cicon3} alt='cicon3' />
                    <h3>Work-life Balance</h3>
                    </div>
                 </div>

                 <div className='oc-boxarear2'>
                    <div className='oc-box4'>
                    <img src={cicon4} alt='cicon4' />
                    <h3>Social Responsibility</h3>
                     </div>
                    <div className='oc-box5'>
                    <img src={cicon5} alt='cicon5' />
                    <h3>Learning and Development</h3>
                    </div>
                </div>
            </div>    

        </div>

{/* gallerysection */}

        <div className='c-gallerysection'>
            <div className='g-text'>
                <h1>Gallery</h1>
                <p>Glimpse a brief moment of what is blazing at DLUX. We come together through thick and thin to foster a positive attitude that<br/>
                permeates our workspace. Our team is the epitome of commitment and diligence. We strive to establish a positive<br/>
                atmosphere where everyone is motivated to perform to the best of their abilities and feels empowered.</p>
            </div>

            <div className='g-banner'>
                <img src={images[active]} alt={`gallery-img${active + 1}`} />
                <div className='g-indicator'>
                    {images.map((_, index) => (
                    <span key={index} className={`gallery-btn ${index === active ? 'active' : ''}`}
                    onClick={() => handleImageClick(index)} ></span>
                    ))}
                </div>
            </div>

            <div className='cload'>
                <img src={cload} alt="cload" />
            </div>

            <div className='cblink1'>
                <img src={cblink1} alt="cblink1" />
            </div>

            <div className='cblink2'>
                <img src={cblink2} alt="cblink2" />
            </div>

        </div>

{/* employeespeakssection */}

        <div className='c-employeespeakssection'>
            <div className='es-text'>
                <h1>Employee Speaks</h1>
                <p>Our team just can't stop raving about our culture, and we feel so blessed to have such an incredible<br/>
                team. We cherish and take pride in it, and we'd love to share more with you! </p>
            </div>

                <div className='es-cardslider'>
                    <EmployeeCardSlider/>
                </div>
            </div>
    </div>

    <div className='c-wave'>
                <img src={c_wave} alt="c_wave" />
          </div>

        <div className='careers-form'>
            <HForm/>
            
        </div>

        <div className='careers-footer'>
        <HomeFooter/>
        </div>
    </div>

  )
}

export default Careers;