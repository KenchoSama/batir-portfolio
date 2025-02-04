import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { projects } from "../../libs/projects.js";
import "./Carousel.css";

const PortfolioSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const getCarouselStyle = (index) => {
    const position = index - currentSlide;
    const angle = position * 45; // Spacing between items
    const translateZ = 400; // Spread items further apart

    return {
      transform: `rotateY(${angle}deg) translateZ(${translateZ}px)`, // Rotation and spacing
      transition: "transform 0.5s ease-in-out", // Smooth transitions
    };
  };

  return (
    <>
      {/* Header */}
      <div className="mb-6 mt-20 text-center"> {/* Increased top margin */}
        <h1 className="text-sm font-normal text-gray-800">Batir Carrera</h1>
      </div>

      {/* Carousel as Main Display */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto px-8 overflow-x-hidden flex flex-col items-center h-[65vh] mt-8" // Increased margin-top
      >
        {/* Carousel */}
        <div className="carousel mb-6">
          <div className="carousel-inner">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`carousel-item ${index === currentSlide ? "active" : ""}`}
                style={{
                  ...getCarouselStyle(index), // Rotation and spacing
                  width: "300px", // Fixed width for all cards
                  height: "500px", // Fixed height for all cards
                }}
              >
                <Link to={`/project/${project.id}`} className="card">
                  {/* Card Content */}
                  <div className="bg-[#E3F2FD] p-4 rounded-lg flex flex-col items-center">
                    <img
                      src={project.thumbnail}
                      alt={project.name}
                      className="w-full h-3/4 object-cover rounded-lg shadow-lg"
                    />
                    <div className="bottom-section text-center mt-4">
                      <h3 className="title text-sm font-bold text-black">
                        {project.name}
                      </h3>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Perspective Thumbnails */}
      <div className="relative h-20 select-none mt-20"> {/* Increased top margin */}
        <div className="flex justify-center items-center gap-32 w-full">
          {projects.map((project, index) => {
            const isCenter = index === currentSlide;
            const position = index - currentSlide;

            let transform = "";
            let zIndex = 10 - Math.abs(position);
            let opacity = 1 - Math.abs(position) * 0.2;

            if (position < 0) {
              transform = `perspective(100px) translateX(${
                position * 120
              }px) rotateY(25deg) scale(${1 - Math.abs(position) * 0.1})`;
            } else if (position > 0) {
              transform = `perspective(100px) translateX(${
                position * 120
              }px) rotateY(-25deg) scale(${1 - Math.abs(position) * 0.1})`;
            } else {
              transform = "perspective(1000px) translateZ(50px) scale(1.1)";
              zIndex = 20;
            }

            return (
              <div
                key={index}
                className="w-32 h-20 lg:w-48 lg:h-32 cursor-pointer p-2 transition-all duration-500 absolute"
                style={{
                  transform,
                  zIndex,
                  opacity,
                  left: "50%",
                  marginLeft: "-96px",
                }}
                onClick={() => setCurrentSlide(index)}
              >
                <img
                  src={project.thumbnail}
                  alt={project.name}
                  className={`w-full h-full object-cover transition-all ring-1 duration-500 ${
                    isCenter ? "ring-black" : "ring-zinc-500"
                  }`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default PortfolioSlider;
