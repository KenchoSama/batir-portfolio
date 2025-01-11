import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const PortfolioSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(3); 

  const images = [
    'https://images.unsplash.com/photo-1577493340887-b7bfff550145?w=800&h=600',
    'https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=800&h=600',
    'https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=800&h=600',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600', 
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600',
    'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&h=600',
    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600'
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="max-w-6xl mx-auto px-8 py-6 overflow-x-hidden">
      {/* Header */}
      <div className="mb-2">
        <h1 className="text-xl font-normal text-gray-800">Batir Carrera</h1>
      </div>

      {/* Main Display */}
      <div className="space-y-2 mb-32">
        <p className="text-center text-sm text-gray-600">project name</p>
        <div className="relative group">
          <div className="relative h-full w-[40vw] mx-auto overflow-hidden">
            <div  
              className="flex transition-transform duration-500 h-[350px]"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Project view ${index + 1}`}
                  className="w-full h-full object-cover flex-shrink-0"
                />
              ))}
            </div>
            
            {/* <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-white/80 p-2 rounded-full shadow-lg"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-white/80 p-2 rounded-full shadow-lg"
            >
              <ChevronRight className="w-6 h-6" />
            </button> */}
          </div>
        </div>
        <p className="text-center text-sm text-gray-600">location</p>
      </div>

      {/* Perspective Thumbnails */}
      <div className="relative h-48 ">
        <div className="flex justify-center items-center gap-32 w-full">
          {images.map((img, index) => {
            const isCenter = index === currentSlide;
            const position = index - currentSlide;
            
            let transform = '';
            let zIndex = 10 - Math.abs(position);
            let opacity = 1 - (Math.abs(position) * 0.2);
            
            if (position < 0) {
              transform = `perspective(100px) translateX(${position * 120}px) rotateY(25deg) scale(${1 - Math.abs(position) * 0.1})`;
            } else if (position > 0) {
              transform = `perspective(100px) translateX(${position * 120}px) rotateY(-25deg) scale(${1 - Math.abs(position) * 0.1})`;
            } else {
              transform = 'perspective(1000px) translateZ(50px) scale(1.1)';
              zIndex = 20;
            }

            return (
              <div
                key={index}
                className="w-48 h-32 cursor-pointer p-2 transition-all duration-500 absolute"
                style={{
                  transform,
                  zIndex,
                  opacity,
                  left: '50%',
                  marginLeft: '-96px', 
                }}
                onClick={() => setCurrentSlide(index)}
              >
                <img
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  className={`w-full h-full object-cover transition-all duration-500 ${
                    isCenter ? '' : ''
                  }`}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation Menu */}
      <nav>
        <ul className="flex gap-8 text-sm text-gray-600">
          {['contact', 'work', 'education', 'certificates', 'bio'].map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className="hover:text-gray-900 transition-colors"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default PortfolioSlider;