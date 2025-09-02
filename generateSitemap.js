const fs = require('fs');

// Define your routes extraction function
const extractRoutesFromNavbar = () => {
  const routes = [
    '/',
    '/home',
    '/services',
    '/contact-us',
    '/About-Us',  
    '/industries',
    '/blog',
    '/our-growth-story',
    '/partners',
    '/careers',
    '/retail-and-consumer-product-consulting',
    '/digital-martech-consulting',
    '/managed-application-services',
    '/content-management-dam',
    '/training-change-management',
    '/salesforce',
    '/aprimo',
    '/Dataiku',
    '/adobe-workfront',
    '/adobe-aem',
    '/privacy-policy',
    '/cookie-policy',
    '/blog1',
    '/blog2',
    '/blog3',
    '/blog4',
    '/blog5',
    '/blog6',
    '/blog7',
    '/blog8',
    '/blog9',
    '/blog10'
  ];

  return routes;
};

// Generate XML content
const generateXML = (routes) => {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  routes.forEach(route => {
    xml += `<url>\n`;
    xml += `<loc>https://dluxtech.com${route}</loc>\n`;
    xml += `</url>\n`;
  });

  xml += '</urlset>';

  return xml;
};

// Write XML content to file
const writeXMLToFile = (xmlContent) => {
  fs.writeFileSync('sitemap.xml', xmlContent);
};

// Extract routes from Navbar component and generate sitemap
const routes = extractRoutesFromNavbar();
const xmlContent = generateXML(routes);
writeXMLToFile(xmlContent);

console.log("Sitemap generated successfully.");
