import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const CarearHelp = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-[#4d153a] to-[#7a2c48] p-4">
            <h1
                className="text-4xl font-bold mb-4 text-white"
                data-aos="fade-up"
            >
                How Can We Help You?
            </h1>
            <p
                className="text-lg text-white mb-6 text-center max-w-md"
                data-aos="fade-up"
                data-aos-delay="200" 
            >
                Are you ready to push boundaries and explore new frontiers of innovation?
            </p>

            <Link to={'/jobletter'}>
                <button
                    className="bg-gradient-to-r from-[#4d153a] to-[#7a2c48] text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300 hover:from-[#7a2c48] hover:to-[#4d153a]"
                    data-aos="zoom-in" // AOS animation for the button
                    data-aos-delay="400"
                >
                    Lets Work Together
                </button>
            </Link>
        </div>
    );
};

export default CarearHelp;
