// Contact_Us_Page.js
import React, { useState, useEffect } from 'react';
import './Contact_Us_Page.css';
import Navbar from '../../Navbar'
import contactus_callicon from './Contact_Us_Page_Assests/contactus-callicon.png';
import contactus_mssgicon from './Contact_Us_Page_Assests/contactus-mssgicon.png';
import contactus_locicon from './Contact_Us_Page_Assests/contactus-locicon.png';
import contactus_formimg from './Contact_Us_Page_Assests/contactus-formimg.png';
import cup_mainlogo from './Contact_Us_Page_Assests/contactus-page-main-img.png';
import HomeFooter from '../../HomeFooter/HomeFooter';
import { Helmet } from 'react-helmet';

function Contact_Us_Page() {
  // const [formData, setFormData] = useState({
  //   name: '',
  //   mailId: '',
  //   phone: '',
  //   message: '',
  // });

  // const [submitMessage, setSubmitMessage] = useState('');

  // useEffect(() => {
  //   if (submitMessage === "✅Thank you for reaching out to us! We'll get back to you shortly.") {
  //     const clearForm = setTimeout(() => {
  //       setFormData({
  //         name: '',
  //         mailId: '',
  //         phone: '',
  //         message: '',
  //       });
  //       setSubmitMessage(''); // Reset the submit message after clearing the form
  //     }, 1000); // Clear the form and reset the submit message after 3 seconds
  //     return () => clearTimeout(clearForm); // Clear the timeout if the component unmounts
  //   }
  // }, [submitMessage]);

  // const handleChange = (e) => {
  //   const { id, value } = e.target;
  //   if (id === 'message') {
  //     setFormData((prevData) => ({ ...prevData, message: value }));
  //   } else {
  //     setFormData((prevData) => ({ ...prevData, [id]: value }));
  //   }
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await fetch('http://localhost:30002/lets_connect_form', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(formData),
  //     });
  //     if (response.ok) {
  //       const data = await response.json();
  //       setSubmitMessage("✅Thank you for reaching out to us! We'll get back to you shortly."); // Set the success message
  //     } else {
  //       console.error('Failed to submit form data');
  //     }
  //   } catch (error) {
  //     console.error('Error submitting form data:', error);
  //   }
  // };

  return (
    <div className='contactus-page-wrapper'>
      <div className='contactus-page-nav'>
        <Navbar />
        <Helmet>
        <title>Contact Us | Digital & Martech Consulting Services | DLUX</title>
        <meta name="description" content="Shoot us an email at sales@dluxtech.com for a quick connect! Let's collaborate to elevate your marketing strategies and drive success." />
        </Helmet>
      </div>

      <div className='contactus-page-img-section'>
        <img src={cup_mainlogo} alt='cup_mainlogo' />
      </div>

      <div className='cup-img-text'>
        <h1>Your Martech Solution<br /> Starts with a Conversation</h1>
      </div>

      <div className='contactus-page-container'>
        <div className="form-contactus">
          <div className='contactus-form-ls'>
            <h1>Let's talk business!</h1>
           <p>DLUX is your ultimate launchpad to rocket-power your<br/>
            journey towards greatness. Your personal genie is just<br/>
            a call away, here to craft custom solutions that fit you<br/>
            like a glove.</p>
            <div className="contactus-left">
              <div className="contactus-left-content">
                {/* <form className="contactus-left-content" onSubmit={handleSubmit}>
                  <div className="contactus-input-container">
                    <input
                      type="text"
                      id="name"
                      placeholder="Name"
                      required
                      onChange={handleChange}
                      value={formData.name}
                      autoComplete="off"
                    />
                  </div>
                  <div className="contactus-input-container">
                    <input
                      type="email"
                      id="mailId"
                      placeholder="E-Mail"
                      required
                      onChange={handleChange}
                      value={formData.mailId}
                      autoComplete="off"
                    />
                  </div>
                  <div className="contactus-input-container">
                    <input
                      type="text"
                      id="phone"
                      placeholder="Phone Number"
                      required
                      onChange={handleChange}
                      value={formData.phone}
                      autoComplete="off"
                      pattern="[0-9]*" // Only allow numbers
                      title="Please enter only numbers"
                    />
                  </div>
                  <div className="contactus-textarea-container">
                    <textarea
                      id="message"
                      placeholder="How Can We Help?"
                      required
                      onChange={handleChange}
                      value={formData.message}
                      autoComplete="off"
                    />
                  </div>
                  <div>
                    <button className="contactus-formButton" type="submit">
                      Submit
                    </button>
                  </div>
                </form> */}

                  {/* zoho form code */}    
          <form action='https://forms.zohopublic.in/dluxtech/form/ContactUs/formperma/31chFm8VXcXIgilsROO-K9qJZ1vauQDQ-ITFT9TZAbU/htmlRecords/submit' name='form' id='form' method='POST' accept-charset='UTF-8' encType='multipart/form-data'>    
          <input type="hidden" name="zf_referrer_name" value={""} />
          <input type="hidden" name="zf_redirect_url" value="" />
          <input type="hidden" name="zc_gad" value="" />
          
          <div className="contactus-input-container">
            <input type="text" maxLength="255" name="Name_First" fieldType={7} placeholder="First Name" required autoComplete="off"/>
          </div>

          <div className="contactus-input-container">
            <input type="text" maxLength="255" name="Name_Last" fieldType={7} placeholder="Last Name" required autoComplete="off"/>
          </div>

          <div className="contactus-input-container">
            <label>  </label>
            <input type="email" maxLength="255" name="Email" fieldType={9} placeholder="E-Mail" required autoComplete="off"/>
          </div>

      
          <div className="contactus-input-container">
            <label></label>
            <input type="tel" compname="PhoneNumber" name="PhoneNumber_countrycode" phoneFormat="1" isCountryCodeEnabled={false} maxLength="20" fieldType={11} id="international_PhoneNumber_countrycode" placeholder="Phone Number" pattern="[0-9]*" title="Please enter only numbers" autoComplete="off" />
          </div>

          <div className="contactus-textarea-container">
            <label></label>
            <textarea name="MultiLine" maxLength="65535" placeholder="How Can We Help?" required></textarea>
          </div>

          <div>
            <button className="contactus-formButton" type="submit"><em>Submit</em></button>
          </div>
        </form>
{/* zoho form code */}
              </div>
            </div>
          </div>

          <div className='contactus-form-rs-icons'>
            <div className='contactus-form-rs-photo'>
              <img src={contactus_formimg} className="contactus-formimg" alt="contactus-formimg" />
            </div>
            <div>
              <img src={contactus_callicon} className="contactus-fcallicon" alt="contactus-fcallicon" />
              <p className='contactus-fcalliconp'>+61 411 048 090</p>
            </div>
            <div>
              <img src={contactus_mssgicon} className="contactus-fmssgicon" alt="contactus-fmssgicon" />
              <p className='contactus-fmssgiconp'>sales@dluxtech.com</p>
            </div>
            <div>
              <img src={contactus_locicon} className="contactus-flocicon" alt="contactus-flocicon" />
              <p className='contactus-flociconp'>Suite-3, Level 2, 9 George Street<br/>
              Parramatta CBD, Sydney - NSW 2150</p>
            </div>
          </div>
        </div>
      </div>

      
      {/* {submitMessage && ( // Show the submit message as a popup
        <div className="contactus-submit-message-popup">
          {submitMessage}
        </div>
      )} */}

      <div className='contactus-footer'>
            <HomeFooter/>
        </div>

    </div>

    
    
  );
}

export default Contact_Us_Page;
