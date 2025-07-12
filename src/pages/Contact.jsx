"use client";

import { useState, useCallback, useRef } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import toast, { Toaster } from "react-hot-toast";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false); // ✅ Loading state
  const [form, setForm] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true); // ✅ Start loading

    try {
      console.log("Form values:", form);
      console.log("FormRef:", formRef.current);

      await addDoc(collection(db, "contacts"), form);

      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      );

      toast.success("📨 Agent Krishna: Message injected! 🕶️✅");
      setForm({ from_name: "", from_email: "", message: "" });
      formRef.current.reset();
    } catch (err) {
      console.error("Submission Error:", err);
      toast.error("❌ Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false); // ✅ End loading
    }
  };

  return (
    <section className="relative w-full bg-white dark:bg-gray-900 text-black dark:text-white py-20 px-4 pb-32 flex justify-center items-center overflow-hidden">
      <Toaster position="top-center" />

      {/* 🎇 Particles */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: false,
          background: { color: { value: "transparent" } },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              resize: true,
            },
            modes: {
              repulse: { distance: 100, duration: 0.4 },
            },
          },
          particles: {
            color: { value: "#10b981" },
            links: {
              color: "#10b981",
              distance: 120,
              enable: true,
              opacity: 0.4,
              width: 1,
            },
            collisions: { enable: true },
            move: {
              direction: "none",
              enable: true,
              outModes: "bounce",
              random: false,
              speed: 0.8,
              straight: false,
            },
            number: {
              density: { enable: true, area: 800 },
              value: 60,
            },
            opacity: { value: 0.5 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 4 } },
          },
          detectRetina: true,
        }}
        className="absolute inset-0 w-full h-full z-0"
      />

      {/* 📬 Form Card */}
      <motion.div
        className="max-w-3xl w-full backdrop-blur-md rounded-xl border border-emerald-300/40 dark:border-emerald-600/40 bg-white/10 dark:bg-slate-800/10 shadow-2xl p-8 z-10"
        initial={{ opacity: 0, y: 60, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        whileHover={{ scale: 1.02, boxShadow: "0 0 40px rgba(16, 185, 129, 0.5)" }}
      >
        <motion.h2
          className="text-4xl md:text-5xl font-heading font-bold text-center mb-8 text-emerald-600 dark:text-emerald-400"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Let’s Connect
        </motion.h2>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="space-y-6 font-body"
        >
          {/* 🔤 Name */}
          <motion.input
            type="text"
            name="from_name"
            placeholder="Your Name"
            value={form.from_name}
            onChange={(e) => setForm({ ...form, from_name: e.target.value })}
            required
            className="w-full p-3 rounded-md bg-white/30 dark:bg-gray-800 border border-emerald-300/40 dark:border-emerald-500/40 shadow-inner focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 transition-all hover:scale-[1.03] hover:shadow-lg"
            whileFocus={{ scale: 1.03 }}
          />

          {/* 📧 Email */}
          <motion.input
            type="email"
            name="from_email"
            placeholder="Your Email"
            value={form.from_email}
            onChange={(e) => setForm({ ...form, from_email: e.target.value })}
            required
            className="w-full p-3 rounded-md bg-white/30 dark:bg-gray-800 border border-emerald-300/40 dark:border-emerald-500/40 shadow-inner focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 transition-all hover:scale-[1.03] hover:shadow-lg"
            whileFocus={{ scale: 1.03 }}
          />

          {/* ✍️ Message */}
          <motion.textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            required
            className="w-full p-3 h-32 rounded-md bg-white/30 dark:bg-gray-800 border border-emerald-300/40 dark:border-emerald-500/40 shadow-inner resize-none focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 transition-all hover:scale-[1.02] hover:shadow-lg"
            whileFocus={{ scale: 1.02 }}
          />

          {/* 📨 Submit Button */}
          <motion.button
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-gradient-to-r from-purple-600 via-emerald-500 to-purple-600 text-white py-3 px-6 rounded-full font-semibold flex items-center justify-center gap-2 shadow-lg transition-all duration-300 transform ${
              isSubmitting
                ? "opacity-60 cursor-not-allowed"
                : "hover:scale-110 hover:shadow-emerald-500/40"
            }`}
            whileTap={{ scale: 0.95 }}
            whileHover={{
              scale: isSubmitting ? 1 : 1.07,
              rotate: isSubmitting ? "0deg" : "1deg",
            }}
          >
            {isSubmitting ? (
              <>
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  />
                </svg>
                Sending...
              </>
            ) : (
              <>
                <FaPaperPlane className="animate-pulse" />
                Send Message
              </>
            )}
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
}
