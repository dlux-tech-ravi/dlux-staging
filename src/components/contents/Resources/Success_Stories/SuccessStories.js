import React, { useState, useEffect } from 'react';
import './SuccessStories.css';
import Navbar from '../../../Navbar';
import { Helmet } from 'react-helmet';
import Modal from '../ResourcesForm/ResourcesForm';
import HForm from '../../../HForm/HForm';
import ss_wave from './Success_Stories_Assests/ss_wave.png';
import HomeFooter from '../../../HomeFooter/HomeFooter';

export const SuccessStories = () => {

    // Form Validation / Logics - Starts here !
    const [showModal, setShowModal] = useState(false);
    const [pdfFile, setPdfFile] = useState('');

    const handleButtonClick = (file) => {
        setPdfFile(file);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const handleSubmit = (formValues) => {
        // Trigger form submission
        document.getElementById('form').submit();
        window.open(pdfFile, '_blank');
    };
    // Form Validation / Logics - Ends here !

/*Contentful - Starts here*/
    const query = `
{
    resourcesSuccessStories(id:"4tS91VlIPIpFthrlDUuXQs"){
        mainTitle
        imageAssetsCollection{
                items{
                  url
                }
        }
    }
  tile1:resourcesSuccessStories(id:"Ivvb3WgGgQIfvpJlaKvNc"){
        imageAssetsCollection{
                items{
                  url
                }
        }
    		gatedContentTitle
    		gatedContentParagraph
    		gatedContentDocsCollection{
          items{
            url
          }
        }
    }
    tile2:resourcesSuccessStories(id:"15SdpothusQPHUPFLGvnZr"){
        imageAssetsCollection{
                items{
                  url
                }
        }
    		gatedContentTitle
    		gatedContentParagraph
    		gatedContentDocsCollection{
          items{
            url
          }
        }
    }
  	tile3:resourcesSuccessStories(id:"1dUnHlBw0ZpwkcdaqDxtYD"){
        imageAssetsCollection{
                items{
                  url
                }
        }
    		gatedContentTitle
    		gatedContentParagraph
    		gatedContentDocsCollection{
          items{
            url
          }
        }
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
                    resourcesSuccessStories: [data.resourcesSuccessStories],
                    tile1: [
                        data.tile1,
                    ],
                    tile2: [
                        data.tile2,
                    ],
                    tile3: [
                        data.tile3,
                    ]
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
/*Contentful - Ends here*/
    
    return (
        <div className="success-stories-wrapper">
            <div className="success-stories-nav">
                <Navbar />
                <Helmet>
                    <title>Success Stories | DLUX</title>
                    <meta name="description" content="This is a description of my page" />
                </Helmet>
            </div>

            <div className='success-stories-img-section'>
                <img src={page.resourcesSuccessStories[0].imageAssetsCollection.items[0].url} alt="ss_hero_img" />
            </div>
            <div className='success-stories-img-text'>
                <h1>{page.resourcesSuccessStories[0].mainTitle}</h1>
            </div>

            <div className="success-stories-container">
                <div className='ss_cs_section'>
                    <div className='ss_cs_line1'>
                        <img src={page.tile1[0].imageAssetsCollection.items[0].url} alt='ss_tile1' />
                        <h3>{page.tile1[0].gatedContentTitle}</h3>
                        <p>{page.tile1[0].gatedContentParagraph}</p>
                        <button onClick={() => handleButtonClick(`${page.tile1[0].gatedContentDocsCollection.items[0].url}`)}>Download Now</button>
                    </div>
                    <div className='ss_cs_line1'>
                        <img src={page.tile2[0].imageAssetsCollection.items[0].url} alt='ss_tile2' />
                        <h3>{page.tile2[0].gatedContentTitle}</h3>
                        <p>{page.tile2[0].gatedContentParagraph}</p>
                        <button onClick={() => handleButtonClick(`${page.tile2[0].gatedContentDocsCollection.items[0].url}`)}>Download Now</button>
                    </div>
                    <div className='ss_cs_line1'>
                        <img src={page.tile3[0].imageAssetsCollection.items[0].url} alt='ss_tile3' />
                        <h3>{page.tile3[0].gatedContentTitle}</h3>
                        <p>{page.tile3[0].gatedContentParagraph}</p>
                        <button onClick={() => handleButtonClick(`${page.tile3[0].gatedContentDocsCollection.items[0].url}`)}>Download Now</button>
                    </div>
                </div>
            </div>

             {/* Modal Component */}
             <Modal showModal={showModal} closeModal={closeModal} handleSubmit={handleSubmit} pdfFile={pdfFile} />

            <div className="ss_wave">
                <img src={ss_wave} />
            </div>

            <div className='ss-form'>
                <HForm />
            </div>

            <div className='ss-footer'>
                <HomeFooter />
            </div>
        </div>
    );
};
