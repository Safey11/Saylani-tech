import React from "react";

const QaaEngineer = () => {
  return (
    <div className="bg-black min-h-screen py-20">
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg p-10">
        <h1 className="text-4xl font-extrabold text-[#ce474c] mb-4">
          QA Engineer
        </h1>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Overview</h2>
          <p className="text-gray-700 leading-relaxed">
            As a QA Engineer, you will play a crucial role in ensuring the
            quality and reliability of our software products. You will be
            responsible for designing and implementing testing processes,
            identifying defects, and collaborating with development teams to
            deliver high-quality applications.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Responsibilities
          </h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>
              Develop and execute test plans, test cases, and test scripts.
            </li>
            <li>
              Identify, document, and track defects and issues in a defect
              tracking system.
            </li>
            <li>
              Collaborate with cross-functional teams to improve software
              quality.
            </li>
            <li>
              Participate in code reviews and provide feedback from a quality
              perspective.
            </li>
            <li>
              Automate testing processes where applicable to increase
              efficiency.
            </li>
            <li>
              Conduct regression testing and verify fixes in new releases.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Qualifications
          </h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>
              Bachelor’s degree in Computer Science, Engineering, or a related
              field.
            </li>
            <li>Experience in software testing or quality assurance.</li>
            <li>
              Familiarity with testing tools and frameworks (e.g., Selenium,
              JUnit, TestNG).
            </li>
            <li>Strong analytical skills and attention to detail.</li>
            <li>
              Understanding of software development life cycle (SDLC) and
              methodologies (Agile, Waterfall).
            </li>
            <li>Excellent communication and collaboration skills.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Why Join Us?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Join our dedicated team of QA professionals and contribute to
            delivering high-quality software solutions that enhance user
            satisfaction! We offer a supportive and collaborative environment,
            opportunities for professional growth, and the chance to work with
            cutting-edge technologies. Be part of our mission to uphold the
            highest quality standards in our products.
          </p>
          <button className="bg-[#ce474c] text-white py-2 px-4 rounded shadow-lg hover:from-blue-600 hover:to-blue-800 transition-colors">
            Apply Now
          </button>
        </section>
      </div>
    </div>
  );
};

export default QaaEngineer;
