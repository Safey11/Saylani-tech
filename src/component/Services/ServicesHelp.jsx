import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const ServicesHelp = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a 1 second animation duration
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
      <h1
        className="text-4xl font-bold mb-4 text-red"
        data-aos="fade-up" // AOS animation for the heading
      >
        How Can We Help You?
      </h1>
      <p
        className="text-lg text-red mb-6 text-center max-w-md"
        data-aos="fade-up"
        data-aos-delay="200" // Add delay to make the animation more dynamic
      >
        We are here to assist you with any questions or concerns. Let us know
        how we can help, and we will get back to you as soon as possible.
      </p>

      <Link to={"/contact"}>
        <button
          className="bg-gradient-to-r from-red via-red-500 to-red text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300 hover:white"
          data-aos="zoom-in" // AOS animation for the button
          data-aos-delay="400"
        >
          Contact Us
        </button>
      </Link>
    </div>
  );
};

export default ServicesHelp;
