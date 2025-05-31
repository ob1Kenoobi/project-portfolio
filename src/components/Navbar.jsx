import { useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export const Navbar = ({ menuOpen, setMenuOpen, darkMode, setDarkMode }) => {
  // Lock scroll if menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-xl font-bold text-white">
            hasan<span className="text-blue-500">.tech</span>
          </a>

          {/* Mobile menu toggle */}
          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:text-white transition-colors"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Dark Mode Toggle + Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#"
              className="px-4 py-1 border rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-sm"
            >
              Resume
            </a>
            <a
              href="#contact"
              className="px-4 py-1 border rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-sm"
            >
              Hire Me
            </a>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="text-xl text-yellow-300 hover:text-white transition"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
