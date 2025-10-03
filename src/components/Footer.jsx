import React from "react";
import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const navStyle = {
    backgroundImage: `url('https://minare.nitrkl.ac.in/static/media/banner-bg.cc1273af450504afe755.png')`, 
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };
  return (
    <div className="p-2  text-white" style={navStyle}>
      {/* Contact + Icons in one row */}
      <div className="flex justify-between items-start p-2">
        {/* Contact Info */}
        <div>
          <img src="https://minare.nitrkl.ac.in/static/media/Minare-logo-white.def03cbf049befdecf7905845a51899e.svg" 
          alt="" 
          className="h-32 w-32 ml-8"
          />
        </div>

        {/* Social Icons */}
        <div className="flex gap-3">
          {/* LinkedIn */}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full  border-gray-400 hover:bg-gray-700 transition ease-in duration-300"
          >
            <FaLinkedinIn size={20} />
          </a>

          {/* Facebook */}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full  border-gray-400 hover:bg-gray-700 transition ease-in duration-300"
          >
            <FaFacebookF size={20} />
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full  border-gray-400 hover:bg-gray-700 transition ease-in duration-300"
          >
            <FaInstagram size={20} />
          </a>
          
        </div>
      </div>

      {/* Footer bottom text */}
      <footer className="pr-3 text-right text-gray-500">
        &copy; {new Date().getFullYear()} Copyright. All rights reserved.
      </footer>
      
    </div>
  );
};

export default Footer;
