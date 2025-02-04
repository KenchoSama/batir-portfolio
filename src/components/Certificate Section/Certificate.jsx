import React, { useEffect, useState } from "react";
import { certificates } from "../../libs/certificates.js"; // Import certificates.js
import { FaArrowTurnUp } from "react-icons/fa6";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { Link } from "react-router-dom";
import * as motion from "motion/react-client";

const Certificate = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null); // Track the selected certificate index
  const [scale, setScale] = useState(1); // Track the zoom level

  // Debugging: Log the certificates array
  useEffect(() => {
    console.log("Certificates: ", certificates);
  }, []);

  const handleClose = () => {
    setSelectedImageIndex(null);
    setScale(1); // Reset zoom level on close
  };

  const handleNext = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex !== null && prevIndex < certificates.length - 1
        ? prevIndex + 1
        : 0 // Loop back to the first certificate
    );
    setScale(1); // Reset zoom level on image change
  };

  const handlePrev = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex !== null && prevIndex > 0
        ? prevIndex - 1
        : certificates.length - 1 // Loop to the last certificate
    );
    setScale(1); // Reset zoom level on image change
  };

  const handleZoom = (e) => {
    if (e.deltaY < 0) {
      // Scroll up to zoom in
      setScale((prevScale) => Math.min(prevScale + 0.2, 3)); // Max zoom: 3x
    } else if (e.deltaY > 0) {
      // Scroll down to zoom out
      setScale((prevScale) => Math.max(prevScale - 0.2, 1)); // Min zoom: 1x
    }
  };

  return (
    <>
      {certificates && certificates.length > 0 ? (
        <div>
          {/* Link back to home */}
          <Link to={"/"} className="sticky top-4 gap-4 flex mt-3">
            <FaArrowTurnUp className="-rotate-90" />
            <h1 className="h-10 mb-6 text-sm font-normal text-gray-800">Home</h1>
          </Link>

          {/* Title */}
          <h1 className="text-3xl text-center font-semibold">Certificates</h1>

          {/* Certificate Grid */}
          <motion.div
            whileTap={{ scale: 0.95 }}
            className="grid grid-cols-3 max-w-2xl py-10 mx-auto gap-4"
          >
            {certificates.map((certificate, index) => (
              <img
                key={index}
                src={certificate.src} // Dynamically loaded from certificates.js
                alt={certificate.alt || `Certificate ${index + 1}`} // Default alt text fallback
                className="w-full h-full object-cover hover:scale-125 transition-all duration-500"
                onClick={() => setSelectedImageIndex(index)} // Set the selected image index
              />
            ))}
          </motion.div>

          {/* Popup Modal for Selected Image */}
          {selectedImageIndex !== null && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={handleClose} // Close when clicking outside the modal
            >
              <div
                className="relative max-w-full max-h-full"
                onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking on the image or arrows
              >
                {/* Navigation Arrows */}
                <button
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 bg-black bg-opacity-50 rounded-full p-2"
                  onClick={handlePrev}
                >
                  <IoChevronBack className="h-12 w-12" />
                </button>

                {/* Zoomable Image */}
                <motion.img
                  src={certificates[selectedImageIndex].src}
                  alt={`Certificate ${selectedImageIndex + 1}`}
                  className="rounded-lg shadow-lg object-contain max-w-[90vw] max-h-[80vh] cursor-zoom-in"
                  style={{ transform: `scale(${scale})` }}
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.8 }}
                  onWheel={handleZoom} // Zoom in/out with scroll
                />

                <button
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 bg-black bg-opacity-50 rounded-full p-2"
                  onClick={handleNext}
                >
                  <IoChevronForward className="h-12 w-12" />
                </button>
              </div>
            </motion.div>
          )}
        </div>
      ) : (
        <h1>No Certificates Found!</h1>
      )}
    </>
  );
};

export default Certificate;
