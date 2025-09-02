import React from 'react'
import HeroBanner from '../NewVideo/HeroBanner'
import Testimonials from '../NewVideo/Testimonials'
import ClientLogos from '../NewVideo/ClientLogos'
import PortfolioCarousel from '../NewVideo/PortfolioCarousel.js'
import CarouselSection from '../NewVideo/CarouselSection.js'
import NewSection from '../NewVideo/NewSection.js'
import LeftCarousel from '../NewVideo/LeftCarousel.js'


const NewVideopage = () => {
  return (
   <>
   <HeroBanner/>
   <ClientLogos/>
   <Testimonials/>
   <PortfolioCarousel/>
   <CarouselSection/>
   <NewSection/>
   <LeftCarousel/>
   </>
  )
}

export default NewVideopage