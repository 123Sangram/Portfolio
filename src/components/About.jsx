import React from "react";
import logo from "../assets/11 logo.png";
import experience from "../assets/experience.png";
import education from "../assets/education.png";

const About = () => {
  return (
    <section
      id="about"
      className="pt-40 bg-gradient-to-t from-gray-900 via-black to-black-200 text-white"
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-5xl font-extrabold mb-14 tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
          About Me
        </h2>

        <div className="flex flex-col lg:flex-row justify-center items-center gap-12">
          {/* Left Illustration */}
          <div className="w-64 h-64 flex items-center justify-center transform hover:scale-105 transition duration-500">
            <img
              src={logo}
              alt="Illustration"
              className="rounded-2xl shadow-2xl w-full object-contain"
            />
          </div>

          {/* Right Content Cards */}
          <div className="flex flex-col gap-10 w-full max-w-xl">
            {/* Experience */}
            <div className="bg-white bg-opacity-5 backdrop-blur-md border border-gray-700 rounded-2xl px-6 py-8 shadow-lg hover:shadow-blue-500/50 transition duration-500">
              <div className="flex items-center gap-4 mb-4">
                <img src={experience} alt="Experience Icon" className="h-10" />
                <h3 className="text-2xl font-semibold text-blue-400">
                  Experience
                </h3>
              </div>
              <p className="text-gray-300 text-lg">
                1+ years fullstack development
              </p>
            </div>

            {/* Education */}
            <div className="bg-white bg-opacity-5 backdrop-blur-md border border-gray-700 rounded-2xl px-6 py-8 shadow-lg hover:shadow-teal-400/50 transition duration-500">
              <div className="flex items-center gap-4 mb-4">
                <img src={education} alt="Education Icon" className="h-10" />
                <h3 className="text-2xl font-semibold text-teal-400">
                  Education
                </h3>
              </div>
              <p className="text-gray-300 text-lg">
                Bachelor of Technology in Computer Science and Engineering
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
