import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false); 

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navBackgroundStyle = {
    backgroundImage: `url('https://minare.nitrkl.ac.in/static/media/banner-bg.cc1273af450504afe755.png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full flex flex-wrap items-center justify-between px-4 sm:px-10 z-50 transition-all duration-300 ease-in-out ${
          isScrolled 
            ? 'py-3 bg-black' 
            : 'py-6 bg-transparent bg-opacity-100 border-b-0' 
        }`}
      >
        {/* Logo Section */}
        <Link to="/" className="flex items-center flex-shrink-0">
          <h2 className="flex text-xl font-lato tracking-widest text-white transition">
            <img
              src="https://minare.nitrkl.ac.in/static/media/Minare-logo-white.def03cbf049befdecf7905845a51899e.svg"
              className="w-20 h-15 rounded transition transform"
              alt="Logo"
            />
            <img
              src="https://minare.nitrkl.ac.in/static/media/mes-logo-white.3afb8ece9c4496a6f49d.png"
              className="w-20 h-15 rounded transition transform"
              alt="Logo"
            />
          </h2>
        </Link>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-3xl text-white cursor-pointer hover:text-purple-400 transition"
            aria-label="Toggle navigation"
          >
            &#9776;
          </button>
        </div>

        {/* Navigation Links Container */}
        <div
          className={`md:flex md:w-auto transition-all duration-300 ease-in-out ${
            isOpen 
              ? 'fixed inset-0 top-0 left-0 w-full h-full bg-black z-40 flex items-center justify-center' 
              : 'hidden'
          }`}
        >
          <div className={`flex flex-col md:flex-row gap-8 md:gap-8 items-center text-center text-white ${
            isOpen 
              ? 'text-2xl space-y-8' 
              : isScrolled 
                ? 'text-lg ease-in-out duration-200' 
                : 'text-xl'
          }`}>
            <Link to="/" className="nav-link-unique py-2 md:py-0 hover:text-purple-400 transition-colors duration-200" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/gallery" className="nav-link-unique py-2 md:py-0 hover:text-purple-400 transition-colors duration-200" onClick={() => setIsOpen(false)}>Gallery</Link>
            <Link to="/sponsors" className="nav-link-unique py-2 md:py-0 hover:text-purple-400 transition-colors duration-200" onClick={() => setIsOpen(false)}>Sponsors</Link>
            <Link to="/team" className="nav-link-unique py-2 md:py-0 hover:text-purple-400 transition-colors duration-200" onClick={() => setIsOpen(false)}>Team</Link>

            <Link to="/register" className="text-xl text-white font-mono py-3 px-6 rounded-md bg-purple-700 hover:bg-purple-600 transition-colors duration-200 mt-4 md:mt-0" onClick={() => setIsOpen(false)}>
                Let's Register
            </Link>
          </div>
        </div> 
      </nav>
    </>
  );
};

export default Header;