// sitemap-generator.js
const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');

// Your website domain (no trailing slash)
const hostname = 'https://www.dluxtech.com/';

// Static list of routes
const links = [
  { url: '/home', changefreq: 'monthly', priority: 0.7 },
  { url: '/services', changefreq: 'monthly', priority: 0.7 },
  { url: '/contact-us', changefreq: 'monthly', priority: 0.7 },
  { url: '/About-Us', changefreq: 'monthly', priority: 0.7 },
  { url: '/industries', changefreq: 'monthly', priority: 0.7 },
  { url: '/blog', changefreq: 'monthly', priority: 0.7 },
  { url: '/our-growth-story', changefreq: 'monthly', priority: 0.7 },
  { url: '/partners', changefreq: 'monthly', priority: 0.7 },
  { url: '/careers', changefreq: 'monthly', priority: 0.7 },
  { url: '/retail-and-consumer-product-consulting', changefreq: 'monthly', priority: 0.7 },
  { url: '/digital-martech-consulting', changefreq: 'monthly', priority: 0.7 },
  { url: '/managed-application-services', changefreq: 'monthly', priority: 0.7 },
  { url: '/content-management-dam', changefreq: 'monthly', priority: 0.7 },
  { url: '/training-change-management', changefreq: 'monthly', priority: 0.7 },
  { url: '/salesforce', changefreq: 'monthly', priority: 0.7 },
  { url: '/aprimo', changefreq: 'monthly', priority: 0.7 },
  { url: '/Dataiku', changefreq: 'monthly', priority: 0.7 },
  { url: '/adobe-workfront', changefreq: 'monthly', priority: 0.7 },
  { url: '/adobe-aem', changefreq: 'monthly', priority: 0.7 },
  { url: '/privacy-policy', changefreq: 'monthly', priority: 0.7 },
  { url: '/cookie-policy', changefreq: 'monthly', priority: 0.7 },
  { url: '/blog1', changefreq: 'monthly', priority: 0.7 },
  { url: '/blog2', changefreq: 'monthly', priority: 0.7 },
  { url: '/blog3', changefreq: 'monthly', priority: 0.7 },
  { url: '/blog4', changefreq: 'monthly', priority: 0.7 },
  { url: '/blog5', changefreq: 'monthly', priority: 0.7 },
  { url: '/blog6', changefreq: 'monthly', priority: 0.7 },
  { url: '/blog7', changefreq: 'monthly', priority: 0.7 },
  { url: '/blog8', changefreq: 'monthly', priority: 0.7 },
  { url: '/blog9', changefreq: 'monthly', priority: 0.7 },
  { url: '/blog10', changefreq: 'monthly', priority: 0.7 }
];

async function generateSitemap() {
  const sitemap = new SitemapStream({ hostname });
  const writeStream = createWriteStream('./public/sitemap.xml');

  sitemap.pipe(writeStream);

  links.forEach(link => sitemap.write(link));
  sitemap.end();

  await streamToPromise(sitemap);
  console.log('✅ Sitemap generated: public/sitemap.xml');
}

generateSitemap();
