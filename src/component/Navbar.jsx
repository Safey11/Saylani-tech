import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";

const Navbar = () => {
  const location = useLocation();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState(
    "https://th.bing.com/th/id/OIP._z7zYMDurI56otX5togX6QAAAA?w=269&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
  );
  const [loadingImage, setLoadingImage] = useState(false); // Loading state for image

  const UNSPLASH_API_KEY = "OC1nfXOHm-yk-XWGO05G01ai4-1z_RE_RTrZSBcDCdU";

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const fetchImage = async (query) => {
    setLoadingImage(true);
    try {
      const response = await axios.get(
        "https://api.unsplash.com/search/photos",
        {
          params: { query, client_id: UNSPLASH_API_KEY },
        }
      );
      setImageUrl(
        response.data.results.length > 0
          ? response.data.results[0].urls.small
          : "https://via.placeholder.com/300x200?text=No+Image+Found"
      );
    } catch (error) {
      console.error("Error fetching image:", error);
      setImageUrl("https://via.placeholder.com/300x200?text=Error");
    } finally {
      setLoadingImage(false);
    }
  };

  const handleServiceClick = (service) => {
    fetchImage(service);
    setMobileMenuOpen(false); // Close mobile menu on service click
  };

  return (
    <div className="sticky top-0 z-50">
      <header
        className="text-gray-400 bg-gray-900 body-font"
        data-aos="fade-down"
      >
        <div className="container mx-auto flex flex-wrap p-5 items-center justify-between">
          {/* Logo Section */}
          <div
            className="flex title-font font-medium items-center text-white"
            data-aos="fade-right"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <Link to={"/"}>
              <span className="ml-3 text-xl">Saylani Tech</span>
            </Link>
          </div>

          {/* Hamburger Menu for Mobile (Right Aligned) */}
          <button
            className="md:hidden flex items-center px-3 py-2 text-gray-400 hover:text-white"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>

          {/* Navbar Links (Responsive) */}
          <nav
            className={`md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center ${
              isMobileMenuOpen
                ? "flex flex-col absolute top-16 left-0 w-full bg-gray-900 p-5 z-40"
                : "hidden md:flex"
            }`}
          >
            <Link
              to="/"
              className={`${
                location.pathname === "/" ? "text-white bg-indigo-500" : ""
              } mr-5 hover:text-white hover:bg-indigo-500 px-3 py-2 rounded transition-all duration-300`}
              data-aos="fade-up"
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`${
                location.pathname === "/about" ? "text-white bg-indigo-500" : ""
              } mr-5 hover:text-white hover:bg-indigo-500 px-3 py-2 rounded transition-all duration-300`}
              data-aos="fade-up"
              data-aos-delay="100"
            >
              About
            </Link>

            {/* Services Link */}
            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <Link
                to="/services"
                className={`${
                  location.pathname.startsWith("/services")
                    ? "text-white bg-indigo-500"
                    : ""
                } mr-5 hover:text-white hover:bg-indigo-500 px-3 py-2 rounded transition-all duration-300 flex items-center`}
                data-aos="fade-up"
                data-aos-delay="200"
                onClick={() => {
                  // Toggle dropdown in mobile view
                  if (window.innerWidth < 768) {
                    setMobileMenuOpen(true);
                  }
                }}
              >
                Services
                <svg
                  className="ml-1 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </Link>

              {/* Dropdown Menu for Desktop */}
              {isDropdownOpen && (
                <div
                  className="fixed top-16 left-0 w-full bg-gray-800 shadow-lg z-40 p-8 grid grid-cols-1 md:grid-cols-4 gap-10 animate-fadeIn"
                  data-aos="fade-down"
                >
                  <div className="col-span-1">
                    <img
                      src={imageUrl}
                      alt="Service"
                      className="w-full h-auto rounded-lg"
                      style={{
                        width: "300px",
                        height: "200px",
                        objectFit: "cover",
                      }}
                    />
                  </div>

                  <div className="col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <h3 className="text-white text-lg mb-2">
                        Web & App Development
                      </h3>
                      <Link
                        to="/web"
                        onClick={() => handleServiceClick("web development")}
                        className="block px-3 py-2 text-gray-300 text-sm hover:text-indigo-500"
                      >
                        Web Development
                      </Link>
                      <Link
                        to="/app"
                        onClick={() => handleServiceClick("app development")}
                        className="block px-3 py-2 text-gray-300 text-sm hover:text-indigo-500"
                      >
                        App Development
                      </Link>
                      <Link
                        to="/Apiintegraton"
                        onClick={() => handleServiceClick("ecommerce")}
                        className="block px-3 py-2 text-gray-300 text-sm hover:text-indigo-500"
                      >
                        API Development and Integration
                      </Link>
                    </div>

                    <div>
                      <h3 className="text-white text-lg mb-2">
                        Graphic Designing
                      </h3>
                      <Link
                        to="/logo"
                        onClick={() => handleServiceClick("logo design")}
                        className="block px-3 py-2 text-gray-300 text-sm hover:text-indigo-500"
                      >
                        Logo Design
                      </Link>
                      <Link
                        to="/branding"
                        onClick={() => handleServiceClick("branding")}
                        className="block px-3 py-2 text-gray-300 text-sm hover:text-indigo-500"
                      >
                        Branding
                      </Link>
                      <Link
                        to="/illustration"
                        onClick={() => handleServiceClick("illustration")}
                        className="block px-3 py-2 text-gray-300 text-sm hover:text-indigo-500"
                      >
                        Illustration
                      </Link>
                    </div>

                    <div>
                      <h3 className="text-white text-lg mb-2">
                        SEO Optimization
                      </h3>
                      <Link
                        to="/softwareengineer"
                        onClick={() => handleServiceClick("seo optimization")}
                        className="block px-3 py-2 text-gray-300 text-sm hover:text-indigo-500"
                      >
                        Softwar-Eengineer
                      </Link>
                      <Link
                        to="/devops"
                        onClick={() => handleServiceClick("content creation")}
                        className="block px-3 py-2 text-gray-300 text-sm hover:text-indigo-500"
                      >
                        Devops
                      </Link>
                      <Link
                        to="/qaengineer"
                        onClick={() => handleServiceClick("site audit")}
                        className="block px-3 py-2 text-gray-300 text-sm hover:text-indigo-500"
                      >
                        Qaengineer
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/contact"
              className={`${
                location.pathname === "/contact"
                  ? "text-white bg-indigo-500"
                  : ""
              } mr-5 hover:text-white hover:bg-indigo-500 px-3 py-2 rounded transition-all duration-300`}
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Contact
            </Link>
            <Link
              to="/team"
              className={`${
                location.pathname === "/team" ? "text-white bg-indigo-500" : ""
              } mr-5 hover:text-white hover:bg-indigo-500 px-3 py-2 rounded transition-all duration-300`}
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Team
            </Link>
            <Link
              to="/portfolio"
              className={`${
                location.pathname === "/portfolio"
                  ? "text-white bg-indigo-500"
                  : ""
              } mr-5 hover:text-white hover:bg-indigo-500 px-3 py-2 rounded transition-all duration-300`}
              data-aos="fade-up"
              data-aos-delay="500"
            >
              Portfolio
            </Link>
            <Link
              to="/carear"
              className={`${
                location.pathname === "/career"
                  ? "text-white bg-indigo-500"
                  : ""
              } mr-5 hover:text-white hover:bg-indigo-500 px-3 py-2 rounded transition-all duration-300`}
              data-aos="fade-up"
              data-aos-delay="500"
            >
              Carear
            </Link>
            <Link to="/contact">
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-2 px-6 rounded-full shadow-lg hover:from-pink-500 hover:to-purple-500 transform hover:scale-105 transition duration-300 ease-in-out">
                GET TICKET ➡
              </button>
            </Link>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
