import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="text-sm mt-10 py-4 text-gray-700 font-mono">
      <p>
        © Brian Lau {year}. Design inspired by{" "}
        <a
          href="https://aditbala.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline text-blue-500"
        >
          {" "}
          Aditya Balasubramanian
        </a>
      </p>
    </div>
  );
}

export default Footer;
