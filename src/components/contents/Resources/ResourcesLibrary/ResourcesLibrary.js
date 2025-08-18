import React, { useState, useEffect } from 'react';
import './ResourcesLibrary.css';
import Navbar from '../../../Navbar';
import { Helmet } from 'react-helmet';
import Modal from '../ResourcesForm/ResourcesForm';
import HForm from '../../../HForm/HForm';
import rl_wave from './ResourcesLibrary_Assests/rl_wave.png';
import HomeFooter from '../../../HomeFooter/HomeFooter';

export const ResourcesLibrary = () => {
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

    /* Contentful - Starts here */
    const query = `
{
    resourcesResourcesLibrary(id:"BdchU1kMkrkCWpAdV59ir"){
        mainTitle
        imageAssetsCollection{
                items{
                  url
                }
        }
    }
  tile1:resourcesResourcesLibrary(id:"2oIuPXLbhCg39sx1kAza0i"){
        imageAssetsCollection{
                items{
                  url
                }
        }
        gatedContentTitle
        gatedContentDocsCollection{
          items{
            url
          }
        }
    }
    tile2:resourcesResourcesLibrary(id:"3Q9a74nE3rqMMH0fEY1UkG"){
        imageAssetsCollection{
                items{
                  url
                }
        }
        gatedContentTitle
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
                    resourcesResourcesLibrary: [data.resourcesResourcesLibrary],
                    tile1: [
                        data.tile1,
                    ],
                    tile2: [
                        data.tile2,
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
    /* Contentful - Ends here */

    return (
        <div className="resources-library-wrapper">
            <div className="resources-library-nav">
                <Navbar />
                <Helmet>
                    <title>Resources Library | DLUX</title>
                    <meta name="description" content="#" />
                </Helmet>
            </div>

            <div className='resources-library-img-section'>
                <img src={page.resourcesResourcesLibrary[0].imageAssetsCollection.items[0].url} alt="ss_hero_img" />
            </div>
            <div className='resources-library-img-text'>
                <h1>{page.resourcesResourcesLibrary[0].mainTitle}</h1>
            </div>

            <div className="resources-library-container">
                <div className='rl_cs_section'>
                    <div className='rl_cs_line1'>
                        <img src={page.tile1[0].imageAssetsCollection.items[0].url} alt='rl_tile1' />
                        <h3>{page.tile1[0].gatedContentTitle}</h3>
                        <button onClick={() => handleButtonClick(`${page.tile1[0].gatedContentDocsCollection.items[0].url}`)}>Download Now</button>
                    </div>
                    <div className='rl_cs_line1'>
                        <img src={page.tile2[0].imageAssetsCollection.items[0].url} alt='rl_tile2' />
                        <h3>{page.tile2[0].gatedContentTitle}</h3>
                        <button onClick={() => handleButtonClick(`${page.tile2[0].gatedContentDocsCollection.items[0].url}`)}>Download Now</button>
                    </div>
                </div>
            </div>

            {/* Form Modal Component */}
            <Modal showModal={showModal} closeModal={closeModal} handleSubmit={handleSubmit} pdfFile={pdfFile} />

            <div className="rl_wave">
                <img src={rl_wave} />
            </div>

            <div className='rl-form'>
                <HForm />
            </div>

            <div className='rl-footer'>
                <HomeFooter />
            </div>
        </div>
    );
};
