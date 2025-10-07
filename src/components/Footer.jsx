import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-gray-200 pt-16 pb-8 px-6">
      {/* === Top Section === */}
      <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-4 sm:grid-cols-2">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">
            Dynamic Accounting
          </h2>
          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            Professional accounting, tax, and advisory services tailored for
            businesses, freelancers, and startups across the UK.
          </p>
          <div className="flex space-x-4 mt-4">
            <a
              href="https://facebook.com"
              className="bg-yellow-400 text-blue-900 p-2 rounded-full hover:bg-yellow-300 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://linkedin.com"
              className="bg-yellow-400 text-blue-900 p-2 rounded-full hover:bg-yellow-300 transition"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://twitter.com"
              className="bg-yellow-400 text-blue-900 p-2 rounded-full hover:bg-yellow-300 transition"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              className="bg-yellow-400 text-blue-900 p-2 rounded-full hover:bg-yellow-300 transition"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-yellow-400 mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-yellow-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-yellow-400 transition">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-yellow-400 transition">
                Our Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-yellow-400 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-semibold text-yellow-400 mb-4">
            Services
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                to="/services/accounting"
                className="hover:text-yellow-400 transition"
              >
                Accounting & Bookkeeping
              </Link>
            </li>
            <li>
              <Link
                to="/services/tax"
                className="hover:text-yellow-400 transition"
              >
                Tax Management
              </Link>
            </li>
            <li>
              <Link
                to="/services/outsourcing"
                className="hover:text-yellow-400 transition"
              >
                Outsourcing & Staffing
              </Link>
            </li>
            <li>
              <Link
                to="/services/it"
                className="hover:text-yellow-400 transition"
              >
                IT & Cloud Solutions
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-yellow-400 mb-4">
            Contact Info
          </h3>
          <ul className="space-y-2 text-sm">
            <li>📍 123 King’s Road, London, UK</li>
            <li>📞 +44 20 1234 5678</li>
            <li>✉️ info@dynamicaccounting.co.uk</li>
          </ul>
          <div className="mt-4">
            <Link
              to="/contact"
              className="inline-block bg-yellow-400 text-blue-900 font-semibold px-4 py-2 rounded-lg hover:bg-yellow-300 transition"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>

      {/* === Divider === */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Dynamic Accounting. All rights reserved.
        <br />
        <span className="text-gray-500">
          Designed & Developed with ❤️ by Your Team.
        </span>
      </div>
    </footer>
  );
}
