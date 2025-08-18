import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const location = useLocation();

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

    return (
      <div className="nested-dropdown" ref={dropdownRef}>
        <div className="nested-dropbtn" onClick={handleToggle}>
          Platform
        </div>
        {isOpen && (
          <div className="nested-dropdown-content">
            <div className="nested-dropdown">
              <Link className="nested-dropbtn">Adobe</Link>
              <div className="nested-dropdown-content">
                <Link to="/adobe-workfront">WorkFront</Link>
                <Link to="/adobe-aem">AEM</Link>
              </div>
            </div>
            <Link to="/salesforce">Salesforce</Link>
            <Link to="/aprimo">Aprimo</Link>
            <Link to="/DataIKU">Dataiku</Link>
          </div>
        )}
      </div>
    );
  };

  // Contentful - Integration
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
    const loadLeadfeederScript = () => { // Leadfeeder integration
      window.ldfdr = window.ldfdr || function () {
        (window.ldfdr._q = window.ldfdr._q || []).push([].slice.call(arguments));
      };
      const script = document.createElement('script');
      script.src = 'https://sc.lfeeder.com/lftracker_v1_ywVkO4XBOVO8Z6Bj.js';
      script.async = true;
      document.body.appendChild(script);
    };

    loadLeadfeederScript();
  }, []); // Leadfeeder integration

  useEffect(() => {  // Clearbit integration
    const loadClearbitScript = () => {
      const script = document.createElement('script');
      script.src = 'https://tag.clearbitscripts.com/v1/pk_2a2684c25ce7887d900a52f28565fb4a/tags.js';
      script.async = true;
      script.referrerPolicy = 'strict-origin-when-cross-origin';
      document.body.appendChild(script);
    };

    loadClearbitScript();
  }, []); // Clearbit integration

  useEffect(() => { // Apollo integration
    const loadApolloScript = () => {
      const randomString = Math.random().toString(36).substring(7);
      const script = document.createElement('script');
      script.src = `https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache=${randomString}`;
      script.async = true;
      script.defer = true;
      script.onload = () => {
        window.trackingFunctions.onLoad({ appId: "6631cee333737c02e8cb3d9c" });
      };
      document.head.appendChild(script);
    };

    loadApolloScript();
  }, []); // Apollo integration

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

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="servicedroplist">
            <li
              className="nav-item"
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <span className="close-btn" onClick={closeNav}>✕</span>

              <Link
                to=""
                className="nav-links"
                onClick={closeMobileMenu}
              >
                <div className="dropdown">
                  <Link to="/services" className="dropbtn">
                    Services&nbsp;
                  </Link>

                  <div className="dropdown-content">
                    <Link to="/adobe-workfront-managed-services"> {/*-->Campaign Pages*/}
                      Adobe Managed Services
                    </Link>
                    <Link to="/digital-martech-consulting ">
                      Digital & MarTech Consulting
                    </Link>
                    <Link to="/managed-application-services">
                      Managed Application Services
                    </Link>
                    <Link to="/training-change-management">
                      Training & Change Management
                    </Link>
                    <Link to="/content-management-dam">
                      Content Management & DAM
                    </Link>
                  </div>
                </div>
              </Link>
            </li>
          </li>

          <li
            className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to=""
              className="nav-links"
              onClick={closeMobileMenu}
            >
              <div className="dropdown">
                <a className="dropbtn" onClick={handleArrowClick}>
                  Platform
                </a>

                <div className="dropdown-content">
                  <div className="nested-dropdown">
                    <Link className="nested-dropbtn">Adobe</Link>
                    <div className="nested-dropdown-content">
                      <Link to="/adobe-workfront">WorkFront</Link>
                      <Link to="/adobe-aem">AEM</Link>
                      <Link to="/adobe-commerce">Adode Commerce</Link>
                      <Link to="/adobe-analytics">Adobe Analytics</Link>

                    </div>
                  </div>
                  <Link to="/salesforce">Salesforce</Link>
                  <Link to="/aprimo">Aprimo</Link>
                  <Link to="/DataIKU">Dataiku</Link>
                </div>
              </div>
            </Link>
          </li>

          <li
            className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to="/industries"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              <div className="dropdown">
                <a className="dropbtn">Industries</a>
                <div className="dropdown-content">
                  <Link to="/retail-and-consumer-product-consulting">
                    Retail
                  </Link>
                </div>
              </div>
            </Link>
          </li>

          <li
            className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to="/about-us"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              <div className="dropdown">
                <Link to="/About-Us" className="dropbtn">
                  About{" "}
                </Link>
                <div className="dropdown-content">
                  <Link to="/our-growth-story">Our Growth Story</Link>
                  <Link to="/partners"> Partners</Link>
                  <Link to="/careers">Careers</Link>
                  <Link to="/our-team">Our Team</Link>
                </div>
              </div>
            </Link>
          </li>

          <li
            className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to=""
              className="nav-links"
              onClick={closeMobileMenu}
            >
              <div className="dropdown">
                <a className="dropbtn">Resources</a>
                <div className="dropdown-content">
                  <Link to="/blogs">Blogs</Link>
                  <Link to="/success-stories">Success Stories</Link>
                  <Link to="/resources-library">Resources Library</Link>
                  <Link to="/video-library">Video Library</Link>

                </div>
              </div>
            </Link>
          </li>

          <li className="nav-item">
            <Button />
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
