import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* 🔻 Gradient Separator Line */}
      <div className="h-0.5 w-full bg-gradient-to-r from-indigo-500 via-pink-500 to-cyan-500 animate-pulse" />

      <footer className="bg-white dark:bg-[#0f172a] text-black dark:text-white py-4 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4 flex flex-col items-center text-center space-y-3">
          {/* 🔹 Copyright */}
          <p className="text-xs text-gray-600 dark:text-gray-400">
            © {currentYear} Krishna Verma. All rights reserved.
          </p>

          {/* 🔹 Social Media Icons */}
          <div className="flex flex-wrap justify-center items-center gap-5 text-lg text-gray-700 dark:text-gray-300">
            <a
              href="https://github.com/Krishna-verma97"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
              className="hover:text-cyan-500 transition-transform duration-300 transform hover:scale-125"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/krishna-verma-19a6912a0/"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              className="hover:text-blue-400 transition-transform duration-300 transform hover:scale-125"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:kv979539g@gmail.com"
              title="Email"
              className="hover:text-rose-400 transition-transform duration-300 transform hover:scale-125"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://x.com/kv786g?t=tOubZZGSuNKdoluuT8RP0g&s=08"
              target="_blank"
              rel="noopener noreferrer"
              title="Twitter"
              className="hover:text-sky-400 transition-transform duration-300 transform hover:scale-125"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com/krishna25_v/"
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram"
              className="hover:text-pink-500 transition-transform duration-300 transform hover:scale-125"
            >
              <FaInstagram />
            </a>
          </div>

          <p className="text-xs text-gray-500 dark:text-gray-500">
            Feel free to connect with me anytime!
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
