import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Industries from "./components/pages/Industries";
import Platforms from "./components/pages/Platforms";
import AboutUs from "./components/pages/AboutUs";
import OurGrowthStory from "./components/contents/OurGrowthStory/OurGrowthStory";
import Careers from "./components/contents/Careers/Careers";
import RetailConsumer from "./components/contents/Retail_Consumer/Retail_Consumer";
import Partners from "./components/contents/OurPartnership/Partners";
import ServiceDigitalMartec from "./components/contents/ServiceDigitalMartec/ServiceDigitalMartec";
import ServiceApplication from "./components/contents/ServiceApplication/ServiceApplication";
import Platform_DataIKU from "./components/contents/Platform_DataIKU/Platform_DataIKU";
import ServiceContentManagement from "./components/contents/ServiceContentManagement/ServiceContentManagement";
import ServiceTraningAndChange from "./components/contents/ServiceTraningandChange/ServiceTraningAndChange";
import Platform_Adobe_Workfront from "./components/contents/Platform_Adobe_Workfront/Platform_Adobe_Workfront";
import Salesforcepage from "./components/contents/SalesforcePage/Salesforcepage";
import Platform_Adobe_AEM from "./components/contents/Platform_Adobe_AEM/Platform_Adobe_AEM";
import AprimoPage from "./components/contents/AprimoPage/AprimoPage";
import Contact_Us_Page from "./components/contents/Contact_Us_Page/Contact_Us_Page";
import ServicesPage from "./components/contents/ServicesPage/ServicesPage";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import PrivacyPolicy from "./components/contents/PrivacyPolicy/PrivacyPolicy";
import { CookiePolicy } from "./components/contents/CookiePolicy/CookiePolicy";
import Blogs_Lisitng from "./components/contents/Resources/Blogs/Blogs_Listing/Blogs_Listing";
import Blogs_Detail from "./components/contents/Resources/Blogs/Blogs_Detail/Blogs_Detail";
import AdobeWorkfrontManagedServices from "./components/contents/Campaign_Pages/Adobe_Workfront_Managed_Services/AdobeWorkfrontManagedServices";
import AdobeWorkfrontManagedServices_US from "./components/contents/Campaign_Pages/Adobe_Workfront_Managed_Services/AdobeWorkfrontManagedServices_US";
import { SuccessStories } from "./components/contents/Resources/Success_Stories/SuccessStories";
import { ResourcesLibrary } from "./components/contents/Resources/ResourcesLibrary/ResourcesLibrary";
import VideoLibrary from "./components/contents/Resources/VideoLibrary/VideoLibrary";
import AdobeCommerce from "./components/pages/AdobeCommerce";
import AdobeAnalytics from "./components/pages/AdobeAnalytics";
import CommerceCloud from "./components/pages/CommerceCloud";
import OurTeam from "./components/contents/Careers/OurTeam/OurTeam";
import WorkfrontFusion from "./components/pages/WorkfrontFusion";
import Adobecommerces from "./components/pages/Adobecommerces";

import { Outlet } from "react-router-dom"; // Import Outlet for nested routing
import { TrustPolicy } from "./components/contents/TrustPolicy/TrustPolicy";
import VideoVault from "./components/pages/VideoVault";
import NewVideopage from "./components/pages/NewVideopage";
const App = () => {
  return (
    <Router>
      <ScrollToTop />

      <Routes>
        {/* Main Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact-us" element={<Contact_Us_Page />} />
        <Route path="/About-Us" element={<AboutUs />} />
        <Route path="/industries" element={<Industries />} />

        {/* About Us Nested Routes */}
        <Route path="/our-growth-story" element={<OurGrowthStory />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/ourteam" element={<OurTeam />} />
        <Route path="/trust-policy" element={<TrustPolicy />} />
        {/* Industries Nested Routes */}
        <Route
          path="/retail-and-consumer-product-consulting"
          element={<RetailConsumer />}
        />

        {/* Services Nested Routes */}
        <Route
          path="/digital-martech-consulting"
          element={<ServiceDigitalMartec />}
        />
        <Route
          path="/managed-application-services"
          element={<ServiceApplication />}
        />
        <Route
          path="/content-management-dam"
          element={<ServiceContentManagement />}
        />
        <Route
          path="/training-change-management"
          element={<ServiceTraningAndChange />}
        />

        {/* Platform Routes with Nested Salesforce */}
        <Route path="/salesforce" element={<Salesforcepage />} />
        {/* Make sure the path here is relative to /salesforce */}
        <Route path="/salesforce-commerce-cloud" element={<CommerceCloud />} />

        <Route path="/aprimo" element={<AprimoPage />} />
        <Route path="/Dataiku" element={<Platform_DataIKU />} />

        {/* Adobe Sub-Routes */}
        <Route path="/adobe-workfront" element={<Platform_Adobe_Workfront />} />
        <Route path="/adobe-workfront-fusion" element={<WorkfrontFusion />} />
        <Route path="/adobe-aem" element={<Platform_Adobe_AEM />} />
        {/* <Route path="/adobe-commerce" element={<AdobeCommerce />} /> */}
        <Route path="/adobe-commerces" element={<Adobecommerces />} />
        <Route path="/adobe-analytics" element={<AdobeAnalytics />} />

        {/* Policy Pages */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />

        {/* Campaign-Landing Pages */}
        <Route
          path="/adobe-workfront-managed-services"
          element={<AdobeWorkfrontManagedServices />}
        />
        <Route
          path="/adobe-workfront-managed-services-us"
          element={<AdobeWorkfrontManagedServices_US />}
        />

        {/* Resources */}
        <Route path="/blogs" element={<Blogs_Lisitng />} />
        <Route path="/blog/:detailUrlName" element={<Blogs_Detail />} />
        <Route path="/success-stories" element={<SuccessStories />} />
        <Route path="/resources-library" element={<ResourcesLibrary />} />
        <Route path="/video-library" element={<VideoLibrary />} />
        <Route path="/new-video" element={<NewVideopage />} />
        {/* <Route path="/video-library1" element={<VideoVault />} /> */}
        <Route path="/video-vault" element={<VideoVault />} />

      </Routes>
    </Router>
  );
};

export default App;
