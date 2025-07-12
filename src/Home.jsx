import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/ui/Navbar";
import Footer from "./components/ui/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import TechTimeline from "./pages/TechTimeline";
import Education from "./pages/Education";
import kvLogo from "../../assets/logo.png"

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // splash screen shows for 2.5s

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-gradient-to-r from-[#0f172a] via-[#1e1e1e] to-[#0f172a] flex flex-col justify-center items-center z-[9999] text-white">
        {/* 🔄 Small Spinner */}
        <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-indigo-400 mb-4"></div>

        {/* 🔷 Logo Styled Like Navbar */}
        <div className="p-[2px] rounded-full bg-gradient-to-r from-indigo-500 via-pink-500 to-cyan-400 shadow-[0_0_20px_rgba(0,255,255,0.5)] mb-2">
  <div className="rounded-full overflow-hidden bg-black">
    <img
      src={kvLogo}
      alt="Loading Logo"
      className="h-10 w-10 object-contain"
    />
  </div>
</div>


        {/* 💬 Loading Text */}
        <p className="text-lg font-semibold text-yellow-100 drop-shadow-[0_0_4px_rgba(250,204,21,0.6)] animate-fadeIn tracking-wide">
  Entering Dev Mode 🧑‍💻
</p>



      </div>
    );
  }

  return (
    <>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#f7f8fa] dark:bg-[#0f172a] text-black dark:text-white transition-colors duration-300">
        {/* ✅ Top Navigation */}
        <Navbar />

        {/* ✅ Main Content */}
        <div className="flex-grow px-4 pt-[80px]">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/education" element={<Education />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/timeline" element={<TechTimeline />} />
          </Routes>
        </div>

        {/* ✅ Footer */}
        <Footer />
      </div>
    </>
  );
}

export default App;
