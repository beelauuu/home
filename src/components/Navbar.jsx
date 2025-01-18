import React, { useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";

const Navbar = ({ isDarkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="max-w-4xl mx-auto pt-6 px-4 md:pt-10">
      <div className="flex font-mono justify-between items-center">

        <button className="md:hidden text-gray-500 hover:text-gray-400" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className="hidden md:block space-x-8">
          <a href="/" className="text-red-500 hover:text-red-400">
            home
          </a>
          <a
            href="https://evanmasiello.com/clubrunning/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-500 hover:text-red-400"
          >
            blog
          </a>
          <a
            href="https://teaching.beelau.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-500 hover:text-red-400"
          >
            teaching
          </a>
          <a
            href="https://portfolio.beelau.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-500 hover:text-red-400"
          >
            professional
          </a>
        </div>

        <div className="space-x-4">
          <button
            className="text-gray-400 hover:text-gray-300 transition-all duration-300 ease-in-out transform"
            onClick={toggleDarkMode}
          >
            <span
              className={`inline-block transition-transform duration-300 ease-in-out ${
                isDarkMode ? "rotate-180 scale-110" : "rotate-0 scale-100"
              }`}
            >
              {isDarkMode ? <Moon size={20} /> : <Sun size={20} />}
            </span>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden mt-4 py-4 space-y-4">
          <a href="/" className="block text-red-500 hover:text-red-400">
            home
          </a>
          <a
            href="https://blog.beelau.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-red-500 hover:text-red-400"
          >
            blog
          </a>
          <a
            href="https://teaching.beelau.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-red-500 hover:text-red-400"
          >
            teaching
          </a>
          <a
            href="https://portfolio.beelau.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-red-500 hover:text-red-400"
          >
            professional
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;