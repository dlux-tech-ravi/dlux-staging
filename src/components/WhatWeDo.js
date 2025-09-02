import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import CounterPage from './CounterPage';
import HomePage from './contents/HomePage';
import '../components/contents/HomePage.css';

const WhatWeDo = () => {
 const query = `
  query {
    firstHomePage: dluxHomePage(id: "2rfsYJ4wDt9L1AzVxx3i0s") {
      dluxHeading
      dluxPara
    }
    secondHomePage: dluxHomePage(id: "62sZpQT1tlvjKROy0A51iV") {
      dluxHeading
      dluxPara
      dluxImageCollection {
        items {
          url
        }
      }
    }
  }
`;


  const accessToken = process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN;
  const [pageData, setPageData] = useState(null);
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
        } else {
          setPageData({
            first: data.firstHomePage,
            second: data.secondHomePage,
          });
        }

        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchPageData();
  }, []);

  if (loading) {
    return <div className="blog-loading-spinner"></div>;
  }

  if (!pageData) {
    return <div>No content available.</div>;
  }

  const { first, second } = pageData;

  return (
    <div>
      <div className="what-we-do-main">
        <div className="what-we-do">
          <h1>{first.dluxHeading}</h1>
          <p className='hide-on-mobile'>{first.dluxPara}</p>
          <br />
          <p className='hide-on-mobile'>Welcome to a new era of exceptional digital experiences.</p>
          <p className='hide-on-laptop'>{first.dluxPara}</p>
          <p className='hide-on-laptop'>Welcome to a new era of exceptional digital experiences.</p>

          <Link to="/services">
            <button><h6>Know More</h6></button>
          </Link>
        </div>

        <div>
          <CounterPage />
        </div>
      </div>

      <div className='what-we-do__bottom'>
  <h3 className='what-we-do__head'>{second.dluxHeading}</h3>
  <p className='what-we-do__text'>{second.dluxPara}</p>

        {second.dluxImageCollection?.items?.length > 0 && (
  <div className="what-we-do__media-wrapper">
    {second.dluxImageCollection.items.map((item, index) => (
      <img
        key={index}
        className="what-we-do__media"
        src={item.url}
        alt={`DLUX Visual ${index + 1}`}
      />
    ))}
  </div>
)}

</div>
  <div className="p-btn-div">
          <Link to="/trust-policy">
          <button><h6>Read More</h6></button>
          </Link>
        </div>

    </div>
  );
};

export default WhatWeDo;
