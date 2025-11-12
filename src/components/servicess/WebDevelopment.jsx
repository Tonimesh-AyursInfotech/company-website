import React, { useState } from "react";
import { Code, ArrowRight, CheckCircle, Clock, Users, Zap, Shield } from "lucide-react";
import GetInTouch from "../GetInTouch";

const WebDevelopment = () => {
  const [hoveredStep, setHoveredStep] = useState(null);

  const methodologySteps = [
    {
      id: 1,
      title: "Define Objectives",
      description: "We review the full scope and organize client meetings to discuss requirements. Setting milestone-wise deliverables with detailed documentation.",
      icon: Clock,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "Planning",
      description: "Project planning includes user journey mapping, flow creation, module distribution, resource allocation, database schema creation & project setup.",
      icon: Users,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      title: "Design",
      description: "Design includes wireframing, UI designing & prototyping along with all required UI asset creations like color palette and typography.",
      icon: CheckCircle,
      gradient: "from-green-500 to-emerald-500"
    },
    {
      id: 4,
      title: "Development",
      description: "Development stage includes responsive frontend development, backend integration, API development, and third-party integrations.",
      icon: Code,
      gradient: "from-orange-500 to-red-500"
    },
    {
      id: 5,
      title: "Testing",
      description: "Testing phase includes functional flow testing, browser and device testing. We follow manual testing with bug reporting and correction in staging.",
      icon: Shield,
      gradient: "from-indigo-500 to-blue-500"
    },
    {
      id: 6,
      title: "Deployment",
      description: "The final phase involves uploading to live server and testing entire functionality across web, mobile and tablet for bug-free delivery.",
      icon: Zap,
      gradient: "from-teal-500 to-cyan-500"
    }
  ];

  const features = [
    {
      title: "Responsive Web Design",
      description: "Create websites that look and work perfectly on all devices"
    },
    {
      title: "E-commerce Solutions",
      description: "Build powerful online stores with seamless shopping experiences"
    },
    {
      title: "Web Applications",
      description: "Develop custom web apps that solve complex business problems"
    },
    {
      title: "API Integration",
      description: "Connect your website with third-party services and platforms"
    },
    {
      title: "Performance Optimization",
      description: "Ensure fast loading times and smooth user experiences"
    },
    {
      title: "Ongoing Support",
      description: "Maintain and improve your website with continuous updates"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with TechStack Background */}
      <section className="relative w-full overflow-hidden bg-[var(--brand-prim)]  min-h-[60vh] flex items-center">
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
            <div className="text-sm font-semibold w-fit flex items-center text-center m-auto gap-1 tracking-wider text-blue-200 uppercase bg-[var(--brand-prim)]/50 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
              <Code className="w-4 h-4 text-blue-300" />
              <span className="text-sm font-medium text-blue-200">Web Development</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Web Development
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100/90 max-w-3xl mx-auto leading-relaxed mb-8">
              Build high-performance, visually refined websites that amplify your brand and deliver real business impact.
            </p>

            {/* <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="inline-flex items-center gap-3 bg-white text-blue-900 font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 group">
                Start Your Project
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button className="inline-flex items-center gap-3 bg-transparent text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 border-2 border-white/30 hover:border-white/60 backdrop-blur-sm">
                View Our Work
              </button>
            </div> */}
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Transform Your Digital Presence
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We create custom web solutions that combine stunning design with powerful functionality. 
              From responsive websites to complex web applications, we deliver digital experiences 
              that drive growth and engagement.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300">
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
              <span className="text-sm font-semibold tracking-wider text-blue-600 uppercase bg-blue-100 px-4 py-2 rounded-full">
                Our Process
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Agile Development Methodology
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We follow a proven, step-by-step process to ensure your project's success from concept to launch.
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
                  {/* Animated Gradient Border */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${step.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`}
                  />

                  {/* Main Card */}
                  <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-transparent h-full flex flex-col group-hover:-translate-y-2">
                    
                    {/* Step Number with Gradient */}
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

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-4">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    {/* Hover Indicator */}
                    <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r ${step.gradient} transition-all duration-500 group-hover:w-3/4`} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <div

          className="absolute inset-0"

         style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
      
      >
      <section className="py-20"
    
      
      >
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Build Your Next Web Project?
          </h2>
          <p className="text-xl text-blue-100/90 mb-8 max-w-2xl mx-auto">
            Let's discuss your vision and create a web solution that exceeds your expectations.
          </p>
          <button className="inline-flex items-center gap-3 bg-white text-blue-900 font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 group">
            Start Your Project Today
            <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </section>
      </div> */}

      <GetInTouch />
    </div>
  );
};

export default WebDevelopment;