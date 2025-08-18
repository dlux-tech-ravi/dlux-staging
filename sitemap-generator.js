// sitemap-generator.js
import fs from "fs";
import routes from "./src/routes.js";

const BASE_URL = "https://www.dluxtech.com"; // change to your domain

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes
    .map(
      (route) => `
    <url>
      <loc>${BASE_URL}${route.path}</loc>
      <changefreq>${route.changefreq}</changefreq>
      <priority>${route.priority}</priority>
    </url>
  `
    )
    .join("")}
</urlset>`;

fs.writeFileSync("./public/sitemap.xml", sitemap, "utf-8");

console.log("✅ sitemap.xml generated successfully!");
