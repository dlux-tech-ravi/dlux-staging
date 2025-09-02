import React, { useState } from 'react';
import './ResourcesForm.css';

const ResourcesForm = ({ showModal, closeModal, handleSubmit }) => {
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
            handleSubmit(formValues);
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
                        action='https://forms.zohopublic.in/dluxtech/form/Resources1/formperma/2ODcBW9URkeFfdGOKawjZ5UDJABNfNK6ItAWmZqOhoc/htmlRecords/submit'
                        acceptCharset='UTF-8'
                        encType='multipart/form-data'
                        id='form'
                        onSubmit={handleFormSubmit}
                    >
                        <input type="hidden" name="zf_referrer_name" value="" />
                        <input type="hidden" name="zf_redirect_url" value="" />
                        <input type="hidden" name="zc_gad" value="" />
                        <div className="zf-templateWrapper">
                            <ul className="zf-tempHeadBdr">
                                <li className="zf-tempHeadContBdr">
                                    <h2 className="zf-frmTitle"><em>Get Started For Free!</em></h2>
                                    <p className="zf-frmDesc"></p>
                                    <div className="zf-clearBoth"></div>
                                </li>
                            </ul>
                            <div className="zf-subContWrap zf-topAlign">
                                <ul>
                                    <li className="zf-tempFrmWrapper">
                                        <div className="zf-tempContDiv zf-nameWrapper">
                                            <input
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
                                    </li>
                                    <li className="zf-tempFrmWrapper zf-small">
                                        <div className="zf-tempContDiv">
                                            <input
                                                type="email" // HTML5 validation
                                                maxLength="255"
                                                name="Email"
                                                placeholder="Email"
                                                value={formValues.Email}
                                                onChange={handleInputChange}
                                                required 
                                                autoComplete="off"
                                            />
                                            {errors.Email && <div className="zf-errorMessage">{errors.Email}</div>}
                                        </div>
                                    </li>
                                    <li className="zf-tempFrmWrapper zf-small">
                                        <div className="zf-tempContDiv zf-phonefld">
                                            <input
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
                                        </div>
                                    </li>
                                </ul>
                                <div className="zf-clearBoth"></div>
                            </div>
                            <ul>
                                <li className="zf-fmFooter">
                                    <button className="zf-submitColor" type="submit" id="formsubmit">
                                        <em>Download Now</em>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ResourcesForm;
