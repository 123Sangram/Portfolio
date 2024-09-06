import React from "react";
import { motion } from "framer-motion";

function Header() {
  return (
    <div
      id="header"
      className="w-full h-screen bg-cover bg-center relative"
      style={{
        backgroundImage: `url('../assets/portfolioImage/Untitled.png')`,
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="container mx-auto p-4 relative z-10">
        <nav className="flex items-center justify-between flex-wrap">
          <img
            src="src/assets/portfolioImage/sangram-high-resolution-logo-white.png"
            alt="logo"
            className="w-36 transition-transform transform hover:scale-110"
          />
          <ul className="flex space-x-6 text-white">
            {["Home", "About", "Portfolio", "Contact"].map(
              (item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="relative after:content-[''] after:w-0 after:h-[3px] after:bg-pink-500 after:absolute after:left-0 after:bottom-[-6px] hover:after:w-full after:transition-all"
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </nav>
        <div className=' ml-10 mr-20 flex justify-around mt-[-60px] '>
          {/* <div>
            <h1>hii i'm sangram singh</h1>
          </div> */}
          <div className="header-text   text-center text-2xl">
            <motion.p
              className="text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Frontend Developer
            </motion.p>
            {/* part */}
            <motion.h1
              className="text-5xl mt-5 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
            >
              Hi, I'm <span className="text-pink-500">Sangram</span> <br />
              Singh From India
            </motion.h1>
          </div>
          <div className='rounded-full mt-60'>
            <img className='rounded-full h-80 w-80' src="src/assets/portfolioImage/WhatsApp Image 2024-08-24 at 10.04.47_52f57d61 porfolio.jpg" alt="" />
          </div>
        </div>
        <div className="text-center mt-10">
          {/* <a
            href="#portfolio"
            className="inline-block bg-pink-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-pink-600 transition-transform transform hover:scale-105"
          >
            View My Work
          </a> */}
        </div>
      </div>
    </div>
  );
}

export default Header;
