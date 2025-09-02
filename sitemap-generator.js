import fs from "fs";
import dotenv from "dotenv";
import routes from "./src/routes.js"; // adjust path if needed
 
dotenv.config();
 
const SPACE_URL = process.env.REACT_APP_CONTENTFUL_URL;
const ACCESS_TOKEN = process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN;
 
async function fetchBlogs() {
  const query = `
    query ($preview: Boolean) {
      resourcesBlogsCollection(preview: $preview) {
        items {
          detailUrlName
        }
      }
    }
  `;
 
  const response = await fetch(SPACE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
    body: JSON.stringify({
      query,
      variables: { preview: false },
    }),
  });
 
  const data = await response.json();
 
  if (data.errors) {
    console.error("GraphQL Errors:", data.errors);
    return [];
  }
 
  return data.data.resourcesBlogsCollection.items || [];
}
 
async function generateSitemap() {
  const blogs = await fetchBlogs();
 
  const baseUrl = "https://www.dluxtech.com"; // change this to your domain
 
  //URLs from routes.js
  const staticUrls = routes
    .map(
      (route) => `
  <url>
    <loc>${baseUrl}${route.path}</loc>
    <changefreq>monthly</changefreq>
    <priority>${route.priority || 0.7}</priority>
  </url>`
    )
    .join("");
 
  // ✅ Dynamic blog URLs from Contentful
  const blogUrls = blogs
    .map(
      (blog) => `
  <url>
    <loc>${baseUrl}/blog/${blog.detailUrlName}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`
    )
    .join("");
 
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticUrls}
  ${blogUrls}
</urlset>`;
 
  fs.writeFileSync("public/sitemap.xml", sitemap, "utf8");
  console.log("Sitemap generated successfully!");
}
 
generateSitemap();