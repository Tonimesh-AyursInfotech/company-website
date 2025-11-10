import React, { useState } from "react";
import { Code, Smartphone, BarChart3, Users, ArrowRight } from "lucide-react";

export const OurServices = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    {
      id: 1,
      icon: Code,
      title: "Web Development",
      subtitle: "Build Your Digital Presence",
      description:
        "Create high-performance, visually refined websites that amplify your brand and deliver real business impact.",
      gradient: "from-blue-600 to-indigo-700",
    },
    {
      id: 2,
      icon: Smartphone,
      title: "App Development",
      subtitle: "Innovate at Your Fingertips",
      description:
        "Design and build intuitive mobile and desktop apps that offer seamless, user-focused experiences.",
      gradient: "from-indigo-600 to-purple-700",
    },
    {
      id: 3,
      icon: BarChart3,
      title: "Data Analytics",
      subtitle: "Transform Data into Decisions",
      description:
        "Unlock insights with advanced analytics. Collect, analyze, and visualize data to power strategic growth.",
      gradient: "from-blue-700 to-cyan-600",
    },
    {
      id: 4,
      icon: Users,
      title: "IT Talent Acquisition",
      subtitle: "Build Your Winning Team",
      description:
        "Source expert tech professionals aligned with your vision, ensuring successful project execution.",
      gradient: "from-indigo-700 to-blue-800",
    },
  ];

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230E1E46' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold tracking-wider text-blue-600 uppercase bg-blue-100 px-4 py-2 rounded-full">
              What We Offer
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Our Services
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Empowering businesses with cutting-edge technology solutions and
            expert talent
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {services.map((service) => {
            const Icon = service.icon;
            const isHovered = hoveredCard === service.id;

            return (
              <div
                key={service.id}
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className="group relative"
              >
                {/* Card Background with Gradient Border Effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`}
                />

                {/* Main Card */}
                <div className="relative bg-white rounded-2xl p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-transparent h-full flex flex-col">
                  {/* Icon Container */}
                  <div className="mb-6">
                    <div
                      className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500 shadow-lg`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col">
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-indigo-600 transition-all duration-300">
                      {service.title}
                    </h3>

                    <p className="text-base font-semibold text-gray-700 mb-4 tracking-wide">
                      {service.subtitle}
                    </p>

                    <p className="text-gray-600 leading-relaxed mb-6 flex-1">
                      {service.description}
                    </p>

                    {/* Learn More Link */}
                    <div className="flex items-center text-blue-600 font-semibold group/link">
                      <span className="group-hover:text-indigo-600 transition-colors duration-300">
                        Learn More
                      </span>
                      <ArrowRight
                        className={`w-5 h-5 ml-2 transform transition-transform duration-300 ${
                          isHovered ? "translate-x-2" : ""
                        }`}
                      />
                    </div>
                  </div>

                  {/* Decorative Corner Element */}
                  <div
                    className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${
                      service.gradient
                    } opacity-5 rounded-bl-full transition-opacity duration-500 ${
                      isHovered ? "opacity-10" : ""
                    }`}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6 text-lg">
            Ready to transform your business with our expertise?
          </p>
          <button className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 group">
            Get Started Today
            <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>

      {/* Subtle Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
    </section>
  );
};

export default OurServices;
