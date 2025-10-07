import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <nav className="bg-blue-900 text-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo / Brand */}
        <div className="flex items-center space-x-2">
          <img src="/logo.svg" alt="Logo" className="h-8 w-8" />
          <span className="text-lg sm:text-xl font-semibold tracking-wide">
            Dynamic Accounting
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          <Link to="/" className="hover:text-yellow-400 transition">
            Home
          </Link>
          <Link to="/about" className="hover:text-yellow-400 transition">
            About
          </Link>

          {/* Dropdown */}
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="flex items-center hover:text-yellow-400 transition focus:outline-none"
            >
              Services
              <FaChevronDown className="ml-1 text-sm" />
            </button>

            {dropdownOpen && (
              <div
                onMouseLeave={() => setDropdownOpen(false)}
                className="absolute top-full left-0 bg-white text-blue-900 shadow-lg rounded-lg mt-2 w-60 py-2 z-50"
              >
                <Link
                  to="/services/accounting"
                  className="block px-4 py-2 hover:bg-blue-50"
                >
                  Accounting & Bookkeeping
                </Link>
                <Link
                  to="/services/tax"
                  className="block px-4 py-2 hover:bg-blue-50"
                >
                  Tax Services
                </Link>
                <Link
                  to="/services/outsourcing"
                  className="block px-4 py-2 hover:bg-blue-50"
                >
                  Outsourcing & Remote Staffing
                </Link>
                <Link
                  to="/services/it"
                  className="block px-4 py-2 hover:bg-blue-50"
                >
                  IT & Cloud Solutions
                </Link>
              </div>
            )}
          </div>

          <Link to="/contact" className="hover:text-yellow-400 transition">
            Contact
          </Link>

          <Link
            to="/contact"
            className="bg-yellow-400 text-blue-900 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-2xl focus:outline-none"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-blue-800 text-white px-4 pb-4 space-y-2">
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="block py-2 border-b border-blue-700 hover:text-yellow-400"
          >
            Home
          </Link>

          <Link
            to="/about"
            onClick={() => setMenuOpen(false)}
            className="block py-2 border-b border-blue-700 hover:text-yellow-400"
          >
            About
          </Link>

          {/* Services Accordion for Mobile */}
          <div>
            <button
              onClick={toggleDropdown}
              className="w-full flex justify-between items-center py-2 hover:text-yellow-400 focus:outline-none"
            >
              <span>Services</span>
              <FaChevronDown
                className={`transition-transform ${
                  dropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {dropdownOpen && (
              <div className="pl-4 space-y-1">
                <Link
                  to="/services/accounting"
                  onClick={() => setMenuOpen(false)}
                  className="block py-1 hover:text-yellow-400"
                >
                  Accounting & Bookkeeping
                </Link>
                <Link
                  to="/services/tax"
                  onClick={() => setMenuOpen(false)}
                  className="block py-1 hover:text-yellow-400"
                >
                  Tax Services
                </Link>
                <Link
                  to="/services/outsourcing"
                  onClick={() => setMenuOpen(false)}
                  className="block py-1 hover:text-yellow-400"
                >
                  Outsourcing & Remote Staffing
                </Link>
                <Link
                  to="/services/it"
                  onClick={() => setMenuOpen(false)}
                  className="block py-1 hover:text-yellow-400"
                >
                  IT & Cloud Solutions
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="block py-2 border-b border-blue-700 hover:text-yellow-400"
          >
            Contact
          </Link>

          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="inline-block w-full text-center bg-yellow-400 text-blue-900 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition"
          >
            Get a Quote
          </Link>
        </div>
      )}
    </nav>
  );
}


