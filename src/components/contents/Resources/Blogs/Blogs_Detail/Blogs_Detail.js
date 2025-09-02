import React, { useState, useEffect } from "react";
import './Blogs_Detail.css';
import { useParams } from 'react-router-dom';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import Navbar from "../../../../Navbar";
import { Helmet } from "react-helmet";
import HomeFooter from "../../../../HomeFooter/HomeFooter";

const Blogs_Detail = () => {
  const { detailUrlName } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  const query = `
    query ($preview: Boolean) {
      resourcesBlogsCollection(preview: $preview) {
        items {
          detailUrlName
          detailTitle
          metaTitle
          metaDescription
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

        const blogItem = data.resourcesBlogsCollection.items.find(
          (item) => item.detailUrlName === detailUrlName
        );

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
    return <div className="blog-loading-spinner"></div>;
  }

  if (!blog) {
    return <div>No content available.</div>;
  }

  // 🔥 Inline styling options for Contentful Rich Text
  const renderOptions = {
    renderNode: {
      [BLOCKS.HEADING_1]: (node, children) => (
        <h1 style={{ fontSize: "2rem", fontWeight: "bold", margin: "1.5rem 0", color: "#111" }}>
          {children}
        </h1>
      ),
      [BLOCKS.HEADING_2]: (node, children) => (
        <h2 style={{ fontSize: "1.75rem", margin: "1.25rem 0 0.75rem", color: "#222" }}>
          {children}
        </h2>
      ),
      [BLOCKS.HEADING_3]: (node, children) => (
        <h3 style={{ fontSize: "1.5rem", margin: "1rem 0 0.5rem", color: "#333" }}>
          {children}
        </h3>
      ),
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <p style={{ fontSize: "1rem", lineHeight: "1.8", margin: "0.75rem 0", color: "#444" }}>
          {children}
        </p>
      ),
      [BLOCKS.UL_LIST]: (node, children) => (
        <ul style={{ margin: "1rem 0 1rem 1.5rem", listStyle: "disc" }}>{children}</ul>
      ),
      [BLOCKS.OL_LIST]: (node, children) => (
        <ol style={{ margin: "1rem 0 1rem 1.5rem", listStyle: "decimal" }}>{children}</ol>
      ),
      [BLOCKS.LIST_ITEM]: (node, children) => (
        <li style={{ margin: "0.5rem 0" }}>{children}</li>
      ),
      [BLOCKS.QUOTE]: (node, children) => (
        <blockquote
          style={{
            borderLeft: "4px solid #0077cc",
            paddingLeft: "1rem",
            margin: "1.5rem 0",
            fontStyle: "italic",
            color: "#555"
          }}
        >
          {children}
        </blockquote>
      ),
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const url = node.data?.target?.fields?.file?.url;
        return url ? (
          <img
            src={url}
            alt=""
            style={{ maxWidth: "100%", height: "auto", margin: "1rem 0", borderRadius: "8px" }}
          />
        ) : null;
      },
      [INLINES.HYPERLINK]: (node, children) => (
        <a
          href={node.data.uri}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#0077cc", textDecoration: "underline" }}
        >
          {children}
        </a>
      ),
    },
  };

  return (
    <div className="blogs-detail-container">
      <div className="blog-detail-wrapper">
        <div className="blog-detail-page-nav">
          <Navbar />
          <Helmet>
            <title>{blog.metaTitle || blog.detailTitle} | DLUX</title>
            <meta
              name="description"
              content={
                blog.metaDescription ||
                blog.detailDescription?.json?.content?.[0]?.content?.[0]?.value?.slice(0, 150) + "..."
              }
            />
            <meta property="og:title" content={blog.metaTitle || blog.detailTitle} />
            <meta property="og:description" content={blog.metaDescription || blog.detailTitle} />
            {blog.detailImageCollection?.items?.[0]?.url && (
              <meta property="og:image" content={blog.detailImageCollection.items[0].url} />
            )}
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
              {documentToReactComponents(blog.detailDescription.json, renderOptions)}
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
