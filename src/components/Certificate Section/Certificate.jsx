import React, { useEffect, useState } from "react";
import { certificates } from "../../libs/certificates.js";
import { FaArrowTurnUp } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { IoCloseCircle } from "react-icons/io5";

import * as motion from "motion/react-client";

const Certificate = () => {
  useEffect(() => {
    console.log("Certificates: ", certificates);
  }, []);

  
    const [selectedImage, setSelectedImage] = useState(null); // To track the clicked image
  
    const handleClose = () => setSelectedImage(null);

  return (
    <>
      {certificates && certificates.length > 0 ? (
        <div>
        <Link to={"/"} className="sticky top-4  gap-4  flex mt-3 ">
            <FaArrowTurnUp className="-rotate-90 " />
            <h1 className=" h-10 mb-6 text-sm font-normal text-gray-800">
              Home
            </h1>
          </Link>
          <h1 className="text-3xl text-center font-semibold">Certificates</h1>
          <motion.div 
              whileTap={{ scale: 0.95 }} className="grid grid-cols-3 max-w-2xl py-10 mx-auto gap-4">
            {certificates.map((certificate, index) => (
              <img
                key={index}
                src={certificate.src}
                alt={`Certificate ${index + 1}`}
                
                className="w-full h-full object-cover hover:scale-125 transition-all duration-500"
              onClick={() => setSelectedImage(certificate.src)}
              />
            ))}
          </motion.div>
          {/* Popup Modal */}
                    {selectedImage && (
                      <motion.div
                        className="fixed inset-0  bg-black bg-opacity-80 flex items-center justify-center z-50"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                      >
                        <div className="relative">
                          <motion.img
                            src={selectedImage}
                            alt="Full-size preview"
                            className="max-w-full max-h-full rounded-lg shadow-lg"
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.8 }}
                          />
                          {/* Close Button */}
                          <button
                            className="absolute top-4 right-4 text-white rounded-full hover:bg-black transition-all"
                            onClick={handleClose}
                          >
                            <IoCloseCircle className="h-10 w-10" />
                          </button>
                        </div>
                      </motion.div>
                    )}
        </div>
        
      ) : (
        <h1>No Certificate here!</h1>
      )}
    </>
  );
};

export default Certificate;
