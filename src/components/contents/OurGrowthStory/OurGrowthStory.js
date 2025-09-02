import { useState, useEffect } from 'react'
import './OurGrowthStory.css'
import tree_ogs from './tree-ogs.png'
import shape_1 from './Shape1-ogs.png'
import shape_2 from './Shape2-ogs.png'
import glow_1 from './glow1-ogs.png'
import glow_2 from './glow2-ogs.png'
import Navbar from '../../Navbar'
import ogs_wave from './ogs-wave.png'
import mainlogo_ogs from './mainlogo-ogs.png'
import HForm from '../../HForm/HForm'
import HomeFooter from '../../HomeFooter/HomeFooter'
import { Helmet } from 'react-helmet';


const OurGrowthStory = () => {
  
  return (

    <div className='our-growth-story-wrapper'>
        <div className='ogs-nav'>
        <Navbar/>
        <Helmet>
        <title>Our Growth Story | Adobe Partner | DLUX</title>
        <meta name="description" content="DLUX: Partnered with Adobe, we thrive in Marketing Technology! Resilient, we embrace challenges & seize opportunities for a dynamic future." />
        </Helmet>
        </div>

        <div className='our-growth-story-img-section'>
        <img src={mainlogo_ogs} alt="mainlogo-ogs" />
        </div>

        <div className='our-growth-story-head-text'>
        <h1 >Rooted in Innovation <br /> Branching out to Success</h1>
      </div>


    <div className='our-growth-story-container'>
       <div className='tree-ogs-h1-text'>
        <h1>Our Growth Story</h1>
        </div>

        <div className='tree-ogs'>
            <div className='tree_ogs-img'>
            <img src={tree_ogs} alt="tree_ogs" />
            </div>
        

        <div className='ogs-2024'>
            <h3>2024</h3>
            <div className='ogs-2024-text'>
            <p >In 2024, our doors have been graced by numerous<br/>
            partnerships and clients, including the largest insurance<br/>
            companies, fostering a robust network. Like a resilient<br/>
            tree, we stand steadfast and unwavering in the face of<br/>
            challenges. Together, we boldly navigate the dynamic<br/>
            Marketing Technology landscape, leveraging our triumphs<br/>
            and eagerly seizing emerging opportunities on the frontier.</p>
      </div>
       {/* ------ */}
       <p className='hide-on-laptop72'>In 2024, our doors have been graced by numerous
            partnerships and clients, including the largest insurance
            companies, fostering a robust network. Like a resilient
            tree, we stand steadfast and unwavering in the face of
            challenges. Together, we boldly navigate the dynamic
            Marketing Technology landscape, leveraging our triumphs
            and eagerly seizing emerging opportunities on the frontier.</p>
            </div>
           
            
        <div className='ogs-2023'>
        <h3>2023</h3>
        <div className='ogs-2023-text'>
            <p>In 2023, DLUX experienced a remarkable year of growth<br/>
            and expansion. Our team has seen an influx of clients<br/>
            and a wealth of talent, transforming our branches into a<br/>
            cohesive and supportive family. Together, we teamed up<br/>
            to bridge the gap between marketing and technology, all<br/>
            the while maintaining the friendly cultures and values that<br/>
            define our workplace.</p>
</div>
            {/* ---- */}
            <p className='hide-on-laptop72'>In 2023, DLUX experienced a remarkable year of growth
            and expansion. Our team has seen an influx of clients
            and a wealth of talent, transforming our branches into a
            cohesive and supportive family. Together, we teamed up
            to bridge the gap between marketing and technology, all
            the while maintaining the friendly cultures and values that
            define our workplace.</p>
        </div>
        
        <div className='ogs-2022'>
        <h3>2022</h3>
        <div className='ogs-2022-text'>
            <p>Our cornerstones are our guiding beacons. In 2022, one</p>
            <p>of the largest global retailers entered the DLUX realm as</p>
            <p>our first workfront customer,enriching our journey with new</p>
            <p>horizons. We blossomed to our full potential when the first</p>
            <p>two team leads crossed the threshold of DLUX. By cultivating</p>
            <p>an environment teeming with possibilities, we empower our</p>
            <p>employees with a vibrant atmosphere of growth</p>
            </div>
            {/* ---- */}
            <p className='hide-on-laptop72'>Our cornerstones are our guiding beacons. In 2022, one
             of the largest global retailers entered the DLUX realm as
             our first workfront customer,enriching our journey with new
             horizons. We blossomed to our full potential when the first
             two team leads crossed the threshold of DLUX. By cultivating
             an environment teeming with possibilities, we empower our
             employees with a vibrant atmosphere of growth</p>
        </div>
        <div className='ogs-2021'>
        <h3>2021</h3>
        <div className='ogs-2021-text'>
            <p>In 2021, DLUX sowed the seeds of MarTech, which grew</p>
            <p>just as a seed's root began to sprout and spread.Much</p>
            <p>like the roots, our expertise expanded, revitalizing the</p>
            <p>flames of determination and propelling us toward new</p>
            <p>heights. Just as a green bay tree thrives, so does DLUX,</p>
            <p>flourishing with a renewed vigor to achieve greater</p>
            <p>milestones.</p>
</div>
            {/* -- */}
            <p className='hide-on-laptop72'>In 2021, DLUX sowed the seeds of MarTech, which grew
            just as a seed's root began to sprout and spread.Much
            like the roots, our expertise expanded, revitalizing the
            flames of determination and propelling us toward new
            heights. Just as a green bay tree thrives, so does DLUX,
            flourishing with a renewed vigor to achieve greater
            milestones.</p>
        </div>
        <div className='ogs-2017'>
        <h3>2017</h3>
        <div className='ogs-2017-text'>
            <p>DLUX sprouted in 2017 as a digital marketing consultancy</p>
            <p>and has since undergone an epic transformation, setting</p>
            <p>the groundwork for unprecedented expansion. Fast-</p>
            <p>forward to today, and we're standing tall as solid ground,</p>
            <p>nurturing the initial sprouts of groundbreaking progress.</p>
</div>
            {/* ----- */}
            <p className='hide-on-laptop72'>DLUX sprouted in 2017 as a digital marketing consultancy
            and has since undergone an epic transformation, setting
            the groundwork for unprecedented expansion. Fast-
            forward to today, and we're standing tall as solid ground,
            nurturing the initial sprouts of groundbreaking progress.</p>

        </div>

        <div className='ogs-icons'>
            <div className='glow1-ogs'>
                <img src={glow_1} alt="glow_1" />
            </div>
            <div className='shape1-ogs'>
                <img src={shape_1} alt="shape_1" />
                
            </div>
            <div className='shape2-ogs'>
                <img src={shape_2} alt="shape_2" />
                
            </div>
            <div className='glow2-ogs'>
                <img src={glow_2} alt="glow_2" />
            </div>
        </div>
        </div>

    </div>

    <div className='ogs-wave'>
                <img src={ogs_wave} alt="ogs_wave" />
            </div>

    
    <div className='ogs-form'>
            <HForm/>
        </div>
        
        <div className='ogs-footer'>
            <HomeFooter/>
        </div>

    </div>
  )
}

export default OurGrowthStory