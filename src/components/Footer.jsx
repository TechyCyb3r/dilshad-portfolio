import React from 'react';
import './css/Footer.css';
import githubIcon from '../assets/devop/github.svg'; 
import gmailIcon from '../assets/ticon/mail.svg';
import linkedinIcon from '../assets/linkedin.svg';
const Footer = () => {
  return (
    <div className="footer">
      <div className="social-icons">
        <a href="https://github.com/dilshad-rangrej" target="_blank" rel="noopener noreferrer">
          <img src={githubIcon} alt="GitHub" />
        </a>
        <a href="mailto:dilshadrangrejj@gmail.com">
          <img src={gmailIcon} alt="Gmail" />
        </a>
        <a href="https://www.linkedin.com/in/dilshad-rangrej/" target="_blank" rel="noopener noreferrer">
          <img src={linkedinIcon} alt="LinkedIn" />
        </a>
      </div>

      <p>
        © {new Date().getFullYear()} Dilshad Rangrej. All rights reserved. 
      </p>
    </div>
  );
};

export default Footer;
