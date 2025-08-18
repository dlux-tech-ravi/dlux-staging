import React ,{useState, useEffect} from 'react';
import './SetsUpApart.css';
import img1 from '../../Assets/Mask Group 97.png';
import img2 from '../../Assets/Mask Group 100.png';
import img3 from '../../Assets/Mask Group 98.png';
import img4 from '../../Assets/Mask Group 99.png';
import img5 from '../../Assets/Mask Group 96.png';
import img6 from '../../Assets/Mask Group 101.png';

    const servicesData = [
        { 
          icon: img1, 
          text: 'Talented Experts\nat Scale', 
        },
        { 
          icon: img2, 
          text: 'End-to-End  \nDigital Offerings', 
          
        },
        { 
          icon: img3, 
          text: 'Digital \nConsulting', 
           
        },
        { 
          icon: img4, 
          text: 'Data \nConsulting', 
        },

        { 
            icon: img5, 
            text: 'Our Partner \nEcosystem', 
        },
        { 
            icon: img6, 
            text: 'Agile Work \nManagement', 
        },
      ];
      export const SetsUpApart = () => {

        const query = `
        {
          dluxHomePage(id:"1QCns1NYtvzQkdbCpV3JTx"){
            dluxHeading
            dluxPara
          }
        }
         `;
      
      
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
                         dluxHomePage: [
                             data.dluxHomePage,
                         ],
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




        return (
          <div className="container2">
            <h1>{page.dluxHomePage[0].dluxHeading}</h1>
            <p className='hide-on-mobilehome'>
            {page.dluxHomePage[0].dluxPara}
            </p>
            <p className='hide-on-laptophome'>
             {page.dluxHomePage[0].dluxPara}
            </p>
            <div className="service-row2">
              {servicesData.map((service, index) => (
                <div className="service-box2" key={index}>
                  <div className="icon-container2">
                    <img src={service.icon} alt="Service Icon" className="icon2" />
                    <div className="service-text2">
                      <h2>{service.text}</h2>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      };
      
      export default SetsUpApart;
      