import React from "react";
import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiGithub,
  SiMongodb,
  SiExpress,
  SiVisualstudiocode,
  SiNodedotjs,
} from "react-icons/si";

const techStack = [
  {
    title: "HTML",
    icon: <SiHtml5 className="text-orange-500 text-5xl animate-pulse" />,
    level: "Experienced",
    description:
      "HTML is the backbone of web pages. It structures content using semantic tags like <header>, <section>, and <footer>.",
  },
  {
    title: "CSS",
    icon: <SiCss3 className="text-blue-500 text-5xl animate-bounce" />,
    level: "Experienced",
    description:
      "CSS styles HTML using selectors, flex/grid layouts, animations, and media queries for responsive designs.",
  },
  {
    title: "JavaScript",
    icon: <SiJavascript className="text-yellow-400 text-5xl animate-wiggle" />,
    level: "Intermediate",
    description:
      "JavaScript adds interactivity to websites. It powers dynamic DOM manipulation, events, and API communication.",
  },
  {
    title: "React.js",
    icon: <SiReact className="text-blue-400 text-5xl animate-spin-slow" />,
    level: "Intermediate",
    description:
      "React is a JavaScript library for building fast, reusable UI components using a virtual DOM and hooks.",
  },
  {
    title: "Tailwind CSS",
    icon: <SiTailwindcss className="text-teal-400 text-5xl animate-float" />,
    level: "Intermediate",
    description:
      "Tailwind is a utility-first CSS framework. It enables rapid UI development with consistent design tokens.",
  },
  {
    title: "Git & GitHub",
    icon: (
      <SiGithub className="text-white bg-black p-2 rounded-full text-5xl animate-scale" />
    ),
    level: "Intermediate",
    description:
      "Git is a version control system. GitHub is a platform to host and collaborate on repositories with issues, PRs, and CI/CD.",
  },
  {
    title: "MongoDB",
    icon: <SiMongodb className="text-green-500 text-5xl animate-bounce" />,
    level: "Intermediate",
    description:
      "MongoDB is a NoSQL database storing JSON-like documents. It allows for flexible schemas and fast queries.",
  },
  {
    title: "Express",
    icon: (
      <SiExpress className="text-gray-200 bg-black p-2 rounded-full text-5xl animate-wiggle" />
    ),
    level: "Intermediate",
    description:
      "Express is a Node.js web framework. It simplifies server-side routing, middleware, and APIs.",
  },
  {
    title: "VS Code",
    icon: (
      <SiVisualstudiocode className="text-blue-500 text-5xl animate-pulse" />
    ),
    level: "Intermediate",
    description:
      "VS Code is a powerful source-code editor. It supports extensions, debugging, Git, and more for efficient dev workflows.",
  },
  {
    title: "Node.js",
    icon: <SiNodedotjs className="text-green-600 text-5xl animate-rotate" />,
    level: "Intermediate",
    description:
      "Node.js runs JavaScript on servers. It's event-driven and perfect for building fast, scalable backend apps.",
  },
];

const Service = () => {
  return (
    <section className="py-32  bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
      {/* Particle background effect */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-[url('/particles.svg')] bg-cover opacity-10 animate-pulse-slow"></div>
      </div>
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-600 mb-16"
        >
          My Tech Toolbox
        </motion.h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group bg-gradient-to-tr from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/10 hover:border-yellow-400 hover:scale-105 transition-all duration-500 cursor-pointer transform-gpu hover:shadow-yellow-400/60"
            >
              <div className="flex items-center justify-center mb-5 transform group-hover:scale-110 transition-transform duration-500">
                {tech.icon}
              </div>
              <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300">
                {tech.title}
              </h2>
              <p className="text-yellow-400 text-base font-medium mb-3">
                {tech.level}
              </p>
              <p className="text-gray-300 text-sm leading-relaxed">
                {tech.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
