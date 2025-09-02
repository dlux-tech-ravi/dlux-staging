import React, { useEffect, useState } from "react";
import './OurClients.css';
import { Link } from 'react-router-dom';
import HForm from '../HForm/HForm';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import $ from 'jquery';
import 'slick-carousel';

function OurClients() {
  const [page, setPage] = useState(null);
  const [loading, setLoading] = useState(true);
  const accessToken = process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN;

  const query = `
  {
    ourPartners:dluxHomePage(id:"6VgcKuDO1NsIGXj2zP0Zm2"){
       dluxHeading
       dluxPara
       dluxImageCollection{
         items{
           url
         }
       }
     }
     ourClients:dluxHomePage(id:"4A72lxXg2x9dph73jiAulF"){
      dluxHeading
      dluxPara
      dluxImageCollection{
        items{
          url
        }
      }
    }
 
    adobeSubmit2024:dluxHomePage(id:"12oxSkJL3bQq1m94Po2PKj"){
      dluxHeading
      dluxPara
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
          ourPartners: [data.ourPartners],
          ourClients: [data.ourClients],
          adobeSubmit2024: [data.adobeSubmit2024]
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
        slidesToShow: 7,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        centerMode: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
            }
          },
          {
            breakpoint: 520,
            settings: {
              slidesToShow: 3,
            }
          },
          // {
          //   breakpoint: 480,
          //   settings: {
          //     slidesToShow: 3,
          //   }
          // }
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

  return (
    <>
      <div className="mainDiv">
        <div className="titleName1">
          <h1>{page.ourPartners[0].dluxHeading}</h1>
        </div>
        <p className="sub">
          {page.ourPartners[0].dluxPara}
        </p>
        <div className="slider-container">
          <div className="iconOne">
            <img src={page.ourPartners[0].dluxImageCollection.items[0].url} alt="icon1" />
          </div>
          <div className="iconTwo">
            <img src={page.ourPartners[0].dluxImageCollection.items[1].url} alt="icon2" />
          </div>
          <div className="iconThree">
            <img src={page.ourPartners[0].dluxImageCollection.items[2].url} alt="icon3" />
          </div>
          <div className="iconFour">
            <img src={page.ourPartners[0].dluxImageCollection.items[3].url} alt="icon4" />
          </div>
          <div className="iconFive">
            <img src={page.ourPartners[0].dluxImageCollection.items[4].url} alt="icon5" />
          </div>
          <div className="iconEighteen">
            <img src={page.ourPartners[0].dluxImageCollection.items[5].url} alt="icon19" />
          </div>
        </div>
      </div>
      <div className="titleName2">
        <h1>{page.ourClients[0].dluxHeading}</h1>
      </div>
      <p className="sub1">
        {page.ourClients[0].dluxPara}
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
        <div className="icon17">
          <img src={page.ourClients[0].dluxImageCollection.items[11]?.url} alt="icon17" />
        </div>
        <div className="icon18">
          <img src={page.ourClients[0].dluxImageCollection.items[12]?.url} alt="icon18" />
        </div>
        <div className="icon19">
          <img src={page.ourClients[0].dluxImageCollection.items[13]?.url} alt="icon19" />
        </div>
         <div className="icon20">
          <img src={page.ourClients[0].dluxImageCollection.items[14]?.url} alt="icon20" />
        </div>
        <div className="icon21">
          <img src={page.ourClients[0].dluxImageCollection.items[15]?.url} alt="icon21" />
        </div>
        <div className="icon22">
          <img src={page.ourClients[0].dluxImageCollection.items[16]?.url} alt="icon22" />
        </div>
      </div>
      {/* <div className="temporary-submit">
        <div className='temporary-submit-adwf-levelup-section'>
          <h1>{page.adobeSubmit2024[0].dluxHeading}</h1>
          <div className='temporary-submit-adwf-levelup-text'>
            <div className='temporary-submit-adwf-levelup-para'>
              <p>{page.adobeSubmit2024[0].dluxPara}</p>
              <div className='temporary-submit-adwf-levelup-btn'>
                <Link to='https://calendly.com/luxmanpai/30min' ><button ><h6>Get on Lux's calendar</h6></button></Link>
              </div>
            </div>
            <div className='temporary-submit-adwf-levelup-adwf_lasvegas'>
              <img src={page.adobeSubmit2024[0].dluxImageCollection.items[0].url} alt='temporary-submit-adwf_lasvegas' />
            </div>      
          </div>
        </div>
      </div> */}
      <div className="boxContainer">
        <img src={page.ourClients[0].dluxImageCollection.items[10].url} alt="bottomImage3" />
      </div>
      <div className="home-form">
        <HForm />
      </div>
    </>
  );
}

export default OurClients; 