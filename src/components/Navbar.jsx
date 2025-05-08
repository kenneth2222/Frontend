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
      <div className="hidden lg:flex space-x-8 text-2xl ">
        <Link to="/" className="hover:text-purple-300 cursor-pointer">Home</Link>
        <Link to="/about" className="hover:text-purple-300">About</Link>
        <Link to="/sponsor" className="hover:text-purple-300">Sponsor</Link>
        <Link to="/schedule" className="hover:text-purple-300">Schedule</Link>
        <Link to="/contact" className="hover:text-purple-300">Contact</Link>
      </div>

      {/* Mobile Menu Icon */}
      <div className="lg:hidden z-50 ">
        <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
          {isOpen ? (
            <HiX size={28} className="text-white" />
          ) : (
            <HiMenu size={28} className="text-white" />
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-16 right-8 w-3/4 bg-white text-black shadow-md px-6 py-4 flex flex-col gap-4 md:text-xl z-50 lg:hidden">
          <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-purple-300">Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="hover:text-purple-300">About</Link>
          <Link to="/sponsor" onClick={() => setIsOpen(false)} className="hover:text-purple-300">Sponsor</Link>
          <Link to="/schedule" onClick={() => setIsOpen(false)} className="hover:text-purple-300">Schedule</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="hover:text-purple-300">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
