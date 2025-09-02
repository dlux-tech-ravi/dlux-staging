import React, { useEffect, useRef, useState } from 'react';
import './EmployeeCardSlider.css'; 
import DRISYA from './careers-assests/drisha.png';
import poorima from './careers-assests/poorinima.png';
import arun from './careers-assests/arun.png';
import gayathri from './careers-assests/gayathri.png';
import indu from './careers-assests/indu.png';
import yashik from './careers-assests/yashik.png';
import dilip from './careers-assests/dilip.png';
import jithesh from './careers-assests/jithesh.png';
import sneha from './careers-assests/sneha.png';

const EmployeeCardSlider = () => {
  let timeoutId;
  const isAutoPlay = true;

  const sliderRef = useRef(null);
  const wrapperRef = useRef(null);

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startScrollLeft, setStartScrollLeft] = useState(0);
  const [cards, setCards] = useState([
    { id: 1,para:"I've never felt more motivated and supported in my career than I do at DLUX. Every day brings new challenges and opportunities for growth. Together, we're building something truly remarkable, and I can't wait to see where our journey takes us next. The collaborative spirit and mindset at DLUX fuel my passion for contributing to groundbreaking projects.", name: 'DRISYA PR', designation: 'Software Engineer', icon:  <img src={DRISYA} alt="cpeopleicon" /> },
    { id: 2,para:"Working at Dlux has exposed me to a dynamic and collaborative work environment, where innovation is encouraged and valued. The mentorship  from my colleagues have played a crucial role. DLUX's commitment to employee development through ongoing training programs has empowered me to stay ahead .", name: 'Poornima Nandhakumar', designation: 'Salesforce Developer', icon:  <img src={poorima} alt="cpeopleicon" /> },
    { id: 3,para:"DLUX distinguishes itself through a transparent and healthful work environment. It has afforded me the support and opportunities to demonstrate my best capabilities, and I take pride in being a part of this organization. DLUX stands as a pivotal juncture in my career, inspiring me to surmount challenges.", name: 'Arun Ganesan', designation: 'Asst. Manager HR & Admin', icon:  <img src={arun} alt="cpeopleicon" /> },
    { id: 4,para:"Since the first day I joined DLUX , I've felt a sense of belonging and excitement. Joining this company has undoubtedly been one of the best decisions I've ever made.  We are a family of like-minded individuals who share a passion for technology and marketing. Being part of this team means that I am actively contributing to the future of MarTech, and it's an incredible feeling.", name: 'Gayathri Ravichandran', designation: 'Jr. Software Developer ', icon:  <img src={gayathri} alt="cpeopleicon" /> },
    { id: 5,para:"DLUX was my first professional home. From the moment I joined, I was warmly welcomed with open arms into an environment that fostered collaboration, learning, and personal growth. Being part of such a positive and inspiring team has been truly delightful, and I'm grateful for the opportunity to contribute to the organization's growth while also growing personally.", name: 'Indu.P ', designation: 'Software Engineer', icon: <img src={indu} alt="cpeopleicon" /> }, 
    { id: 6,para:"Working as a Business Development Consultant in Sales at DLUX  has been an incredible journey for me. The dynamic environment, coupled with cutting-edge technology, has empowered me to excel in my role. I am proud to be part of such a forward-thinking company, and I look forward to continuing to contribute to our success.", name: 'Yashiq Hameed ', designation: 'Business Development Consultant ', icon: <img src={yashik} alt="cpeopleicon" /> }, 
    { id: 7,para:"Becoming a part of DLUX marked a pivotal moment in my professional journey. The supportive DLUX team has enabled me to surmount challenges and advance in my career, for which I am deeply grateful. I take pride in being a member of the dynamic, cohesive, and fast-paced DLUX team. Their commitment has inspired me to strive for nothing less than the very best in everything that I do.", name: 'Jithesh.MP ', designation: 'Manager- Service Delivery ', icon: <img src={jithesh} alt="cpeopleicon" /> }, 
    { id: 8,para:"Joining DLUX was like unlocking a whole new level. I feel incredibly fortunate to be a part of such a dynamic and forward-thinking team. Every day brings new challenges, opportunities to learn, and the satisfaction of contributing to something truly meaningful. It's a privilege to be surrounded by such a talented and dedicated team, all working towards a common goal.", name: 'Dilip R Dasan', designation: 'IT manager', icon: <img src={dilip} alt="cpeopleicon" /> }, 
    { id: 9,para:"DLUX has enabled me to further develop my skill set while directly engaging with projects. I've enjoyed the benefits of responsibility from day one and I am thrilled to be in a place where I make essential contributions to my team on a daily basis.The opportunity to engage in impactful projects has not only broadened my perspective but has also instilled a sense of purpose in my daily work.", name: 'Sneha Ravikumar', designation: 'Software Engineer', icon: <img src={sneha} alt="cpeopleicon" /> }, 
]); 

  useEffect(() => {
    const carousel = sliderRef.current;
    const wrapper = wrapperRef.current;

    const firstCardWidth = carousel.querySelector(".card").offsetWidth;

   // Add event listeners for the arrow buttons
   const arrowBtns = document.querySelectorAll(".wrapper i");
   arrowBtns.forEach(btn => {
   btn.addEventListener("click", () => {
    const scrollAmount = btn.id === "left" ? -firstCardWidth : firstCardWidth;
    carousel.scrollTo({
      left: carousel.scrollLeft + scrollAmount,
      behavior: 'smooth' // Enable smooth scrolling
    });
  });
});


    // Dragging logic
    const dragStart = (e) => {
      setIsDragging(true);
      carousel.classList.add("dragging");
      // Records the initial cursor and scroll position of the carousel
      setStartX(e.pageX);
      setStartScrollLeft(carousel.scrollLeft);
    }

    const dragging = (e) => {
      if (!isDragging) return;
      // Updates the scroll position of the carousel based on the cursor movement
      carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
    }

    const dragStop = () => {
      setIsDragging(false);
      carousel.classList.remove("dragging");
    }

    const infiniteScroll = () => {
      // If the carousel is at the beginning, stop scrolling
      if (carousel.scrollLeft === 0) {
        clearTimeout(timeoutId);
        return;
      }
      // If the carousel is at the end, stop scrolling
      else if (Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
        clearTimeout(timeoutId);
        return;
      }
    
      // Clear existing timeout & start autoplay if the mouse is not hovering over the carousel
      clearTimeout(timeoutId);
      if (!wrapper.matches(":hover")) autoPlay();
    }
    

    const autoPlay = () => {
      if (window.innerWidth < 800 || !isAutoPlay) return;
      // Autoplay the carousel after every 2500 ms
      timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500);
    }

    // Initialize autoplay
    autoPlay();

    // Event listeners for dragging
    carousel.addEventListener("mousedown", dragStart);
    carousel.addEventListener("mousemove", dragging);
    document.addEventListener("mouseup", dragStop);

    // Event listener for infinite scrolling
    carousel.addEventListener("scroll", infiniteScroll);

    // Event listeners for mouse events
    carousel.addEventListener("mouseenter", () => clearTimeout(timeoutId));
    carousel.addEventListener("mouseleave", () => autoPlay());

    // Scroll to the end initially
    carousel.scrollLeft = carousel.scrollWidth - carousel.offsetWidth;

    // Cleanup event listeners on component unmount
    return () => {
      clearTimeout(timeoutId);
      carousel.removeEventListener("mousedown", dragStart);
      carousel.removeEventListener("mousemove", dragging);
      document.removeEventListener("mouseup", dragStop);
      carousel.removeEventListener("scroll", infiniteScroll);
      carousel.removeEventListener("mouseenter", () => clearTimeout(timeoutId));
      carousel.removeEventListener("mouseleave", () => autoPlay());
    };
  }, []);

  return (
    <div className='es-cardsliderwrapper' ref={wrapperRef}>
      <div className='es-cardslider' ref={sliderRef}>
        {cards.map(card => (
            <div className="card" key={card.id}>
                <div className="card-content">

                    <div className='es-p'>
                        <p>{card.para}</p>
                    </div>

                    <div className="es-icon">
                         {card.icon}
                    </div>

                    <div className="es-name">
                         <h3>{card.name}</h3>
                        <p>{card.designation}</p>
                    </div>
                </div>
            </div>
        ))}
      </div>
      <div className="wrapper">
        <i id="left" className="fas fa-chevron-left"></i>
        <i id="right" className="fas fa-chevron-right"></i>
      </div>
    </div>
  );
};

export default EmployeeCardSlider;

