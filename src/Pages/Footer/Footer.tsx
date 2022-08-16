/** @format */

import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className='Footer-container'>
      <div className='Footer'>
        <div className='footer-col'>
          <ul className='footer-links footer-align'>
            <li>
              <h1 className='footer-links'>About us</h1>
            </li>
            <li>
              <h1 className='footer-links'>Services</h1>
            </li>
            <li>
              <h1 className='footer-links'>privacy policy</h1>
            </li>
          </ul>
        </div>
        <div className='footer-company-copyright'>
          <div> Copyright © Quiz Mania</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
