// WhatWeDoDropdown.jsx
import React from "react";

const WhatWeDoDropdown = () => {
  return (
    <div className="absolute top-full left-0 mt-5 w-[800px] bg-white rounded-lg shadow-xl z-50 border border-gray-200">
      {/* Header Section */}
      <div className="p-6 border-b border-gray-100">
        {/* <h2 className="text-2xl font-bold text-gray-900 mb-2">What We Do</h2> */}
        <p className="text-gray-600 text-sm">
         Your partner in creating a bold digital identity.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6 p-6">
        {/* Column 1 - Financial Services */}
        <div className="space-y-4">
          <h3 className="font-semibold text-gray-900 text-lg">Services</h3>
          <ul className="space-y-2 text-sm">
            <li className="text-gray-600 hover:text-blue-600 cursor-pointer">Ecommerce Solutions</li>
            <li className="text-gray-600 hover:text-blue-600 cursor-pointer">Health Care Solutions</li>
            <li className="text-gray-600 hover:text-blue-600 cursor-pointer">Product Devlopment
                <li className="ps-2"> - EZ Box Solution</li>
                <li className="ps-2"> - Punch Diabetes</li>

            </li>
            <li className="text-gray-600 hover:text-blue-600 cursor-pointer">Custom Solutions</li>
            <li className="text-gray-600 hover:text-blue-600 cursor-pointer">Data & Analytics</li>
            <li className="text-gray-600 hover:text-blue-600 cursor-pointer">Digital Services</li>
            <li className="text-gray-600 hover:text-blue-600 cursor-pointer">Enterprise AI</li>
          </ul>
        </div>

        <div className="space-y-6">
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900 text-lg">Expertise</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-600 hover:text-blue-600 cursor-pointer">Web Applications</li>
              <li className="text-gray-600 hover:text-blue-600 cursor-pointer">App Development</li>
              <li className="text-gray-600 hover:text-blue-600 cursor-pointer">Data Security</li>

              <li className="text-gray-600 hover:text-blue-600 cursor-pointer">Our development services are VAT-approved and built with a strong SEO foundation — ensuring compliance, visibility, and measurable digital impact</li>

            </ul>
          </div>

      </div>
    </div>
    </div>
  );
};

export default WhatWeDoDropdown;