import React, { useState, useEffect } from "react";
import {
  CheckCircle,
  Target,
  Eye,
  Heart,
  Star,
  Users,
  Globe,
  Zap,
} from "lucide-react";
import GetInTouch from "./GetInTouch";

const AboutUsPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const companyValues = [
    {
      icon: Target,
      title: "Our Vision",
      description:
        "To be the leading global IT services provider, driving digital transformation and innovation across industries through cutting-edge technology solutions.",
      gradient: "from-blue-500 to-indigo-600",
    },
    {
      icon: Eye,
      title: "Our Mission",
      description:
        "Empower businesses with transformative technology solutions that enhance efficiency, drive growth, and create sustainable competitive advantages in the digital era.",
      gradient: "from-purple-500 to-pink-600",
    },
    {
      icon: Heart,
      title: "Our Philosophy",
      description:
        "We believe in building lasting partnerships through trust, transparency, and exceptional service delivery that exceeds client expectations.",
      gradient: "from-green-500 to-emerald-600",
    },
    {
      icon: Star,
      title: "Our Motto",
      description:
        "Innovate. Transform. Succeed. Turning technological challenges into business opportunities through expertise and dedication.",
      gradient: "from-orange-500 to-red-600",
    },
  ];

  const stats = [
    {
      number: "35+",
      label: "Global Clientele",
      icon: Globe,
    },
    {
      number: "300+",
      label: "Associates",
      icon: Users,
    },
    {
      number: "100+",
      label: "Integrations",
      icon: Zap,
    },
  ];

  const companyEvents = [
    "/api/placeholder/400/300?text=Team+Event+2024",
    "/api/placeholder/400/300?text=Tech+Conference",
    "/api/placeholder/400/300?text=Office+Celebration",
    "/api/placeholder/400/300?text=Client+Meeting",
    "/api/placeholder/400/300?text=Training+Session",
    "/api/placeholder/400/300?text=Company+Retreat",
    "/api/placeholder/400/300?text=Innovation+Day",
    "/api/placeholder/400/300?text=Team+Building",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % companyEvents.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [companyEvents.length]);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-[var(--brand-prim)] min-h-[60vh] flex items-center">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        {/* Soft Floating Accent Shape */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block mb-6">
              <span className="text-sm font-semibold tracking-wider text-blue-300 uppercase bg-[var(--brand-prim)]/50 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-700/30">
                About Us
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Ayurs Infotech
            </h1>

            <p className="text-xl md:text-2xl text-blue-100/90 max-w-3xl mx-auto leading-relaxed">
              An IT services company specializing in providing top-notch
              solutions that drive business growth and digital transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              WHO WE ARE
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
              Ayurs Infotech is a global IT services and consulting company that
              empowers organizations through innovative technology solutions. We
              specialize in web development, mobile applications, data
              analytics, and IT talent acquisition, delivering comprehensive
              services that drive digital transformation and business growth.
            </p>

            {/* Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center p-6">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-4 mx-auto">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-lg text-gray-600 font-medium">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 md:p-12 border border-blue-100">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center">
              With strategic partnerships and a focus on innovation, we craft
              technology tailored to your goals. Our expertise in AI, Data, and
              Cloud technologies enables us to build future-ready strategies
              that adapt to your evolving business needs and drive lasting
              impact.
            </p>
          </div>
        </div>
      </section>

      {/* Company Values Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Guided by strong principles and a clear vision, we deliver
              exceptional value and build lasting relationships with our
              clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
                >
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${value.gradient} flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Company Events Slider */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Company Culture
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Celebrating innovation, collaboration, and success through
              memorable moments and team events.
            </p>
          </div>

          {/* Image Slider */}
          <div className="relative">
            <div className="flex space-x-6 animate-marquee">
              {companyEvents.concat(companyEvents).map((event, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-80 h-60 rounded-2xl overflow-hidden shadow-lg group"
                >
                  <img
                    src={event}
                    alt={`Company Event ${index + 1}`}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500 rounded-2xl" />
                </div>
              ))}
            </div>

            {/* Gradient Overlays */}
            <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10" />
            <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10" />
          </div>

          <style jsx>{`
            @keyframes marquee {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
            .animate-marquee {
              animation: marquee 30s linear infinite;
            }
            .animate-marquee:hover {
              animation-play-state: paused;
            }
          `}</style>
        </div>
      </section>

      {/* CTA Section
      <section className="py-20 bg-gradient-to-br from-blue-900 to-indigo-900">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join Us on Our Journey
          </h2>
          <p className="text-xl text-blue-100/90 mb-8 max-w-2xl mx-auto">
            Ready to transform your business with our expert IT solutions? 
            Let's build something amazing together.
          </p>
          <button className="inline-flex items-center gap-3 bg-white text-blue-900 font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 group">
            Get In Touch With Our Team
            <Users className="w-5 h-5 transform group-hover:scale-110 transition-transform duration-300" />
          </button>
        </div>
      </section> */}

      <GetInTouch />
    </div>
  );
};

export default AboutUsPage;
