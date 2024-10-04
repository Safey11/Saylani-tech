import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import zaitoon from "../../assets/zaitoon.jpg";
import { Link } from "react-router-dom";

const slides = [
  {
    title: "Grow Your Business",
    description:
      "Empower your business with powerful tools and analytics to drive growth and maximize performance.",
    imageUrl: zaitoon,
  },
  {
    title: "Discover New Horizons",
    description:
      "Expand your reach and discover new opportunities with our comprehensive platform.",
    imageUrl:
      "https://th.bing.com/th/id/R.1b5c7a1c2e5f9d26a08d3e3f1f9a4bf0?rik=jhfK%2b8yxFD4wkw&pid=ImgRaw&r=0",
  },
  {
    title: "Transform Your Workflow",
    description:
      "Streamline your operations and transform the way you work with our cutting-edge tools.",
    imageUrl:
      "https://th.bing.com/th/id/OIP.JZ0L_6VP7hoRocG0HfguSAHaE8?pid=ImgDet&w=178&h=118&c=7&dpr=1.3",
  },
];

function AppHero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Autoplay Functionality
  useEffect(() => {
    if (isHovered) return; // Stop autoplay if hovered
    const timer = setTimeout(() => {
      nextSlide();
    }, 2000);

    return () => clearTimeout(timer);
  }, [currentIndex, isHovered]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="bg-gradient-to-r from-gray-900 via-indigo-900 to-gray-900  py-12">
      {" "}
      {/* Added Background Color */}
      <div
        className="relative max-w-5xl h-[30rem] mx-auto overflow-hidden rounded-lg shadow-lg "
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Previous and Next Buttons */}
        <div className="absolute inset-0 flex items-center justify-between px-4 z-10">
          <button
            onClick={prevSlide}
            className="bg-gray-200 p-2 rounded-full shadow-lg hover:bg-gray-300 hover:scale-110 transition transform"
          >
            <ChevronLeftIcon className="h-6 w-6 text-gray-800" />
          </button>
          <button
            onClick={nextSlide}
            className="bg-gray-200 p-2 rounded-full shadow-lg hover:bg-gray-300 hover:scale-110 transition transform"
          >
            <ChevronRightIcon className="h-6 w-6 text-gray-800" />
          </button>
        </div>

        {/* Slide Content */}
        <div
          className="flex transition-opacity ease-in-out duration-1000"
          style={{ opacity: isHovered ? 0.9 : 1 }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={slide.imageUrl}
                alt={slide.title}
                className="w-full h-[30rem] object-cover transition transform hover:scale-105 duration-700 ease-in-out"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70" />

              {/* Slide Text */}
              <div className="absolute bottom-20 left-10 text-white z-10">
                <h2 className="text-4xl font-extrabold tracking-wide drop-shadow-lg">
                  {slide.title}
                </h2>
                <p className="mt-2 text-lg font-light tracking-wide drop-shadow-md">
                  {slide.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Dots Navigation */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 flex space-x-3">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              {/* Slide Content */}
            </div>
          ))}
        </div>

        {/* Autoplay Progress Bar */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-200">
          <div
            className="h-full bg-indigo-600 transition-all"
            style={{ width: `${(currentIndex + 1) * (100 / slides.length)}%` }}
          />
        </div>
      </div>
    </div>
  );
}

export default AppHero;
