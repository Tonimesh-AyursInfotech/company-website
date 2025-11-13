import React, { useState } from "react";
import { Stethoscope, Users, Shield, Calendar, Pill, Activity, Video, ArrowRight } from "lucide-react";
import GetInTouch from "../GetInTouch";
import { useNavigate } from "react-router-dom";

const PunchDiabetesPage = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const nav = useNavigate();

  const features = [
    {
      id: 1,
      icon: Users,
      title: "Patient App",
      description: "Easy sign-in with phone number, book appointments, order medicines, and schedule lab tests with just a few taps.",
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      id: 2,
      icon: Stethoscope,
      title: "Doctor App",
      description: "Doctors registered via admin panel can manage appointments, view patient history, and provide remote consultations.",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      id: 3,
      icon: Shield,
      title: "Admin Panel",
      description: "Comprehensive management system to handle doctors, appointments, medicine inventory, and lab registrations.",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      id: 4,
      icon: Video,
      title: "Video Consultations",
      description: "Seamless video call appointments for remote healthcare delivery and follow-up consultations.",
      gradient: "from-orange-500 to-red-600"
    }
  ];

  const capabilities = [
    {
      icon: Calendar,
      title: "Appointment Management",
      description: "Book, reschedule, and manage appointments for patients and doctors efficiently."
    },
    {
      icon: Pill,
      title: "Medicine Inventory",
      description: "Complete medicine stock management with automated ordering and inventory tracking."
    },
    {
      icon: Activity,
      title: "Lab Integration",
      description: "Register and manage labs, book tests, and track results through the platform."
    }
  ];

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

        {/* Subtle Radial Glow */}
        <div className="absolute inset-0 bg-gradient-radial from-blue-600/10 via-transparent to-transparent" />

        {/* Soft Floating Accent Shape */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="text-sm font-semibold w-fit flex items-center text-center mb-4 m-auto gap-1 tracking-wider text-blue-200 bg-[var(--brand-prim)]/50 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
              <span className="text-sm font-medium text-blue-200">Our Product</span>
            </div>
            
            <h1 className="text-4xl md:text-4xl lg:text-4xl font-bold text-white mb-6 leading-tight">
              Comprehensive Diabetes Care Solution
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100/90 max-w-3xl mx-auto leading-relaxed mb-8">
              Revolutionizing diabetes management with integrated patient, doctor, and admin platforms for seamless healthcare delivery.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="inline-flex items-center gap-3 bg-transparent text-white font-semibold px-8 py-4 border border-white rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 group"
                onClick={() => {
                  nav("/contactUs");
                }}>
                Request a Demo
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* What is Punch Diabetes Section */}
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
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What is Punch Diabetes?
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 leading-tight">
                Integrated Healthcare Platform for Diabetes Management
              </p>
              <div className="text-lg md:text-xl text-gray-600 leading-relaxed space-y-6">
                <p>
                  A comprehensive healthcare solution featuring patient and doctor mobile applications 
                  with a powerful admin panel for complete diabetes care management.
                </p>
                <p className="text-xl font-semibold text-blue-400">
                  Seamless appointment booking, medicine ordering, and video consultations in one platform.
                </p>
                <p>
                  Patients can easily sign in with their phone numbers, book video appointments with specialists, 
                  order medications, and schedule lab tests - all through an intuitive mobile interface.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-sm font-bold flex items-center gap-1 tracking-wider text-black bg-[var(--brand-prim)]/25 px-4 py-2 rounded-full border border-white/30">
                Platform Features
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Complete Healthcare Ecosystem
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Three integrated platforms working together to provide comprehensive diabetes care management.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => {
              const Icon = feature.icon;
              const isHovered = hoveredCard === feature.id;

              return (
                <div
                  key={feature.id}
                  onMouseEnter={() => setHoveredCard(feature.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className="group relative"
                >
                  {/* Animated Gradient Border */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`}
                  />

                  {/* Main Card */}
                  <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-transparent h-full flex flex-col group-hover:-translate-y-2">
                    
                    {/* Icon with Gradient */}
                    <div className="flex items-center justify-between mb-6">
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500 shadow-lg`}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>

                    {/* Hover Indicator */}
                    <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r ${feature.gradient} transition-all duration-500 group-hover:w-3/4`} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Key Capabilities Section */}
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
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Key Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Powerful features designed to streamline diabetes care management for patients, doctors, and administrators.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <div key={index} className="text-center p-6">
                  <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{capability.title}</h3>
                  <p className="text-gray-600">{capability.description}</p>
                </div>
              );
            })}
          </div>

    
        </div>
      </section>

      <GetInTouch />
    </div>
  );
};

export default PunchDiabetesPage;