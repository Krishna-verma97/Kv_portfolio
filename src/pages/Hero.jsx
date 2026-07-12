// src/pages/Hero.jsx

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaArrowDown } from "react-icons/fa";
import User from "../assets/Krishna.webp";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import SEO from "../components/seo/SEO";
import { Link } from "react-router-dom";
//import resume from "/Krishna_resume.pdf";// Remove this line:
import FloatingTerminalButton from "../components/FloatingTerminalButton";

// Instead add this:
const resume = "/Krishna_Verma_Resume.pdf";





export default function Hero() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <>
    <SEO
        title="Krishna Verma | Full Stack Developer"
        description="Portfolio of Krishna Verma showcasing MERN projects, DevOps journey, Knowledge Base and technical blogs."
      />

    {/* <section className="relative flex items-start justify-center pt-12 md:pt-16 pb-8 md:pb-12 bg-[#f7f8fa] dark:bg-[#0f172a] px-4 text-black dark:text-white transition-colors duration-300 overflow-hidden"> */}

    <section className="relative flex items-start justify-center pt-10 md:pt-16 pb-4 md:pb-12 bg-[#f7f8fa] dark:bg-[#0f172a] px-4 text-black dark:text-white transition-colors duration-300 overflow-hidden">

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
      <div className="relative z-20 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 text-center md:text-left max-w-5xl w-full">
        {/* Image */}
        <motion.div
         className="shrink-0"
        // className="w-full min-w-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
        >
          <img
            src={User}
            alt="Krishna"
            className="h-40 w-40 md:h-48 md:w-48 rounded-full shadow-2xl object-cover flex-shrink-0"
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
        className="w-full min-w-0"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-4xl font-extrabold mb-1 md:mb-2 font-heading">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-rose-500 dark:from-indigo-400 dark:to-rose-400 font-bold tracking-tight">
              Krishna Verma
            </span>
          </h1>

          <p className="text-sm md:text-base font-medium text-indigo-700 dark:text-indigo-300 tracking-wide">
            Full Stack Engineer | Cloud & DevOps Explorer ☁️
          </p>

          <TypeAnimation
            sequence={[
              "Building Scalable Systems 🚀",
              1500,
              "DevOps Enthusiast ⚡",
              1500,
              "Freelancer💸",
              1500,
              "Full Stack Engineer 🔧",
              1500,
              "Open Source Learner 🌐",
              1500,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-lg md:text-xl font-medium text-gray-800 dark:text-gray-200"
          />

          <p className="mt-3 text-base md:text-lg text-gray-700 dark:text-gray-300 max-w-xl leading-relaxed font-body">
           Full Stack Engineer building responsive, scalable web applications. 
           I enjoy transforming ideas into fast, scalable, and user-friendly applications. My current focus is Full Stack Development, Cloud Engineering, DevOps, and AI-driven technologies.
          </p>

          {/* 🎯 CTA Buttons */}
          {/* <div className="mt-4 flex gap-4 justify-center md:justify-start"> */}
            {/* <div className="mt-6 flex flex-wrap gap-3 justify-center md:justify-start"> */}
            {/* <div className="mt-5 flex flex-wrap justify-center md:justify-start gap-2 md:gap-4"> */}
            <div className="mt-5 flex justify-center md:justify-start gap-2 md:gap-4 w-full">
            <a
              href="mailto:kv979539g@gmail.com?subject=Let's Work Together&body=Hi Krishna,%0D%0A%0D%0AI saw your portfolio and I'm impressed. I'm interested in working with you on a project or opportunity.%0D%0A%0D%0ARegards,%0D%0A[Your Name]"
              // className="relative inline-flex items-center justify-center px-4 md:px-6 py-2 text-sm md:text-base border border-indigo-600 text-indigo-600 dark:text-white hover:bg-indigo-50 dark:hover:bg-white/10 rounded-xl font-semibold shadow-md transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-indigo-400/40 focus:outline-none focus:ring-2 focus:ring-indigo-400 whitespace-nowrap"
            className="flex-1 max-w-[110px] md:flex-none md:max-w-none inline-flex items-center justify-center px-3 md:px-6 py-2 text-xs md:text-base border border-indigo-600 text-indigo-600 dark:text-white hover:bg-indigo-50 dark:hover:bg-white/10 rounded-xl font-semibold shadow-md transition-all duration-300 hover:scale-105"
            >
              Hire Me
            </a>

            <a
               href={resume}
               download
              //  className="relative inline-block px-4 md:px-6 py-2 text-sm md:text-base border border-indigo-600 text-indigo-600 dark:text-white hover:bg-indigo-50 dark:hover:bg-white/10 rounded-xl font-semibold shadow-md transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-indigo-400/40 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            className="flex-1 max-w-[140px] md:flex-none md:max-w-none inline-flex items-center justify-center px-3 md:px-6 py-2 text-xs md:text-base border border-indigo-600 text-indigo-600 dark:text-white hover:bg-indigo-50 dark:hover:bg-white/10 rounded-xl font-semibold shadow-md transition-all duration-300 hover:scale-105"
            >
                Download Resume
            </a>
            <Link
    to="/blog"
    // className="relative inline-block px-4 md:px-6 py-2 text-sm md:text-base border border-indigo-600 text-indigo-600 dark:text-white hover:bg-indigo-50 dark:hover:bg-white/10 rounded-xl font-semibold shadow-md transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-indigo-400/40 focus:outline-none focus:ring-2 focus:ring-indigo-400"
className="flex-1 max-w-[125px] md:flex-none md:max-w-none inline-flex items-center justify-center px-3 md:px-6 py-2 text-xs md:text-base border border-indigo-600 text-indigo-600 dark:text-white hover:bg-indigo-50 dark:hover:bg-white/10 rounded-xl font-semibold shadow-md transition-all duration-300 hover:scale-105"
>
    📚 Read Articles
</Link>
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
     <FloatingTerminalButton variant="hero" />


        {/* 🚀 Explore Section */}
{/* <section className="py-20 bg-white dark:bg-[#111827] transition-colors duration-300"> */}
{/* <section className="pt-10 pb-20 bg-white dark:bg-[#111827] transition-colors duration-300"> */}
  <section className="pt-4 md:pt-12 pb-16 md:pb-20 bg-white dark:bg-[#111827] transition-colors duration-300">
  <div className="mx-auto max-w-7xl px-6">

    <div className="text-center">
      {/* <h2 className="text-4xl font-bold"> */}
      <h2 className="text-3xl md:text-4xl font-bold">
        Explore My Work
      </h2>

      <p className="mt-4 text-gray-600 dark:text-gray-400">
        Discover my projects, technical documentation, developer blog, and professional journey.
      </p>
    </div>

    {/* <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-4"> */}
        {/* <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5"> */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6">
      {/* Projects */}
      <Link
        to="/projects"
        className="group rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 p-6 transition hover:-translate-y-2 hover:border-indigo-500 hover:shadow-xl"
      >
        <div className="text-4xl">💼</div>

        <h3 className="mt-6 text-xl font-bold">
          Projects
        </h3>

        <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-400">
          Production-ready MERN applications and case studies.
        </p>

        <div className="mt-6 font-semibold text-indigo-600 dark:text-indigo-400">
          Explore →
        </div>
      </Link>

      {/* Knowledge */}
      <Link
        to="/knowledge"
        className="group rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 p-6 transition hover:-translate-y-2 hover:border-emerald-500 hover:shadow-xl"
      >
        <div className="text-4xl">📚</div>

        <h3 className="mt-6 text-xl font-bold">
          Knowledge Base
        </h3>

        <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-400">
          Documentation, notes, interview prep and technical guides.
        </p>

        <div className="mt-6 font-semibold text-emerald-600 dark:text-emerald-400">
          Browse →
        </div>
      </Link>

      {/* Blog */}
      <Link
        to="/blog"
        className="group rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 p-6 transition hover:-translate-y-2 hover:border-purple-500 hover:shadow-xl"
      >
        <div className="text-4xl">✍️</div>

        <h3 className="mt-6 text-xl font-bold">
          Developer Blog
        </h3>

        <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-400">
          Tutorials, engineering stories and career experiences.
        </p>

        <div className="mt-6 font-semibold text-purple-600 dark:text-purple-400">
          Read →
        </div>
      </Link>

      {/* Experience */}
      <Link
        to="/experience"
        className="group rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 p-6 transition hover:-translate-y-2 hover:border-cyan-500 hover:shadow-xl"
      >
        <div className="text-4xl">☁️</div>

        <h3 className="mt-6 text-xl font-bold">
          Experience
        </h3>

        <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-400">
          Professional journey, certifications and learning roadmap.
        </p>

        <div className="mt-6 font-semibold text-cyan-600 dark:text-cyan-400">
          View →
        </div>
      </Link>

    </div>
  </div>
</section>

    </>
  );
  
}
