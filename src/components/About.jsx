import React from "react";
import { Linkedin, Github, Mail } from "lucide-react";

function About({ isDarkMode }) {
  return (
    <div className="flex flex-col md:flex-row font-mono justify-between items-center mb-8">
      <section className="flex flex-col">
        <p className="mt-8 mb-8 text-lg">
          <span className="text-red-400">hi!</span>
          <span className="text-orange-400"> my </span>
          <span className="text-red-400">name </span>
           <span className="text-orange-400"> is </span>
        </p>
        <h1
          className={
            isDarkMode
              ? "text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 text-white hover:text-orange-400"
              : "text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 text-black hover:text-orange-400"
          }
        >
          brian
        </h1>
        <p
          className={
            isDarkMode
              ? "text-gray-300 leading-relaxed text-sm sm:text-base"
              : "text-gray-700 leading-relaxed text-sm sm:text-base"
          }
        >
          i like to write code, run on roads, and teach people how to code.
        </p>
        <div className="flex space-x-10 mt-4">
          <a
            href="https://www.linkedin.com/in/beelauu/"
            target="_blank"
            rel="noopener noreferrer"
            className={
              isDarkMode
                ? "text-gray-400 hover:text-gray-300"
                : "text-gray-700 hover:text-gray-300"
            }
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://github.com/beelauuu"
            target="_blank"
            rel="noopener noreferrer"
            className={
              isDarkMode
                ? "text-gray-400 hover:text-gray-300"
                : "text-gray-700 hover:text-gray-300"
            }
          >
            <Github size={24} />
          </a>
          <a
            href="mailto:brian-w-lau@hotmail.com"
            className={
              isDarkMode
                ? "text-gray-400 hover:text-gray-300"
                : "text-gray-700 hover:text-gray-300"
            }
          >
            <Mail size={24} />
          </a>
        </div>
      </section>

      <section className="flex justify-center items-start lg:justify-end md:ml-10">
        <div className="rounded-lg overflow-hidden w-full max-w-sm lg:max-w-md mt-14 md:mt-28">
          <img src="/cute.JPG" alt="Profile" />
        </div>
      </section>
    </div>
  );
}

export default About;
