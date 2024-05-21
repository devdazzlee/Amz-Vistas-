import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
// import logo from '../../Images/Worldwide-logo.svg';
import logo from '../../Images/Asset 6.png'
import './Footer.css';

function Footer() {
  return (
    <footer className="text-white   md:px-6 px-6  sm:py-8 md:py-8  footer-image">
      <div className="max-w-7xl mx-auto  sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
          <div className="mt-4 sm:col-span-1">
            <Link to={'/'}>
              <img    width={"150px"} src={logo} alt="Amz Vistas Logo" />
            </Link>
            <p className="text-sm py-4 sm:py-6 text-white">
            Let's turn your Billionaire dream into a reality together.
            </p>
            <div className="flex gap-4 mt-2">
              <a href="https://www.facebook.com" >
                <FontAwesomeIcon icon={faFacebook}   size="2x" />
              </a>
              <a href="https://www.twitter.com" >
                <FontAwesomeIcon icon={faTwitter}    size="2x" />
              </a>
              <a href="https://www.instagram.com" >
                <FontAwesomeIcon icon={faInstagram}   size="2x" />
              </a>
              <a href="https://www.linkedin.com" >
                <FontAwesomeIcon icon={faLinkedin}   size="2x" />
              </a>
            </div>
          </div>

          <div className="mt-8">
            <h2   className="text-2xl  font-bold mb-2">Services</h2>
            <ul className="mt-4 space-y-2">
              <li   className='text-white' >
                <Link to="/AMAZON-FBA">Amazon Store Creation</Link>
              </li>
              <li   className='text-white' >
                <Link to="/shopify-dropshipping">Amazon Product Hunting</Link>
              </li>
              <li   className='text-white' >
                <Link to="/shopify-dropshipping">EBC/A+ Content</Link>
              </li>
              <li   className='text-white' >
                <Link to="/AMAZON-FBA">Virtual Assistant</Link>
              </li>
            </ul>
          </div>
          <div className="mt-8">
            <h2  className="text-2xl font-bold mb-2">Pages</h2>
            {/* <div className="border-b-2 border-red-600 w-10"></div> */}
            <ul className="mt-4 space-y-2">
            <li   className='text-white' >
                <Link to="/">Home</Link>
              </li>
              <li   className='text-white' >
                <Link to="/AMAZON-FBA">Amazon FBA Automation</Link>
              </li>
              <li   className='text-white' >
                <Link to="/about-us">About</Link>
              </li>
              <li   className='text-white' >
                <Link to="/Contact-us">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="mt-8">
            <h2    className="text-2xl font-bold mb-2">Address</h2>
            {/* <div className="border-b-2 border-red-600 w-10"></div> */}
            <ul className="mt-4 space-y-2">
              <li  className='text-white'   ><a href="#">+1 (737) 295-1375</a></li>
              <li  className='text-white'   ><a href="#">contact@amzvistas.com</a></li>
              <li  className='text-white'   ><a href="#">5900 Balcones Drive STE 100 Austin TX 78731</a></li>
              <Link to="/Contact-us">
      
              <li  className='text-white'   ><a href="#">Get a Quote</a></li>
               </Link>

        
            </ul>
          </div>
        </div>
      </div>

      <div className="flex  justify-center mt-4">
        <hr className="w-4/5 sm:w-3/5 border border-gray-300" />
      </div>

      <div className="flex flex-col items-center mt-2 sm:flex-row sm:justify-evenly">
  <div className="text-sm text-white mt-2 font-2xl">
    <a href="https://radiantcortex.com/" target="_blank" rel="noopener noreferrer">
      &copy; 2023 <span style={{ textDecoration: "underline" }}>Radiant Cortex</span>. All rights reserved.
    </a>
  </div>
  
  <div className="flex mt-2 sm:mt-0">
    <Link to="/Privacy-Policy" className="text-white mr-4">
      <li style={{ listStyleType: "none" }}>Privacy Policy</li>
    </Link>
    <Link to="/Terms-Condition" className="text-white">
      <li style={{ listStyleType: "none" }}>Terms & Conditions</li>
    </Link>
  </div>
</div>


    </footer>
  );
}

export default Footer;
