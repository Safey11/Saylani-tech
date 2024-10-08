import { Link } from "react-router-dom";
import { FcElectroDevices } from "react-icons/fc";
import Aos from "aos";

const AppWork = () => {
  return (
    <section
      className="bg-gradient-to-r from-[#ca464a] to-[#4d163d] py-12 md:py-20"
      data-aos={"fade-in"}
    >
      <div className="container mx-auto px-4 sm:px-6">
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-white text-center md:text-left mb-4 md:mb-6">
          Build Fast, Reliable, and High-Quality Websites
        </h1>
        <p className="text-base md:text-lg text-gray-200 text-center md:text-left mb-8">
          I specialize in creating websites that not only look stunning but also
          perform seamlessly. Here's what I offer:
        </p>

        {/* Main Section */}
        <div className="flex flex-col md:flex-row justify-center items-center md:space-x-10">
          {/* Image */}
          <img
            src="https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2022/04/web-developer-portfolio.webp"
            alt="Web Development"
            className="object-cover shadow-lg transform transition duration-500 hover:scale-105 w-full md:w-1/2 mb-8 md:mb-0"
          />

          {/* Features Section */}
          <div className="w-full md:w-1/2 grid grid-cols-1 gap-6 md:gap-8">
            {[
              {
                title: "Timely Work",
                description: "Optimized loading speeds to keep your users engaged.",
                icon: "", // You can add icons or keep them empty as placeholders
              },
              {
                title: "Reliable",
                description: "Robust systems to ensure your website is always up and running.",
                icon: <FcElectroDevices />,
              },
              {
                title: "Quality",
                description: "Beautiful design and seamless functionality.",
                icon: "",
              },
              {
                title: "Maintainable",
                description: "Code that is easy to read, update, and scale.",
                icon: "",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start p-6 bg-white rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl hover:-translate-y-1"
                style={{
                  borderRadius: "8px", // Gives cards soft rounded corners
                  border: "1px solid #e5e7eb", // Subtle border for card definition
                }}
              >
                <div className="flex items-center justify-center bg-gray-100 w-12 h-12 rounded-md mr-4">
                  {item.icon && <div className="text-2xl">{item.icon}</div>}
                </div>
                <div>
                  <h2 className="font-semibold text-lg text-gray-800">{item.title}</h2>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-8 flex justify-center md:justify-start">
          <Link to={"/portfolio"}>
            <button className="inline-flex items-center justify-center px-6 py-3 bg-white text-[#ca464a] font-semibold shadow-md hover:bg-[#4d163d] hover:text-white transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#ca464a]">
              Visit Our Portfolio
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AppWork;
