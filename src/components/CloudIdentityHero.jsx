import React from "react";

export default function CloudIdentityHero() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-blue-50 via-blue-100/50 to-indigo-50">
      {/* Subtle Grid Pattern Background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230E1E46' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Radial Gradient Overlays */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-radial from-blue-200/20 via-transparent to-transparent" />

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-16 md:py-24 lg:py-32">
        <div className="max-w-5xl mx-auto text-center">
          {/* Premium Card Container */}
          <div className="relative">
            {/* Glassmorphic Background */}
            <div className="absolute inset-0 bg-white/60 backdrop-blur-md rounded-2xl md:rounded-3xl shadow-2xl shadow-blue-900/10" />

            {/* Border Glow Effect */}
            <div className="absolute inset-0 rounded-2xl md:rounded-3xl bg-gradient-to-br from-blue-400/20 via-transparent to-indigo-400/20" />

            {/* Content */}
            <div className="relative px-6 py-10 md:px-12 md:py-14 lg:px-16 lg:py-20">
              {/* Subtitle Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-blue-500/10 backdrop-blur-sm rounded-full border border-blue-300/40 shadow-sm">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                <span className="text-xs sm:text-sm font-medium text-blue-700 tracking-wide">
                  Enterprise Cloud Solutions
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-5 md:mb-6 leading-tight px-2">
                Building Your Cloud Identity,
                <br />
                <span className="bg-[var(--brand-prim)] bg-clip-text text-transparent">
                  One Innovation at a Time
                </span>
              </h1>

              {/* Subheading */}
              <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto font-medium leading-relaxed px-2">
                Empowering businesses with scalable, secure, and intelligent
                cloud infrastructure that transforms vision into digital
                reality.
              </p>

              {/* Decorative Accent Line */}
              <div className="flex items-center justify-center gap-3 mt-6 md:mt-8">
                <div className="w-12 sm:w-16 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
                <div className="w-2 h-2 rounded-full bg-blue-500 shadow-sm shadow-blue-500/50" />
                <div className="w-12 sm:w-16 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
              </div>
            </div>
          </div>

          {/* Bottom Floating Elements - Hidden on mobile */}
          <div className="hidden md:flex items-center justify-center gap-6 lg:gap-8 mt-10 lg:mt-12 flex-wrap">
            <div className="flex items-center gap-2 text-sm text-slate-600 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
              <svg
                className="w-5 h-5 text-blue-600 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="font-medium whitespace-nowrap">
                Trusted by Enterprises
              </span>
            </div>

            <div className="flex items-center gap-2 text-sm text-slate-600 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
              <svg
                className="w-5 h-5 text-blue-600 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              <span className="font-medium whitespace-nowrap">
                Lightning Fast Deployment
              </span>
            </div>

            <div className="flex items-center gap-2 text-sm text-slate-600 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
              <svg
                className="w-5 h-5 text-blue-600 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              <span className="font-medium whitespace-nowrap">
                Bank-Grade Security
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Smooth Transition Fade - Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
}
