import React, { useState, useEffect } from 'react';
import './HForm.css';
import hfcallicon from './hfcallicon.png';
import hfmssgicon from './hfmssgicon.png';
import hflocicon from './hflocicon.png';

function App() {
  // const [formData, setFormData] = useState({
  //   name: "",
  //   mailId: "",
  //   phone: "",
  //   message: "",
  // });

  // const [submitMessage, setSubmitMessage] = useState("");

  // useEffect(() => {
  //   if (submitMessage === "✅Thank you for reaching out to us! We'll get back to you shortly.") {
  //     const clearForm = setTimeout(() => {
  //       setFormData({
  //         name: "",
  //         mailId: "",
  //         phone: "",
  //         message: "",
  //       });
  //       setSubmitMessage(""); // Reset the submit message after clearing the form
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
  //     const response = await fetch('http://localhost:30002/contact_us_form', {  // // cpanel - ip
  //     // const response = await fetch('http://localhost:30002/contact_us_form', {  // localhost - test
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
        <div className="form-home">
        <div className='hform-ls'>
        <h1>Let's Connect</h1>
        <p>Hop on board to discover how DLUX can wield its<br/>
        marketing magic tool, ensuring a seamless workflow<br/>
        all the way through.</p>

        <div className='hform-ls-icons'>
        <div>
          <img src={hfcallicon} className="hfcallicon" alt="hfcallicon" />
          <p>+61 411 048 090</p>
        </div>
        <div>
        <img src={hfmssgicon} className="hfmssgicon" alt="hfmssgicon" />
          <p>sales@dluxtech.com</p>
        </div>
        <div>
        <img src={hflocicon} className="hflocicon" alt="hflocicon" />
          <p>Suite-3, Level 2, 9 George Street<br />
          Parramatta CBD, Sydney - NSW 2150
</p>
        </div>
      </div>
      </div>
{/*      
      <div className="hright">
        <div className="hright-content">
          <form className="hright-content" onSubmit={handleSubmit}>
            <div className="hinput-container">
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
            <div className="hinput-container">
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
            <div className="hinput-container">
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
            <div className="hinput-container-textarea">
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
              <button className="hformButton" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      {submitMessage && ( // Show the submit message as a popup
        <div className="hform-submit-message-popup">
          {submitMessage}
        </div>
      )}   */}


  {/* zoho form code */}    
    <div className="hright">
    <div className="hright-content">
          <form action='https://forms.zohopublic.in/dluxtech/form/ContactUs/formperma/31chFm8VXcXIgilsROO-K9qJZ1vauQDQ-ITFT9TZAbU/htmlRecords/submit' name='form' id='form' method='POST' accept-charset='UTF-8' encType='multipart/form-data'>    
          <input type="hidden" name="zf_referrer_name" value={""} />
          <input type="hidden" name="zf_redirect_url" value="" />
          <input type="hidden" name="zc_gad" value="" />
          
          <div className="hinput-container">
            <input type="text" maxLength="255" name="Name_First" fieldType={7} placeholder="First Name" required autoComplete="off"/>
          </div>

          <div className="hinput-container">
            <input type="text" maxLength="255" name="Name_Last" fieldType={7} placeholder="Last Name" required autoComplete="off"/>
          </div>

          <div className="hinput-container">
            <label>  </label>
            <input type="email" maxLength="255" name="Email" fieldType={9} placeholder="E-Mail" required autoComplete="off"/>
          </div>

      
          <div className="hinput-container">
            <label></label>
            <input type="tel" compname="PhoneNumber" name="PhoneNumber_countrycode" phoneFormat="1" isCountryCodeEnabled={false} maxLength="20" fieldType={11} id="international_PhoneNumber_countrycode" placeholder="Phone Number" pattern="[0-9]*" title="Please enter only numbers" autoComplete="off" />
          </div>

          <div className="hinput-container-textarea">
            <label></label>
            <textarea name="MultiLine" maxLength="65535" placeholder="How Can We Help?" required></textarea>
          </div>

          <div>
            <button className="hformButton" type="submit"><em>Submit</em></button>
          </div>
        </form>
    </div>
  </div>
{/* zoho form code */}

  </div>
  
    );
  }


export default App;
