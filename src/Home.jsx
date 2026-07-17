import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/ui/Navbar";
import Footer from "./components/ui/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Hero from "./pages/Hero";
// import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import TechTimeline from "./pages/TechTimeline";
import Education from "./pages/Education";
import KnowledgeBase from "./pages/KnowledgeBase";
import KnowledgeArticle from "./pages/KnowledgeArticle";
import ProjectCaseStudy from "./pages/ProjectCaseStudy";
import GlobalSearchPalette from "./components/search/GlobalSearchPalette";
import { SearchProvider } from "./contexts/SearchContext";
import kvLogo from "./assets/logo.png";
import { useLocation } from "react-router-dom";
import Blog from "./pages/Blog";
import BlogArticle from "./pages/BlogArticle";
import TagPage from "./pages/TagPage";
import NotFound from "./pages/NotFound";
import EngineeringDashboard from "./pages/EngineeringDashboard";
// import DeveloperHub from "./components/home/DeveloperHub";

import Terminal from "./pages/Terminal";
import useTerminalShortcut from "./hooks/useTerminalShortcut";
import useTerminalKeyword from "./hooks/useTerminalKeyword";
import FloatingTerminalButton from "./components/FloatingTerminalButton";
import VirtualKrishna from "./components/VirtualKrishna";


function App() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(location.pathname === "/");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  useTerminalShortcut();
  useTerminalKeyword();

  useEffect(() => {
    if (location.pathname !== "/") return; // 👈 only trigger splash on home page

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1111); //  adjust the duration here

    return () => clearTimeout(timer);
  }, [location.pathname]);

  useEffect(() => {
    const handleShortcut = (event) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setIsSearchOpen(true);
      }

      if (event.key === "Escape") {
        setIsSearchOpen(false);
      }
    };

    window.addEventListener("keydown", handleShortcut);
    return () => window.removeEventListener("keydown", handleShortcut);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-gradient-to-r from-[#0f172a] via-[#1e1e1e] to-[#0f172a] flex flex-col justify-center items-center z-[9999] text-white">
        {/* 🔄 Spinner */}
        <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-indigo-400 mb-4"></div>

        {/* 🔷 Logo */}
        <div className="p-[2px] rounded-full bg-gradient-to-r from-indigo-500 via-pink-500 to-cyan-400 shadow-[0_0_20px_rgba(0,255,255,0.5)] mb-2">
          <div className="rounded-full overflow-hidden bg-black">
            <img
              src={kvLogo}
              alt="Loading Logo"
              className="h-10 w-10 object-contain"
            />
          </div>
        </div>

        {/* 💬 Text */}
        <p className="text-lg font-semibold text-yellow-100 drop-shadow-[0_0_4px_rgba(250,204,21,0.6)] animate-fadeIn tracking-wide">
          Entering Dev Mode 🧑‍💻
        </p>
      </div>
    );
  }
  
  return (
    <SearchProvider>
      <>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-[#f7f8fa] dark:bg-[#0f172a] text-black dark:text-white transition-colors duration-300">
          {/* ✅ Top Navigation */}
          <Navbar />

          {/* ✅ Main Content */}
          <div className="flex-grow px-4 pt-[80px]">
            <Routes>
              <Route path="/" element={<Hero />} />
              {/* <Route path="/about" element={<About />} /> */}
            <Route path="/terminal" element={<Terminal />} />

              <Route
    path="/about"
    element={<EngineeringDashboard />}
/>
              <Route path="/education" element={<Education />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:slug" element={<ProjectCaseStudy />} />
              <Route path="/knowledge" element={<KnowledgeBase />} />
              <Route path="/knowledge/*" element={<KnowledgeArticle />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/timeline" element={<TechTimeline />} />
              <Route path="/blog" element={<Blog/>} />
              <Route path="/blog/*" element={<BlogArticle/>} />
              <Route
    path="/tags/:tag"
    element={<TagPage />}
/>
<Route path="*" element={<NotFound />} />

            </Routes>
          </div>

          {/* ✅ Footer */}
          <Footer />
          <VirtualKrishna />
        </div>
        <GlobalSearchPalette
          isOpen={isSearchOpen}
          onClose={() => setIsSearchOpen(false)}
        />

        {/* <FloatingTerminalButton /> */}
        
      </>
    </SearchProvider>
  );
}

export default App;
