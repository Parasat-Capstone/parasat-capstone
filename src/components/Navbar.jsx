import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/parasat-logo.png";
import { BadgeInfo, House, Phone, ServerCog } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-blue-600 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              className="h-12 w-auto sm:h-14"
              src={logo}
              alt="Logo"
              loading="lazy"
            />
          </Link>

          {/* Hamburger Menu (Mobile) */}
          <button
            className="sm:hidden block text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>

          {/* Navigation Links */}
          <nav
            className={`sm:flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8 ${
              isOpen ? "block" : "hidden"
            } sm:block`}
          >
            <Link
              to="/"
              className="flex items-center bg-white text-blue-600 py-2 px-4 rounded-full shadow-md hover:bg-blue-500 hover:text-white transition-all duration-300 font-medium"
            >
              <span className="mr-2">Home</span>
              <House />
            </Link>
            <Link
              to="/features"
              className="flex items-center bg-white text-blue-600 py-2 px-4 rounded-full shadow-md hover:bg-blue-500 hover:text-white transition-all duration-300 font-medium"
            >
              <span className="mr-2">Plans</span>
              <ServerCog />
            </Link>
            <Link
              to="/about"
              className="flex items-center bg-white text-blue-600 py-2 px-4 rounded-full shadow-md hover:bg-blue-500 hover:text-white transition-all duration-300 font-medium"
            >
              <span className="mr-2">About</span>
              <BadgeInfo />
            </Link>
            <Link
              to="/contact"
              className="flex items-center bg-white text-blue-600 py-2 px-4 rounded-full shadow-md hover:bg-blue-500 hover:text-white transition-all duration-300 font-medium"
            >
              <span className="mr-2">Contact</span>
              <Phone />
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
