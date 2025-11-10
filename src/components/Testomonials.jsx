import React, { useState } from "react";
import { ChevronLeft, ChevronRight, MessageSquare } from "lucide-react";

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote:
        "CloudKaptan has provided us with customized development services on the Salesforce platform, and we are highly impressed with their expertise and commitment to a well-structured process. The team consistently proves their availability and responsiveness whenever we require their assistance. Their meticulous attention to detail and their ability to adapt to evolving project requirements have been instrumental to the project's success. They have done a great job, thanks to the entire team for their exceptional work.",
      author: "Vikash Kothari",
      position: "CEO, Infovity",
      avatar: "VK",
      company: "infovity",
      bgColor: "bg-teal-500",
    },
    {
      id: 2,
      quote:
        "Pioneer has leveraged the strategic and development expertise of CloudKaptan for the initial build, enhancements, and ongoing maintenance of our Salesforce-based lending system for several years. The team at CloudKaptan is extremely responsive to our requests and a great partner in planning out our future technology needs. We highly recommend their services for upstart and established financial companies.",
      author: "Rich Brown",
      position: "Co-Founder and Chief Operating Officer, Pioneer",
      avatar: "RB",
      company: "PIONEER",
      bgColor: "bg-blue-600",
    },
    {
      id: 3,
      quote:
        "Working with CloudKaptan has been an absolute game-changer for our business. Their team's deep understanding of modern technologies and their ability to deliver scalable solutions has helped us achieve our digital transformation goals. The quality of their work and dedication to our success is unmatched.",
      author: "Sarah Johnson",
      position: "CTO, TechVision",
      avatar: "SJ",
      company: "TechVision",
      bgColor: "bg-purple-600",
    },
    {
      id: 4,
      quote:
        "The expertise and professionalism demonstrated by CloudKaptan's team exceeded our expectations. They took the time to understand our unique challenges and delivered a solution that not only met but surpassed our requirements. Their ongoing support and commitment to excellence makes them a trusted technology partner.",
      author: "Michael Chen",
      position: "Director of Engineering, InnovateCorp",
      avatar: "MC",
      company: "InnovateCorp",
      bgColor: "bg-indigo-600",
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const current = testimonials[currentIndex];

  return (
    <section
      className={`${current.bgColor} py-20 px-6 transition-colors duration-500`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Testimonial Content */}
          <div className="text-white min-h-[350px] flex flex-col justify-between">
            {/* Client Speak Badge */}
            <div className="flex items-center gap-2 mb-8">
              <MessageSquare className="w-5 h-5" />
              <span className="uppercase text-sm font-semibold tracking-wider">
                Client Speak
              </span>
            </div>

            {/* Quote */}
            <blockquote className="text-lg md:text-xl leading-relaxed mb-12">
              "{current.quote}"
            </blockquote>

            {/* Author Info & Navigation */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                {/* Avatar */}
                <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border-2 border-white/30">
                  <span className="text-white font-bold text-lg">
                    {current.avatar}
                  </span>
                </div>

                {/* Author Details */}
                <div>
                  <div className="font-bold text-lg">{current.author}</div>
                  <div className="text-white/90 text-sm">
                    {current.position}
                  </div>
                </div>
              </div>

              {/* Navigation Arrows */}
              <div className="flex gap-3">
                <button
                  onClick={prevTestimonial}
                  className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Side - Company Logo/Card */}
          <div className="flex items-center justify-center">
            <div className="w-full max-w-md h-80 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
              <span className="text-white text-4xl font-bold tracking-wider">
                {current.company}
              </span>
            </div>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-white w-8"
                  : "bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
