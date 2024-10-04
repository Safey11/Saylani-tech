import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';

const Navbar = () => {
  const location = useLocation();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false); // State to track mobile menu
  const [imageUrl, setImageUrl] = useState('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN5XaPknTWTxdBcdC3r0_9blSi_8n3rD_2Xg&s'); // Default image

  const UNSPLASH_API_KEY = 'OC1nfXOHm-yk-XWGO05G01ai4-1z_RE_RTrZSBcDCdU';

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const toggleDropdown = () => {
    setDropdownOpen(prev => !prev);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(prev => !prev);
  };

  const fetchImage = async (query) => {
    try {
      const response = await axios.get(`https://api.unsplash.com/search/photos`, {
        params: {
          query,
          client_id: UNSPLASH_API_KEY,
        },
      });
      if (response.data.results.length > 0) {
        setImageUrl(response.data.results[0].urls.small);
      } else {
        setImageUrl('https://via.placeholder.com/300x200?text=No+Image+Found');
      }
    } catch (error) {
      console.error("Error fetching image:", error);
      setImageUrl('https://via.placeholder.com/300x200?text=Error');
    }
  };

  return (
    <div className="sticky top-0 z-50">
      <header className="text-gray-400 bg-gray-900 body-font" data-aos="fade-down">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          {/* Logo and Hamburger Menu */}
          <div className="flex justify-between items-center w-full md:w-auto">
            <div className="flex title-font font-medium items-center text-white mb-4 md:mb-0" data-aos="fade-right">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <Link to={'/'}><span className="ml-3 text-xl">Tailblocks</span></Link>
            </div>

            {/* Hamburger menu button for mobile */}
            <button
              className="md:hidden text-gray-400 hover:text-white focus:outline-none focus:text-white"
              onClick={toggleMobileMenu}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>

          {/* Main navigation menu */}
          <nav className={`md:ml-auto md:mr-auto md:flex ${isMobileMenuOpen ? 'block' : 'hidden'} w-full md:w-auto text-center md:text-left flex flex-col md:flex-row justify-center`}>
            <Link to="/" className={`${location.pathname === '/' ? 'text-white bg-indigo-500' : ''} block md:inline mr-5 hover:text-white hover:bg-indigo-500 px-3 py-2 rounded transition-all duration-300`} data-aos="fade-up">Home</Link>
            <Link to="/about" className={`${location.pathname === '/about' ? 'text-white bg-indigo-500' : ''} block md:inline mr-5 hover:text-white hover:bg-indigo-500 px-3 py-2 rounded transition-all duration-300`} data-aos="fade-up" data-aos-delay="100">About</Link>

            {/* Dropdown for services */}
            <div className="relative">
             
              <Link
                to="/services"
                className={`${location.pathname.startsWith('/services') ? 'text-white bg-indigo-500 ' : ''} block md:inline mr-5 hover:text-white hover:bg-indigo-500 px-3 py-2 rounded transition-all duration-300 flex items-center p-100`}
                onClick={toggleDropdown}
                data-aos="fade-up" data-aos-delay="200"
              >
                Services
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </Link>
              

              {isDropdownOpen && (
                <div className="absolute top-12 left-0 w-full bg-gray-800 shadow-lg z-40 p-8 grid grid-cols-1 md:grid-cols-4 gap-10" data-aos="fade-down">
                  <div className="col-span-1">
                    <img
                      src={imageUrl}
                      alt="Service"
                      className="w-full h-auto rounded-lg"
                      style={{ width: '300px', height: '200px', objectFit: 'cover' }}
                    />
                  </div>

                  <div className="col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <h3 className="text-white text-lg mb-2">Web & App Development</h3>
                      <Link to="/web" onClick={() => fetchImage('web development')} className="block px-3 py-2 text-gray-300 hover:text-indigo-500">Web Development</Link>
                      <Link to="/app" onClick={() => fetchImage('app development')} className="block px-3 py-2 text-gray-300 hover:text-indigo-500">App Development</Link>
                      <Link to="/ecommerce" onClick={() => fetchImage('ecommerce')} className="block px-3 py-2 text-gray-300 hover:text-indigo-500">E-commerce Solutions</Link>
                    </div>

                    <div>
                      <h3 className="text-white text-lg mb-2">Graphic Designing</h3>
                      <Link to="/logo" onClick={() => fetchImage('logo design')} className="block px-3 py-2 text-gray-300 hover:text-indigo-500">Logo Design</Link>
                      <Link to="/branding" onClick={() => fetchImage('branding')} className="block px-3 py-2 text-gray-300 hover:text-indigo-500">Branding</Link>
                      <Link to="/illustration" onClick={() => fetchImage('illustration')} className="block px-3 py-2 text-gray-300 hover:text-indigo-500">Illustration</Link>
                    </div>

                    <div>
                      <h3 className="text-white text-lg mb-2">SEO Optimization</h3>
                      <Link to="/seo" onClick={() => fetchImage('seo optimization')} className="block px-3 py-2 text-gray-300 hover:text-indigo-500">SEO Optimization</Link>
                      <Link to="/devops" onClick={() => fetchImage('devops')} className="block px-3 py-2 text-gray-300 hover:text-indigo-500">DevOps</Link>
                      <Link to="/qaengineer" onClick={() => fetchImage('QA engineer')} className="block px-3 py-2 text-gray-300 hover:text-indigo-500">QA Engineer</Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link to="/contact" className={`${location.pathname === '/contact' ? 'text-white bg-indigo-500' : ''} block md:inline mr-5 hover:text-white hover:bg-indigo-500 px-3 py-2 rounded transition-all duration-300`} data-aos="fade-up" data-aos-delay="300">Contact</Link>
            <Link to="/team" className={`${location.pathname === '/team' ? 'text-white bg-indigo-500' : ''} block md:inline mr-5 hover:text-white hover:bg-indigo-500 px-3 py-2 rounded transition-all duration-300`} data-aos="fade-up" data-aos-delay="400">Team</Link>
            <Link to="/portfolio" className={`${location.pathname === '/portfolio' ? 'text-white bg-indigo-500' : ''} block md:inline mr-5 hover:text-white hover:bg-indigo-500 px-3 py-2 rounded transition-all duration-300`} data-aos="fade-up" data-aos-delay="500">Portfolio</Link>
            <Link to="/get-ticket" className="inline-flex items-center justify-center text-white bg-gradient-to-r from-purple-500 to-pink-500 px-5 py-2 rounded-md hover:opacity-75 transition duration-300" data-aos="fade-up" data-aos-delay="600">
              GET TICKET
              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14"></path>
              </svg>
            </Link>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
