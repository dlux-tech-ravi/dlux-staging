import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';
import Contact_Us_Page from './contents/Contact_Us_Page/Contact_Us_Page';

export function Button() {
  return (<>
    <Link to='/contact-us'>
      <button className='contactus-btn'>Contact Us</button>
    </Link>
    </>
  );
}

