import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // AOS animation library

const ApiDevelopment = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS animations
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg p-10">
        {/* Header */}
        <h1
          className="text-5xl font-bold text-center text-green-600 mb-8"
          data-aos="fade-up"
        >
          API Development and Integration
        </h1>

        {/* Section 1: Introduction */}
        <div className="mb-10" data-aos="fade-right">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Seamless API Solutions for Your Business
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Our API development services empower businesses to integrate
            different software systems effectively. We specialize in creating
            RESTful and GraphQL APIs that facilitate smooth data exchange and
            enhance interoperability between applications. Whether you need
            custom APIs for your internal processes or third-party integrations,
            we provide scalable and secure solutions tailored to your needs.
          </p>
        </div>

        {/* Section 2: Key Features */}
        <div className="mb-10" data-aos="fade-left">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Key Features of Our API Development Services
          </h2>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-4">
            <li>Custom API design tailored to your business needs</li>
            <li>
              Secure data exchange with OAuth and token-based authentication
            </li>
            <li>
              Integration with popular third-party services (e.g., payment
              gateways, CRMs, etc.)
            </li>
            <li>Detailed documentation for easy implementation and use</li>
            <li>
              Performance optimization for fast and efficient data handling
            </li>
            <li>Support for versioning to ensure backward compatibility</li>
          </ul>
        </div>

        {/* Section 3: Why Choose Us */}
        <div data-aos="fade-right">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Why Choose Our API Development Services?
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            We deliver reliable and efficient API solutions that help businesses
            scale and adapt to changing technological landscapes. Our
            experienced team ensures that every API is built with best practices
            in mind, prioritizing security, performance, and user experience.
            Partner with us to streamline your operations and enhance your
            system’s connectivity.
          </p>
        </div>

        {/* Call-to-action */}
        <div className="text-center mt-10" data-aos="zoom-in">
          <button className="bg-green-600 text-white text-lg font-semibold py-3 px-6 rounded-lg hover:bg-green-700 transition duration-300">
            Get Started with API Development
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApiDevelopment;
