  import React, { useEffect, useState } from 'react';
  import { Helmet } from 'react-helmet';
  import { Link } from "react-router-dom";
  import CountUp from "react-countup";
  import ScrollTrigger from "react-scroll-trigger";
  import Campaign_Nav from '../Campaign_Nav';
  import './AdobeWorkfrontManagedServices.css';
  import 'slick-carousel/slick/slick.css';
  import 'slick-carousel/slick/slick-theme.css';
  import $ from 'jquery';
  import 'slick-carousel';
  import ReactGA from 'react-ga';

  import awms_cer1 from '../Campaign_Assests/awms_cer1.png';
  import awms_cer2 from '../Campaign_Assests/awms_cer2.png';
  import awms_cer3 from '../Campaign_Assests/awms_cer3.png';
  import awms_callicon from '../Campaign_Assests/awms_callicon.png';
  import awms_mssgicon from '../Campaign_Assests/awms_mssgicon.png';
  import awms_locicon from '../Campaign_Assests/awms_locicon.png';
  import awms_rec_top_svg from '../Campaign_Assests/awms_rec_top_svg.svg';
  import awms_partner1 from '../Campaign_Assests/awms_partner1.png';
  import awms_partner2 from '../Campaign_Assests/awms_partner2.png';
  import awms_partner3 from '../Campaign_Assests/awms_partner3.png';
  import awms_hero_primary_outer from '../Campaign_Assests/awms_hero_primary_outer.png';
  import awms_hero_primary_inner from '../Campaign_Assests/awms_hero_primary_inner.png';
  import awms_hero_primary_img from '../Campaign_Assests/awms_hero_primary_img.png';
  import awms_dlw_icon1 from '../Campaign_Assests/awms-dlw_icon1.png';
  import awms_dlw_icon2 from '../Campaign_Assests/awms-dlw_icon2.png';
  import awms_dlw_icon3 from '../Campaign_Assests/awms-dlw_icon3.png';
  import awms_dlw_icon4 from '../Campaign_Assests/awms-dlw_icon4.png';
  import awms_dlw_icon5 from '../Campaign_Assests/awms-dlw_icon5.png';
  import awms_dlw_icon6 from '../Campaign_Assests/awms-dlw_icon6.png';
  import awms_dlw_icon7 from '../Campaign_Assests/awms-dlw_icon7.png';
  import awms_dlw_icon8 from '../Campaign_Assests/awms-dlw_icon8.png';
  import awms_blink1 from '../Campaign_Assests/awms_blink1.png';
  import awms_blink2 from '../Campaign_Assests/awms_blink2.png';
  import awms_blink3 from '../Campaign_Assests/awms_blink3.png';
  import awms_blink4 from '../Campaign_Assests/awms_blink4.png';
  import awms_cube from '../Campaign_Assests/awms_cube.png';
  import awms_globe from '../Campaign_Assests/awms_globe.png';
  import awms_load from '../Campaign_Assests/awms_load.png';
  




  const initGA = () => {
    ReactGA.initialize('G-GS176VG9FJ'); //GA tracking ID
  };
  
  const logPageView = () => {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
  };
  
  const logEvent = (category, action) => {
    ReactGA.event({
      category: category,
      action: action,
    });
  };


  const AdobeWorkfrontManagedServices_US = () => {
  // GA Integration
  useEffect(() => {
    initGA(); // Initialize Google Analytics
    logPageView(); // Log page view when the component mounts
  }, []);

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

    // Zoho Form Script

      // Function to handle button click
      const handleButtonClick = () => {
          // URL of the form
          const formUrl = 'https://forms.zohopublic.in/dluxtech/form/Webform/formperma/Mm_XtA7tFlnwtYUUkLXV7HIr-dQSLYjyNHFHCm_YQK0?zf_rszfm=1';

          // Height and width of the popup window
          const height = 648;
          const width = 700;

          // Calculate left and top position for centering the window
          const leftPos = (window.screen.width - width) / 2;
          const topPos = (window.screen.height - height) / 2;

          // Open the popup window
          window.open(formUrl, null, `width=${width},height=${height},left=${leftPos},top=${topPos},toolbar=0,location=0,status=1,scrollbars=1,resizable=1`);

          // Prevent the default behavior of the link
          return false;
      };

    //Contentful Integration
    const [active, setActive] = useState(0);
    const [page, setPage] = useState(null);
    const [loading, setLoading] = useState(true);
    const accessToken = process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN;
    

    const query = `
    {
      ourClients:dluxHomePage(id:"4A72lxXg2x9dph73jiAulF"){
        dluxHeading
        dluxPara
        dluxImageCollection{
          items{
            url
          }
        }
      }

      dluxClientReview(id:"v0vliZ0vlLncA9C8MoFj4"){
          clientheading
          clientText
          clientParagraph
          clientH3
        }
        
        client2:  dluxClientReview(id:"7v3M8VauzJC7unNBQYXmER"){
          clientParagraph
          clientH3
        }
        
          client3:  dluxClientReview(id:"1BFMkgxFC5iZwk2zD45gWs"){
          clientParagraph
          clientH3
        }
        
          client4:  dluxClientReview(id:"5Das9dg0zL7u0d2JWQSAjq"){
          clientParagraph
          clientH3
        }
    
        girl_banner: dluxHomePage(id:"3Qua2MuT10wlYUoaFWh4md"){
          dluxImageCollection{
            items{
              url
            }
          }
        }
    }`;

    

    useEffect(() => {
      let slickInstance;

      const fetchData = async () => {
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
            ourClients: [data.ourClients],
            dluxClientReview:[data.dluxClientReview],
            client2:[data.client2],
            client3:[data.client3],
            client4:[data.client4],
            girl_banner:[data.girl_banner],
          });
          setLoading(false);
          console.log(data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

      fetchData();

      return () => {
        if (slickInstance) {
          slickInstance.slick('unslick');
        }
      };
    }, []);

    useEffect(() => {
      if (!loading && page) {
        $(".customer-logos").slick({
          slidesToShow: 6,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 1500,
          arrows: false,
          dots: false,
          pauseOnHover: false,
          responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 4
              }
            },
            {
              breakpoint: 520,
              settings: {
                slidesToShow: 3
              }
            }
          ]
        });
        setLoading(false);
      }
    }, [loading, page]);

    if (loading) {
      return <div className="blog-loading-spinner"></div>;
    }

    if (!page) {
      return <div>No content available.</div>;
    }

    const images = [
      page.girl_banner[0]?.dluxImageCollection.items[1]?.url, 
      page.girl_banner[0]?.dluxImageCollection.items[1]?.url, 
      page.girl_banner[0]?.dluxImageCollection.items[1]?.url, 
      page.girl_banner[0]?.dluxImageCollection.items[1]?.url, 
      ];
    
      const handleClientClick = (index) => {
        setActive(index % images.length);
      };


    return (
      <div className='awms-wrapper'>
        <div className='awms-nav'>
          <Campaign_Nav />
          <Helmet>
            <title>Adobe Workfront Managed Services | DLUX</title>
            <meta name="description" content="Adobe Workfront Managed Services" />
          </Helmet>
        </div>

      <div className='awms-container'>

      {/* Hero Primary section */}
      <div className='awms-heroprimary-section'>
          <div className='awms-heroprimary-content-left'>
              <div className='awms-heroprimary-dluxwrkfrnt_box'>
                  <h5>DLUX + WORKFRONT</h5>
              </div>
              <div className='awms-heroprimary-left_texts'>
                  <h1 className='awms-heroprimary-left_text_line1'>Your everyday</h1>
                  <h1 className='awms-heroprimary-left_text_line2'>workflow simplified</h1>
                  <p>Luxman Pai's strategic finesse & Shantanu Narayen's seasoned leadership teams up for a fresh spin on Adobe's Content Operations! </p>
              </div>
              <div className='awms-heroprimary-buttons'>
                  <div className='awms-heroprimary-btn1'>
                      <button onClick={handleButtonClick}><h6>Talk to our experts</h6></button>
                  </div>
                  <div className='awms-heroprimary-btn2'>
                          <button onClick={handleButtonClick}><h6>Subscribe Now</h6></button>
                </div>
              </div>
          </div>
          <div className='awms-heroprimary-content-right'>
              <img src={awms_hero_primary_outer} alt='awms_hero_primary_outer'/>
              <img src={awms_hero_primary_inner} alt='awms_hero_primary_outer'/>
              <img src={awms_hero_primary_img} alt='awms_hero_primary_outer'/>
              <div className='awms-heroprimary-your_growth'>
                <h6>YOUR GROWTH</h6>
              </div>
              <div className='awms-heroprimary-your_story'>
                <h6>YOUR STORY</h6>
              </div>
              <div className='awms-heroprimary-your_evolution'>
                <h6>YOUR EVOLUTION</h6>
              </div>
          </div>
          
      </div>


      {/* Number Animation section */}
        <div className='awms-numberanimation'>
        <ScrollTrigger onEnter={() => setCounterState(true)} onExit={() => setCounterState(false)}>
              <div className='awms-number-flex'>
              <div className='awms-number-certifications'>
                <div className='adwf_cer1-icon'>
                  <img src={awms_cer1} alt='awms_cer1'/>
                </div>          
                <div className='awms_cer1-no'>
                  <h1>{ counterState && <CountUp start ={0} end={36}  duration={1.5}></CountUp>}+<h3>Certifications</h3></h1>
                </div>
              </div>

              <div className='awms-number-employees'>
                <div className='awms_cer2-icon'>
                  <img src={awms_cer2} alt='awms_cer2'/>
                </div>
                <div className='awms_cer2-no'>
                  <h1>{ counterState && <CountUp start ={0} end={20}  duration={1.5}></CountUp>}+<h3>Certified Workfront Experts</h3></h1>            
                </div>
              </div>
              
              <div className='awms-number-deployments'>
                <div className='awms_cer3-icon'>
                  <img src={awms_cer3} alt='awms_cer3'/>
                </div>
                <div className='awms_cer3-no'>
                  <h1>{ counterState && <CountUp start ={0} end={45}  duration={1.5}></CountUp>}+<h3>Deployments</h3></h1>
                </div>
              </div>
            </div>
            </ScrollTrigger>

          </div>

      {/* Partners section */}
      <div className='awms-partners-section'>
      <div className='awms-partners-boxes'>
              <div className='awms-partners-box1'>
                  <div className='awms-partners-box1-img'>
                  <img src={awms_partner2} alt="awms_partner1" />
                  </div>
              </div>
              <div className='awms-partners-box2'>
                  <div className='awms-partners-box2-img'>
                  <img src={awms_partner1} alt="awms_partner2" />
                  </div>
              </div>
              <div className='awms-partners-box3'>
                  <div className='awms-partners-box3-img'>
                  <img src={awms_partner3} alt="awms_partner3" />
                  </div>
              </div>
      </div>  
      </div>

      {/* DLUX + Worfront Section */}
      <div className='awms-dlux_worfront-section'>
        <div className="awms-dlux_worfront-titleName">
          <h1>DLUX + Workfront</h1>
        </div>
      <div className="awms-dlux_worfront-boxes">
          <div className="awms-dlux_worfront-row">
              {/* <!-- First Box --> */}
              <div className="awms-dlux_worfront_box1">
                      <div className="awms-dlux_worfront_box1_heading">
                        <h2>Let Our Experts Help You Increase Your Adobe Investment Returns </h2>
                      </div>
              </div>

              {/* <!-- Second Box --> */}
              <div className="awms-dlux_worfront_box">
                  <div className="awms-dlux_worfront_box_icon">
                      <img src={awms_dlw_icon1} alt="awms_dlw_icon1" />
                  </div>
                      <div className="awms-dlux_worfront_box_heading">
                          <h3>Service Breakdown </h3>
                          <p className="awms-dlux_worfront_box_para">Standby traffic management, basic troubleshooting, issue resolution, and new module implementation within the allocated hours. </p>
                  </div>
              </div>

              {/* <!-- Third Box --> */}
              <div className="awms-dlux_worfront_box">
                  <div className="awms-dlux_worfront_box_icon">
                      <img src={awms_dlw_icon2} alt="awms_dlw_icon2" />
                  </div>
                  <div className="awms-dlux_worfront_box_heading">
                          <h3>Local Adobe Collaboration </h3>
                          <p className="awms-dlux_worfront_box_para">Managing relationships for swift resolutions and updates with local Adobe teams.  </p>
                  </div>
              </div>
      </div>

      {/* <!-- Second Row --> */}
      <div className="awms-dlux_worfront-row">
            {/* <!-- First Box --> */}
            <div className="awms-dlux_worfront_box">
                  <div className="awms-dlux_worfront_box_icon">
                      <img src={awms_dlw_icon3} alt="awms_dlw_icon3" />
                  </div>
                  <div className="awms-dlux_worfront_box_heading">
                          <h3>Training and Upskilling  </h3>
                          <p className="awms-dlux_worfront_box_para">Offering refresher training or upskilling sessions for the team.</p>
                  </div>
              </div>

              {/* <!-- Second Box --> */}
              <div className="awms-dlux_worfront_box">
                  <div className="awms-dlux_worfront_box_icon">
                      <img src={awms_dlw_icon4} alt="awms_dlw_icon4" />
                  </div>
                  <div className="awms-dlux_worfront_box_heading">
                          <h3>Expert Team Support</h3>
                          <p className="awms-dlux_worfront_box_para">Constant support with standby Traffic Manager and backup Admin.</p>
                  </div>
              </div>

              {/* <!-- Third Box --> */}
              <div className="awms-dlux_worfront_box">
                  <div className="awms-dlux_worfront_box_icon">
                      <img src={awms_dlw_icon5} alt="awms_dlw_icon5" />
                  </div>
                  <div className="awms-dlux_worfront_box_heading">
                          <h3>Handholding/ Adoption support</h3>
                          <p className="awms-dlux_worfront_box_para">Your virtual deskside assistant, ready to answer your questions and provide assistance via chat and email support.</p>
                  </div>
              </div>
      </div>

      {/* <!-- Third Row --> */}
      <div className="awms-dlux_worfront-row">
            {/* <!-- First Box --> */}
            <div className="awms-dlux_worfront_box">
                  <div className="awms-dlux_worfront_box_icon">
                      <img src={awms_dlw_icon6} alt="awms_dlw_icon6" />
                  </div>
                  <div className="awms-dlux_worfront_box_heading">
                          <h3>Migration Services</h3>
                          <p className="awms-dlux_worfront_box_para">Offering migration services for Workfront Proof HQ discontinuation. </p>
                  </div>
              </div>

              {/* <!-- Second Box --> */}
              <div className="awms-dlux_worfront_box">
                  <div className="awms-dlux_worfront_box_icon">
                      <img src={awms_dlw_icon7} alt="awms_dlw_icon7" />
                  </div>
                  <div className="awms-dlux_worfront_box_heading">
                          <h3>Integration Services</h3>
                          <p className="awms-dlux_worfront_box_para">Eliminate manual work and connect Workfront to your existing tools for seamless data flow and streamlined workflows.</p>
                  </div>
              </div>

              {/* <!-- Third Box --> */}
              <div className="awms-dlux_worfront_box">
                  <div className="awms-dlux_worfront_box_icon">
                      <img src={awms_dlw_icon8} alt="awms_dlw_icon8" />
                  </div>
                  <div className="awms-dlux_worfront_box_heading">
                          <h3>Security and Compliance</h3>
                          <p className="awms-dlux_worfront_box_para">Regular security assessments and penetration testing ensure your Adobe Workfront meets industry standards and safeguards your data.</p>
                  </div>
              </div>
      </div>
      </div>
      </div>

      {/* Pricing Section */}

      <div className='awms-pricing-section'>
          <div className="awms-pricing-titleName">
          <h1>Don't miss out on these </h1>
          <h1 className='awms-pricing-title-line2'>Great Deals!</h1>
          </div>

          <div className="awms-pricing-rectangles">
              <div className='awms-pricing-rectangle1'>
                  <div className='awms-pricing-rectangle1-price-text'>
                      <div className="awms-pricing-bronze">
                  <h4>BRONZE</h4>
                    </div>
                      <div className="awms-pricing-US2999">
                  <h1>US$2,999/</h1>
                    </div>
                    <div className="awms-pricing-bronze-Per_Year_fk">
                  <p>Per Month</p>
                    </div>
                      <ul class="tick-mark-list">
                          <li>
                              <div className="awms-Managed_services_hours">
                                  <p className='awms-pricing-rectangles-line1'>Managed Services Hours</p>
                                  <p className='awms-pricing-rectangles-line2'>45 hours​</p>
                              </div>
                          </li>
                          <li>
                              <div className="awms-Email__Chat_Support_40_request">
                                  <p className='awms-pricing-rectangles-line1'>Email / Chat Support</p>
                                  <p className='awms-pricing-rectangles-line2'>40 requests a month​</p>
                              </div>
                          </li>
                          <li>
                              <div className="awms-Minor_Maintenance">
                                  <p className='awms-pricing-rectangles-line1'>Minor Maintenance</p>
                                  <p className='awms-pricing-rectangles-line2'>25 requests a month​</p>
                              </div>
                          </li>
                          <li>
                              <div className="awms-Training_Change_Management">
                                  <p className='awms-pricing-rectangles-line1'>Training and Change Management</p>
                                  <p className='awms-pricing-rectangles-line2'>5 hours of Training a month​</p>
                              </div>
                          </li>
                          <li className='cross'>
                              <div className="awms-Major_Enhancements">
                                  <p className='awms-pricing-rectangles-line1'>Major Enhancements</p>
                                  <p className='awms-pricing-rectangles-line2'>Not Applicable​</p>
                              </div>
                          </li>
                      </ul>
                      <div className='awms-pricing-rectangles-btn'>
                          <button onClick={handleButtonClick}><h6>Subscribe Now</h6></button>
                      </div>
                  </div>
              </div>
              <div className='awms-pricing-rectangle2'>
              <div className='awms-pricing-rectangle2-price-text'>
                      <div className="awms-pricing-silver">
                  <h4>SILVER</h4>
                    </div>
                      <div className="awms-pricing-US5999">
                  <h1>US$5,999/</h1>
                    </div>
                    <div className="awms-pricing-silver-Per_Year_fk">
                  <p>Per Month</p>
                    </div>
                      <ul class="tick-mark-list">
                          <li>
                              <div className="awms-Managed_services_hours">
                                  <p className='awms-pricing-rectangles-line1'>Managed Services Hours</p>
                                  <p className='awms-pricing-rectangles-line2'>100 hours​</p>
                              </div>
                          </li>
                          <li>
                              <div className="awms-Email__Chat_Support_40_request">
                                  <p className='awms-pricing-rectangles-line1'>Email / Chat Support</p>
                                  <p className='awms-pricing-rectangles-line2'>80 requests a month​</p>
                              </div>
                          </li>
                          <li>
                              <div className="awms-Minor_Maintenance">
                                  <p className='awms-pricing-rectangles-line1'>Minor Maintenance</p>
                                  <p className='awms-pricing-rectangles-line2'>60 requests a month​</p>
                              </div>
                          </li>
                          <li>
                              <div className="awms-Training_Change_Management">
                                  <p className='awms-pricing-rectangles-line1'>Training and Change Management</p>
                                  <p className='awms-pricing-rectangles-line2'>15 hours of Training a month​</p>
                              </div>
                          </li>
                          <li className='cross'>
                              <div className="awms-Major_Enhancements">
                                  <p className='awms-pricing-rectangles-line1'>Major Enhancements</p>
                                  <p className='awms-pricing-rectangles-line2'>Not Applicable​</p>
                              </div>
                          </li>
                      </ul>
                      <div className='awms-pricing-rectangles-btn'>
                      <button onClick={handleButtonClick}><h6>Subscribe Now</h6></button>
                      </div>
                  </div>
                  
              </div>
              <div className='awms-pricing-rectangle3'>
                  <div className='awms-pricing-rectangle3-top-img'>
                      <img src={awms_rec_top_svg} alt="awms_rec_top_svg" />
                  </div>
                  <div className='awms-pricing-rectangle2-price-text'>
                      <div className="awms-pricing-gold">
                  <h4>GOLD[Recommended]</h4>
                    </div>
                      <div className="awms-pricing-US7999">
                  <h1><h4>US$9,999/</h4>US$7,999/</h1>
                    </div>
                    <div className="awms-pricing-gold-Per_Year_fk">
                  <p>Per Month</p>
                    </div>
                      <ul class="tick-mark-list">
                          <li>
                              <div className="awms-Managed_services_hours">
                                  <p className='awms-pricing-rectangles-line1'>Managed Services Hours</p>
                                  <p className='awms-pricing-rectangles-line2'>150 hours​</p>
                              </div>
                          </li>
                          <li>
                              <div className="awms-Email__Chat_Support_40_request">
                                  <p className='awms-pricing-rectangles-line1'>Email / Chat Support</p>
                                  <p className='awms-pricing-rectangles-line2'>100 requests a month​</p>
                              </div>
                          </li>
                          <li>
                              <div className="awms-Minor_Maintenance">
                                  <p className='awms-pricing-rectangles-line1'>Minor Maintenance</p>
                                  <p className='awms-pricing-rectangles-line2'>80 requests a month​</p>
                              </div>
                          </li>
                          <li>
                              <div className="awms-Training_Change_Management">
                                  <p className='awms-pricing-rectangles-line1'>Training and Change Management</p>
                                  <p className='awms-pricing-rectangles-line2'>50 hours of Training a month​</p>
                              </div>
                          </li>
                          <li>
                              <div className="awms-Major_Enhancements">
                                  <p className='awms-pricing-rectangles-line1'>Major Enhancements</p>
                                  <p className='awms-pricing-rectangles-line2'>40 Hours Carried over for up to 3 months​</p>
                              </div>
                          </li>
                      </ul>
                      <div className='awms-pricing-rectangles-btn'>
                      <button onClick={handleButtonClick}><h6>Subscribe Now</h6></button>
                      </div>
                  </div>
              </div>
          </div>
          <div className='awms-pricing-terms_condition-section'>
            <a href="/DLUX Managed Services - T&C (1).pdf" target="_blank" rel="noopener noreferrer">
              <p>Terms & conditions*</p>
            </a>
        </div>
          <div className='awms-pricing-terms_condition-btn'>
                  <button onClick={handleButtonClick}><h6>Still Confused!Talk To Us</h6></button>
          </div>

          <div className='awms-pricing-terms_condition-boxes'>
              <div className='awms-pricing-terms_condition-box1'>
                  <div className='awms-pricing-terms_condition-box1-texts'>
                      <h3>Proof HQ</h3>
                      <p>Switch to Workfront for proofing that's, like, effortless. We'll help you migrate your data with our best-in-class services! </p>
                  </div>
              </div>
              <div className='awms-pricing-terms_condition-box2'>
                  <div className='awms-pricing-terms_condition-box2-texts'>
                      <h3>Content Operations</h3>
                      <p>Workfront gives you an X-ray vision for your content projects. Lost assets and content scramble? Not anymore.</p>
                  </div>
              </div>
          </div>
      </div>

      {/* Animation Icons */}
      <div className='awms-animation-icons'>
        
        <div className='awms_blink1'>
            <img src={awms_blink1} alt="cload" />
        </div>

        <div className='awms_blink2'>
            <img src={awms_blink2} alt="cblink1" />
        </div>

        <div className='awms_blink3'>
            <img src={awms_blink3} alt="cblink2" />
        </div>
        <div className='awms_blink4'>
            <img src={awms_blink4} alt="cblink2" />
        </div>
        <div className='awms_cube'>
            <img src={awms_cube} alt="cblink2" />
        </div>
        <div className='awms_globe'>
            <img src={awms_globe} alt="cblink2" />
        </div>
        {/* <div className='awms_load'>
            <img src={awms_load} alt="cblink2" />
        </div> */}
      </div>

      {/* Our Clients Section */}
      <div className='awms-our-clients-section'>
          <div className="awms-titleName">
          <h1>Our Clients</h1>
        </div>
        <p className="awms-sub1">
          Growing hand in hand with a crew of clients who keep our journey lively and flourshing.
        </p>
          <div className="icon-containerTwo customer-logos">
          <div className="iconSix">
            <img src={page.ourClients[0].dluxImageCollection.items[0].url} alt="icon6" />
          </div>
          <div className="iconSeven">
            <img src={page.ourClients[0].dluxImageCollection.items[1].url} alt="icon7" />
          </div>
          <div className="iconEight">
            <img src={page.ourClients[0].dluxImageCollection.items[2].url} alt="icon8" />
          </div>
          <div className="iconNine">
            <img src={page.ourClients[0].dluxImageCollection.items[3].url} alt="icon9" />
          </div>
          <div className="iconTen">
            <img src={page.ourClients[0].dluxImageCollection.items[4].url} alt="icon10" />
          </div>
          <div className="iconEleven">
            <img src={page.ourClients[0].dluxImageCollection.items[5].url} alt="icon11" />
          </div>
          <div className="iconTwelve">
            <img src={page.ourClients[0].dluxImageCollection.items[6].url} alt="icon12" />
          </div>
          <div className="icon13">
            <img src={page.ourClients[0].dluxImageCollection.items[7].url} alt="icon13" />
          </div>
          <div className="icon14">
            <img src={page.ourClients[0].dluxImageCollection.items[8].url} alt="icon14" />
          </div>
          <div className="icon15">
            <img src={page.ourClients[0].dluxImageCollection.items[9]?.url} alt="icon15" />
          </div>
        </div>

      </div>


    {/* Testimonials Section */}
      <div className='awms-testimonials-section'>
      <div className="awms-clients-container">
          <h1>Testimonials</h1>
          <p className='awms-hide-on-mobileclients'>
            {page.dluxClientReview[0].clientText}</p>
          {/* <p className='awms-hide-on-laptopclients'>
          {page.dluxClientReview[0].clientText}</p> */}
      </div>
      
      <div className="awms-whatClientsMain">
          <div className="awms-testimonial">
            <div
              className={`awms-slide-col${active + 1}`}
              style={{ backgroundImage: `url(${images[active]})` }}
            >
              <div className="awms-user-text">
              {active === 0 && (
                    <>
                        <p>{page.dluxClientReview[0].clientParagraph}</p>
                        <h3>{page.dluxClientReview[0].clientH3}</h3>
                    </>
                )}

                {active === 1 && page.client2 && page.client2[0] && (
                    <>
                        <p>{page.client2[0].clientParagraph}</p>
                        <h3>{page.client2[0].clientH3}</h3>
                    </>
                )}

                {active === 2 && page.client3 && page.client3[0] && (
                    <>
                        <p>{page.client3[0].clientParagraph}</p>
                        <h3>{page.client3[0].clientH3}</h3>
                    </>
                )}

                {active === 3 && page.client4 && page.client4[0] && (
                    <>
                        <p>{page.client4[0].clientParagraph}</p>
                        <h3>{page.client4[0].clientH3}</h3>
                    </>
                )}
              </div>
            </div>
          </div>
          <div className="button-move">
            <div className="indicator">
              {images.map((_, index) => (
                <div
                  key={index}
                  className={`client-btn ${index === active ? "active" : ""}`}
                  onClick={() => handleClientClick(index)}
                ></div>
              ))}
            </div>
          </div>
        </div>

        <div className="boxContainer">
          <img src={page.ourClients[0].dluxImageCollection.items[10].url} alt="bottomImage3" />
        </div>

      </div>

  {/* Lets Connect section */}
      <div className='awms-lets-connect-section'>
      <div className="awms-form">
            <div className='awms-form-ls'>
              <h1>Let's Connect!</h1>
            <p>DLUX is your ultimate launchpad to rocket-power your<br/>
              journey towards greatness. Your personal genie is just<br/>
              a call away, here to craft custom solutions that fit you<br/>
              like a glove.</p>

                <div className='awms-btn'>
                    <button onClick={handleButtonClick}><h6>Talk to us now!</h6></button>
                </div>

              </div>
              <div className='awms-form-rs-icons'>
              <div>
                <img src={awms_callicon} className="awms-fcallicon" alt="awms_callicon" />
                <p className='awms-fcalliconp'>
                <a href="tel:+61412381998">+61 411 048 090</a>
                </p>
              </div>
              <div>
                <img src={awms_mssgicon} className="awms-fmssgicon" alt="awms_callicon" />
                <p className='awms-fmssgiconp'>
                <a href="mailto:sales@dluxtech.com">sales@dluxtech.com</a>
                </p>
              </div>
              <div>
                <img src={awms_locicon} className="awms-flocicon" alt="awms_callicon" />
                <p className='awms-flociconp'>
                  <a href="https://www.google.com/maps/place/28+Beacon+Drive,+Schofields,+NSW+2762" target="_blank" rel="noopener noreferrer">
                  28 Beacon Drive, Schofields, NSW 2762
                  </a>
                </p>
              </div>
            </div>
            </div>
      </div>

    {/* Footer section */}
      <div className='awms-footer-section'>
      <div className='awms-footerl3'>
          <p>Copyright © 2024 DLUX TECH CORP - All Rights Reserved</p>
          <Link to ='/privacy-policy'><p>Privacy Policy</p></Link>
          <Link to ='/cookie-policy'><p>Cookie Policy</p></Link>
        </div>  
      </div>
      </div>
      </div>
    );
  }

  export default AdobeWorkfrontManagedServices_US;
