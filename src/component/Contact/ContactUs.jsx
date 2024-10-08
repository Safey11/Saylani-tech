import React, { useState } from "react";
import Swal from "sweetalert2";
import getrequest from "../../Config/mongodb";

const GetTicket = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    txt: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = "Name is required";
    if (!formData.email) formErrors.email = "Email is required";
    return formErrors;
  };

  const getticket = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await getrequest({
          name: formData.name,
          email: formData.email,
          msg: formData.txt,
        });

        Swal.fire({
          icon: "success",
          title: "Ticket Generated",
          text: `Your ticket has been generated!`,
        });

        setFormData({
          name: "",
          email: "",
          txt: "", // Correctly clearing the 'txt' field now
        });
        console.log(response);
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Failed to generate ticket.",
        });
      }
    }
  };

  return (
    <section className="text-gray-600 body-font relative bg-gradient-to-b from-indigo-100 via-white to-indigo-50">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          {/* Left Side - Text Section */}
          <div className="lg:w-1/2 w-full mb-12 lg:mb-0 text-left lg:pr-12">
            <h1 className="sm:text-4xl text-3xl font-bold title-font mb-4 text-red-500 drop-shadow-lg">
              For Contact Get Your Ticket
            </h1>
            <p className="leading-relaxed text-xl text-gray-600 font-light">
              Reserve your spot for an unforgettable experience! Just fill out
              the form and get instant confirmation.
            </p>
            <p className="leading-relaxed text-lg text-gray-500 mt-6">
              Have questions? Reach us at:{" "}
              <span className="text-red-500 hover:text-black">
                support@Smit.com
              </span>
            </p>
          </div>

          {/* Right Side - Form Section */}
          <div className="lg:w-1/2 w-full">
            <form
              onSubmit={getticket}
              className="bg-white rounded-lg p-6 shadow-xl border border-gray-100 "
            >
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className={`w-full bg-gray-100 bg-opacity-50 rounded-lg border ${
                      errors.name ? "border-red-500" : "border-gray-300"
                    } focus:border-indigo-600 focus:bg-white focus:ring-2 focus:ring-indigo-300 text-base outline-none text-gray-700 py-2 px-4 leading-8 transition-colors duration-300 ease-in-out`}
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                  )}
                </div>
              </div>

              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className={`w-full bg-gray-100 bg-opacity-50 rounded-lg border ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    } focus:border-indigo-600 focus:bg-white focus:ring-2 focus:ring-indigo-300 text-base outline-none text-gray-700 py-2 px-4 leading-8 transition-colors duration-300 ease-in-out`}
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                  )}
                </div>
              </div>

              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="txt"
                    className="leading-7 text-sm text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="txt"
                    name="txt"
                    className="w-full bg-gray-100 bg-opacity-50 rounded-lg border border-gray-300 focus:border-indigo-600 focus:bg-white focus:ring-2 focus:ring-indigo-300 h-32 text-base outline-none text-gray-700 py-2 px-4 resize-none leading-8 transition-colors duration-300 ease-in-out"
                    value={formData.txt}
                    onChange={handleChange}
                  ></textarea>
                </div>
              </div>

              <div className="p-2 w-full">
                <button
                  type="submit"
                  className="flex mx-auto text-white bg-gradient-to-r from-red via-red-800 to-red border-0 py-2 px-8 focus:outline-none hover:bg-red-900 rounded-full text-lg shadow-lg transition-transform duration-500 transform hover:scale-110 hover:shadow-2xl"
                >
                  Generate Ticket
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetTicket;
