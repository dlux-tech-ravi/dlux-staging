import React, { useState, useEffect } from 'react';
import './Clients.css';
import cicon from '../Clients/loading-symbol.png';
import cube from '../Clients/cube.png';
import ball from '../../components/Clients/Rectangle 358.png';

const Clients = () => {

  const [active, setActive] = useState(0);

  const query = `
  {
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
 client5:  dluxClientReview(id:"6QPRPE2wKPBc9vl8GiLmkS"){
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


  const accessToken = process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN;
  const [page, setPage] = useState(null);
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
        }
        setPage({
          dluxClientReview: [data.dluxClientReview],
          client2: [data.client2],
          client3: [data.client3],
          client4: [data.client4],
          client5: [data.client5],
          girl_banner: [data.girl_banner],
        });
        setLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchPageData();
  }, []);


  if (loading) {
    return <div className="blog-loading-spinner"></div>; // Render loading spinner
  }

  if (!page) {
    return <div>No content available.</div>;
  }


  const images = [
    page.girl_banner[0]?.dluxImageCollection.items[1]?.url,
    page.girl_banner[0]?.dluxImageCollection.items[1]?.url,
    page.girl_banner[0]?.dluxImageCollection.items[1]?.url,
    page.girl_banner[0]?.dluxImageCollection.items[1]?.url,
    page.girl_banner[0]?.dluxImageCollection.items[1]?.url,

  ];

  const handleClientClick = (index) => {
    setActive(index % images.length);
  };



  return (
    <div className="wrapper-clients">
      <div className="ball">
        <img src={ball} alt="ball" />
      </div>
      <div className="cube">
        <img src={cube} alt="cube" />
      </div>
      <div className="clients-container">
        <h1>{page.dluxClientReview[0].clientheading}</h1>
        <p className='hide-on-mobileclients'>
          {page.dluxClientReview[0].clientText}</p>
        <p className='hide-on-laptopclients'>
          {page.dluxClientReview[0].clientText}</p>
      </div>

      <div className="cicon">
        <img src={cicon} alt="cicon" />
      </div>

      <div className="whatClientsMain">
        <div className="testimonial">
          <div
            className={`slide-col${active + 1}`}
            style={{ backgroundImage: `url(${images[active]})` }}
          >
            <div className="user-text">
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
               {active === 4 && page.client5 && page.client5[0] && (
                <>
                  <p>{page.client5[0].clientParagraph}</p>
                  <h3>{page.client5[0].clientH3}</h3>
                </>
              )}



            </div>

            <div className="woman">
              <img src={page.girl_banner[0].dluxImageCollection.items[0].url} alt="woman" />
            </div>
          </div>
        </div>
        <div className="button-move">
          <div className="home_indicator">
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
    </div>
  );
};

export default Clients;
