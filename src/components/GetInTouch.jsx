import React, { useState } from "react";
import { Linkedin, Facebook, Youtube } from "lucide-react";

export const GetInTouch = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const services = [
    "Web Development",
    "Mobile App Development",
    "Cloud Solutions",
    "IT Consulting",
    "Software Outsourcing",
    "Digital Transformation",
  ];

  const validateField = (name, value) => {
    switch (name) {
      case "name":
        if (!value.trim()) return "Name is required";
        if (value.trim().length < 2)
          return "Name must be at least 2 characters";
        return "";

      case "email":
        if (!value.trim()) return "Business email is required";
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) return "Please enter a valid email";
        return "";

      case "phone":
        if (!value.trim()) return "Phone number is required";
        const phoneRegex = /^[\d\s\-\+\(\)]+$/;
        if (!phoneRegex.test(value)) return "Please enter a valid phone number";
        if (value.replace(/\D/g, "").length < 10)
          return "Phone number must be at least 10 digits";
        return "";

      case "service":
        if (!value) return "Please select a service";
        return "";

      case "message":
        if (!value.trim()) return "Message is required";
        if (value.trim().length < 10)
          return "Message must be at least 10 characters";
        return "";

      default:
        return "";
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));

    if (touched[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: validateField(name, value),
      }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;

    setTouched((prev) => ({ ...prev, [name]: true }));

    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name, value),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });

    setErrors(newErrors);

    setTouched({
      name: true,
      email: true,
      phone: true,
      service: true,
      message: true,
    });

    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted successfully:", formData);
      alert("Quote request submitted successfully!");

      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });

      setTouched({});
    } else {
      console.log("Form validation failed:", newErrors);
    }
  };

  return (
    <div className="min-h-screen bg-[var(--brand-prim)] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start max-w-7xl mx-auto">
          {/* Left Section */}
          <div className="text-white space-y-8">
            <div className="space-y-6">
              <p className="text-base lg:text-lg leading-relaxed">
                Ayurs Infotech is a results-driven technology company delivering
                modern software solutions, digital products, and IT services
                tailored to real business needs. We help organizations
                streamline operations, scale faster, and adopt the right
                technology with confidence.
              </p>

              <p className="text-lg lg:text-xl font-medium">
                Let’s build something powerful and future-ready together —
                connect with us today.
              </p>
            </div>

            <div className="space-y-6 pt-4">
              <h2 className="text-3xl lg:text-4xl font-bold">Get In Touch</h2>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <svg
                      className="w-6 h-6 text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="text-base lg:text-lg">
                    <div>L-31, FF, L Block, Mahavir Enclave</div>
                    <div>New Delhi, India</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div>
                    <svg
                      className="w-6 h-6 text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <a
                    href="tel:262-320-0480"
                    className="text-base lg:text-lg hover:text-green-400 transition-colors underline"
                  >
                    +91 9871 32 9458{" "}
                  </a>
                </div>
              </div>

              <div className="flex gap-4 pt-2">
                <a className="bg-white/10 hover:bg-white/20 p-3 rounded transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a className="bg-white/10 hover:bg-white/20 p-3 rounded transition-colors">
                  <Facebook className="w-6 h-6" />
                </a>
                <a className="bg-white/10 hover:bg-white/20 p-3 rounded transition-colors">
                  <Youtube className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-lg shadow-2xl p-8 lg:p-10"
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-8">
              Request A Quote
            </h2>

            <div className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full px-0 py-3 border-0 border-b-2 ${
                    errors.name && touched.name
                      ? "border-red-500"
                      : "border-gray-300"
                  } focus:border-blue-600 outline-none text-gray-800`}
                />
                {errors.name && touched.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                )}
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Business Email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full px-0 py-3 border-0 border-b-2 ${
                    errors.email && touched.email
                      ? "border-red-500"
                      : "border-gray-300"
                  } focus:border-blue-600 outline-none text-gray-800`}
                />
                {errors.email && touched.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                )}
              </div>

              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Business Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full px-0 py-3 border-0 border-b-2 ${
                    errors.phone && touched.phone
                      ? "border-red-500"
                      : "border-gray-300"
                  } focus:border-blue-600 outline-none text-gray-800`}
                />
                {errors.phone && touched.phone && (
                  <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
                )}
              </div>

              <div>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full px-0 py-3 border-0 border-b-2 ${
                    errors.service && touched.service
                      ? "border-red-500"
                      : "border-gray-300"
                  } focus:border-blue-600 outline-none bg-white text-gray-800`}
                >
                  <option value="">Select Services</option>

                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
                {errors.service && touched.service && (
                  <p className="mt-1 text-sm text-red-500">{errors.service}</p>
                )}
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full px-0 py-3 border-0 border-b-2 ${
                    errors.message && touched.message
                      ? "border-red-500"
                      : "border-gray-300"
                  } focus:border-blue-600 outline-none text-gray-800`}
                />
                {errors.message && touched.message && (
                  <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="bg-[var(--brand-sky)] text-white font-semibold px-10 py-3 rounded-full shadow-lg transition"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
