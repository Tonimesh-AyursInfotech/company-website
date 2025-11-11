import React, { useState } from "react";
import { Users, ArrowRight, CheckCircle, Clock, Search, Zap, Shield } from "lucide-react";
import GetInTouch from "../GetInTouch";

const ITTalentAcquisitionPage = () => {
  const [hoveredStep, setHoveredStep] = useState(null);

  const methodologySteps = [
    {
      id: 1,
      title: "Talent Strategy",
      description: "Understand your technical requirements and define the ideal candidate profile for your needs.",
      icon: Clock,
      gradient: "from-indigo-500 to-blue-500"
    },
    {
      id: 2,
      title: "Sourcing & Screening",
      description: "Leverage our extensive network and advanced screening techniques to identify top candidates.",
      icon: Search,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      id: 3,
      title: "Technical Assessment",
      description: "Comprehensive technical evaluations to ensure candidates meet your skill requirements.",
      icon: CheckCircle,
      gradient: "from-green-500 to-emerald-500"
    },
    {
      id: 4,
      title: "Interview Coordination",
      description: "Manage the entire interview process and facilitate smooth communication between all parties.",
      icon: Users,
      gradient: "from-orange-500 to-red-500"
    },
    {
      id: 5,
      title: "Cultural Fit Analysis",
      description: "Evaluate candidate alignment with your company culture and team dynamics.",
      icon: Shield,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      id: 6,
      title: "Onboarding Support",
      description: "Ensure successful integration of new hires with comprehensive onboarding assistance.",
      icon: Zap,
      gradient: "from-teal-500 to-cyan-500"
    }
  ];

  const features = [
    {
      title: "Permanent Hiring",
      description: "Find the perfect full-time team members for your long-term growth"
    },
    {
      title: "Contract Staffing",
      description: "Access skilled professionals for project-based or temporary needs"
    },
    {
      title: "Executive Search",
      description: "Recruit top-level technology leaders and executives"
    },
    {
      title: "Team Augmentation",
      description: "Scale your existing teams with specialized talent as needed"
    },
    {
      title: "Technical Screening",
      description: "Comprehensive assessment of technical skills and capabilities"
    },
    {
      title: "Market Insights",
      description: "Stay informed about salary trends and talent availability"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-gradient-to-br from-indigo-900 via-blue-800 to-indigo-900 min-h-[60vh] flex items-center">
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
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl" />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-indigo-800/50 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-indigo-700/30">
              <Users className="w-4 h-4 text-indigo-300" />
              <span className="text-sm font-medium text-indigo-200">IT Talent Acquisition</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              IT Talent Acquisition
            </h1>
            
            <p className="text-xl md:text-2xl text-indigo-100/90 max-w-3xl mx-auto leading-relaxed mb-8">
              Source expert tech professionals aligned with your vision, ensuring successful project execution.
            </p>

            {/* <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="inline-flex items-center gap-3 bg-white text-indigo-900 font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 group">
                Find Your Talent
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button className="inline-flex items-center gap-3 bg-transparent text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 border-2 border-white/30 hover:border-white/60 backdrop-blur-sm">
                View Candidates
              </button>
            </div> */}
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-indigo-50/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Build Your Winning Team
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Connect with top-tier technology professionals who bring the skills, experience, 
              and cultural fit needed to drive your projects to success.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-sm font-semibold tracking-wider text-indigo-600 uppercase bg-indigo-100 px-4 py-2 rounded-full">
                Our Recruitment Process
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Strategic Talent Acquisition
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We follow a comprehensive approach to identify, assess, and secure the best technology talent for your organization.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {methodologySteps.map((step) => {
              const Icon = step.icon;
              const isHovered = hoveredStep === step.id;

              return (
                <div
                  key={step.id}
                  onMouseEnter={() => setHoveredStep(step.id)}
                  onMouseLeave={() => setHoveredStep(null)}
                  className="group relative"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${step.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`}
                  />

                  <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-transparent h-full flex flex-col group-hover:-translate-y-2">
                    
                    <div className="flex items-center justify-between mb-6">
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.gradient} flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500 shadow-lg`}
                      >
                        <span className="text-white font-bold text-lg">{step.id}</span>
                      </div>
                      <Icon className={`w-8 h-8 transform transition-all duration-500 ${
                        isHovered ? 'scale-110 rotate-12' : ''
                      } ${step.gradient.replace('bg-gradient-to-br', 'text')}`} />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-4 ">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r ${step.gradient} transition-all duration-500 group-hover:w-3/4`} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-20 bg-gradient-to-br from-indigo-900 to-blue-900">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Build Your Dream Team?
          </h2>
          <p className="text-xl text-indigo-100/90 mb-8 max-w-2xl mx-auto">
            Let us help you find the perfect technology professionals to drive your business forward.
          </p>
          <button className="inline-flex items-center gap-3 bg-white text-indigo-900 font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 group">
            Start Hiring Today
            <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </section> */}

      <GetInTouch />
    </div>
  );
};

export default ITTalentAcquisitionPage;