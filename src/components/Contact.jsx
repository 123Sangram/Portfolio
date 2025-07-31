import React, { useState } from "react";
import emailjs from "emailjs-com";
import resume from "../assets/Sangram-Resume1.pdf.pdf";

import { SiLeetcode } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submittedUser, setSubmittedUser] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_a0s2kuc",
        "template_juc0ain",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "WL02mS5GrWPD4u-1e"
      )
      .then(
        () => {
          setSubmittedUser({ name: formData.name, email: formData.email });
        },
        (error) => {
          console.error(error.text);
          alert("An error occurred, please try again.");
        }
      );
  };

  return (
    <section
      id="contact"
       className="py-32  bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden"
    >
      {/* line add */}
      <div className="absolute top-0 left-24  w-full h-1 bg-pink-900"></div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-6xl mx-auto px-4 md:px-8"
      >
        <h2 className="text-5xl font-bold mb-12 text-center">Contact Me</h2>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <p className="text-lg mb-4">
              📧 <span className="font-semibold">sangramamvan@gmail.com</span>
            </p>
            <p className="text-lg mb-4">
              📞 <span className="font-semibold">6386054411</span>
            </p>
            <div className="flex gap-6 text-3xl my-4">
              <a
                href="https://leetcode.com/u/sangramamvan/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-400 transition-all"
              >
                <SiLeetcode />
              </a>
              <a
                href="https://www.linkedin.com/in/sangram-singh-706715272/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-all"
              >
                <FaLinkedin />
              </a>
            </div>
            <a
              href={resume}
              download
              className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 transition-all px-6 py-2 rounded-full font-semibold text-white shadow-lg"
            >
              📄 Download Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="bg-gray-800 p-8 rounded-xl shadow-lg"
          >
            {!submittedUser ? (
              <form onSubmit={sendEmail} className="space-y-6">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  required
                  className="w-full p-3 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your Email"
                  required
                  className="w-full p-3 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="6"
                  placeholder="Your Message"
                  required
                  className="w-full p-3 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                ></textarea>
                <button
                  type="submit"
                  className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-pink-500 hover:to-purple-600 transition-all text-white px-6 py-2 rounded-full font-bold shadow-md"
                >
                  ✉️ Submit
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center"
              >
                <h3 className="text-2xl font-semibold mb-2 text-green-400">
                  Thank you, {submittedUser.name}!
                </h3>
                <p className="text-gray-300">
                  We have received your message and will get back to you at{" "}
                  <span className="underline">{submittedUser.email}</span> soon.
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;
