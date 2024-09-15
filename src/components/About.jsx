// import React, { useState } from "react";
// import Tabs from "./Tabs";

// function About() {
//   const [activeTab, setActiveTab] = useState("skills");

//   return (
//     <div id="about" className="py-20 text-gray-400">
//       <div className="container mx-auto flex flex-wrap justify-between">
//         <div className="about-col-1 flex-basis-1/3">
//           <img
//             src="src/assets/portfolioImage/user.png"
//             alt="image"
//             className="rounded-lg"
//           />
//         </div>
//         <div className="about-col-2 flex-basis-2/3">
//           <h1 className="sub-title text-5xl font-bold text-white">About Me</h1>
//           <p className="mt-5">
//             As a passionate and detail-oriented Frontend Developer, I specialize
//             in crafting visually stunning and highly responsive websites.
//           </p>
//           <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default About;

import React from "react";
// import "./About.css";

const About = () => {
  return (
    <section id="about" className="py-16 bg-black">
      {/* Container for main content */}
      <div className="container mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-8">About Me</h2>

        {/* Flexbox for layout alignment */}
        <div className="flex flex-col lg:flex-row justify-center items-center space-y-8 lg:space-y-0 lg:space-x-16">
          {/* Illustration on the left */}
          <div className="w-1/3">
            <img
              src="src/assets/portfolioImage/11 logo.png"
              alt="Illustration"
              className="w-full"
            />
          </div>

          {/* Information boxes on the right */}
          <div className="w-full lg:w-1/2 flex flex-col space-y-6">
            {/* Experience section */}
            <div className="bg-gray-100 rounded-lg py-6 px-4 shadow-lg">
              <div className="flex justify-center pr-5">
                <span>
                  <img className="h-8" src="src/assets/experience.png" alt="" />
                </span>{" "}
                <h3 className="text-xl font-semibold">Experience</h3>
              </div>
              <p className="text-gray-600 mt-2">
                1+ years frontend-development
              </p>
            </div>

            {/* Education section */}
            <div className="bg-gray-100 rounded-lg py-6 px-4 shadow-lg">
              <div className="flex justify-center pr-5">
                <span>
                  <img className="h-8" src="src/assets/education.png" alt="" />
                </span>{" "}
                <h3 className="text-xl font-semibold">Education</h3>
              </div>
              <p className="text-gray-600 mt-2">
                Becholer of technology and computer science engineering
              </p>
            </div>
          </div>
        </div>

        {/* <div className="relative mt-32 border py-4 px-20 rounded-[15px] mx-20 overflow-hidden"> */}
        {/* Animated background layer */}
        {/* <div className="absolute inset-0 bg-pink-100 animate-slideDown"></div>


          <div className="relative z-10 text-gray-700">
            <p>
              "Hi there! I'm{" "}
              <span >Sangram Singh</span>, a passionate
              frontend developer dedicated to crafting{" "}
              <span>
                engaging, responsive, and intuitive web applications.
              </span>{" "}
              With over a year of experience in frontend development, I
              specialize in turning ideas into visually appealing and functional
              user interfaces.
              <br />
              <br />
              My expertise spans modern web technologies, including{" "}
              <span className="font-semibold">
                React, HTML, CSS, and JavaScript
              </span>
              , allowing me to bring dynamic designs to life while ensuring
              performance and user satisfaction. I take pride in writing clean,
              efficient code and continuously refining my skills to stay ahead
              in the ever-evolving web development landscape.
              <br />
              <br />
              Driven by a love for seamless UX and polished UI, I believe in
              delivering experiences that not only look good but perform
              brilliantly across all devices.
              <br />
              <br />
              Let's create something extraordinary together!"
            </p>
          </div> */}
        {/* </div> */}
      </div>
    </section>
  );
};

export default About;

