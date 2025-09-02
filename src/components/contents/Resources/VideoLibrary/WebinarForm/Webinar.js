import React, { useState } from 'react';
import './Webinar.css';

const Webinar = ({ showModal, closeModal, handleSubmit }) => {
    const [formValues, setFormValues] = useState({
        Name_First: '',
        Name_Last: '',
        Email: '',
        PhoneNumber_countrycode: '',
    });

    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};

        // Name validation
        if (!/^[a-zA-Z]+$/.test(formValues.Name_First)) {
            newErrors.Name_First = 'First name can only contain alphabetic characters.';
        }
        if (!/^[a-zA-Z]+$/.test(formValues.Name_Last)) {
            newErrors.Name_Last = 'Last name can only contain alphabetic characters.';
        }

        // Email validation
        if (!formValues.Email || !/\S+@\S+\.\S+/.test(formValues.Email)) {
            newErrors.Email = 'Please enter a valid email address.';
        }

        // Phone validation
        if (!/^\d{5,}$/.test(formValues.PhoneNumber_countrycode)) {
            newErrors.PhoneNumber_countrycode = 'Phone number must be at least 5 digits long and contain only numbers.';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            handleSubmit(formValues); // Trigger download or any action required
            // Submit the form to the Zoho endpoint
            document.getElementById('form').submit(); // Submits the form directly
        }
    };

    return (
        <div id="formModal" className={`rsf-modal ${showModal ? 'show' : ''}`}>
            <div className="rsf-modal-content">
                <span className="rsf-close" onClick={closeModal}>&times;</span>
                <div className="zf-templateWrapper">
                    <form
                        name='form'
                        method='POST'
                        action='https://forms.zohopublic.in/dluxtech/form/Webinar/formperma/y0_JDKLOVpi02DeyULSuGSfL-sSIsqM5jMY9r31O2pY/htmlRecords/submit'
                        acceptCharset='UTF-8'
                        encType='multipart/form-data'
                        id='form'
                        onSubmit={handleFormSubmit}
                    >
                        <input type="hidden" name="zf_referrer_name" value="" />
                        <input type="hidden" name="zf_redirect_url" value="" />
                        <input type="hidden" name="zc_gad" value="" />

                        <h2><em>Content Supply Chain Webinar</em></h2>

                        <div className="fullName">
                            <input
                                className="firstName"
                                type="text"
                                maxLength="255"
                                name="Name_First"
                                placeholder="First Name"
                                value={formValues.Name_First}
                                onChange={handleInputChange}
                                required
                                autoComplete="off"
                                pattern="[a-zA-Z]+"
                                title="First name can only contain alphabetic characters."
                            />
                            {errors.Name_First && <div className="zf-errorMessage">{errors.Name_First}</div>}

                            <input
                                className="lastName"
                                type="text"
                                maxLength="255"
                                name="Name_Last"
                                placeholder="Last Name"
                                value={formValues.Name_Last}
                                onChange={handleInputChange}
                                required
                                autoComplete="off"
                                pattern="[a-zA-Z]+"
                                title="Last name can only contain alphabetic characters."
                            />
                            {errors.Name_Last && <div className="zf-errorMessage">{errors.Name_Last}</div>}
                        </div>

                        <input
                            className="emailId"
                            type="email"
                            maxLength="255"
                            name="Email"
                            placeholder="Email"
                            value={formValues.Email}
                            onChange={handleInputChange}
                            required
                            autoComplete="off"
                        />
                        {errors.Email && <div className="zf-errorMessage">{errors.Email}</div>}
                        <div>
                            <input
                                className="phoneNumber"
                                type="text"
                                name="PhoneNumber_countrycode"
                                maxLength="20"
                                placeholder="Phone"
                                value={formValues.PhoneNumber_countrycode}
                                onChange={handleInputChange}
                                autoComplete="off"
                                required
                                pattern="\d{5,}"
                                title="Phone number must be at least 5 digits long and contain only numbers."
                            />
                            {errors.PhoneNumber_countrycode && <div className="zf-errorMessage">{errors.PhoneNumber_countrycode}</div>}
                        </div>
                        <button className="zf-submitColor" type="submit" id="formsubmit">
                            <em>Download Now</em>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Webinar;
