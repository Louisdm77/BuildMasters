import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-900 text-white z-50 border-b-2 border-teal-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex justify-between items-center">
        <div className="hidden md:flex items-center space-x-8">
          <Link
            to="/"
            className="relative text-lg font-medium text-slate-200 hover:text-teal-600 transition duration-300 group"
          >
            Home
            <span className="absolute left-0 bottom-[-4px] w-0 h-1 bg-teal-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            to="/services"
            className="relative text-lg font-medium text-slate-200 hover:text-teal-600 transition duration-300 group"
          >
            Services
            <span className="absolute left-0 bottom-[-4px] w-0 h-1 bg-teal-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            to="/about"
            className="relative text-lg font-medium text-slate-200 hover:text-teal-600 transition duration-300 group"
          >
            About
            <span className="absolute left-0 bottom-[-4px] w-0 h-1 bg-teal-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            to="/products"
            className="relative text-lg font-medium text-slate-200 hover:text-teal-600 transition duration-300 group"
          >
            Products
            <span className="absolute left-0 bottom-[-4px] w-0 h-1 bg-teal-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            to="/projects"
            className="relative text-lg font-medium text-slate-200 hover:text-teal-600 transition duration-300 group"
          >
            Projects
            <span className="absolute left-0 bottom-[-4px] w-0 h-1 bg-teal-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            to="/team"
            className="relative text-lg font-medium text-slate-200 hover:text-teal-600 transition duration-300 group"
          >
            Team
            <span className="absolute left-0 bottom-[-4px] w-0 h-1 bg-teal-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            to="/blog"
            className="relative text-lg font-medium text-slate-200 hover:text-teal-600 transition duration-300 group"
          >
            Blog
            <span className="absolute left-0 bottom-[-4px] w-0 h-1 bg-teal-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            to="/faq"
            className="relative text-lg font-medium text-slate-200 hover:text-teal-600 transition duration-300 group"
          >
            FAQ
            <span className="absolute left-0 bottom-[-4px] w-0 h-1 bg-teal-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            to="/contact"
            className="relative text-lg font-medium text-slate-200 hover:text-teal-600 transition duration-300 group"
          >
            Contact
            <span className="absolute left-0 bottom-[-4px] w-0 h-1 bg-teal-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-teal-600 to-teal-400 bg-clip-text text-transparent">
          BuildMasters
        </h1>

        <button
          className="md:hidden text-3xl text-teal-600 hover:text-teal-400 transition duration-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      
      {isMenuOpen && (
        <div className="md:hidden bg-slate-800 px-4 py-6 shadow-lg animate-slideDown">
          <div className="flex flex-col space-y-4">
            <Link
              to="/"
              className="text-lg font-medium text-slate-200 hover:text-teal-600 hover:bg-slate-700 px-3 py-2 rounded-md transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/services"
              className="text-lg font-medium text-slate-200 hover:text-teal-600 hover:bg-slate-700 px-3 py-2 rounded-md transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/about"
              className="text-lg font-medium text-slate-200 hover:text-teal-600 hover:bg-slate-700 px-3 py-2 rounded-md transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/products"
              className="text-lg font-medium text-slate-200 hover:text-teal-600 hover:bg-slate-700 px-3 py-2 rounded-md transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
            <Link
              to="/projects"
              className="text-lg font-medium text-slate-200 hover:text-teal-600 hover:bg-slate-700 px-3 py-2 rounded-md transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              to="/team"
              className="text-lg font-medium text-slate-200 hover:text-teal-600 hover:bg-slate-700 px-3 py-2 rounded-md transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Team
            </Link>
            <Link
              to="/blog"
              className="text-lg font-medium text-slate-200 hover:text-teal-600 hover:bg-slate-700 px-3 py-2 rounded-md transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              to="/faq"
              className="text-lg font-medium text-slate-200 hover:text-teal-600 hover:bg-slate-700 px-3 py-2 rounded-md transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </Link>
            <Link
              to="/contact"
              className="text-lg font-medium text-slate-200 hover:text-teal-600 hover:bg-slate-700 px-3 py-2 rounded-md transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}

      {/* Slide Down Animation */}
      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
