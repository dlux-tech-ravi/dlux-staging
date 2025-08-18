import React from 'react';
import './Service_Details.css';

const Service_Details = ({ services }) => {
    return (
        <div className='cmp-service-details__section'>
            <div className='cmp-service-details__title'>
                <h1>Our Adobe Commerce Services</h1>
            </div>
            <div className='cmp-service-details__heading'>
                {services.map((service, index) => (
                    <div key={index} className='icon-container'>
                        <img className={`icon${index + 1}`} src={service.image} alt={service.title} />
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Service_Details;
