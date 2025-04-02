import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">BuildMasters</h3>
          <p className="text-sm">
            Building the future with innovation and precision since 2010.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-medium mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link
                to="/services"
                className="hover:text-yellow-400 transition duration-300"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className="hover:text-yellow-400 transition duration-300"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/team"
                className="hover:text-yellow-400 transition duration-300"
              >
                Team
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-yellow-400 transition duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-medium mb-4">Contact Us</h4>
          <p className="text-sm">
            Email: info@buildmasters.com
            <br />
            Phone: +1 (555) 987-6543
            <br />
            Address: 456 Construction Ave, Build City, USA
          </p>
        </div>
        <div>
          <h4 className="text-lg font-medium mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a
              href="#"
              className="hover:text-yellow-400 transition duration-300"
            >
              Instagram
            </a>
            <a
              href="#"
              className="hover:text-yellow-400 transition duration-300"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="hover:text-yellow-400 transition duration-300"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-sm border-t border-gray-800 pt-4">
        © 2025 BuildMasters. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
