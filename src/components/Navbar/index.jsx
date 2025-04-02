import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight">BuildMasters</h1>
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-yellow-400 transition duration-300 font-medium">
            Home
          </Link>
          <Link to="/services" className="hover:text-yellow-400 transition duration-300 font-medium">
            Services
          </Link>
          <Link to="/about" className="hover:text-yellow-400 transition duration-300 font-medium">
            About
          </Link>
          <Link to="/products" className="hover:text-yellow-400 transition duration-300 font-medium">
            Products
          </Link>
          <Link to="/projects" className="hover:text-yellow-400 transition duration-300 font-medium">
            Projects
          </Link>
          <Link to="/team" className="hover:text-yellow-400 transition duration-300 font-medium">
            Team
          </Link>
          <Link to="/blog" className="hover:text-yellow-400 transition duration-300 font-medium">
            Blog
          </Link>
          <Link to="/faq" className="hover:text-yellow-400 transition duration-300 font-medium">
            FAQ
          </Link>
          <Link to="/contact" className="hover:text-yellow-400 transition duration-300 font-medium">
            Contact
          </Link>
        </div>
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 px-4 py-4 flex flex-col space-y-4">
          <Link to="/" className="hover:text-yellow-400 transition duration-300" onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
          <Link to="/services" className="hover:text-yellow-400 transition duration-300" onClick={() => setIsMenuOpen(false)}>
            Services
          </Link>
          <Link to="/about" className="hover:text-yellow-400 transition duration-300" onClick={() => setIsMenuOpen(false)}>
            About
          </Link>
          <Link to="/products" className="hover:text-yellow-400 transition duration-300" onClick={() => setIsMenuOpen(false)}>
            Products
          </Link>
          <Link to="/projects" className="hover:text-yellow-400 transition duration-300" onClick={() => setIsMenuOpen(false)}>
            Projects
          </Link>
          <Link to="/team" className="hover:text-yellow-400 transition duration-300" onClick={() => setIsMenuOpen(false)}>
            Team
          </Link>
          <Link to="/blog" className="hover:text-yellow-400 transition duration-300" onClick={() => setIsMenuOpen(false)}>
            Blog
          </Link>
          <Link to="/faq" className="hover:text-yellow-400 transition duration-300" onClick={() => setIsMenuOpen(false)}>
            FAQ
          </Link>
          <Link to="/contact" className="hover:text-yellow-400 transition duration-300" onClick={() => setIsMenuOpen(false)}>
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;