import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png";
import { HiMenu, HiX } from "react-icons/hi"; // Optional: install with `npm i react-icons`

const Navbar = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`flex justify-between items-center py-4 px-8 lg:px-16 widthMargin ${className} relative z-[100]`}>
      {/* Logo */}
      <div className="flex items-center gap-2">
        <Link to="/">
          <img src={logo} alt="Logo" className="h-5 lg:h-23 cursor-pointer" />
        </Link>
      </div>

      {/* Large Screen Nav */}
      <div className="hidden lg:flex space-x-8 text-2xl">
        <Link to="/" className="hover:text-purple-300 cursor-pointer">Home</Link>
        <Link to="/about" className="hover:text-purple-300">About</Link>
        <Link to="/sponsor" className="hover:text-purple-300">Sponsor</Link>
        <Link to="/schedule" className="hover:text-purple-300">Schedule</Link>
        <Link to="/contact" className="hover:text-purple-300">Contact</Link>
      </div>

      {/* Mobile Menu Icon */}
      <div className="lg:hidden z-150">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <HiX md:size={28}  className="text-black md:absolute md:top-6 md:right-13 "/> : <HiMenu size={28}/>}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-5 right-10 w-1/3 md:w-1/5 bg-white text-black shadow-md px-8 py-4 flex flex-col gap-4 md:text-xl z-50 lg:hidden">
          <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-purple-300">Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="hover:text-purple-300">About</Link>
          <Link to="/speakers" onClick={() => setIsOpen(false)} className="hover:text-purple-300">Speakers</Link>
          <Link to="/schedule" onClick={() => setIsOpen(false)} className="hover:text-purple-300">Schedule</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="hover:text-purple-300">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
