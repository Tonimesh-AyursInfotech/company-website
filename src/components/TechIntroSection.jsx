import React from "react";

export default function TechIntroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-blue-500 via-blue-900 to-blue-500">
      {/* Background Pattern - Matching GetInTouch */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Subtle Radial Glow */}
      <div className="absolute inset-0 bg-gradient-radial from-blue-600/10 via-transparent to-transparent" />

      {/* Soft Floating Accent Shape */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-16 md:py-20 lg:py-24">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-white mb-5 md:mb-6 leading-tight">
            Building the Future with Cutting-Edge Technology
          </h2>

          {/* Subtext */}
          <p className="text-base sm:text-lg md:text-xl text-blue-100/90 max-w-3xl mx-auto leading-relaxed font-normal">
            With a robust stack of modern tools and frameworks, we build
            reliable, scalable, and future-ready solutions tailored to your
            business needs.
          </p>

          {/* Decorative Accent Line */}
          <div className="flex items-center justify-center gap-3 mt-6 md:mt-8">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent" />
            <div className="w-2 h-2 rounded-full bg-blue-400/60 shadow-sm shadow-blue-400/30" />
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
