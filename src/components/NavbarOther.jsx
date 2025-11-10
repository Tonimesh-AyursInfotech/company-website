import { useState } from "react";
// import a from "next/a";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
  const [openWhat, setOpenWhat] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-[#071232]/95 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img
            src="/logo-dark-gradient.svg"
            alt="Logo"
            className="h-8 w-auto"
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-white">
          {/* WHAT WE DO - MEGA DROPDOWN */}
          <div
            className="relative"
            onMouseEnter={() => setOpenWhat(true)}
            onMouseLeave={() => setOpenWhat(false)}
          >
            <button className="flex items-center gap-1 hover:text-gray-300">
              What we do
              <ChevronDown
                className={`h-4 w-4 transition-transform ${
                  openWhat ? "rotate-180" : ""
                }`}
              />
            </button>

            {openWhat && (
              <div className="absolute left-0 top-full mt-3 w-[900px] bg-[#071232] backdrop-blur-xl border border-white/15 rounded-xl shadow-2xl p-8 text-white animate-fadeIn">
                <div className="grid grid-cols-4 gap-10">
                  {/* Column 1 */}
                  <div>
                    <h3 className="text-xl font-semibold">What we do</h3>
                    <p className="text-gray-400 mt-2 leading-relaxed">
                      Your trusted partner for Salesforce, Lending, and Cloud
                      solutions.
                    </p>
                  </div>

                  {/* Column 2 – Industries */}
                  <div>
                    <h3 className="text-gray-400 mb-3 font-medium">
                      Industries
                    </h3>
                    <a
                      href="/industries/financial-services"
                      className="block py-1 hover:text-blue-400"
                    >
                      Financial Services
                    </a>
                  </div>

                  {/* Column 3 – Capabilities */}
                  <div>
                    <h3 className="text-gray-400 mb-3 font-medium">
                      Capabilities
                    </h3>
                    <div className="flex flex-col space-y-1">
                      <a
                        href="/capabilities/salesforce"
                        className="hover:text-blue-400"
                      >
                        Salesforce
                      </a>
                      <a
                        href="/capabilities/symphonix-by-q2"
                        className="hover:text-blue-400"
                      >
                        Symphonix by Q2
                      </a>
                      <a
                        href="/capabilities/data-analytics"
                        className="hover:text-blue-400"
                      >
                        Data & Analytics
                      </a>
                      <a
                        href="/capabilities/quality-engineering"
                        className="hover:text-blue-400"
                      >
                        Quality Engineering
                      </a>
                      <a
                        href="/capabilities/digital-services"
                        className="hover:text-blue-400"
                      >
                        Digital Services
                      </a>
                      <a
                        href="/capabilities/cloud-apps"
                        className="hover:text-blue-400"
                      >
                        Cloud Apps
                      </a>
                      <a
                        href="/capabilities/enterprise-ai"
                        className="hover:text-blue-400"
                      >
                        Enterprise AI
                      </a>
                    </div>
                  </div>

                  {/* Column 4 – Others */}
                  <div>
                    <h3 className="text-gray-400 mb-3 font-medium">Other</h3>
                    <div className="flex flex-col space-y-1">
                      <a
                        href="/capabilities/managed-services"
                        className="hover:text-blue-400"
                      >
                        Managed Services
                      </a>
                      <a
                        href="/capabilities/doclooper"
                        className="hover:text-blue-400"
                      >
                        Doc Looper
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Simple as */}
          <a href="/insights" className="hover:text-gray-300">
            Insights
          </a>

          <div className="relative">
            <a href="/company" className="hover:text-gray-300">
              Company
            </a>
          </div>

          <a href="/company/careers" className="hover:text-gray-300">
            Careers
          </a>
        </div>

        {/* Button */}
        <a
          href="/contact-us"
          className="hidden md:inline-block bg-gradient-to-r from-indigo-400 via-blue-600 to-teal-500 px-5 py-2 rounded-md text-white border border-white/20"
        >
          Get in Touch
        </a>

        {/* Mobile Icon */}
        <button className="md:hidden text-white text-2xl">☰</button>
      </div>
    </nav>
  );
}
