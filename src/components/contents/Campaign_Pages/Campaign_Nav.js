import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../Navbar.css';
import ReactGA from 'react-ga';

// Initialize Google Analytics
const initGA = () => {
  ReactGA.initialize('G-GS176VG9FJ'); 
};

const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};

const logEvent = (category, action) => {
  ReactGA.event({
    category: category,
    action: action,
  });
};
 
function Campaign_Nav() {

  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const location = useLocation(); //GA
 
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
 
  const closeNav = () => {
    setClick(false);
    setDropdown(false); // Close dropdowns as well
  };
 
  const handleArrowClick = () => {
    setDropdown(!dropdown);
  };
 
  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };
 
  const onMouseLeave = () => {
    setDropdown(true);
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  useEffect(() => {
    initGA();
    logPageView();
  }, []);

  useEffect(() => {
    logPageView();
  }, [location.pathname]); //GA
 
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");
      if (navbar) {
        navbar.classList.toggle("sticky", window.scrollY > 0);
      }
    };
 
    window.addEventListener("scroll", handleScroll);
 
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
 
  const NestedDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
 
    const handleToggle = () => {
      setIsOpen(!isOpen);
    };
 
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
 
    useEffect(() => {
      document.addEventListener('click', handleClickOutside);
 
      return () => {
        document.removeEventListener('click', handleClickOutside);
      };
    }, []);
 
  };

  
//COntentful - Integration
const query = `
{
  dluxHomePage(id:"3Um83tqebJqW1L5G3zMhGD"){
     dluxImageCollection{
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

 useEffect(() => {
  const loadLeadfeederScript = () => {
    window.ldfdr = window.ldfdr || function () {
      (window.ldfdr._q = window.ldfdr._q || []).push([].slice.call(arguments));
    };
    const script = document.createElement('script');
    script.src = 'https://sc.lfeeder.com/lftracker_v1_ywVkO4XBOVO8Z6Bj.js';
    script.async = true;
    document.body.appendChild(script);
  };

  loadLeadfeederScript();
}, []); //Leadfeeder integration
 
 if (loading) {
     return <div className="blog-loading-spinner"></div>; // Render loading spinner
 }

 if (!page) {
     return <div>No content available.</div>;
 }

  return (
    <>
      <nav className="navbar">
        <Link to="/">
          <img src={page.dluxHomePage[0].dluxImageCollection.items[0].url} alt="DluxLogo" />
        </Link>
 
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fa-angle-down" : "fas fa-bars"} />
        </div>
      </nav>
    </>
  );
}
 
export default Campaign_Nav;