import React from "react";
import { Linkedin, Facebook, Youtube, ChevronUp } from "lucide-react";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-50 pt-12 pb-6">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Logo Section */}
          <div className="lg:col-span-1">
            <img
              src="https://via.placeholder.com/200x80/86c540/ffffff?text=Cillo+Logo"
              alt="Ayush Infotech"
              className="h-16 w-auto"
            />
          </div>

          {/* Company Section */}
          <div>
            <h3 className="text-gray-900 font-semibold text-lg mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-green-500 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-green-500 transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-green-500 transition-colors"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-green-500 transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Section */}
          <div>
            <h3 className="text-gray-900 font-semibold text-lg mb-4">
              Resources
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-green-500 transition-colors"
                >
                  Our Work
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-green-500 transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-green-500 transition-colors"
                >
                  Site Map
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-gray-900 font-semibold text-lg mb-4">
              Contact
            </h3>
            <div className="space-y-3 text-gray-600">
              <p className="text-sm leading-relaxed">
                L-31, FF, L Block, Mahavir Enclave
                <br />
                New Delhi, India
              </p>
              <p>
                <a
                  href="tel:+91 9871 32 9458"
                  className="hover:text-green-500 transition-colors"
                >
                  +91 9871 32 9458
                </a>
              </p>
              <p>
                <a
                  href="#"
                  className="hover:text-green-500 transition-colors underline"
                >
                  Send us a message
                </a>
              </p>
              <div className="flex gap-3 pt-2">
                <a
                  href="#"
                  className="text-green-500 hover:text-green-600 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="text-green-500 hover:text-green-600 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="text-green-500 hover:text-green-600 transition-colors"
                  aria-label="X"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-green-500 hover:text-green-600 transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Solution Section */}
          <div className="border-t border-gray-200 pt-6 pb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              <div className="lg:col-span-1"></div>
              <div>
                <h3 className="text-gray-900 font-semibold text-lg mb-4">
                  Solution
                </h3>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-green-500 transition-colors"
                    >
                      Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-green-500 transition-colors"
                    >
                      Case Studies
                    </a>
                  </li>
                </ul>
              </div>
              <div className="lg:col-span-3"></div>
            </div>
          </div>

          {/* Locations Section */}
          {/* <div>
            <h3 className="text-gray-900 font-semibold text-lg mb-4">
              Locations
            </h3>
            <div className="space-y-4 text-gray-600 text-sm">
              <div>
                <p className="font-semibold text-gray-900 mb-1">
                  India Registered Offices
                </p>
                <p className="leading-relaxed">
                  Cillo AutomationFactory.
                  <br />
                  C-56/6, 2nd Floor, Sector 62,
                  <br />
                  Noida, U.P - 201309
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">
                  USA Registered Office
                </p>
                <p className="leading-relaxed">
                  200 South Executive Drive
                  <br />
                  Suite 101 Brookfield, WI 53005
                </p>
              </div>
            </div>
          </div> */}

          {/* Solution Section - Now spanning full width below */}
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 pt-6">
          <p className="text-gray-600 text-sm">© 2025 . All Rights Reserved.</p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-3 rounded shadow-lg transition-colors duration-200"
        aria-label="Scroll to top"
      >
        <ChevronUp className="w-5 h-5" />
      </button>
    </footer>
  );
};

export default Footer;
