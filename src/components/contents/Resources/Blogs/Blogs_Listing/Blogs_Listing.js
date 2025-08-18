import React, { useState, useEffect } from "react";
import '../Blogs_Detail/Blogs_Detail.css';
import './Blogs_Listing.css';
import { Helmet } from 'react-helmet';
import Navbar from '../../../../Navbar';
import HomeFooter from '../../../../HomeFooter/HomeFooter';

function Blogs_Listing() {
  const query = `
    query ($preview: Boolean) {
      resourcesBlogsCollection(preview: $preview) {
        items {
          tagFilter
          detailUrlName
          detailTitle
          detailImageCollection {
            items {
              url
            }
          }
          detailTagChooseYourFilterTags
          detailPublishDate
          listingTileDescription
        }
      }
    }
  `;

  const accessToken = process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN;
  const [page, setPage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState("All"); //  Default "All"
  const [animationClass, setAnimationClass] = useState(""); // State to control animation class
  const [visibleCount, setVisibleCount] = useState(5); // Initially display 5 blog items
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767); // Mobile detection

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const fetchPageData = async () => {
      try {
        const response = await fetch(
          `https://graphql.contentful.com/content/v1/spaces/pj0maraabon4/environments/production`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${accessToken}`,
            },
            body: JSON.stringify({ query, variables: { preview: false } }),
          }
        );
        const { data, errors } = await response.json();

        if (errors) {
          console.error(errors);
          return;
        }
        console.log("Fetched data:", data);

        const blogItems = data.resourcesBlogsCollection.items;


          // Sort blogs by date (most recent first)
          const sortedBlogs = blogItems.sort((a, b) => {
            const dateA = new Date(a.detailPublishDate);
            const dateB = new Date(b.detailPublishDate);
            return dateB - dateA;
          });


        // Extract and handle tag filters
        const uniqueTagFilters = [...new Set(
          blogItems.flatMap(item => {
            if (typeof item.tagFilter === "string") {
              return item.tagFilter.split(/[ ,]+/); // Split string tags by spaces or commas
            } else if (Array.isArray(item.tagFilter)) {
              return item.tagFilter; // Already an array, return as is
            } else {
              return []; // Fallback for unexpected types
            }
          })
        )].filter(tag => tag.trim() !== ''); // Remove any empty or whitespace-only tags

        // Ensure "All" is included and no duplicates
        const tagFilters = ["All", ...uniqueTagFilters.filter(tag => tag !== "All")];

        setPage({
          blogs: blogItems,
          tagFilters: tagFilters,
        });

        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchPageData();
    // Set up polling every 30 seconds (adjust time as needed)
    const intervalId = setInterval(fetchPageData, 1000);

    // Clean up the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  const handleFilterClick = (filter) => {
    // Only update filter if a different one is selected
    if (filter !== activeFilter) {
      setActiveFilter(filter);

      // Trigger animation by setting the animation class
      setAnimationClass("filter-animation");
      setTimeout(() => {
        setAnimationClass(""); // Reset the animation class after the effect
      }, 500); // Time to match CSS animation duration
    }
  };

  const handleLoadMore = () => {
    setVisibleCount(prevCount => prevCount + 5); // Increase the visible count by 5
  };

  if (loading) {
    return <div className="blog-loading-spinner"></div>;
  }

  if (!page) {
    return <div>No content available.</div>;
  }

  // Filter blogs based on the active tag filter and remove those without detailTitle
  const today = new Date();
  const filteredBlogs = activeFilter === "All"
    ? page.blogs.filter(blog =>
        blog.detailTitle && new Date(blog.detailPublishDate) <= today // Filter out blogs without a detailTitle and with future publish dates
      )
    : page.blogs.filter(blog =>
        blog.detailTitle && // Ensure blog has a detailTitle
        (typeof blog.detailTagChooseYourFilterTags === "string"
          ? blog.detailTagChooseYourFilterTags.split(/[ ,]+/).includes(activeFilter)
          : Array.isArray(blog.detailTagChooseYourFilterTags)
          ? blog.detailTagChooseYourFilterTags.includes(activeFilter)
          : false) &&
        new Date(blog.detailPublishDate) <= today // Filter out blogs with future publish dates
      );

  // Determine if "Load More" button should be visible
  const hasMoreToShow = visibleCount < filteredBlogs.length;

  return (
    <div className="blogs-page-wrapper">
      <div className="blogs-page-nav">
        <Navbar />
        <Helmet>
          <title>Blogs | DLUX</title>
          <meta name="description" content="This is a description of my page" />
        </Helmet>
      </div>
      <div className="blogs-tag-filters-section">
        <div className="blogs-tag-filters-wrapper">
          <h2>Filter:</h2>

          {/* Conditionally render dropdown for mobile */}
          {isMobile ? (
            <select
              className="blogs-tag-dropdown"
              value={activeFilter}
              onChange={(e) => handleFilterClick(e.target.value)}
            >
              {page.tagFilters.map((filter, index) => (
                <option key={index} value={filter}>
                  {filter}
                </option>
              ))}
            </select>
          ) : (
            <div className="blogs-tag-filters">
              {page.tagFilters.map((filter, index) => (
                <div
                  key={index}
                  className={`blogs-filter-item ${activeFilter === filter ? "selected" : ""}`}
                  onClick={() => handleFilterClick(filter)}
                >
                  <div className="blogs-tag-filter">
                    <button className="blogs-tag-filter-button"><p>{filter}</p></button>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {/* Show the count of visible blogs */}
          <div className="blogs-results-count">
            Showing {Math.min(visibleCount, filteredBlogs.length)} of {filteredBlogs.length} results
          </div>
        </div>
      </div>

      <div className={`blogs-listing-section ${animationClass}`}>
  {filteredBlogs.length === 0 ? (
    <div className="no-blogs-message">
      <p>No blogs found under the selected tag.</p>
    </div>
  ) : (
    filteredBlogs.slice(0, visibleCount).map((blog) => (
      <div key={blog.detailUrlName} className="blogs-item">
        {/* Image on the left */}
        <div className="blogs-image-container">
          {blog.detailImageCollection && blog.detailImageCollection.items.length > 0 ? (
            <img
              src={blog.detailImageCollection.items[0].url}
              alt={blog.detailTitle}
              className="blogs-img"
            />
          ) : (
            <div className="blogs-img-placeholder">No image available</div>
          )}
        </div>

        {/* Content on the right */}
        <div className="blogs-content">
          {blog.detailTagChooseYourFilterTags && (
            <div className="blogs-tags">
              {typeof blog.detailTagChooseYourFilterTags === "string" ? (
                blog.detailTagChooseYourFilterTags.split(/[ ,]+/).map((tag, index) => (
                  <div key={index} className="blogs-tag">
                    <p>{tag}</p>
                  </div>
                ))
              ) : Array.isArray(blog.detailTagChooseYourFilterTags) ? (
                blog.detailTagChooseYourFilterTags.map((tag, index) => (
                  <div key={index} className="blogs-tag">
                    <p>{tag}</p>
                  </div>
                ))
              ) : (
                <p>Invalid tag format</p>
              )}
            </div>
          )}

          <p className="blogs-date">
            {new Date(blog.detailPublishDate).toLocaleDateString('en-GB', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </p>

          <h2 className="blogs-title">{blog.detailTitle}</h2>

          {blog.listingTileDescription && (
            <p className="blogs-listing-tile-description">
              {blog.listingTileDescription}
            </p>
          )}

          {/* Read More link */}
          <a href={`/blog/${blog.detailUrlName}`} className="blogs-read-more">
            Read more
          </a>
        </div>
      </div>
    ))
  )}
</div>


      {/* Pagination - Load More button */}
      {hasMoreToShow && (
        <div className="blogs-load-more-section">
          <button onClick={handleLoadMore} className="blogs-load-more-button">
            Load More
          </button>
        </div>
      )}

      <div className="blogs-footer">
        <HomeFooter />
      </div>
    </div>
  );
}

export default Blogs_Listing;
