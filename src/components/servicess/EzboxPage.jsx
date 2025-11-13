import React, { useState } from "react";
import { QrCode, ArrowRight, CheckCircle, Smartphone, Mail, FileText, Shield } from "lucide-react";
import GetInTouch from "../GetInTouch";
import { useNavigate } from "react-router-dom";

const EzBoxPage = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const nav = useNavigate();

  const features = [
    {
      id: 1,
      icon: FileText,
      title: "Paperless",
      description: "Instant smart receipt collection with one quick scan at checkout.",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      id: 2,
      icon: Mail,
      title: "Clutter Free",
      description: "Keep your email inbox clutter-free and use your SMS inbox for bank OTPS.",
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      id: 3,
      icon: Smartphone,
      title: "Access Anywhere",
      description: "All your receipts are now easily saved on your mobile device.",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      id: 4,
      icon: QrCode,
      title: "One Step Process",
      description: "No more downloads or signups! Simply scan the QR, get your PDF and go.",
      gradient: "from-orange-500 to-red-600"
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
            <div className="text-sm font-semibold w-fit flex items-center text-center mb-4 m-auto gap-1 tracking-wider text-blue-200  bg-[var(--brand-prim)]/50 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
              {/* <QrCode className="w-4 h-4 text-blue-300" /> */}
              <span className="text-sm font-medium text-blue-200">Our Product</span>
            </div>
            
            <h1 className="text-4xl md:text-4xl lg:text-4xl font-bold text-white mb-6 leading-tight">
              Smarter Receipts Start Here .
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100/90 max-w-3xl mx-auto leading-relaxed mb-8">
              Transform your receipt management with EZBox - the innovative solution for paperless, organized, and secure digital receipts.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button   className="inline-flex items-center gap-3 bg-transparent text-white font-semibold px-8 py-4 border border-white rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 group"
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

      {/* What is EZBox Section */}
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
              What is EzBox?
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 leading-tight">
                All your purchase receipts now accessible on your phone
              </p>
              <div className="text-lg md:text-xl text-gray-600 leading-relaxed space-y-6">
                <p>
                  We are bringing brands & customers together on this shared responsibility towards the environment.
                </p>
                <p className="text-xl font-semibold text-blue-400">
                  It's time we go paperless! It's time we ask for EzBox!
                </p>
                <p>
                  A secure platform where customers' and retailers' data are 100% secure.
                </p>
              </div>
            </div>
          </div>

          {/* Feature Image/Illustration */}

        </div>
        
      </section>

      {/* Why EZBox Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-sm font-bold flex items-center gap-1 tracking-wider text-black  bg-[var(--brand-prim)]/25  px-4 py-2 rounded-full border border-white/30">
                Why Choose EZBox?
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Revolutionize Your Receipt Management
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Experience the future of receipt management with our innovative, eco-friendly solution.
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

      {/* Benefits Section */}
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
              Environmental Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Join the movement towards a greener, more sustainable future with EZBox.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Reduce Paper Waste</h3>
              <p className="text-gray-600">Eliminate paper receipts and contribute to environmental conservation.</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Secure & Private</h3>
              <p className="text-gray-600">Your data is protected with enterprise-grade security measures.</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Always Accessible</h3>
              <p className="text-gray-600">Access your receipts anytime, anywhere from your mobile device.</p>
            </div>
          </div>
        </div>
      </section>

      <GetInTouch />
    </div>
  );
};

export default EzBoxPage;