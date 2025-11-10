import React, { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="text-2xl font-bold tracking-tight gradient-text">
            AYURS INFOTECH
            <div className="text-sm mt-[-7px] tracking-wider  gradient-text">
              Create Your Identity
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Product Dropdown */}
            <div className="relative">
              <button
                onClick={() => setProductOpen(!productOpen)}
                className="flex items-center font-medium text-gray-900 transition-colors"
              >
                Product
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {productOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-10">
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-500 hover:bg-blue-50"
                  >
                    Product 1
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-500 hover:bg-blue-50"
                  >
                    Product 2
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-500 hover:bg-blue-50"
                  >
                    Product 3
                  </a>
                </div>
              )}
            </div>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center font-medium text-gray-900 transition-colors"
              >
                Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-10">
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-500 hover:bg-blue-50"
                  >
                    Service 1
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-500 hover:bg-blue-50"
                  >
                    Service 2
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-500 hover:bg-blue-50"
                  >
                    Service 3
                  </a>
                </div>
              )}
            </div>

            {/* Other Links */}
            <a href="#" className="font-medium text-gray-900 transition-colors">
              Our Work
            </a>
            <a href="#" className="font-medium text-gray-900 transition-colors">
              Blog
            </a>
            <a href="#" className="font-medium text-gray-900 transition-colors">
              Contact Us
            </a>
            <a href="#" className="font-medium text-gray-900 transition-colors">
              About Us
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-blue-500 hover:text-blue-500"
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
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-3">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center justify-between font-medium text-gray-900 py-2"
              >
                Services
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {servicesOpen && (
                <div className="pl-4 space-y-2">
                  <a href="#" className="block text-gray-500 py-1">
                    Service 1
                  </a>
                  <a href="#" className="block text-gray-500 py-1">
                    Service 2
                  </a>
                  <a href="#" className="block text-gray-500 py-1">
                    Service 3
                  </a>
                </div>
              )}

              <button
                onClick={() => setProductOpen(!productOpen)}
                className="flex items-center justify-between font-medium text-gray-900 py-2"
              >
                Product
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    productOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {productOpen && (
                <div className="pl-4 space-y-2">
                  <a href="#" className="block text-gray-500 py-1">
                    Product 1
                  </a>
                  <a href="#" className="block text-gray-500 py-1">
                    Product 2
                  </a>
                  <a href="#" className="block text-gray-500 py-1">
                    Product 3
                  </a>
                </div>
              )}

              <a href="#" className="font-medium text-gray-900 py-2">
                Our Work
              </a>
              <a href="#" className="font-medium text-gray-900 py-2">
                Blog
              </a>
              <a href="#" className="font-medium text-gray-900 py-2">
                Contact Us
              </a>
              <a href="#" className="font-medium text-gray-900 py-2">
                About Us
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
