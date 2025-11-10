import React from "react";
import { MapPin, Briefcase, ArrowRight } from "lucide-react";

export const CareerSection = () => {
  const jobListings = [
    {
      id: 1,
      title: "Senior Software Engineer",
      department: "Engineering",
      description:
        "We are seeking an experienced Senior Software Engineer to join our dynamic team. The ideal candidate will have strong expertise in modern web technologies and a passion for building scalable applications. You'll work on cutting-edge projects that impact millions of users.",
      location: "Noida, India",
      contactType: "Full-Time",
    },
    {
      id: 2,
      title: "Product Manager",
      department: "Product",
      description:
        "Join our product team to drive innovation and shape the future of our platform. We're looking for a strategic thinker with excellent communication skills who can bridge the gap between technical teams and business stakeholders. Lead product initiatives from conception to launch.",
      location: "Brookfield, USA",
      contactType: "Full-Time",
    },
    {
      id: 3,
      title: "UI/UX Designer",
      department: "Design",
      description:
        "We're looking for a creative UI/UX Designer who can transform complex problems into intuitive and beautiful user experiences. You'll collaborate with cross-functional teams to design innovative solutions that delight our users and drive business growth.",
      location: "Remote",
      contactType: "Contract",
    },
  ];

  const handleApplyNow = (jobTitle) => {
    console.log(`Apply button clicked for: ${jobTitle}`);
    // You can add navigation logic here
    // Example: window.location.href = `/careers/apply/${jobId}`;
  };

  const handleViewMore = () => {
    console.log("View More clicked - Redirecting to careers page");
    // Add your navigation logic here
    // Example: window.location.href = '/careers';
    // Or with React Router: navigate('/careers');
    alert("Redirecting to careers page...");
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Join Our Team
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore exciting career opportunities and be part of our innovative
            journey to shape the future of technology
          </p>
        </div>

        {/* Job Listings */}
        <div className="space-y-6 mb-10">
          {jobListings.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-8 border border-gray-100"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                <div className="flex-1">
                  {/* Job Title and Department */}
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {job.title}
                    </h3>
                    <span className="inline-block bg-blue-50 text-blue-600 px-4 py-1 rounded-full text-sm font-medium">
                      {job.department}
                    </span>
                  </div>

                  {/* Job Description */}
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {job.description}
                  </p>

                  {/* Location and Contact Type */}
                  <div className="flex flex-wrap items-center gap-6 text-sm">
                    <div className="flex items-center gap-2 text-gray-700">
                      <MapPin className="w-5 h-5 text-gray-500" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <Briefcase className="w-5 h-5 text-gray-500" />
                      <span>{job.contactType}</span>
                    </div>
                  </div>
                </div>

                {/* Apply Now Button */}
                <div className="lg:ml-6">
                  <button
                    onClick={() => handleApplyNow(job.title)}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200 whitespace-nowrap shadow-md hover:shadow-lg w-full lg:w-auto"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center">
          <button
            onClick={handleViewMore}
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-10 py-4 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl group"
          >
            View More Openings
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CareerSection;
