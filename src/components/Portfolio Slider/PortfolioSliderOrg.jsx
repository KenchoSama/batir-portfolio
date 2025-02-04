import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { projects } from "../../libs/projects.js";

const PortfolioSliderOrg = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto px-8 overflow-x-hidden flex flex-col items-center justify-center md:justify-start min-h-[80vh] mt-24 bg-white" // Added bg-white to ensure solid background
      >
        {/* Main Display */}
        <Link to={`/project/${projects[currentSlide].id}`}>
  <div className="space-y-4 mb-16"> {/* Increased spacing */}
    <p className="text-center text-4xl md:text-2xl text-gray-600">
      {projects[currentSlide].name}
    </p>
    <div className="relative group">
      <div className="relative h-full w-[95vw] lg:w-[50vw] mx-auto overflow-hidden bg-white-200 shadow-lg rounded-lg"> {/* Increased width */}
        <img
          src={projects[currentSlide].thumbnail}
          alt={projects[currentSlide].name}
          className="w-full h-[60vh] object-contain object-center" // Increased height
        />
      </div>
    </div>
    <p className="text-center text-sm text-gray-600">
      {projects[currentSlide].location}
    </p>
  </div>
</Link>


        {/* Perspective Thumbnails */}
        <div className="relative h-20 select-none mt-10">
          <div className="flex justify-center items-center gap-32 w-full">
            {projects.map((project, index) => {
              const isCenter = index === currentSlide;
              const position = index - currentSlide;

              let transform = "";
              let zIndex = isCenter ? 50 : 10 - Math.abs(position); // Higher z-index for the center slide
              let opacity = isCenter ? 1 : 0.8; // Reduced opacity for side thumbnails

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
              }

              return (
                <div
                  key={index}
                  className={`w-32 h-20 lg:w-48 lg:h-32 cursor-pointer p-2 transition-all duration-500 absolute ${
                    isCenter ? "bg-white shadow-lg rounded-lg" : ""
                  }`} // Added background and shadow to center card
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
                    className={`w-full h-full object-cover transition-all ring-2 duration-500 ${
                      isCenter ? "ring-black scale-110" : "ring-zinc-500"
                    }`} // Added stronger scaling for center slide
                  />
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default PortfolioSliderOrg;
