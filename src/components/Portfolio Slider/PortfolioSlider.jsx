// import React, { useState } from 'react';
// import { motion } from "framer-motion";
// import { Link } from 'react-router-dom';

// const PortfolioSlider = () => {
//   const [currentSlide, setCurrentSlide] = useState(3);

//   const images = [
//     'https://images.unsplash.com/photo-1577493340887-b7bfff550145?w=800&h=600',
//     'https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=800&h=600',
//     'https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=800&h=600',
//     'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600',
//     'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600',
//     'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&h=600',
//     'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600'
//   ];

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 50 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: -50 }}
//       transition={{ duration: 0.5 }}
//       className="max-w-6xl mx-auto px-8 overflow-x-hidden"
//     >
//       {/* Header */}
//       <div className="mb-2">
//         <h1 className="text-sm font-normal text-gray-800">Batir Carrera</h1>
//       </div>

//       {/* Main Display */}
//       <Link to={'/project/1'}>
//       <div className="space-y-2 mb-20">
//         <p className="text-center text-sm text-gray-600">project name</p>
//         <div className="relative group">
//           <div className="relative h-full w-[28vw] mx-auto overflow-hidden">
//             <div
//               className="flex transition-transform duration-500 h-[40vh]"
//               style={{ transform: `translateX(-${currentSlide * 100}%)` }}
//             >
//               {images.map((img, index) => (
//                 <img
//                   key={index}
//                   src={img}
//                   alt={`Project view ${index + 1}`}
//                   className="w-full h-full object-cover object-top flex-shrink-0"
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//         <p className="text-center text-sm text-gray-600">location</p>
//       </div>
//       </Link>

//       {/* Perspective Thumbnails */}
//       <div className="relative h-24 select-none">
//         <div className="flex justify-center items-center gap-32 w-full">
//           {images.map((img, index) => {
//             const isCenter = index === currentSlide;
//             const position = index - currentSlide;

//             let transform = '';
//             let zIndex = 10 - Math.abs(position);
//             let opacity = 1 - (Math.abs(position) * 0.2);

//             if (position < 0) {
//               transform = `perspective(100px) translateX(${position * 120}px) rotateY(25deg) scale(${1 - Math.abs(position) * 0.1})`;
//             } else if (position > 0) {
//               transform = `perspective(100px) translateX(${position * 120}px) rotateY(-25deg) scale(${1 - Math.abs(position) * 0.1})`;
//             } else {
//               transform = 'perspective(1000px) translateZ(50px) scale(1.1)';
//               zIndex = 20;
//             }

//             return (
//               <div
//                 key={index}
//                 className="w-48 h-32 cursor-pointer p-2 transition-all duration-500 absolute"
//                 style={{
//                   transform,
//                   zIndex,
//                   opacity,
//                   left: '50%',
//                   marginLeft: '-96px',
//                 }}
//                 onClick={() => setCurrentSlide(index)}
//               >
//                 <img
//                   src={img}
//                   alt={`Thumbnail ${index + 1}`}
//                   className={`w-full h-full object-cover transition-all duration-500 ${
//                     isCenter ? '' : ''
//                   }`}
//                 />
//               </div>
//             );
//           })}
//         </div>
//       </div>

//     </motion.div>
//   );
// };

// export default PortfolioSlider;

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
