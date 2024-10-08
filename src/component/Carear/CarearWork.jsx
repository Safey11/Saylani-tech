import { Link } from "react-router-dom";

const CarearWork = () => {
    return (
        <section className="bg-gradient-to-r from-[#ca464a] to-[#4d163d] py-20" data-aos={'fade-in'}>
            <div className="container mx-auto flex flex-col md:flex-row px-6 items-center">
                {/* Text Section (Visible First on Mobile) */}
                <div className="flex-1 mb-10 md:mb-0 md:pr-10">
                    <h1 className="text-5xl font-extrabold text-white mb-6">
                        We are from the people
                    </h1>
                    <p className="text-lg text-gray-200 mb-8">
                        We are a team of 6500+ people – with a purpose to thrive
                        in our value-driven culture and make a real and lasting
                        difference to the organization and their careers.
                    </p>

                    {/* Button to Portfolio */}
                    <div className="mt-8">
                        <Link to={'/portfolio'}>
                            <button className="inline-flex items-center justify-center px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg shadow-md hover:bg-indigo-500 hover:text-white transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-300">
                                Visit Our Portfolio
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Image Section (Visible Last on Mobile) */}
                <div className="flex-1 flex justify-center items-center">
                    <img
                        src="https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2022/04/web-developer-portfolio.webp" // Replace with your image URL
                        alt="Web Development"
                        className="object-cover rounded-lg shadow-2xl transform transition duration-500 hover:scale-105 w-full h-full"
                    />
                </div>
            </div>
        </section>
    );
};

export default CarearWork;
