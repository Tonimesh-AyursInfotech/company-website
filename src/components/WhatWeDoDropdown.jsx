import Link from "next/link";
import { useState } from "react";

export default function WhatWeDoDropdown() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* Trigger Button */}
      <button className="flex items-center gap-1 text-white hover:text-gray-300">
        What we do
        <svg
          className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="white"
        >
          <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z" />
        </svg>
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute left-0 top-full mt-2 w-[900px] bg-[#071232] backdrop-blur-xl border border-white/15 rounded-lg shadow-xl p-8 text-white">
          <div className="grid grid-cols-3 gap-10">
            {/* Column 1 */}
            <div>
              <h3 className="text-xl font-semibold">What we do</h3>
              <p className="text-gray-400 mt-2">
                Your trusted partner for Salesforce, Lending, and Cloud
                solutions.
              </p>
            </div>

            {/* Column 2 – Industries */}
            <div>
              <h3 className="text-gray-400 mb-3">Industries</h3>

              <Link
                href="/industries/financial-services"
                className="block text-white hover:text-blue-400 py-1"
              >
                Financial Services
              </Link>
            </div>

            {/* Column 3 – Capabilities */}
            <div>
              <h3 className="text-gray-400 mb-3">Capabilities</h3>

              <div className="flex flex-col space-y-1">
                <Link
                  href="/capabilities/salesforce"
                  className="hover:text-blue-400"
                >
                  Salesforce
                </Link>
                <Link
                  href="/capabilities/symphonix-by-q2"
                  className="hover:text-blue-400"
                >
                  Symphonix by Q2
                </Link>
                <Link
                  href="/capabilities/data-analytics"
                  className="hover:text-blue-400"
                >
                  Data & Analytics
                </Link>
                <Link
                  href="/capabilities/quality-engineering"
                  className="hover:text-blue-400"
                >
                  Quality Engineering
                </Link>
                <Link
                  href="/capabilities/digital-services"
                  className="hover:text-blue-400"
                >
                  Digital Services
                </Link>
                <Link
                  href="/capabilities/cloud-apps"
                  className="hover:text-blue-400"
                >
                  Cloud Apps
                </Link>
                <Link
                  href="/capabilities/enterprise-ai"
                  className="hover:text-blue-400"
                >
                  Enterprise AI
                </Link>
              </div>
            </div>

            {/* Column 4 – Other */}
            <div>
              <h3 className="text-gray-400 mb-3">Other</h3>

              <div className="flex flex-col space-y-1">
                <Link
                  href="/capabilities/managed-services"
                  className="hover:text-blue-400"
                >
                  Managed Services
                </Link>
                <Link
                  href="/capabilities/doclooper"
                  className="hover:text-blue-400"
                >
                  Doc Looper
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
