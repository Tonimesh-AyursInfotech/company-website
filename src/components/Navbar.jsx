import React, { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b-2 border-transparent relative">
      {/* Beautiful Bottom Border Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold tracking-tight bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent hover:from-blue-700 hover:via-indigo-700 hover:to-blue-800 transition-all"
          >
            AYURS INFOTECH
            <div className="text-sm mt-[-7px] tracking-wider bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-600 bg-clip-text text-transparent">
              Create Your Identity
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Product Dropdown */}
            <div className="relative group">
              <button
                onClick={() => {
                  setProductOpen(!productOpen);
                  setServicesOpen(false);
                }}
                className="flex items-center font-medium text-gray-700 hover:text-blue-600 transition-all duration-200 group"
              >
                Product
                <ChevronDown
                  className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                    productOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {productOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl py-2 z-10 border border-blue-100/50 backdrop-blur-sm">
                  <a
                    href="https://www.ayursinfotech.com/"
                    target="_blank"
                    className="block px-4 py-3 text-gray-600 hover:bg-blue-50 hover:text-blue-700 transition-colors rounded-lg mx-2 font-medium"
                  >
                    EzBox
                  </a>
                  {/* <Link
                    to="#"
                    className="block px-4 py-3 text-gray-600 hover:bg-blue-50 hover:text-blue-700 transition-colors rounded-lg mx-2 font-medium"
                  >
                    Punch Diabetes
                  </Link> */}
                  {/* <Link
                    to="#"
                    className="block px-4 py-3 text-gray-600 hover:bg-blue-50 hover:text-blue-700 transition-colors rounded-lg mx-2 font-medium"
                  >
                    Product 3
                  </Link> */}
                </div>
              )}
            </div>

            {/* Services Dropdown */}
            <div className="relative group">
              <button
                onClick={() => {
                  setServicesOpen(!servicesOpen);
                  setProductOpen(false);
                }}
                className="flex items-center font-medium text-gray-700 hover:text-blue-600 transition-all duration-200"
              >
                Services
                <ChevronDown
                  className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl py-2 z-10 border border-blue-100/50 backdrop-blur-sm">
                  <a
                    href="/services-web-devlopment"
                    className="block px-4 py-3 text-gray-600 hover:bg-blue-50 hover:text-blue-700 transition-colors rounded-lg mx-2 font-medium"
                  >
                    Web Development
                  </a>
                  <a
                    href="/services-app-devlopment"
                    className="block px-4 py-3 text-gray-600 hover:bg-blue-50 hover:text-blue-700 transition-colors rounded-lg mx-2 font-medium"
                  >
                    App Development
                  </a>
                   <a
                    href="/services-data-security"
                    className="block px-4 py-3 text-gray-600 hover:bg-blue-50 hover:text-blue-700 transition-colors rounded-lg mx-2 font-medium"
                  >
                    Data Security 
                  </a>
                  <a
                    href="/services-data-analytics"
                    className="block px-4 py-3 text-gray-600 hover:bg-blue-50 hover:text-blue-700 transition-colors rounded-lg mx-2 font-medium"
                  >
                    Data Analytics 
                  </a>
                   <a
                    href="/services-it-acquisition"
                    className="block px-4 py-3 text-gray-600 hover:bg-blue-50 hover:text-blue-700 transition-colors rounded-lg mx-2 font-medium"
                  >
                   IT Talent Acquisition
                  </a>
                </div>
              )}
            </div>

            {/* Other Links */}
            <a
              href="/our-work"
              className="font-medium text-gray-700 hover:text-blue-600 transition-all duration-200 relative group"
            >
              Our Work
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-600 transition-all duration-200 group-hover:w-full" />
            </a>
            <Link
              to="/careers"
              className="font-medium text-gray-700 hover:text-blue-600 transition-all duration-200 relative group"
            >
              Careers
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-600 transition-all duration-200 group-hover:w-full" />
            </Link>
            <Link
              to="/contactUs"
              className="font-medium text-gray-700 hover:text-blue-600 transition-all duration-200 relative group"
            >
              Contact Us
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-600 transition-all duration-200 group-hover:w-full" />
            </Link>
            <Link
              to="/about-us"
              className="font-medium text-gray-700 hover:text-blue-600 transition-all duration-200 relative group"
            >
              About Us
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-600 transition-all duration-200 group-hover:w-full" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-blue-600 hover:text-blue-700 transition-colors p-2 rounded-lg hover:bg-blue-50"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-blue-100/50 mt-2 pt-4">
            <div className="flex flex-col space-y-1">

                       {/* Product Dropdown Mobile */}
              <button
                onClick={() => setProductOpen(!productOpen)}
                className="flex items-center justify-between font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 py-3 px-3 rounded-lg transition-all"
              >
                Product
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${
                    productOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {productOpen && (
                <div className="pl-4 space-y-1 bg-blue-50/30 py-2 rounded-lg">
                  <Link
                    to="#"
                    className="block text-gray-600 hover:text-blue-700 py-2 px-3 rounded-lg hover:bg-white transition-all"
                  >
                    EZ Box
                  </Link>
                </div>
              )}
              {/* Services Dropdown Mobile */}
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center justify-between font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 py-3 px-3 rounded-lg transition-all"
              >
                Services
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {servicesOpen && (
                <div className="pl-4 space-y-1 bg-blue-50/30 py-2 rounded-lg">
                  <Link
                    to="#"
                    className="block text-gray-600 hover:text-blue-700 py-2 px-3 rounded-lg hover:bg-white transition-all"
                  >
                    Web Development
                  </Link>
                  <Link
                    to="#"
                    className="block text-gray-600 hover:text-blue-700 py-2 px-3 rounded-lg hover:bg-white transition-all"
                  >
                    App Development
                  </Link>
                  <Link
                    to="#"
                    className="block text-gray-600 hover:text-blue-700 py-2 px-3 rounded-lg hover:bg-white transition-all"
                  >
                    Data Analytics
                  </Link>
                      <Link
                    to="#"
                    className="block text-gray-600 hover:text-blue-700 py-2 px-3 rounded-lg hover:bg-white transition-all"
                  >
                    Talent Acquisition
                  </Link>
                </div>
              )}

     

              {/* Other Links Mobile */}
              <Link
                to="#"
                className="font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 py-3 px-3 rounded-lg transition-all"
              >
                Our Work
              </Link>
              <Link
                to="/careers"
                className="font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 py-3 px-3 rounded-lg transition-all"
              >
                Careers
              </Link>
              <Link
                to="/contactUs"
                className="font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 py-3 px-3 rounded-lg transition-all"
              >
                Contact Us
              </Link>
              <Link
                to="/about"
                className="font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 py-3 px-3 rounded-lg transition-all"
              >
                About Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
