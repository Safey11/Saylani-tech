import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import service1 from "../../assets/services1.webp";
import service2 from "../../assets/services2.webp";
import Modal from "react-modal";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

// Set the app element for accessibility
Modal.setAppElement("#root");

const HomeServices = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 1,
      title: "WEB SERVICES",
      subtitle: "WEB SERVICES",
      description: "Advantages of Web SERVICES ...",
      image: service1,
    },
    {
      id: 2,
      title: "WEB DEVELOPMENT",
      subtitle: "WEB DEVELOPMENT",
      description: "Advantages of Web Development ...",
      image: service2,
    },
    {
      id: 3,
      title: "APP DEVELOPMENT",
      subtitle: "APP DEVELOPMENT",
      description: "Advantages of App Development ...",
      image:
        "https://www.perfecto.io/sites/default/files/image/2019-06/image-blog-resolution-and-ppi-affect-test-coverage-600x400.jpg",
    },
  ];

  const openModal = (service) => {
    setSelectedService(service);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedService(null);
  };

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);

  return (
    <>
      <section className="bg-gray-100 py-10">
        <div className="container px-5 mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex flex-col md:flex-row justify-between items-center mb-6">
              <h2
                data-aos="fade-up"
                className="text-4xl font-extrabold bg-clip-text text-red-900 drop-shadow-md transition duration-500 hover:scale-105 hover:drop-shadow-lg mb-4 md:mb-0"
              >
                Our Services
              </h2>

              <Link
                to="/services"
                className="relative bg-red-900 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-400"
                data-aos="fade-down" // Animation for the button
              >
                <span className="relative z-10">View All Services</span>
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-500 to-indigo-500 opacity-0 hover:opacity-20 rounded-lg"></div>
              </Link>
            </div>

            <div className="flex flex-wrap -m-4">
              {services.map((service) => (
                <div
                  className="lg:w-1/3 sm:w-1/2 w-full p-6"
                  key={service.id}
                  data-aos="zoom-in"
                >
                  <div
                    className="relative bg-white border border-gray-300 shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl h-96 cursor-pointer"
                    onClick={() => openModal(service)} // Open modal on click
                  >
                    <img
                      alt="gallery"
                      className="w-full h-full object-cover object-center"
                      src={service.image}
                    />
                    <div className="absolute inset-0 bg-white bg-opacity-0 flex flex-col justify-center items-center transition-opacity duration-300 opacity-0 hover:bg-opacity-90 hover:opacity-100 p-6">
                      <h2 className="tracking-widest text-xs title-font font-medium text-red mb-1">
                        {service.subtitle}
                      </h2>
                      <h1 className="title-font text-xl font-semibold text-red-700 mb-2">
                        {service.title}
                      </h1>
                      <p className="leading-relaxed mb-2 text-center text-sm">
                        {service.description}
                      </p>
                      <Link
                        to="/services"
                        className="text-red-700  transition duration-300 ease-in-out"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modal for displaying service details */}
      {selectedService && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Service Details"
          className="max-w-md mx-auto bg-white p-5 rounded shadow-lg"
          overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
        >
          <h2 className="text-xl font-bold mb-4">{selectedService.title}</h2>
          <img
            alt="service"
            className="w-full h-48 object-cover object-center mb-4 rounded"
            src={selectedService.image}
          />
          <h3 className="text-lg text-red font-semibold mb-2">
            {selectedService.subtitle}
          </h3>
          <p className="mb-4">{selectedService.description}</p>
          <button
            onClick={closeModal}
            className="bg-indigo-500 text-red px-4 py-2 rounded hover:bg-indigo-600 transition duration-200"
          >
            Close
          </button>
        </Modal>
      )}
    </>
  );
};

export default HomeServices;
