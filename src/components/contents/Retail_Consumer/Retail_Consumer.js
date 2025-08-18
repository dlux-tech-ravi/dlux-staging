import React from 'react';
import './Retail_Consumer.css'
import reatailImg from './RetailAssets/retailImg.png';
import knockImg from './RetailAssets/knockImg.png';
import integrationImg from './RetailAssets/integrationImg.png';
import smileImg from './RetailAssets/smileImg.png';
import Navbar from '../../Navbar';
import retailMainImg from './RetailAssets/retailMainImg.png';
import ellipseR from './RetailAssets/ellipseR.png';
import dotR from './RetailAssets/dotr.png';
import fmg from './RetailAssets/fmg.png';
import pyramidR from './RetailAssets/pyramidR.png';
import HForm from '../../HForm/HForm'
import HomeFooter from '../../HomeFooter/HomeFooter';
import { Helmet } from 'react-helmet';

function RetailConsumer() {
    return (
        <>
            <div className='industries-retail-wrapper'>
            <div className='industries-retail-nav'>
               <Navbar/>
               <Helmet>
        <title>Retail Excellence | Crafting Strategic Solution for Business | DLUX</title>
        <meta name="description" content="Elevate your retail game with personalized strategies, seamless integration, and meaningful connections for lasting success and a brighter retail future." />
        </Helmet>
            </div>
                <div className='retail-img-sec'>
                    <img src={retailMainImg} alt='retail-main-img' />
                </div>
                <div className='retail-heading'>
                    <h1>Retail Excellence: Connecting Strategies<br/> for Customer Centricity</h1>
                </div>
                <div className='industriesretail-container'>
                    <div className='second-retail-page'>
                        <div className="shop-img">
                            <img src={reatailImg} alt='image'></img>
                        </div>
                        <div className="shop-paragraph">
                            <p>Elevate your retail and consumer product strategies to foster enhanced connections with customers while simultaneously improving sustainability and increasing profitability.<br/><br/> Our consulting services focus on delivering exceptional experiences, prioritizing value creation beyond conventional methods, and ensuring lasting connections between brands and consumers. From hyper-personalization to Al, automation, AR, social commerce, advanced analytics, and integrated technologies, these transformative shifts are reshaping the retail landscape.</p>
                        </div>
                    </div>

                    <div className="paradigm-shift">
                        <h2 className="retail-paradigm">A Paradigm Shift in Retail Dynamics: <br />Embracing Technologies Advancements</h2>
                        <h5 className="retail-task">"52% of retail tasks can be automated using current technology, reducing errors, enhancing service quality, <br />increasing employee productivity, and saving costs. In today's fiercely competitive market, automation is not <br />     merely an option but a vital necessity."</h5>
                        <p>--McKinsey report</p>
                    </div>
                    <div className="fourth-retail-page">
                        <h1 className="retail-work">Integrated Work Management <br />Strategies</h1>
                        <div className="bulletins-whole-container">
                        <div className="ci-cont">
                            <div className="bullet1"></div>
                            <p>Create a centralized framework for marketing<br/> operations to eliminate silos and<br/> organized disorder.</p>
                            <div className="bullet2"></div>
                            <p>Integrate multi-tech applications to offer a <br />comprehensive 360-degree perspective <br />of the customer.</p>
                        </div>
                        
                        <div class="ep-cont">
                            <div className="bullet3"></div>
                            <p className="ep-text3">Enhance transparency into performance<br/> metrics.</p>
                            <div className="bullet4"></div>
                            <p>Provide personalized experiences on a <br/> large scale.</p>
                        </div>
                        </div>
                        </div>
                
                <div className="fifth-retail-page">
                    <div className="knock-img">
                        <img src={knockImg} alt='image'></img>
                    </div>
                    <div className="knock-paragraph">
                        <h3 className="retail-str">Strategic Approach and Workflow</h3>
                        <p>DLUX, your Martech partner, streamlines customer satisfaction<br/> with tailored strategies and advanced technology. Our certified<br/> consultants integrate connected work and technologies for<br/> impactful brand experiences. With DLUX, achieving marketing<br/> objectives becomes manageable, ensuring unforgettable<br/> customer engagement.</p>
                    </div>
                    <p className='hide-on-laptop6'>DLUX, your Martech partner, streamlines customer satisfaction with tailored strategies and advanced technology. Our certified consultants integrate connected work and technologies for impactful brand experiences. With DLUX, achieving marketing  objectives becomes manageable, ensuring unforgettable customer engagement.</p>
                    </div>
            </div>
            <div className="sixth-retail-page">
                <div className="smile-paragraph">
                    <h3 className="retail-approach"> Personalized Customer Experiences </h3>
                    <p>Retailers that craft personalized, high-caliber customer experiences <br />are three times more likely to surpass their competitors. <br />Throughout each stage of our process, we emphasize how you can <br />seamlessly integrate people, processes, and technology to shape <br />your customer's journey through omnichannel personalization.</p>
                </div>
                <p className='hide-on-laptop6'>Retailers that craft personalized, high-caliber customer experiences are three times more likely to surpass their competitors. Throughout each stage of our process, we emphasize how you can seamlessly integrate people, processes, and technology to shape your customer's journey through omnichannel personalization.</p>
                <div className="smile-img">
                    <img src={smileImg} alt='image'></img>
                </div>

            </div>
            <div className="seventh-retail-page">
                <div className="integration-img">
                    <img src={integrationImg} alt='image'></img>
                </div>
                <div className="integration-paragraph">
                    <h3 className="integral-approach">Integration of Technologies</h3>
                    <p>By seamlessly integrating your current systems and harnessing <br />the capabilities of Adobe Experience Cloud and more, you'll attain <br />agility, speed, and a robust marketing platform that synchronizes <br />seamlessly with your customer channels in real time.</p>
                </div>
                <p className='hide-on-laptop6'>By seamlessly integrating your current systems and harnessing the capabilities of Adobe Experience Cloud and more, you'll attain agility, speed, and a robust marketing platform that synchronizes seamlessly with your customer channels in real time.</p>
            </div>
            </div>
            <div className="fmgo">
                <img src={fmg} />
            </div>

            <div className="elipse">
                <img src={ellipseR} alt='ellipse' />
            </div>
            <div className="pyramid">
                <img src={pyramidR} alt='pyramid' />
            </div>

            <div className="dotR">
                <img src={dotR} alt='dotR'/>
            </div>
           
            <div className='industries-retail-form'>
                <HForm />
            </div>


            <div className='industries-retail-footer'>
                <HomeFooter />
            </div>
           


        </>
    )
}
export default RetailConsumer


