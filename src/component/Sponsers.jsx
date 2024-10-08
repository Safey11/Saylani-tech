import Pakola from "../assets/Pakola.jpeg";
import bykea from "../assets/bykea.jpeg";
import pasha from "../assets/pasha.png";
import sirat from "../assets/sirat.jpeg";
import hbl from "../assets/hbl.jpeg";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const sponsors = [
  { id: 1, name: "Pakola", logo: Pakola },
  { id: 2, name: "Pasha", logo: pasha },
  { id: 3, name: "Bykea", logo: bykea },
  { id: 4, name: "HBL", logo: hbl },
  { id: 5, name: "Sirat", logo: sirat },
];

function Sponsors() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS

    const interval = setInterval(() => {
      if (!isHovered) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % sponsors.length); // Loop back to the first sponsor
      }
    }, 2000); // Change slide every 2 seconds

    return () => clearInterval(interval); // Clean up on unmount
  }, [isHovered]);

  // Duplicate sponsors for seamless scrolling
  const displaySponsors = [...sponsors, ...sponsors].map((sponsor, index) => ({
    ...sponsor,
    uniqueId: `${sponsor.id}-${index}`, // Generate a unique key for duplicated items
  }));

  return (
    <div
      className="relative w-full overflow-hidden mt-12 py-8 bg-gray-50" // Background color and padding
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h2 className="text-4xl text-center font-bold mb-8" data-aos="fade-up">
        Our Partner
      </h2>{" "}
      {/* Title with animation */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${
            currentIndex * (100 / displaySponsors.length)
          }%)`,
        }} // Show all logos
      >
        {displaySponsors.map((sponsor) => (
          <div
            key={sponsor.uniqueId}
            className="flex-shrink-0 w-1/4 mx-2"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            {" "}
            {/* Animation for logos */}
            <div className="bg-white shadow-lg rounded-lg p-4 transition-transform duration-300 hover:scale-105 flex justify-center items-center h-full">
              {" "}
              {/* Card for each logo */}
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="w-24 h-24 mx-auto transition-transform duration-300 hover:scale-110" // Slightly larger image size
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sponsors;
