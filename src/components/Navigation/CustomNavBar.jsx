import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const CustomNavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrollOpacity, setScrollOpacity] = useState(1);
  const location = useLocation();

  // Adjust opacity on scroll
  useEffect(() => {
    const handleScroll = () => {
      const maxOpacityScroll = 600;
      const minOpacity = 0.3;
      const scrollY = window.scrollY;
      const opacity = Math.max(minOpacity, 1 - scrollY / maxOpacityScroll);
      setScrollOpacity(opacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Update active link based on the current path
  useEffect(() => {
    const path = location.pathname;
    if (path === "/") setActiveLink("home");
    else if (path.includes("projects")) setActiveLink("projects");
    else if (path.includes("certificates")) setActiveLink("certificates");
    else if (path.includes("about")) setActiveLink("about");
  }, [location.pathname]);

  return (
    <nav
      className="fixed top-0 left-0 w-full z-30 transition-all duration-500"
      style={{ backgroundColor: `rgba(0, 0, 0, ${scrollOpacity})` }}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl md:text-3xl font-bold text-white no-underline"
        >
          BATIR CARRERA
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center">
          <ul className="flex space-x-8">
            <li>
              <Link
                to="/"
                className={`font-bold text-white cursor-pointer hover:opacity-100 transition-opacity ${
                  activeLink === "home" ? "opacity-100" : "opacity-75"
                }`}
                onClick={() => setActiveLink("home")}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className={`font-bold text-white cursor-pointer hover:opacity-100 transition-opacity ${
                  activeLink === "projects" ? "opacity-100" : "opacity-75"
                }`}
                onClick={() => setActiveLink("projects")}
              >
                Projects
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                className={`font-bold text-white cursor-pointer hover:opacity-100 transition-opacity ${
                  activeLink === "about" ? "opacity-100" : "opacity-75"
                }`}
                onClick={() => setActiveLink("about")}
              >
                About Me
              </Link>
            </li>
            {/* New Store Link */}
            <li>
              <a
                href="https://www.lulu.com/shop/batir-carrera/batirs-portfolio/paperback/product-95e7gn5.html?q=Batir%27s+Portfolio&page=1&pageSize=4"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-white cursor-pointer hover:opacity-100 transition-opacity"
              >
                Store
              </a>
            </li>
          </ul>

          {/* Email Button */}
          <div className="flex items-center ml-8">
            <a href="mailto:batir.carrera001@gmail.com" className="ml-4">
              <button className="font-semibold text-black bg-white px-6 py-3 rounded-lg transition-transform transform hover:scale-105">
                <span>Email</span>
              </button>
            </a>
          </div>
        </div>

        {/* Mobile Menu Button (Optional, not functional here) */}
        <button className="block md:hidden text-white focus:outline-none">
          <span className="block w-6 h-0.5 bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </button>
      </div>
    </nav>
  );
};

export default CustomNavBar;
