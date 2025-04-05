import React from "react";
import { motion } from "framer-motion";
import sangram from "../assets/sangram-high-resolution-logo-white.png";
import whatsapp from "../assets/sangram image 1.jpg";

// Typewriter effect hook
const useTypewriter = (text, speed = 120) => {
  const [displayedText, setDisplayedText] = React.useState("");
  React.useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, i++));
      if (i > text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text]);
  return displayedText;
};

function Header() {
  const topLine = useTypewriter("Hi, I'm Sangram Singh");



  return (
    <div
      id="header"
      className="w-full h-screen bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden"
    >
      {/* Glow Particles (optional) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute w-60 h-60 bg-pink-500 blur-3xl opacity-20 animate-pulse rounded-full left-[-10%] top-20"></div>
        <div className="absolute w-80 h-80 bg-blue-500 blur-2xl opacity-10 animate-spin-slow rounded-full right-[-10%] top-1/3"></div>
      </div>

      {/* Glass Navbar */}
      <nav className="absolute top-6 left-1/2 transform -translate-x-1/2 w-[92%] px-6 py-4 z-50 bg-white/10 backdrop-blur-md rounded-full shadow-lg flex items-center justify-between">
        {/* Animated SVG + Name */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="flex items-center space-x-3 cursor-pointer group"
        >
          {/* Glowing SVG ring */}
          <svg
            className="w-10 h-10 text-pink-500 group-hover:animate-spin-slow"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" strokeOpacity="0.3" />
            <path d="M2 12a10 10 0 0 0 20 0" />
          </svg>

          {/* Floating Name with Framer */}
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="text-white font-bold text-xl sm:text-2xl bg-gradient-to-r from-pink-500 via-purple-400 to-blue-500 bg-clip-text text-transparent tracking-wide group-hover:translate-y-[-2px] transition-transform"
          >
            Sangram
          </motion.h1>
        </motion.div>

        {/* Navigation Links */}
        <ul className="hidden sm:flex space-x-8 text-white font-medium relative">
          {["Home", "About", "Portfolio", "Contact"].map((item) => (
            <li key={item} className="relative group">
              <a
                href={`#${item.toLowerCase()}`}
                className="relative px-2 py-1 transition-all duration-300 group-hover:text-pink-400"
              >
                {/* Blob glow */}
                <span className="absolute -inset-1 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-pink-500 via-blue-500 to-purple-600 rounded-xl blur-xl transition duration-500"></span>

                {/* Gradient text */}
                <span className="relative z-10 bg-gradient-to-r from-white to-white bg-clip-text text-transparent group-hover:from-pink-500 group-hover:to-purple-500 transition-all duration-300">
                  {item}
                </span>

                {/* Underline */}
                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto relative z-10 flex flex-col-reverse lg:flex-row items-center justify-center h-full px-6">
        {/* Text */}
        <motion.div
          className="text-center lg:text-left mt-16 lg:mt-0"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-white text-lg sm:text-2xl font-medium tracking-wide">
            FullStack Developer
          </p>

          {/* Top Typewriter Line */}
          <h1 className="text-3xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-blue-400 to-purple-500">
            {topLine}
          </h1>

          {/* "From India" Below Line */}
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2.5 }}
            className="text-2xl sm:text-4xl font-semibold mt-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-400 to-blue-500"
          >
            from India
          </motion.p>
        </motion.div>

        {/* Profile Image with glow */}
        <motion.div
          className="rounded-full border-4 border-pink-500 shadow-xl p-2 bg-white/10 backdrop-blur-lg"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
        >
          <img
            className="rounded-full h-48 w-48 sm:h-60 sm:w-60 lg:h-80 lg:w-80 object-cover shadow-lg hover:shadow-pink-500 transition duration-500"
            src={whatsapp}
            alt="Sangram"
          />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-1">
          <motion.div
            className="w-2 h-2 bg-white rounded-full"
            animate={{ y: [0, 6, 0] }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              repeatType: "loop",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
