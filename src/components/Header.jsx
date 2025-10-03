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

          className={`w-full md:flex md:w-auto transition-all duration-300 ease-in-out ${
            isOpen ? 'block bg-black bg-opacity-90 p-4 mt-2 rounded-md' : 'hidden'
          }`}
        >
          <div className={`flex flex-col md:flex-row gap-4 md:gap-8 items-center text-center text-white pt-4 md:pt-0 ${
            isScrolled ? 'text-lg ease-in-out duration-200' : 'text-xl' 
          }`}>
            <Link to="/" className="nav-link-unique py-2 md:py-0 hover:text-slate-400">Home</Link>
            <Link to="/gallery" className="nav-link-unique py-2 md:py-0 hover:text-slate-400">Gallery</Link>
            <Link to="/sponsors" className="nav-link-unique py-2 md:py-0 hover:text-slate-400">Sponsors</Link>
            <Link to="/team" className="nav-link-unique py-2 md:py-0 hover:text-slate-400">Team</Link>

            <div className="text-lg text-white font-mono h-8 rounded-md w-40 bg-purple-700 hover:bg-white hover:text-black flex items-center justify-center cursor-pointer mt-2 md:mt-0">
                Let's Register
            </div>
          </div>
        </div> 
      </nav>
    </>
  );
};

export default Header;