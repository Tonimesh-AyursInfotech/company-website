import React, { useState } from "react";
import { ChevronDown, ChevronUp, PhilippinePesoIcon, Phone } from "lucide-react";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const whatWeDoLinks = [
    { label: "Web Development", href: "#web-dev" },
    { label: "Mobile Apps", href: "#mobile" },
    { label: "UI/UX Design", href: "#design" },
    { label: "Consulting", href: "#consulting" },
  ];

  const whoWeAreLinks = [
    { label: "About Us", href: "#about" },
    { label: "Our Team", href: "#team" },
    { label: "Careers", href: "#careers" },
    { label: "Contact", href: "#contact" },
  ];

  const handleMouseEnter = (dropdown) => {
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <nav className="bg-white ">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold tracking-tight">
            AYURS INFOTECH
            <div className="text-sm mt-[-7px]">Create Your Identity</div>
          </div>

          {/* <div className="text-2xl font-bold tracking-tight overflow-hidden">
            AYURS INFOTECH
            <div className="text-sm mt-[-7px] overflow-hidden">
              <div className="animate-slideInFromLeft">
                Create Your Identity
              </div>
            </div>
          </div> */}

          {/* Navigation Links */}
          <div className="flex items-center gap-8">
            {/* What We Do Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("whatWeDo")}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center gap-1 text-gray-700 hover:text-gray-900 transition-colors">
                What We Do
              {activeDropdown === "whatWeDo" ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>

              {activeDropdown === "whatWeDo" && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg py-2 z-50">
                  {whatWeDoLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Who We Are Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("whoWeAre")}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center gap-1 text-gray-700 hover:text-gray-900 transition-colors">
                Who We Are
                {activeDropdown === "whoWeAre" ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>

              {activeDropdown === "whoWeAre" && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg py-2 z-50">
                  {whoWeAreLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Regular Links */}
            <a
              href="#company"
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              Insights
            </a>
            <a
              href="#pricing"
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              Careers
            </a>
            {/* <a
              href="#help"
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              Help
            </a> */}

            {/* Book a Call Button */}
          </div>
          {/* <button className="bg-blue-600 text-white px-6 py-2  hover:bg-blue-700 transition-colors font-medium flex items-center justify-between ">
           <Phone size={16} className="me-2"/> Book a Call 
          </button> */}

           <button
      className="
        bg-blue-600 text-white px-6 py-2 font-medium 
        flex items-center justify-between 
        transition-all duration-300 
      
        group
      "
    >
      <Phone
        size={16}
    className="me-2 group-hover:[animation:vibrate_0.2s_linear_infinite]"
      />
      Book a Call
    </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


  // hover:bg-red-600 hover:text-black hover:underline hover:underline-offset-4 hover:decoration-blue-500
