import React, { useEffect } from "react";
import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";
import Aliyan from "../../assets/Aliyan.jpg";
import zeeshan from "../../assets/zeeshan-ajjaz.jpeg";
import wajid from "../../assets/wajid.jpg";
import ghous from "../../assets/ghous.jpeg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Team members array
const teamMembers = [
  {
    id: 1,
    name: "Aliyan Sheikh",
    position: "Project Manager",
    description: "Expert in full-stack development",
    image: Aliyan,
  },
  {
    id: 2,
    name: "Zeshan Ajjaz",
    position: "lead manager",
    description: "Specialized in Node.js and databases",
    image: zeeshan,
  },
  {
    id: 3,
    name: "Wajid Ahmed",
    position: "UI/UX Designer",
    description: "Creating user-friendly designs",
    image: wajid,
  },
  {
    id: 4,
    name: "Ghous Ahmed",
    position: "Devolopers Head",
    description: "Overseeing project execution ",
    image: ghous,
  },
];

const TeamSection = () => {
  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({ duration: 1500, once: true });
  }, []);

  // Slider settings
  const settings = {
    className: "center",
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    centerPadding: "60px",
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-gradient-to-r from-[#4d193d] via--[#9f6e8f] to-[#4d193d] py-14 mt-14">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-10" data-aos="fade-up">
          Meet Our Team
        </h2>
        <Slider {...settings}>
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="flex justify-center"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <div className="bg-white shadow-2xl border border-indigo-500 transform transition duration-500 hover:scale-105 hover:shadow-indigo-600 rounded-lg p-5 mx-5">
                <center>
                  <figure className="mr-5">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="object-cover h-24 w-24 rounded-full border-4 border-[#ce474c] shadow-lg"
                    />
                  </figure>
                </center>
                <br />
                <div className="cards-body">
                  <h3 className="cards-title text-2xl font-semibold text-[#ce474c] mb-1">
                    {member.name}
                  </h3>
                  <h4 className="text-lg text-black mb-2">{member.position}</h4>
                  <p className="text-black text-sm">{member.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TeamSection;
