
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { projects } from '../../libs/projects.js'


const PortfolioSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  return (<>
      {/* Header */}
      <div className="mb-2">
        <h1 className="text-sm font-normal text-gray-800">Batir Carrera</h1>
      </div>
  
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className="max-w-6xl mx-auto px-8 overflow-x-hidden flex flex-col items-center justify-center md:justify-start min-h-screen"
    >

      {/* Main Display */}
      <Link to={`/project/${projects[currentSlide].id}`}>
        <div className="space-y-2  mb-20">
          <p className="text-center text-4xl md:text-lg text-gray-600">
            {projects[currentSlide].name}
          </p>
          <div className="relative group">
            <div className="relative h-full w-[90vw] border-2 lg:w-[28vw] mx-auto overflow-hidden">
              <div
                className="flex transition-transform duration-500 h-[40vh]"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {projects.map((project, index) => (
                  <img
                    key={index}
                    src={project.thumbnail}
                    alt={project.name}
                    className="w-full h-full object-cover object-top flex-shrink-0"
                  />
                ))}
              </div>
            </div>
          </div>
          <p className="text-center text-sm text-gray-600">
            {projects[currentSlide].location}
          </p>
        </div>
      </Link>

      {/* Perspective Thumbnails */}
      <div className="relative h-24 select-none">
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
                    isCenter ? "ring-black" : "ring-zinc-500 "
                  }`}
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

export default PortfolioSlider;
