import React, { useState } from "react";
import { Shield, Lock, Eye, Key, Database, Server, ArrowRight, CheckCircle, Clock, Users, Zap } from "lucide-react";
import GetInTouch from "../GetInTouch";

const DataSecurityPage = () => {
  const [hoveredStep, setHoveredStep] = useState(null);

  const methodologySteps = [
    {
      id: 1,
      title: "Security Assessment",
      description: "Comprehensive evaluation of your current security posture, identifying vulnerabilities and risks.",
      icon: Shield,
      gradient: "from-red-500 to-orange-500"
    },
    // {
    //   id: 2,
    //   title: "Threat Analysis",
    //   description: "Identify potential threats and attack vectors specific to your business and infrastructure.",
    //   icon: Eye,
    //   gradient: "from-orange-500 to-yellow-500"
    // },
    {
      id: 3,
      title: "Security Architecture",
      description: "Design robust security frameworks and protocols tailored to your organizational needs.",
      icon: Database,
      gradient: "from-green-500 to-emerald-500"
    },
    {
      id: 4,
      title: "Implementation",
      description: "Deploy security solutions including encryption, access controls, and monitoring systems.",
      icon: Lock,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      id: 5,
      title: "Testing & Validation",
      description: "Conduct penetration testing and security audits to validate protection measures.",
      icon: Key,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      id: 6,
      title: "Ongoing Monitoring",
      description: "24/7 security monitoring, threat detection, and continuous improvement strategies.",
      icon: Server,
      gradient: "from-indigo-500 to-blue-500"
    }
  ];

  const features = [
    {
      title: "Data Encryption",
      description: "End-to-end encryption for data at rest and in transit"
    },
    {
      title: "Access Control",
      description: "Granular permission systems and identity management"
    },
    {
      title: "Threat Detection",
      description: "Advanced monitoring and real-time threat identification"
    },
    // {
    //   title: "Compliance Management",
    //   description: "Ensure adherence to GDPR, HIPAA, SOC2, and other regulations"
    // },
    // {
    //   title: "Security Audits",
    //   description: "Regular security assessments and vulnerability testing"
    // },
    // {
    //   title: "Incident Response",
    //   description: "Rapid response protocols and disaster recovery planning"
    // }
  ];

  const securityServices = [
    {
      icon: Shield,
      title: "Cloud Security",
      description: "Comprehensive protection for your cloud infrastructure and data"
    },
    {
      icon: Lock,
      title: "Application Security",
      description: "Secure coding practices and application-level protection"
    },
    {
      icon: Database,
      title: "Data Protection",
      description: "Encryption, backup, and recovery solutions for critical data"
    },
    // {
    //   icon: Server,
    //   title: "Network Security",
    //   description: "Firewall configuration, intrusion detection, and network monitoring"
    // }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-gradient-to-br from-red-900 via-orange-800 to-red-900 min-h-[60vh] flex items-center">
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
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-500/5 rounded-full blur-3xl" />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-red-800/50 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-red-700/30">
              <Shield className="w-4 h-4 text-red-300" />
              <span className="text-sm font-medium text-red-200">Data Security</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Data Security
            </h1>
            
            <p className="text-xl md:text-2xl text-red-100/90 max-w-3xl mx-auto leading-relaxed mb-8">
              Protect your digital assets with enterprise-grade security solutions. 
              Safeguard your data, maintain compliance, and build customer trust.
            </p>

            {/* <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="inline-flex items-center gap-3 bg-white text-red-900 font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 group">
                Secure Your Business
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button className="inline-flex items-center gap-3 bg-transparent text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 border-2 border-white/30 hover:border-white/60 backdrop-blur-sm">
                Security Assessment
              </button>
            </div> */}
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-red-50/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Enterprise-Grade Security Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              In today's digital landscape, robust data security is not optional—it's essential. 
              We provide comprehensive security solutions that protect your business from evolving threats 
              while ensuring regulatory compliance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {securityServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-8 flex flex-col items-start shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-red-500 to-orange-600 flex items-center justify-center mb-6 mx-auto transform group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-orange-600 flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      {/* <section className="py-16 bg-gradient-to-r from-red-600 to-orange-600">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="text-white">
              <div className="text-3xl md:text-4xl font-bold mb-2">99.9%</div>
              <div className="text-red-100 text-sm">Uptime Guarantee</div>
            </div>
            <div className="text-white">
              <div className="text-3xl md:text-4xl font-bold mb-2">24/7</div>
              <div className="text-red-100 text-sm">Security Monitoring</div>
            </div>
            <div className="text-white">
              <div className="text-3xl md:text-4xl font-bold mb-2">100+</div>
              <div className="text-red-100 text-sm">Security Protocols</div>
            </div>
            <div className="text-white">
              <div className="text-3xl md:text-4xl font-bold mb-2">0</div>
              <div className="text-red-100 text-sm">Major Breaches</div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Methodology Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-sm font-semibold tracking-wider text-red-600 uppercase bg-red-100 px-4 py-2 rounded-full">
                Our Security Framework
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive Security Methodology
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We follow a rigorous, multi-layered approach to ensure your data remains protected 
              against current and emerging threats.
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
                      <h3 className="text-xl mb-4 font-bold duration-300">
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

      {/* Compliance Section */}
      {/* <section className="py-20 bg-gradient-to-br from-slate-50 to-orange-50/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Industry Compliance & Standards
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
              Our security solutions help you meet and exceed industry compliance requirements
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-60">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="font-bold text-gray-700">GDPR</span>
              </div>
              <span className="text-sm text-gray-600">GDPR</span>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="font-bold text-gray-700">HIPAA</span>
              </div>
              <span className="text-sm text-gray-600">HIPAA</span>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="font-bold text-gray-700">SOC2</span>
              </div>
              <span className="text-sm text-gray-600">SOC2</span>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="font-bold text-gray-700">ISO</span>
              </div>
              <span className="text-sm text-gray-600">ISO 27001</span>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="font-bold text-gray-700">PCI</span>
              </div>
              <span className="text-sm text-gray-600">PCI DSS</span>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="font-bold text-gray-700">CCPA</span>
              </div>
              <span className="text-sm text-gray-600">CCPA</span>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      {/* <section className="py-20 bg-gradient-to-br from-red-900 to-orange-900">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Secure Your Digital Assets?
          </h2>
          <p className="text-xl text-red-100/90 mb-8 max-w-2xl mx-auto">
            Protect your business from cyber threats and build customer trust with our enterprise-grade security solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="inline-flex items-center gap-3 bg-white text-red-900 font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 group">
              Get Security Assessment
              <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button className="inline-flex items-center gap-3 bg-transparent text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 border-2 border-white/30 hover:border-white/60 backdrop-blur-sm">
              Contact Security Expert
            </button>
          </div>
        </div>
      </section> */}

      <GetInTouch />
    </div>
  );
};

export default DataSecurityPage;