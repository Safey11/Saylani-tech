import { Link } from "react-router-dom";
import { FcElectroDevices } from "react-icons/fc";
import Aos from "aos";

const AppWork = () => {
  return (
    <section className="bg-gray-100 py-20" data-aos={"fade-in"}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-center items-center">
          <img
            src="https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2022/04/web-developer-portfolio.webp" // Replace with your image URL
            alt="Web Development"
            className="object-cover rounded-lg shadow-2xl transform transition duration-500 hover:scale-105 md:w-1/2"
          />
          <div className="md:pl-10 mt-8 md:mt-0">
            <h1 className="text-4xl font-extrabold text-[#ce474c] mb-6">
              Build Fast, Reliable, and High-Quality Websites
            </h1>
            <p className="text-lg text-black mb-8">
              I specialize in creating websites that not only look stunning but
              also perform seamlessly. Here's what I offer:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Timely Work",
                  description:
                    "Optimized loading speeds to keep your users engaged.",
                  icon: "",
                },
                {
                  title: "Reliable",
                  description:
                    "Robust systems to ensure your website is always up and running.",
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
                  className="flex flex-col items-start p-6 bg-white rounded-lg shadow-md transition transform duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="flex items-center mb-2">
                    <img
                      src={item.icon}
                      alt={`${item.title} Icon`}
                      className="w-8 h-8 mr-2 transition duration-300 transform hover:scale-110"
                    />
                    <h2 className="font-semibold text-xl text-[#ce474c]">
                      {item.title}
                    </h2>
                  </div>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
            {/* Attractive Button */}
            <div className="mt-8">
              <Link to={"/portfolio"}>
                <button className="inline-flex items-center justify-center px-6 py-3 bg-[#ce474c] text-white font-semibold rounded-lg shadow-md hover:bg-indigo-500 hover:text-white transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-300">
                  Visit Our Portfolio
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AppWork;
