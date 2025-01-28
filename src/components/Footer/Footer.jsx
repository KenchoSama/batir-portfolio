import React from "react";
import { FaLinkedin, FaInstagram } from "react-icons/fa"; // Import icons
import miamiLogo from "../../assets/miami.jpg"; // Adjust the path to your Miami logo

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Miami Logo */}
        <div className="mb-4 md:mb-0">
          <img
            src={miamiLogo}
            alt="Miami Logo"
            className="w-24 h-auto object-contain"
          />
        </div>

        {/* Social Icons */}
        <div className="flex space-x-6">
          <a
            href="https://www.linkedin.com/in/batir-carrera-306038220/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-500 transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="text-2xl" />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-pink-500 transition"
            aria-label="Instagram"
          >
            <FaInstagram className="text-2xl" />
          </a>
        </div>

        {/* Copyright */}
        <div className="mt-4 md:mt-0 text-sm text-center md:text-right">
          <p>&copy; {new Date().getFullYear()} Batir Carrera. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
