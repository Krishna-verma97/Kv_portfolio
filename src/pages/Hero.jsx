// src/pages/Hero.jsx

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaArrowDown } from "react-icons/fa";
import User from "../assets/Krishna.webp";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
//import resume from "/Krishna_resume.pdf";// Remove this line:


// Instead add this:
const resume = "/Krishna_resume.pdf";




export default function Hero() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <section className="relative flex items-start justify-center pt-12 md:pt-16 pb-16 md:pb-24 bg-[#f7f8fa] dark:bg-[#0f172a] px-4 text-black dark:text-white transition-colors duration-300 overflow-hidden">



      {/* 🌌 Particle Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="absolute inset-0 z-0"
        options={{
          fullScreen: false,
          background: { color: "transparent" },
          particles: {
            number: { value: 60 },
            color: { value: "#ffffff" },
            shape: { type: "circle" },
            opacity: { value: 0.3 },
            size: { value: 2 },
            move: { enable: true, speed: 1 },
          },
        }}
      />

      {/* 🌟 Main Content */}
      <div className="z-20 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 text-center md:text-left max-w-5xl w-full">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
        >
          <img
            src={User}
            alt="Krishna"
            className="h-40 w-40 md:h-48 md:w-48 rounded-full shadow-2xl object-cover"
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-1 md:mb-2 font-heading">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-rose-500 dark:from-indigo-400 dark:to-rose-400 font-bold tracking-tight">
              Krishna Verma
            </span>
          </h1>

          <p className="text-sm md:text-base font-medium text-indigo-700 dark:text-indigo-300 tracking-wide">
            Full Stack Developer & Tech Explorer
          </p>

          <TypeAnimation
            sequence={[
              "React Developer 🚀",
              1500,
              "MERN Stack Enthusiast 🌐",
              1500,
              "Freelancer💸",
              1500,
              "Frontend Expert 🔧",
              1500,
              "Quik Learner ☁️",
              1500,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-lg md:text-xl font-medium text-gray-800 dark:text-gray-200"
          />

          <p className="mt-3 text-base md:text-lg text-gray-700 dark:text-gray-300 max-w-xl leading-relaxed font-body">
            Passionate developer crafting responsive web apps with the MERN stack. Always evolving, with a growing focus on cloud and DevOps technologies.
          </p>

          {/* 🎯 CTA Buttons */}
          <div className="mt-4 flex gap-4 justify-center md:justify-start">
            <a
              href="mailto:kv979539g@gmail.com?subject=Let's Work Together&body=Hi Krishna,%0D%0A%0D%0AI saw your portfolio and I'm impressed. I'm interested in working with you on a project or opportunity.%0D%0A%0D%0ARegards,%0D%0A[Your Name]"
              className="relative inline-flex items-center justify-center px-6 py-2 border border-indigo-600 text-indigo-600 dark:text-white hover:bg-indigo-50 dark:hover:bg-white/10 rounded-xl font-semibold shadow-md transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-indigo-400/40 focus:outline-none focus:ring-2 focus:ring-indigo-400 whitespace-nowrap"
            >
              Hire Me
            </a>

            <a
               href={resume}
               download
               className="relative inline-block px-6 py-2 border border-indigo-600 text-indigo-600 dark:text-white hover:bg-indigo-50 dark:hover:bg-white/10 rounded-xl font-semibold shadow-md transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-indigo-400/40 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
                Download Resume
            </a>

          </div>
        </motion.div>
      </div>

      {/* 🔻 Scroll Indicator (optional) */}
      {/* <a
        href="#about"
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-gray-700 dark:text-gray-300 z-20 cursor-pointer transition-transform duration-300 hover:scale-110 hover:rotate-12 hover:text-indigo-500 animate-bounce"
      >
        <FaArrowDown size={28} />
      </a> */}
    </section>
  );
}
