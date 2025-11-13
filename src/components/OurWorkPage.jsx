import React, { useState, useEffect, useRef } from "react";
import { ArrowRight, CodeSquare, ExternalLink } from "lucide-react";
import GetInTouch from "./GetInTouch";
import { useNavigate } from "react-router-dom";

const OurWorkPage = () => {
  const [visibleProjects, setVisibleProjects] = useState([]);
  const [visibleCount, setVisibleCount] = useState(3);
  const projectRefs = useRef([]);

  const nav = useNavigate();

  const brands = [
    "PIZZAHUT",
    "KFC",
    "UNO MINDA",
    "NTT DATA",
    "PC SOLUTION",
    "NEXXORRA",
  ];

  const projects = [
    {
      id: 1,
      brand: "DISNEY",
      title: "Streaming Platform Enhancement",
      description:
        "Revolutionized the user experience for Disney's streaming service with enhanced navigation, personalized recommendations, and seamless cross-device synchronization. The project resulted in a 35% increase in user engagement and 20% higher subscription retention rates.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Node.js", "AWS", "MongoDB"],
      link: "#",
    },
    {
      id: 2,
      brand: "MARVEL",
      title: "Interactive Fan Experience App",
      description:
        "Developed an immersive mobile application that brings Marvel characters to life through AR technology. Features include interactive comics, character customization, and social sharing capabilities. The app garnered over 2 million downloads in the first month.",
      image: "/api/placeholder/600/400",
      technologies: ["React Native", "AR Kit", "Firebase", "Unity"],
      link: "#",
    },
    {
      id: 3,
      brand: "KFC",
      title: "Digital Ordering System",
      description:
        "Created a comprehensive digital ordering platform featuring AI-powered menu recommendations, real-time order tracking, and integrated loyalty programs. The system reduced average order time by 40% and increased mobile orders by 65%.",
      image: "/api/placeholder/600/400",
      technologies: ["Vue.js", "Python", "PostgreSQL", "Redis"],
      link: "#",
    },
    {
      id: 4,
      brand: "Jio",
      title: "Telecom Service Management",
      description:
        "Built an enterprise-level telecom management system with real-time analytics, customer service automation, and network monitoring capabilities. The platform handles over 10 million daily transactions with 99.9% uptime.",
      image: "/api/placeholder/600/400",
      technologies: ["Angular", "Java", "Kubernetes", "Elasticsearch"],
      link: "#",
    },
    {
      id: 5,
      brand: "PIZZAHUT",
      title: "Coupon Engine Application",
      description:
        "Developed a robust coupon engine application to automate the creation and management of promotional offers. Additionally, built a VAPT-approved, customer-facing web platform integrated with the Pizza Hut India app.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Java", "AWS", "MongoDB", "AES Encryption"],
      link: "#",
    },
    {
      id: 6,
      brand: "UNO MINDA",
      title: "Supply Chain Management System",
      description:
        "Implemented an advanced supply chain management system with real-time inventory tracking, automated procurement, and predictive analytics for demand forecasting.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Node.js", "MySQL", "AWS Lambda"],
      link: "#",
    },
    {
      id: 7,
      brand: "NTT DATA",
      title: "Enterprise Data Analytics Platform",
      description:
        "Created a comprehensive data analytics platform for enterprise clients, featuring real-time dashboards, predictive modeling, and automated reporting capabilities.",
      image: "/api/placeholder/600/400",
      technologies: ["Python", "Tableau", "Snowflake", "Apache Spark"],
      link: "#",
    },
  ];

  const visibleProjectsList = projects.slice(0, visibleCount);
  const hasMoreProjects = visibleCount < projects.length;

  const handleShowMore = () => {
    setVisibleCount((prev) => Math.min(prev + 3, projects.length));
  };

  useEffect(() => {
    const observers = visibleProjectsList.map((project, index) => {
      const ref = projectRefs.current[index];
      if (!ref) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleProjects((prev) => [...prev, project.id]);
          }
        },
        { threshold: 0.3 }
      );

      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, [visibleProjectsList]);

  const isProjectVisible = (projectId) => visibleProjects.includes(projectId);

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
              <span className="text-sm font-semibold flex items-center gap-1 tracking-wider text-blue-200 uppercase bg-[var(--brand-prim)]/50 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                <CodeSquare className="w-4 h-4 text-[var(--brand-light)]" /> Our
                Work
              </span>
            </div>

            <h1 className="text-4xl md:text-2xl lg:text-4xl font-bold text-white mb-6 leading-tight">
              We provide IT services that fuel your success. <br />
            </h1>

            <button
              className="inline-flex items-center gap-3 bg-transparent text-white font-semibold px-8 py-4 border border-white rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 group"
              onClick={() => {
                nav("/contactUs");
              }}
            >
              Get In Touch
              <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </section>

      {/* Brands Section */}
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

        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Trusted by Leading Brands
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We are proud to have partnered with some of the leading brands,
              delivering services that drive impact and growth.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="group relative p-6 w-full h-24 flex items-center justify-center bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200"
              >
                <div className="text-gray-400 group-hover:text-gray-700 transition-colors duration-300 text-center">
                  <span className="font-semibold text-lg tracking-tight">
                    {brand}
                  </span>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-sm font-semibold tracking-wider text-blue-600 uppercase bg-blue-100 px-4 py-2 rounded-full">
                Featured Work
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover how we've helped leading brands transform their digital
              presence and achieve remarkable results.
            </p>
          </div>

          <div className="space-y-32">
            {visibleProjectsList.map((project, index) => (
              <div
                key={project.id}
                ref={(el) => (projectRefs.current[index] = el)}
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-12 items-center`}
              >
                {/* Project Image */}
                <div
                  className={`flex-1 transform transition-all duration-1000 ${
                    isProjectVisible(project.id)
                      ? "translate-y-0 opacity-100"
                      : "translate-y-20 opacity-0"
                  }`}
                >
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-80 lg:h-96 object-cover rounded-2xl shadow-2xl relative z-10 transform group-hover:-translate-y-2 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 z-20">
                      <span className="bg-black/80 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
                        {project.brand}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Project Description */}
                <div
                  className={`flex-1 transform transition-all duration-1000 delay-300 ${
                    isProjectVisible(project.id)
                      ? "translate-y-0 opacity-100"
                      : "translate-y-20 opacity-0"
                  }`}
                >
                  <div className="max-w-lg mx-auto lg:mx-0">
                    <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                      {project.title}
                    </h3>

                    <p className="text-lg text-gray-600 leading-relaxed mb-8">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-3 mb-8">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Show More Button */}
          {hasMoreProjects && (
            <div className="text-center mt-16">
              <button
                onClick={handleShowMore}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 group"
              >
                Show More Success Stories
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <p className="text-gray-500 mt-4">
                Showing {visibleCount} of {projects.length} Succes Stories
              </p>
            </div>
          )}

          {/* Show Less Button when all projects are visible */}
          {visibleCount >= projects.length && projects.length > 3 && (
            <div className="text-center mt-8">
              <button
                onClick={() => setVisibleCount(3)}
                className="inline-flex items-center gap-3 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold px-6 py-3 rounded-xl transition-all duration-300"
              >
                Show Less
              </button>
            </div>
          )}
        </div>
      </section>

      <GetInTouch />
    </div>
  );
};

export default OurWorkPage;
