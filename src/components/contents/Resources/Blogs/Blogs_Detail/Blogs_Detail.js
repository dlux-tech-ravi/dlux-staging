import React, { useState, useEffect } from "react";
import './Blogs_Detail.css';
import { useParams } from 'react-router-dom';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Navbar from "../../../../Navbar";
import { Helmet } from "react-helmet";
import HomeFooter from "../../../../HomeFooter/HomeFooter";

const Blogs_Detail = () => {
  const { detailUrlName } = useParams(); // Get the URL name from the route parameters
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  const query = `
    query ($preview: Boolean) {
      resourcesBlogsCollection(preview: $preview) {
        items {
          detailUrlName
          detailTitle
          detailImageCollection {
            items {
              url
            }
          }
          detailDescription {
            json
          }
        }
      }
    }
  `;

  const accessToken = process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN;

  useEffect(() => {
    const fetchBlogDetail = async () => {
      try {
        const response = await fetch(
          `https://graphql.contentful.com/content/v1/spaces/pj0maraabon4/environments/production`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${accessToken}`,
            },
            body: JSON.stringify({
              query,
              variables: { preview: false }
            }),
          }
        );
        const { data, errors } = await response.json();

        if (errors) {
          console.error(errors);
          return;
        }

        const blogItem = data.resourcesBlogsCollection.items.find(item => item.detailUrlName === detailUrlName);

        setBlog(blogItem || null);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blog details:", error);
        setLoading(false);
      }
    };

    fetchBlogDetail();
  }, [detailUrlName]);

  if (loading) {
    return <div className="blog-loading-spinner"></div>; // Loading spinner
  }

  if (!blog) {
    return <div>No content available.</div>;
  }

  return (
    <div className="blogs-detail-container">
      <div className="blog-detail-wrapper">
        <div className="blog-detail-page-nav">
          <Navbar />
          <Helmet>
            <title>Blog | DLUX</title>
            <meta name="description" content="This is a description of my page" />
          </Helmet>
        </div>

        <div className="blog-detail-header">
          {blog.detailImageCollection && blog.detailImageCollection.items.length > 0 && (
            <img
              src={blog.detailImageCollection.items[0].url}
              alt={blog.detailTitle}
              className="blog-detail-img"
            />
          )}
          <h3>{blog.detailTitle}</h3>
        </div>

        <div className="blog-detail-content">
          {blog.detailDescription && blog.detailDescription.json && (
            <div>
              {documentToReactComponents(blog.detailDescription.json)}
            </div>
          )}
        </div>
      </div>

      <div className="blog-detail-footer">
        <HomeFooter />
      </div>
    </div>
  );
};

export default Blogs_Detail;
