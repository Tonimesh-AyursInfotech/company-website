import React, { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useCounter from "../hooks/useCounter";

const HeroSection = () => {
  const sectionRef = useRef(null);
  const [startCount, setStartCount] = useState(false);

  // ✅ Intersection Observer A: trigger counters once
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStartCount(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // ✅ Animated counters
  const clients = useCounter(35, 1500, startCount);
  const associates = useCounter(300, 1500, startCount);
  const integrations = useCounter(100, 1500, startCount);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
          alt="Office background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-sky-700/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8">
            <svg
              className="w-4 h-4 text-white"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
            </svg>
            <span className="text-white text-sm font-medium">AI EDGE</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-16 leading-tight">
            Expert IT Services for an AI-First World
          </h1>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Stat 1 */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="h-1 w-12 bg-[var(--brand-prim)] rounded"></div>
            </div>
            <div className="text-5xl font-bold text-white mb-2">{clients}+</div>
            <div className="text-gray-300 text-lg">Global Clientele</div>
          </div>

          {/* Stat 2 */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="h-1 w-12 bg-[var(--brand-prim)] rounded"></div>
            </div>
            <div className="text-5xl font-bold text-white mb-2">
              {associates}+
            </div>
            <div className="text-gray-300 text-lg">Associates</div>
          </div>

          {/* Stat 3 */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="h-1 w-12 bg-[var(--brand-prim)] rounded"></div>
            </div>
            <div className="text-5xl font-bold text-white mb-2">
              {integrations}+
            </div>
            <div className="text-gray-300 text-lg">Integrations</div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex gap-3 mb-16">
          <button className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Bottom Section */}
        <div className="grid md:grid-cols-2 gap-8 items-end">
          {/* Description */}
          <div>
            <p className="text-gray-300 text-lg leading-relaxed">
              Leverage our deep expertise in AI technologies to automate the
              next best action for your customer needs
            </p>
          </div>

          {/* Tabs */}
          <div className="flex gap-6">
            <button className="text-white font-medium pb-2 border-b-2 border-blue-500">
              AI Edge
            </button>
            <button className="text-gray-400 font-medium pb-2 border-b-2 border-transparent hover:text-white hover:border-gray-500 transition-colors">
              Cloud First
            </button>
            <button className="text-gray-400 font-medium pb-2 border-b-2 border-transparent hover:text-white hover:border-gray-500 transition-colors">
              Data Driven
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
