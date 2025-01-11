import React, { useState } from "react";
import * as motion from "motion/react-client";
import { useDragControls } from "motion/react";
import { FaArrowTurnUp } from "react-icons/fa6";
import { Link, useParams } from "react-router-dom";



const defaultData = {
  title: "Miami Tropic",
  mainImage:
    "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=800&h=600",
  thumbnails: [
    "https://images.unsplash.com/photo-1577493340887-b7bfff550145?w=800&h=600",
    "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=800&h=600",
    "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=800&h=600",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600",
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600",
    "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&h=600",
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600",
  ],
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
  navigationLinks: ["contact", "education", "work", "certificates", "bio"],
};

const ProjectSection = ({ data = defaultData }) => {
    
const { variable }= useParams();
  const [visibleCount, setVisibleCount] = useState(3);
  const hasMoreImages = data.thumbnails.length > visibleCount;

  const controls = useDragControls();

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };



  return (
    <>
      <Link to={"/"} className="sticky top-4  gap-4  flex mt-3 ">
        <FaArrowTurnUp className="-rotate-90 " />
        <h1 className=" h-10 mb-6 text-sm font-normal text-gray-800">{data.title}</h1>
        <h1 className=" h-10 mb-6 text-sm font-normal text-gray-800">{variable}</h1>
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto relative px-8 overflow-x-hidden"
      >
        {/* Title */}

        {/* Main Image */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          whileDrag={{ scale: 0.9, rotate: 10 }}
          dragSnapToOrigin
          drag
          className="mb-8 select-none h-[50vh] w-[40vw] mx-auto overflow-hidden shadow-lg"
        >
          <img
            src={data.mainImage}
            alt={data.title}
            className="pointer-events-none w-full h-full object-cover object-top"
          />
        </motion.div>

        {/* Thumbnail Grid */}
        <div className="space-y-4">
          <div className="grid max-w-xl mx-auto grid-cols-3 place-items-center gap-8">
            {data.thumbnails.slice(0, visibleCount).map((thumb, index) => (
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                whileDrag={{ scale: 0.9, rotate: 10 }}
                dragSnapToOrigin
                drag
                key={index}
                className="h-28 w-48 overflow-hidden shadow-md"
              >
                <img
                  src={thumb}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full pointer-events-none h-full object-cover object-top"
                />
              </motion.div>
            ))}
          </div>

          {/* Load More Button */}
          {hasMoreImages && (
            <div className="flex justify-center mt-20">
              <button
                class="bg-white text-center w-48 rounded-2xl h-14 relative text-black text-lg font-regular group"
                type="button"
                onClick={handleLoadMore}
              >
                <div class="bg-black rounded-xl h-12 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[195px] z-10 duration-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1024 1024"
                    height="25px"
                    width="25px"
                    className="rotate-180"
                  >
                    <path
                      d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
                      fill="#fff"
                    ></path>
                    <path
                      d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
                      fill="#fff"
                    ></path>
                  </svg>
                </div>
                <p class="translate-x-2 border py-[10px] rounded-xl">
                  Load More
                </p>
              </button>
            </div>
          )}
        </div>

        {/* Description Text */}
        <div className="my-16 mx-auto max-w-3xl">
          <h1 className="text-3xl mb-4">Description :</h1>
          <p className="text-gray-700 leading-relaxed">{data.description}</p>
        </div>
      </motion.div>
    </>
  );
};

export default ProjectSection;
