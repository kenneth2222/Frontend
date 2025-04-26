import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png";

const Navbar = ({ className }) => {
  return (
    <nav className={`flex justify-between items-center py-4 px-8 lg:px-16 widthMargin ${className}`}>
      <div className="flex items-center gap-2">
        <Link to="/"> <img src={logo} alt="Logo" className="h-23 cursor-pointer" /></Link>
        <h1 className="text-2xl font-bold"></h1>
      </div>
      <div className="hidden md:flex space-x-8 text-2xl">
        <Link to="/" className="hover:text-purple-300">Home</Link>
        <Link to="/about" className="hover:text-purple-300">About</Link>
        <Link to="/speakers" className="hover:text-purple-300">Speakers</Link>
        <Link to="/schedule" className="hover:text-purple-300">Schedule</Link>
        <Link to="/contact" className="hover:text-purple-300">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
