import React from "react";
import pic1 from "../assets/Screenshot 2025-07-02 210921.png";
import pic2 from "../assets/Screenshot 2024-09-05 141053.png";
import pic3 from "../assets/Screenshot 2025-04-01 224608.png";
import { motion } from "framer-motion";

function Portfolio() {
  const handleMovieLink1 = () => {
    window.open(
      "https://github.com/123Sangram/doctor",
      "_blank"
    );
  };

  const handleMovieLink2 = () => {
    window.open("https://my-fullstack-app-67.onrender.com/");
  };

  const handleMovieLink3 = () => {
    window.open("https://e-commerse-olive.vercel.app/", "_blank");
  };

  const cardVariants = {
    hover: { scale: 1.05, boxShadow: "0 0 30px rgba(255, 255, 255, 0.15)" },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.2 } }),
  };

  return (
    <div
      id="portfolio"
      className="py-24 bg-gradient-to-br from-black via-gray-900 to-black text-white"
    >
      <div className="container mx-auto px-6">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl font-black text-center mb-20 bg-gradient-to-r from-yellow-400 to-pink-500 text-transparent bg-clip-text"
        >
          My Work
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              img: pic1,
              title: "Doctor Appointment",
              description: [
                "Book and manage appointments easily.",
                "Responsive UI with doctor search and filters.",
                "Built with React hooks and functional components.",
              ],
              handler: handleMovieLink1,
            },
            {
              img: pic2,
              title: "Full Stack App",
              description: [
                "User authentication with JWT and bcrypt.",
                "MongoDB, Express, React, Node.js stack.",
                "CRUD operations with API integration.",
              ],
              handler: handleMovieLink2,
            },
            {
              img: pic3,
              title: "E-commerce Website",
              description: [
                "Product listing with cart and checkout functionality.",
                "Integrated Stripe for payment handling.",
                "Tailwind CSS for sleek responsive design.",
              ],
              handler: handleMovieLink3,
            },
          ].map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              onClick={project.handler}
              className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-md transition-all duration-500 transform cursor-pointer shadow-lg hover:shadow-yellow-400/40"
            >
              <img
                src={project.img}
                alt={project.title}
                className="h-[470px] w-full object-cover"
              />
              <motion.div
                variants={textVariants}
                initial="hidden"
                whileInView="visible"
                custom={index}
                viewport={{ once: true }}
                className="p-6"
              >
                <h3 className="text-2xl font-bold mb-4 text-yellow-400 group-hover:text-white transition-colors duration-300">
                  {project.title}
                </h3>
                <ul className="list-disc ml-5 space-y-1 text-sm text-gray-300">
                  {project.description.map((point, idx) => (
                    <motion.li
                      key={idx}
                      variants={textVariants}
                      custom={idx}
                      className="leading-relaxed"
                    >
                      {point}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
        <div className="mt-16 text-center "></div>
      </div>
    </div>
  );
}

export default Portfolio;
