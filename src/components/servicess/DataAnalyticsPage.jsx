import React, { useState } from "react";
import { BarChart3, ArrowRight, CheckCircle, Clock, Users, Zap, Shield } from "lucide-react";
import GetInTouch from "../GetInTouch";

const DataAnalyticsPage = () => {
  const [hoveredStep, setHoveredStep] = useState(null);

  const methodologySteps = [
    {
      id: 1,
      title: "Data Assessment",
      description: "Evaluate your current data infrastructure and identify key business questions to answer.",
      icon: Clock,
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      id: 2,
      title: "Data Strategy",
      description: "Develop comprehensive data collection, storage, and processing strategies aligned with business goals.",
      icon: Users,
      gradient: "from-blue-500 to-indigo-500"
    },
    {
      id: 3,
      title: "Data Integration",
      description: "Connect and consolidate data from multiple sources into a unified analytics platform.",
      icon: CheckCircle,
      gradient: "from-green-500 to-teal-500"
    },
    {
      id: 4,
      title: "Analysis & Modeling",
      description: "Apply advanced statistical models and machine learning algorithms to extract insights.",
      icon: BarChart3,
      gradient: "from-orange-500 to-red-500"
    },
    {
      id: 5,
      title: "Visualization",
      description: "Create interactive dashboards and reports that make complex data easily understandable.",
      icon: Shield,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      id: 6,
      title: "Implementation & Training",
      description: "Deploy analytics solutions and train your team to leverage data-driven decision making.",
      icon: Zap,
      gradient: "from-teal-500 to-cyan-500"
    }
  ];

  const features = [
    {
      title: "Business Intelligence",
      description: "Transform raw data into actionable business insights and reports"
    },
    {
      title: "Predictive Analytics",
      description: "Forecast trends and outcomes using advanced machine learning models"
    },
    {
      title: "Data Visualization",
      description: "Create interactive dashboards that make complex data understandable"
    },
    {
      title: "Data Integration",
      description: "Connect multiple data sources into a single source of truth"
    },
    {
      title: "Real-time Analytics",
      description: "Monitor and analyze data as it's generated for immediate insights"
    },
    {
      title: "Custom Analytics Solutions",
      description: "Tailored analytics platforms built for your specific business needs"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden  bg-[var(--brand-prim)] min-h-[60vh] flex items-center">
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
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="text-sm font-semibold w-fit flex items-center text-center m-auto gap-1 tracking-wider text-blue-200 uppercase bg-[var(--brand-prim)]/50 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
              <BarChart3 className="w-4 h-4 text-blue-200" />
              <span className="text-sm font-medium text-blue-200">Data Analytics</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Data Analytics
            </h1>
            
            <p className="text-xl md:text-2xl text-cyan-100/90 max-w-3xl mx-auto leading-relaxed mb-8">
              Unlock insights with advanced analytics. Collect, analyze, and visualize data to power strategic growth.
            </p>
{/* 
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="inline-flex items-center gap-3 bg-white text-cyan-900 font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 group">
                Transform Your Data
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button className="inline-flex items-center gap-3 bg-transparent text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 border-2 border-white/30 hover:border-white/60 backdrop-blur-sm">
                View Case Studies
              </button>
            </div> */}
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-cyan-50/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Transform Data into Decisions
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Leverage the power of your data to make informed decisions, predict trends, 
              and drive business growth with our comprehensive analytics solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300">
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
              <span className="text-sm font-semibold tracking-wider text-cyan-600 uppercase bg-cyan-100 px-4 py-2 rounded-full">
                Our Analytics Process
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Data-Driven Methodology
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We follow a systematic approach to transform your raw data into actionable insights that drive business value.
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
                      <h3 className="text-xl font-bold mb-4">
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
      {/* <section className="py-20 bg-gradient-to-br from-cyan-900 to-blue-900">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Unlock Your Data's Potential?
          </h2>
          <p className="text-xl text-cyan-100/90 mb-8 max-w-2xl mx-auto">
            Transform your data into your most valuable business asset with our analytics expertise.
          </p>
          <button className="inline-flex items-center gap-3 bg-white text-cyan-900 font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 group">
            Start Your Analytics Journey
            <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </section> */}

      <GetInTouch />
    </div>
  );
};

export default DataAnalyticsPage;