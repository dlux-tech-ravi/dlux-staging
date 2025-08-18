import React from 'react'
import './PrivacyPolicy.css'
import { Helmet } from 'react-helmet';
import Navbar from '../../Navbar';
import HomeFooter from '../../HomeFooter/HomeFooter';

const PrivacyPolicy = () => {
  return (
    <div className='privacy-policy-wrapper'>
    <div className='privacy-policy-nav'>
    <Navbar />
    <Helmet>
    <title>Privacy Policy</title>
    <meta name="description" content="Privacy Policy" />
    </Helmet>
  </div>

  <div className='privacy-policy-container'>
  <h1>Privacy Policy</h1>

  <div className='privacy-policy-text'>

  <div className='privacy-policy-terms-section'>

    <div className='privacy-policy-terms-para1'>
        <p>In this Privacy Policy, the terms “DLUX”, “we”, “our”, or “us” refer to “DLUX TECH CORP PTY LTD” (ABN 69 629 760 523). This Privacy Policy<br/> 
        outlines how DLUX handles the personal information we collect, use, and disclose, detailing our procedures for managing personal and sensitive<br/>
         information. This includes the processes related to the collection, use, disclosure, and storage of information, and individuals' rights to access<br/>
        and correct their information. </p>
    </div>

    <div className='privacy-policy-terms-para2'>
      <p>Periodically, we may modify or update this Privacy Policy or our information handling practices. In such cases, the revised Privacy Policy will<br/>
       be made available on our website, www.dluxtech.com (our Website). </p>
    </div>

    <div className='privacy-policy-terms-para3'>
      <p>DLUX may gather personal information to conduct our business, provide and market our services, and fulfill legal obligations. By using our Website<br/>
       or services, or by providing any personal information to us, you agree to the collection, use, and disclosure of your personal information as outlined<br/>
      in this Privacy Policy. </p>
    </div>

    <div className='privacy-policy-terms-para4'>
      <p>We adhere to the Privacy Act 1988 (Cth) (as amended), including the Australian Privacy Principles (Privacy Act). Our functions and activities,<br/> encompassing
      the collection, use, storage, retention, security, and disclosure of personal information, comply with relevant privacy laws, including<br/> the Privacy Act and the
      Australian Crime Commission Act 2002 (ACC Act). </p>
    </div>
  </div>

  <div className='pp-personalinfo-section'>

    <h3>Types of Personal Information Collected </h3>
    
    <div className='pp-personalinfo-para1'>
      <ul>
        <li><p>Contact Details: This encompasses your name, address, contact telephone number, email address,
         and other relevant contact<br/> information. </p></li>

        <li><p>Payment Information: This includes credit card or bank details provided for transactions. </p></li>
        <li><p>Business-Related Information: Personal details about employees of our clients, suppliers,
         business associates, and potential business<br/> associates, covering contact information, roles,
        and responsibilities. </p></li>
        <li><p>Services Data: We obtain information from third-party suppliers in relation to the services we provide to you or our clients. This may<br/>
         encompass details such as: </p>
            <ol >
                <li><p>Property ownership and other property-related information</p></li>
                <li><p>Company shareholdings and directorships</p></li>
                <li><p>Document verification information supplied by DVS for our Verification of Identity Services for a more comprehensive list of<br/>
                 all products and services, please refer to our Website.</p></li>
            </ol>
        </li>
        <li><p>Meta Data: This refers to information about your usage of our services, which may include IP addresses and contact details obtained<br/>
         through automatic logging services.</p></li> 
      </ul>

    </div>

    <div className='pp-personalinfo-para2'>
      <p>Providing personal information to DLUX is not obligatory. However, in many instances, if you choose not to provide your personal information,<br/> we may be unable
       to fulfill your request for the relevant product or service. </p>
    </div>

    <div className='pp-personalinfo-para3'>
      <p>There may be circumstances where you provide, and we collect, personal information
       about a third party. In such cases, you are responsible<br/> for ensuring that the third party is aware of and agrees to accept this Privacy Policy. </p>
    </div>

    <div className='pp-personalinfo-para4'>

    <p>In certain situations where specific services require it, we may collect sensitive information about you. As defined by the Privacy Act,<br/>
     "sensitive information" includes details about an individual's racial or ethnic origin, religious beliefs, criminal record, and health information.<br/>
      However, we will only gather sensitive information with your consent, authorization from a third party, or if required or authorized by<br/>
       Australian law, a court or tribunal order, or any other circumstance where the collection is not prohibited under the Privacy Act. The usage<br/>
      of sensitive information will strictly adhere to the provisions of the Privacy Act and be confined to the purpose for which it was provided. </p>

    </div>

  </div>

  <div className='pp-adoptionuse-section'>
    <h3>Adoption, Use and Disclosure of Government Related Identifiers</h3>

    <div className='pp-adoptionuse-para1'>

      <p>The adoption, use, and disclosure of government-related identifiers may occur within DLUX. This involves the collection of personal<br/>
       information that includes government-related identifiers.</p>
    
    </div>

    <div className='pp-adoptionuse-para2'>
      <p>Personal information obtained from identity documents may be shared with the document issuer or official record holder through third-party<br/>
      systems, such as DVS, to confirm your identity. When DLUX collects government-related identifiers, they are stored in a separate database for<br/>
       audit and compliance purposes. </p>
    </div>

    <div className='pp-adoptionuse-para3'>
      <p>DLUX may use or disclose government-related identifiers in the following circumstances: </p>
      <ul>
        <li><p>When it is reasonably necessary to verify the individual's identity in our business activities or functions. </p></li>
        <li><p>As required or authorized by law, in accordance with a Court or Tribunal order, or when permitted by the Privacy Act.</p></li>
      </ul>
    </div>

  </div>

  <div className='pp-collectionstore-section'>
    <h3>Collection and Storage of Personal Information</h3>

    <div className='pp-collectionstore-para1'>
      <p>We collect personal information about You from the following sources:</p>
      <div className='pp-collectionstore-topic1'>
        <ul>
          <li><p>Directly from you:</p></li>
        </ul>
        <p>We gather personal information directly from you through the following means: </p>
        <ol type='I'>
          <li><p>When you submit personal information via our Website, such as sending us a message or completing a form.</p></li>
          <li><p>In-person, for instance, during interactions with our HelpDesk and Property Services teams.</p></li>
          <li><p>Throughout the process of delivering our services to you.</p></li>
        </ol>
      </div>

      <div className='pp-collectionstore-topic2'>
        <ul>
          <li><p>From our clients:</p></li>
        </ul>
        <p>Additionally, we may obtain information about you from our clients, such as your law firm or bank. This information is collected to facilitate the<br/>
         provision of services to them, often related to their personal or business requirements, such as the conveyancing transactions they are<br/>
          undertaking, or the due diligence searches they need. </p>
      </div>

      <div className='pp-collectionstore-topic3'>
        <ul>
          <li><p>From our third-party suppliers and partners: </p></li>
        </ul>
        <p>We may also gather information about you from third parties through the following means:</p>
        <ol type='I'>
          <li><p>When you link to a third party or access our services through a third party, such as an integration partner.</p></li>
          <li><p>Through third-party suppliers and government database services, particularly in relation to the information brokerage services we offer <br/>
          to our clients.</p></li>
        </ol>
      </div>

      <div className='pp-collectionstore-topic4'>
        <ul>
          <li><p>Automatically:</p></li>
        </ul>
        <p>User-identifying information may be automatically collected as you access our Websites or services, including:</p>
        <ol type='I'>
          <li><p>Details regarding your usage of our Services, which may encompass IP addresses and contact details obtained through automatic<br/>
           logging services.</p></li>
          <li><p>Information submitted or stored within the services or transferred to the services by an integration partner. This may include matter<br/>
           information and files, potentially containing sensitive data, such as copies of identification documents.</p></li>
          <li><p>Device data gathered when using one of our applications.</p></li>
        </ol>
      </div>  
    </div>

    <div className='pp-collectionstore-para2'>
      <p>For additional details on our utilization of cookies and tracking technologies, please refer to our <a href='cookie-policy'>Cookie Notice</a>.</p>
    </div>
  </div>

  <div className='pp-personalhandle-section'>
    <h3>Purposes of Personal Information Handling</h3>

    <div className='pp-personalhandle-para1'>
      <h4>Business Purposes:</h4>
      <p>For various business purposes, we engage in the collection, storage, utilization, and disclosure of personal information, including:</p>
      <ol type='I'>
        <li><p>Delivering the products or services you have requested from us.</p></li>
        <li><p>Processing payments related to our services.</p></li>
        <li><p>Enhancing our business, products, and services.</p></li>
        <li><p>Promoting our business to you.</p></li>
        <li><p>Marketing additional DLUX services or products to you.</p></li>
        <li><p>Managing and addressing your inquiries, complaints, or concerns.</p></li>
        <li><p>Providing personal information to third parties in accordance with the details outlined in this Privacy Policy.</p></li>
      </ol>
    </div>

    <div className='pp-personalhandle-para2'>
      <h4>Direct Marketing: </h4>
      <p>We also engage in the collection, retention, use, and disclosure of your personal information for direct marketing purposes, which includes:</p>
      <ol type='I'>
        <li><p>Informing you about new services and products offered by us.</p></li>
        <li><p>Notifying you about meetings, events, and seminars that may be of interest to DLUX customers and clients.</p></li>
        <li><p>Sending you newsletters and other marketing publications. </p></li>
        <li><p>Administering our databases for client service, marketing, and financial accounting purposes.</p></li>
        <li>Complying with legal requirements concerning the collection and retention of information related to the products and services we provide.</li>
      </ol>
    </div>

    <div className='pp-personalhandle-para3'>
      <p>If you prefer not to provide your personal information for direct marketing or wish to opt-out of receiving direct marketing communications,<br/>
       you can do so by contacting the DLUX Privacy Officer using the contact details provided below or by following the unsubscribe instructions<br/>
       contained in communications you receive from us. </p>
    </div>

  
  </div>

  <div className='pp-disclose-section'>
    <h3>Who Do We Disclose Personal Information To</h3>

    <div className='pp-disclose-para1'>
      <p>We may disclose your personal information to the following third-party partners and suppliers: </p>
      <ul>
        <li><p>Reseller Partners </p></li>
        <li><p>Vendors (Contractors and Subcontractors) </p></li>
        <li><p>Third-Party Suppliers</p></li>
      </ul>
    </div>

    <div className='pp-disclose-para2'>
      <p>When sharing information with these third parties, contractual agreements are in place to ensure that the use and disclosure of personal<br/>
       information are restricted to providing the specified service, and your personal information is safeguarded in accordance with the Privacy Act. </p>
    </div>

    <div className='pp-disclose-para3'>
      <p>Alternatively, we may share personal information with third parties under the following circumstances: if you have provided explicit consent,<br/>
       or if the disclosure is pertinent to the primary purpose for which the information was collected, and it is within reasonable expectation for<br/>
        us to do so. </p>
    </div>  
 
  </div>

  <div className='pp-resellerpartner-section'>

    <h4>Reseller Partners:</h4>

    <div className='pp-resellerpartner-para1'>
      <p>DLUX occasionally appoints resellers for the distribution of its services. In support of their provision of these services, DLUX may share <br/>information
       with reseller partners. Examples of such reseller partners include: </p>
      <ul>
        <li><p>Sydney Legal Agents, </p></li>
        <li><p>AusSearch,</p></li>
        <li><p>AIC NSW, and </p></li>
        <li><p>any other reseller partners as indicated on our Website, subject to periodic updates.</p></li>
      </ul>
    </div>
  </div>

  <div className='pp-contractors-section'>
    <h4>Contractors and Subcontractors:</h4>
    
    <div className='pp-contractors-para1'>
      <p>We may share your personal information with third parties collaborating with us in our business to enhance, market, or improve<br/> the services we
       offer. This includes: </p>
      <ul>
        <li><p>Providers of customer relations management database services and marketing database services. </p></li>
        <li><p>Technology providers, encompassing cloud, software, and development services. </p></li>
        <li><p>Marketing consultants, promotion companies, and website hosts. </p></li>
        <li><p>Consultants and professional advisers. </p></li>
      </ul>
    </div>

    <div className='pp-contractors-para2'>
      <p>Additionally, we may merge your personal information with data from other sources, including the entities mentioned above, to<br/> enhance our ability to provide superior services to you. </p>
    </div>
  </div>
  
  <div className='pp-internationaldisclose-section'>
    <h3>International Disclosure of Personal Information</h3>

    <div className='pp-internationaldisclose-para1'>
      <p>We store and retain your personal information within Australia and India. Currently, we do not share personal information with organizations<br/>
       situated overseas. However, information may be disclosed within Australia, as mentioned earlier, to certain multinational organizations<br/>
        operating both in Australia and overseas, such as the United Kingdom, the United States, and New Zealand. </p>
    </div>

    <div className='pp-internationaldisclose-para2'>
      <p>While individuals located overseas may have read-only access to your personal information for the provision of development services<br/>
       related to our Services, this access is strictly restricted, and conducted under secure protocols and supervised by our Australian-based teams.</p>
    </div>

    <div className='pp-internationaldisclose-para3'>
      <p>Whenever disclosure or access to your personal information involves individuals located overseas, it only occurs under specific conditions: </p>
      <ul>
          <li><p>We ensure the recipient is bound by legislation like the Privacy Act, and a contractual mechanism is in place to enforce your rights. </p></li>
          <li><p>We have a legally enforceable contractual arrangement with the overseas recipient, obligating them to handle your personal information<br/>
           in accordance with the Privacy Act.</p></li>
      </ul>
    </div>
  </div>

  <div className='pp-protectionpersonal-section'>
    <h3>Protection of Personal Information</h3>

    <div className='pp-protectionpersonal-para1'>
      <p>Ensuring the protection of your personal information is a paramount commitment for us, and we implement various measures to guard against<br/>
       loss, unauthorized access, use, modification, or disclosure. These measures include: </p>
      <ul>
        <li><p>Implementation of firewalls across all office networks and sites.</p></li>
        <li><p>Deployment of anti-virus software on all workstations.</p></li>
        <li><p>Conducting cybersecurity training for all employees during onboarding and periodically throughout the year. </p></li>
        <li><p>Imposing restrictions on physical access to paper files. </p></li>
        <li><p>Requiring third parties engaged by DLUX to provide assurances and handle your personal information in a manner consistent with the Privacy Act. </p></li>
        <li><p>Taking reasonable steps to either destroy or de-identify personal information once it is no longer needed for our business purposes or to comply<br/>
         with the law. </p></li>
        <li><p>Vetting suppliers and third parties through rigorous risk assessment processes. </p></li>
      </ul>
    </div>
  </div>

  <div className='pp-handlingaccess-section'>
    <h3>Handling Access Requests for Personal Information</h3>

    <div className='pp-handlingaccess-para1'>
      <p>You have the right to request access to the personal information we hold about you, and such requests can be made by contacting DLUX<br/>
       using the contact details provided in this policy. We commit to responding to access requests promptly. If access is granted, we will provide<br/>
        you with a copy or details of your personal information in the manner you request, where reasonable and practicable. </p>
    </div>

    <div className='pp-handlingaccess-para2'>
      <p>There is no charge for making a request to access your personal information. However, a reasonable fee may be charged for granting access<br/>
       to your personal information. In certain situations, we may refuse to provide access to the requested information or may only allow access<br/>
        to specific details. If such a situation arises, we will furnish you with a written explanation. </p>
    </div>
  </div>

  <div className='pp-handlingcorrection-section'>
    <h3>Handling Correction Requests</h3>

    <div className='pp-handlingcorrection-para1'>
      <p>We will take reasonable steps to ensure that the personal information we collect, use, or disclose is accurate, complete, up-to-date, and<br/>
       relevant in the given circumstances. If you believe that the personal information, we hold about you is inaccurate, irrelevant, out-of-date,<br/>
        or incomplete, you have the right to request an update or correction. To do so, please contact us using the contact details provided. Our <br/>
        HelpDesk can typically assist with immediately. If you are dissatisfied with how your request is handled, you can escalate the matter to our<br/>
         Privacy Officer for further review. </p>
    </div>

    <div className='pp-handlingcorrection-para2'>
      <p>If your request to correct personal information is denied, we will communicate the reasons for the refusal. You also retain the right to request<br/>
       the inclusion of a statement with your personal information, expressing your belief that it is inaccurate, incomplete, irrelevant, misleading, or <br/>
       out-of-date. </p>
    </div>
  </div>

  <div className='pp-contactus-section'>
            <h3>Contact Us</h3>
            <div className='pp-contactus-para1'>
              <p>If you have questions regarding this Policy or about DLUX’s privacy practices, or to file any complaints, please send your inquiries to:</p>

            <div className='pp-contactus-para2'>
                 <p>Privacy Team,</p>
                 <p>DLUX TECH CORP PTY LTD</p>
                 <p>28 Beacon Drive, Schofields NSW 2762</p>
                 <p>Email address: <a href="mailto:privacy@dluxtech.com">privacy@dluxtech.com</a></p>
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

export default PrivacyPolicy