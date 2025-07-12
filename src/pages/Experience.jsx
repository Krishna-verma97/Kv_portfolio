import { motion } from "framer-motion";
import { useRef } from "react";
import { Confetti } from "../components/ui/Confetti";
import kvv from "../assets/logo.png"
import hack from "../assets/buildspace.jpg"
import hack2 from "../assets/mhacks-9.png"
// Work Experience Data
const experiences = [
  {
    img: kvv,
    title: "Added Soon🤞🔥",
    role: "#role",
    duration: "#timeline",
  },
  {
    img: kvv,
    title: "Added Soon🤞🔥",
    role: "#role",
    duration: "#timeline",
  },
  {
    img: kvv,
    title: "Added Soon🤞🔥",
    role: "#role",
    duration: "#timeline",
  },
];

// Hackathon Data
const hackathonData = [
  {
    date: "#Timeline",
    title: "🚀 Added Soon",
    location: "Delhi,India",
    description: "#About Hackthon",
    image: hack,
  },
  {
    date: "#Timeline",
    title: "💡Added Soon",
    location: "Delhi,India",
    description: "#About Hackthon",
    image: hack2,
  },
];

export default function Experience() {
  const confettiRef = useRef();

  return (
    <>
      {/* 🔹 Work Experience Section */}
      <section className="py-8 px-4 bg-white dark:bg-gray-900 flex items-center justify-center">
        <div className="max-w-4xl w-full">
          <motion.h2
            className="text-4xl md:text-5xl font-bold font-heading text-gray-900 dark:text-white mb-8 text-center md:text-left"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Work Experience
          </motion.h2>

          <div className="relative border-l-2 border-gray-300 dark:border-gray-700 pl-6 space-y-10">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="flex flex-col md:flex-row md:justify-between md:items-center mb-6 bg-gray-50 dark:bg-gray-800 p-4 rounded-lg shadow-sm"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 + index * 0.2 }}
              >
                <div className="flex items-center gap-4">
                  <img
                    src={exp.img}
                    className="h-10 w-10 rounded-full shadow-md"
                    alt={exp.title}
                  />
                  <div>
                    <h3 className="text-lg font-semibold font-heading text-emerald-600 dark:text-emerald-400">
                      {exp.title}
                    </h3>
                    <p className="text-sm font-body text-neutral-600 dark:text-neutral-300">
                      {exp.role}
                    </p>
                  </div>
                </div>
                <p className="text-sm mt-2 md:mt-0 font-body text-emerald-600 dark:text-emerald-400">
                  {exp.duration}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔹 Hackathons Section */}
      <section className="w-full bg-white dark:bg-gray-900 text-black dark:text-white pt-6 pb-10 px-4 flex items-center justify-center">
        <div className="max-w-5xl w-full text-center mt-2">
          {/* Hackathon Badge */}
          <motion.div
            className="inline-block bg-black dark:bg-white text-white dark:text-black px-6 py-2 rounded-full text-base font-bold tracking-wide uppercase shadow-md mb-4 font-body"
            style={{ fontFamily: "monospace" }}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
          >
            🚀 Hackathons
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-bold font-heading mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            I like building things
          </motion.h2>

          <motion.p
            className="text-lg text-neutral-700 dark:text-neutral-300 mb-10 leading-relaxed max-w-3xl mx-auto font-body"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            During my learning journey, I’ve participated in collaborative builds and virtual hackathons. It’s exciting to solve problems with great people under tight deadlines. Every event brings new lessons, friendships, and experience.
          </motion.p>

          <div className="relative border-l-2 border-gray-300 dark:border-gray-700 pl-6 space-y-10">
            {hackathonData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
                className="relative"
              >
                <div className="absolute -left-[1.15rem] top-1 w-10 h-10 rounded-full overflow-hidden border-2 border-black dark:border-white shadow-md">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg shadow-md text-left">
                  <p className="text-sm text-emerald-600 dark:text-emerald-400 mb-1 font-body">
                    {item.date}
                  </p>
                  <h3 className="text-lg font-semibold font-heading text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm text-emerald-600 dark:text-emerald-400 font-body mb-1">
                    {item.location}
                  </p>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 font-body">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 🎉 Confetti Canvas */}
      <Confetti
        ref={confettiRef}
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-50"
        options={{
          spread: 120,
          startVelocity: 55,
          particleCount: 120,
          origin: { y: 0.6 },
        }}
        manualstart
      />

      {/* 🎇 Fun Instruction */}
      <div className="flex flex-col items-center gap-1 -mt-3 mb-3 animate-bounce text-center">
        <span className="text-[8px] sm:text-xs font-semibold text-gray-800 dark:text-gray-200">
          👇 Try a fun!
        </span>
        <span className="text-[7px] sm:text-[10px] font-semibold text-gray-800 dark:text-gray-200">
          (Click continuously)
        </span>
      </div>

      {/* 🎇 Confetti Button */}
      <div className="flex justify-center mt-2 mb-10">
        <button
          onClick={() => confettiRef.current?.fire()}
          className="relative px-6 py-3 text-lg font-bold rounded-xl bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white shadow-xl hover:scale-105 transition-all duration-300"
        >
          <span className="glitch-text" data-text="🎇 Celebrate Experience 🎇">
            🎇 Celebrate Experience 🎇
          </span>
        </button>
      </div>

      {/* 💥 Glitch Animation Style */}
      <style>{`
        .glitch-text {
          position: relative;
          display: inline-block;
        }
        .glitch-text::before,
        .glitch-text::after {
          content: attr(data-text);
          position: absolute;
          left: 0;
          width: 100%;
          overflow: hidden;
          clip: rect(0, 900px, 0, 0);
        }
        .glitch-text::before {
          animation: glitchTop 1s infinite linear alternate-reverse;
          color: #ff00c8;
        }
        .glitch-text::after {
          animation: glitchBottom 1s infinite linear alternate-reverse;
          color: #00fff9;
        }
        @keyframes glitchTop {
          0% { clip: rect(0, 9999px, 0, 0); transform: translate(-2px, -2px); }
          20% { clip: rect(0, 9999px, 8px, 0); transform: translate(2px, -1px); }
          40% { clip: rect(0, 9999px, 4px, 0); transform: translate(-1px, 2px); }
          100% { clip: rect(0, 9999px, 0, 0); transform: translate(0, 0); }
        }
        @keyframes glitchBottom {
          0% { clip: rect(0, 9999px, 0, 0); transform: translate(2px, 2px); }
          20% { clip: rect(8px, 9999px, 20px, 0); transform: translate(-1px, 1px); }
          40% { clip: rect(4px, 9999px, 10px, 0); transform: translate(1px, -2px); }
          100% { clip: rect(0, 9999px, 0, 0); transform: translate(0, 0); }
        }
      `}</style>
    </>
  );
}
