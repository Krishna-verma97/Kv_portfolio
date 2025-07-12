// Projects.jsx (Final - Hero link fixed)
"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import confetti from "canvas-confetti";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import project1 from "../assets/project.png"
import project2 from "../assets/project2.webp"
import intern from "../assets/internshala.png"
import cohort from "../assets/codekaro.png"

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A modern,animated personal portfolio built with Html,JavaScript,React,Tailwind CSS and Firebase Dtabase integration.",
    link: "/", // ✅ Hero page link
    github: "https://github.com/Krishna-verma97",
    image: project1,
    featured: true,
    techStack: ["React", "Tailwind", "Firebase"]
  },
  {
    title: "Weather App",
    description:
      "Built with OpenWeatherMap API and Firebase. Fully responsive.",
    link: "#",
    github: "https://github.com/Krishna-verma97",
    image: project2,
    featured: false,
    techStack: ["JavaScript", "API", "Firebase"]
  },
];

const achievements = [
  {
    title: "Certified of Training",
    description: "Completed Internshala's comprehensive training in Web Development, covering HTML, CSS, JavaScript, Bootstrap, and backend basics. Gained hands-on experience through practical assignments and final projects",
    image: intern,
    link: "https://trainings.internshala.com/view_certificate/8tsjql61eag/f9gbf2b5cos/",
  },
  {
    title: cohort,
    description: "Successfully completed CodeKaro’s hands-on Full Stack Web Development course, gaining practical knowledge in frontend and backend technologies including HTML, CSS, JavaScript,Tailwind Css, React.js and Firebase through real-time projects",
    image: "./src/assets/codekaro.png",
    link: "https://codekaro.in/course-certificate/55779-2318",
  },
  
];

export default function Projects() {
  const confettiRef = useRef(null);
  const hasFired = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasFired.current) {
          hasFired.current = true;
          confetti({
            particleCount: 160,
            spread: 100,
            origin: { y: 0.6 },
            emojis: ["🎉", "✨", "🚀", "🌟"],
          });
        }
      },
      { threshold: 0.5 }
    );

    if (confettiRef.current) observer.observe(confettiRef.current);
    return () => {
      if (confettiRef.current) observer.unobserve(confettiRef.current);
    };
  }, []);

  return (
    <>
      {/* Projects Section */}
      <section className="w-full pt-4 pb-8 px-4 bg-white dark:bg-gray-900 text-black dark:text-white flex justify-center items-start">
        <div className="max-w-5xl w-full">
          <motion.h2
            className="text-4xl md:text-5xl font-bold font-heading mb-8 text-center text-emerald-600 dark:text-emerald-400"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
          >
            Projects
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <Tilt
                tiltMaxAngleX={8}
                tiltMaxAngleY={8}
                glareEnable={true}
                glareMaxOpacity={0.2}
                scale={1.02}
                key={i}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 40 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.2 }}
                  viewport={{ once: true, amount: 0.4 }}
                  className="group relative h-full bg-gray-100 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg overflow-hidden backdrop-blur-sm transition-all duration-500 hover:shadow-emerald-500/40 flex flex-col"
                >
                  {project.featured && (
                    <div className="absolute top-0 left-0 px-3 py-1 bg-gradient-to-r from-emerald-500 to-green-400 text-white text-xs font-semibold rounded-br-lg animate-pulse z-10">
                      Featured
                    </div>
                  )}

                  <div className="absolute inset-0 z-0 bg-gradient-to-br from-transparent to-emerald-200 dark:to-emerald-800 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-xl" />

                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="relative p-6 flex-grow flex flex-col justify-between z-10">
                    <div className="flex-grow">
                      <h3 className="text-xl font-semibold mb-2 text-emerald-600 dark:text-emerald-400">
                        {project.title}
                      </h3>
                      <p className="text-sm text-neutral-700 dark:text-neutral-300">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {project.techStack.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            title={`Tech used: ${tech}`}
                            className="text-xs bg-emerald-100 dark:bg-emerald-700 text-emerald-700 dark:text-white px-2 py-0.5 rounded-full shadow-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-4 mt-4">
                      <a
                        href={project.github}
                        className="text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-transform transform hover:scale-125 text-xl"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithub />
                      </a>

                      {/* ✅ Corrected Link */}
                      <Link
                        to={project.link}
                        className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-transform transform hover:scale-125 text-xl"
                      >
                        <FaExternalLinkAlt />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </Tilt>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section remains unchanged here */}
       <section
        ref={confettiRef}
        className="w-full pt-4 pb-8 px-4 bg-white dark:bg-gray-900 text-black dark:text-white flex justify-center items-start"
      >
        <div className="max-w-5xl w-full">
          <motion.h2
            className="text-4xl md:text-5xl font-heading font-bold mb-8 text-center text-emerald-600 dark:text-emerald-400"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
          >
            Achievements & Certifications
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {achievements.map((item, index) => (
              <Tilt
                tiltMaxAngleX={6}
                tiltMaxAngleY={6}
                scale={1.03}
                glareEnable={true}
                glareMaxOpacity={0.2}
                key={index}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 40 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true, amount: 0.4 }}
                  className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden border shadow-md border-gray-200 dark:border-gray-700 backdrop-blur-sm hover:shadow-purple-400/30 transition-all duration-500"
                >
                  <div className="absolute inset-0 z-0 bg-gradient-to-br from-transparent to-purple-100 dark:to-purple-700 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-xl" />

                  <motion.img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="relative p-4 z-10">
                    <h3 className="text-md font-semibold text-emerald-600 dark:text-emerald-400 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                      {item.description}
                    </p>
                    <div className="text-right">
                      <a
                        href={item.link}
                        className="text-sm px-3 py-1 bg-gradient-to-r from-purple-500 to-emerald-500 text-white rounded-full hover:scale-105 transform transition-all duration-300 shadow"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View
                      </a>
                    </div>
                  </div>
                </motion.div>
              </Tilt>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
