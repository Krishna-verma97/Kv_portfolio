import { Link, NavLink } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { MoonStar, Sun } from "lucide-react";
import kvLogo from "../../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const menuRef = useRef();
  const prevScrollY = useRef(0);

  const toggleNavbar = () => setIsOpen((prev) => !prev);

  const toggleDark = () => {
    document.documentElement.classList.toggle("dark");
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setDarkMode(isDark);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > prevScrollY.current && currentY > 80) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      prevScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Education", path: "/education" },
    { name: "Experience", path: "/experience" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <div className="h-0.5 w-full bg-gradient-to-r from-indigo-500 via-pink-500 to-cyan-500 animate-pulse" />

      <header
        className={`fixed top-0 left-0 w-full z-50 transition-transform duration-500 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <nav
          className="w-full px-6 py-3 flex justify-between items-center 
          bg-gradient-to-r from-[#0f172a]/80 via-[#0e0e0e]/80 to-[#1e1e1e]/80
          backdrop-blur-xl shadow-lg border-b border-[#1f2937]/40 transition-colors duration-300"
        >
          {/* 🔷 Logo */}
          <Link to="/" className="relative group">
            <div className="p-[2px] rounded-full bg-gradient-to-r from-indigo-500 via-pink-500 to-cyan-400 group-hover:shadow-[0_0_10px_rgba(0,255,255,0.5)] transition duration-300 ease-in-out">
              <div className="rounded-full overflow-hidden bg-black">
                <img
                  src={kvLogo}
                  alt="Krishna Logo"
                  className="h-10 w-10 object-contain transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
              </div>
            </div>
          </Link>

          {/* 💻 Desktop Navigation */}
          <div className="hidden md:flex space-x-6 items-center">
            <button onClick={toggleDark}>
              {darkMode ? (
                <Sun
                  size={22}
                  className="text-cyan-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.9)] hover:scale-125 hover:rotate-12 transition-all duration-300"
                />
              ) : (
                <MoonStar
                  size={22}
                  className="text-cyan-400 drop-shadow-[0_0_8px_rgba(99,102,241,0.8)] hover:scale-125 hover:-rotate-12 transition-all duration-300"
                />
              )}
            </button>

            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-white font-medium transition-all duration-300 relative group
                   hover:text-cyan-400 hover:scale-105 ${
                     isActive ? "text-cyan-400 underline underline-offset-4" : ""
                   }`
                }
              >
                <span className="inline-block group-hover:animate-pulse">
                  {link.name}
                </span>
              </NavLink>
            ))}
          </div>

          {/* 📱 Mobile Dark Mode + Hamburger + Menu */}
          <div ref={menuRef} className="md:hidden flex items-center gap-4 relative z-50">
            <button onClick={toggleDark}>
              {darkMode ? (
                <Sun
                  size={22}
                  className="text-cyan-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.9)] hover:scale-125 hover:rotate-12 transition-all duration-300"
                />
              ) : (
                <MoonStar
                  size={22}
                  className="text-cyan-400 drop-shadow-[0_0_8px_rgba(99,102,241,0.8)] hover:scale-125 hover:-rotate-12 transition-all duration-300"
                />
              )}
            </button>

            <button
              onClick={toggleNavbar}
              className="flex flex-col justify-center items-center w-10 h-10 gap-1.5 focus:outline-none"
            >
              <span
                className={`h-0.5 w-6 bg-white transition-all duration-300 ${
                  isOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              />
              <span
                className={`h-0.5 w-6 bg-white transition-all duration-300 ${
                  isOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-0.5 w-6 bg-white transition-all duration-300 ${
                  isOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              />
            </button>

            {/* 📱 Mobile Menu */}
            <div
              className={`absolute top-14 left-0 w-screen py-4 px-6 space-y-4 border-t
                border-black/10 dark:border-white/10 bg-white/90 dark:bg-[#0e0e0e]/95 backdrop-blur-lg
                transform transition-all duration-300 ease-in-out ${
                  isOpen
                    ? "translate-y-0 opacity-100 pointer-events-auto"
                    : "-translate-y-10 opacity-0 pointer-events-none"
                }`}
            >
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={toggleNavbar}
                  className={({ isActive }) =>
                    `block text-black dark:text-white text-lg font-medium transition-all duration-300 
                    hover:text-cyan-500 hover:translate-x-1 ${
                      isActive
                        ? "text-cyan-600 dark:text-cyan-400 underline underline-offset-4"
                        : ""
                    }`
                  }
                >
                  <span className="inline-block group-hover:animate-pulse">
                    {link.name}
                  </span>
                </NavLink>
              ))}
            </div>
          </div>
        </nav>

        {/* 🔻 Bottom Line */}
        <div className="h-0.5 w-full bg-gradient-to-r from-indigo-500 via-pink-500 to-cyan-500 animate-pulse" />
      </header>
    </>
  );
};

export default Navbar;
