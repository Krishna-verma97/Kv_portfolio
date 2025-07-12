"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Menu, X } from "lucide-react";

export default function MobileSidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Toggle Button */}
      <div className="fixed top-4 left-4 z-50 sm:hidden">
        <button
          onClick={() => setOpen(true)}
          className="p-2 bg-emerald-600 text-white rounded-md shadow-lg"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Overlay + Sidebar */}
      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-40 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 left-0 h-full w-[75%] max-w-xs bg-white dark:bg-gray-900 border-r border-emerald-400 z-50 p-6 flex flex-col gap-6"
            >
              {/* Close button */}
              <button
                onClick={() => setOpen(false)}
                className="self-end text-gray-500 hover:text-red-500"
              >
                <X size={24} />
              </button>

              {/* Navigation Links */}
              <nav className="flex flex-col space-y-4 text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                <a href="#home" onClick={() => setOpen(false)} className="hover:text-purple-500 flex items-center gap-2">
                  <Home size={20} /> Home
                </a>
                {/* Add more links below */}
                {/* <a href="#about">About</a> */}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
