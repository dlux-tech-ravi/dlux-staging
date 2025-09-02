import React from 'react'
import './TrustPolicy.css'
import { Helmet } from 'react-helmet';
import Navbar from '../../Navbar';
import HomeFooter from '../../HomeFooter/HomeFooter';
import IconOne from '../TrustPolicy/TrustPolicy _Assets/icon01.png';
import IconTwo from '../TrustPolicy/TrustPolicy _Assets/icon2.png';
import IconThree from '../TrustPolicy/TrustPolicy _Assets/icon3.png';
import IconFour from '../TrustPolicy/TrustPolicy _Assets/icon4.png';


export const TrustPolicy = () => {
  return (
    <div className='trust-policy-wrapper'>
    <div className='trust-policy-nav'>
    <Navbar />
    <Helmet>
    <title>Trust Policy</title>
    <meta name="description" content="trust Policy" />
    </Helmet>
  </div>

  <div className='trust-policy-container'>
  <h1>Trust & Security</h1>

  <div className='trust-policy-text'>

  <div className='trust-policy-terms-section'>

    <div className='trust-policy-terms-para1'>
        <h3>We build with trust, protect with intent, and secure with global standards.</h3>
        <p>At DLUX, we understand that trust is earned—not assumed. That’s why security, privacy, and compliance are embedded into everything we do—from strategy to system integration, from AI solutions to managed Martech services. </p>
    </div>

  </div>

  <div className='tp-personalinfo-section'>

        <h3>   <img src={IconOne} className="tp-icon" />
            ISO/IEC 27001 Certified</h3>
    
    <div className='tp-personalinfo-para1'>
        <p>DLUX is ISO/IEC 27001 certified, the internationally recognised standard for information security management systems (ISMS). This means we follow a systematic and risk-based approach to managing sensitive client data, ensuring confidentiality, integrity, and availability across all engagements.</p>
        <h4>Our ISMS covers:</h4>

      <ul>
        <li><p>End-to-end risk assessment and mitigation </p></li>

        <li><p>Encryption, access control, and secure coding practices </p></li>
        <li><p>Employee security training and role-based permissions </p></li>
        <li><p>Internal audits and annual external surveillance </p></li>
      </ul>
        <h4 className='tp-personalinfo-certi'>Certification validates our commitment to safeguarding your data—not just in theory, but in practice.</h4>
    </div>
  </div>

  <div className='tp-adoptionuse-section'>
    <h3> <img src={IconTwo} className="tp-icon" />   GDPR and SOC 2 Alignment</h3>

    <div className='tp-adoptionuse-para1'>

      <p>Whether you're operating in the EU, APAC, or North America, DLUX ensures compliance with regional and industry standards. Our data handling practices are aligned with GDPR and SOC 2 frameworks, helping your teams meet regulatory obligations and pass vendor risk assessments confidently.</p>
    
    </div>

    <div className='tp-adoptionuse-para3'>
      <h4>We help you stay compliant by: </h4>
      <ul>
        <li><p>Minimising data retention risks </p></li>
        <li><p>Ensuring transparent and auditable data flows</p></li>
        <li><p>Supporting data subject rights under GDPR</p></li>
        <li><p>Integrating secure-by-design principles into every solution</p></li>
      </ul>
    </div>

  </div>

  <div className='tp-adoptionuse-section'>
    <h3> <img src={IconFour} className="tp-icon" /> Secure by Design. Operated with Integrity.</h3>

    <div className='tp-adoptionuse-para1'>

      <p>We don’t bolt security on at the end. At DLUX, we embed privacy and protection from Day 1—across platforms, people, and processes. Whether building a new Martech stack or modernising your content supply chain, we treat your business as if it were our own.</p>
    
    </div>

    <div className='tp-adoptionuse-para3'>
      <h4>Our approach includes: </h4>
      <ul>
        <li><p>Secure cloud infrastructure practices (Adobe, AWS, Azure, etc.) </p></li>
        <li><p>Role-based access and single sign-on (SSO) support</p></li>
        <li><p>Secure API integrations across Martech platforms</p></li>
        <li><p>Privacy-first AI implementation and governance</p></li>
      </ul>
    </div>

  </div>
  
  <div className='tp-handlingcorrection-section'>
    <h3> <img src={IconThree} className="tp-icon" /> Talk to Our Security & Compliance Team</h3>

    <div className='tp-handlingcorrection-para1'>
      <p>Need to run a security review or complete a vendor due diligence form? We’re ready.</p>
       <p> We work closely with client InfoSec teams, procurement leads, and compliance officers to ensure a smooth and transparent onboarding process. </p>
    </div>
  </div>

  <div className='tp-contactus-section'>
            <h3>Contact Us</h3>
            <div className='tp-contactus-para1'>
              <p>If you have questions regarding this Policy or about DLUX’s privacy practices, or to file any complaints, please send your inquiries to:</p>

              <div className='tp-contactus-para2'>
                 <p>Privacy Team,</p>
                 <p>DLUX TECH CORP PTY LTD</p>
                 <p>Suite-3, Level 2, 9 George Street </p>
                 <p>Parramatta CBD, Sydney - NSW 2150</p>
                 <br/>
                 <p>📩 Email address: <a href="mailto:privacy@dluxtech.com">trust@dluxtech.com</a></p>
                 <p>📄 Documentation: Available on request (ISO certificate, policies, technical safeguards)</p>
              </div>
            </div>
        </div>


  </div>
  </div>

  <div className='pp-footer'>
    <HomeFooter />
  </div>

  </div>
  )
}