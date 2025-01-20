import React, { useState } from "react";
import * as motion from "motion/react-client";
import { useDragControls } from "motion/react";
import { FaArrowTurnUp } from "react-icons/fa6";
import { Link, useParams } from "react-router-dom";
import { projects } from "../../libs/projects.js";
import { useEffect } from "react";
import { IoCloseCircle } from "react-icons/io5";

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
};

const ProjectSection = ({ data = defaultData }) => {
  const { id } = useParams();
  const [visibleCount, setVisibleCount] = useState(3);
  const hasMoreImages = data.thumbnails.length > visibleCount;


  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };

  const [project, setProject] = useState(null);

  useEffect(() => {
    // Find the project whose ID matches the URL param
    const matchedProject = projects.find((proj) => proj.id === id);

    // console.log(matchedProject);

    if (matchedProject) {
      setProject(() => matchedProject); // Set the matched project in state
      // console.log("Project  found!");
    } else {
      console.warn("Project not found!");
    }
    // console.log(project);
  }, [id, projects]);

  useEffect(() => {
    console.log("Project State Updated", project);
  }, [project]);

  const [selectedImage, setSelectedImage] = useState(null); // To track the clicked image

  const handleClose = () => setSelectedImage(null);

  return (
    <>
      {project ? (
        <>
          <Link to={"/"} className="sticky top-4  gap-4  flex mt-3 ">
            <FaArrowTurnUp className="-rotate-90 mt-1 lg:mt-0 text-xl" />
            <h1 className=" h-10 mb-6 text-2xl lg:text-sm font-normal text-gray-800">
              {project.id}
            </h1>
            <h1 className=" h-10 mb-6 text-2xl lg:text-sm font-normal text-gray-800">
              {project.name}
            </h1>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className="max-w-6xl mx-auto relative lg:px-8 overflow-x-hidden"
          >
            {/* Title */}

            {/* Main Image */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              onClick={() => setSelectedImage(project.thumbnail)}
              className="mb-8 select-none h-[50vh] w-[80vw] lg:w-[40vw] mx-auto overflow-hidden shadow-lg"
            >
              <img
                src={project.thumbnail}
                alt={project.name}
                className="pointer-events-none w-full h-full object-cover object-top"
              />
            </motion.div>

            {/* Project Title */}
            <div className="text-4xl text-center pb-10">
              <h1>{project.name}</h1>
            </div>

            {/* Thumbnail Grid */}
            <div className="space-y-4">
              <div className="grid max-w-xl mx-auto grid-cols-3 place-items-center gap-8">
                {console.log(project.images.length)}
                {project.images
                  .slice(0, visibleCount)
                  .map((thumb, index) => (
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      key={index}
                      className="h-28 w-48 overflow-hidden shadow-md cursor-pointer"
                      onClick={() => setSelectedImage(thumb)} // Set the selected image
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
            <div className="my-16 mx-auto max-w-7xl">
              <h1 className="text-3xl mb-4">Description :</h1>
              <p className="text-gray-700 leading-relaxed">
                {project.description}
              </p>
            </div>
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
                  className="absolute top-4 right-4 text-black rounded-full hover:bg-black hover:text-white transition-all"
                  onClick={handleClose}
                >
                  <IoCloseCircle className="h-10 w-10" />
                </button>
              </div>
            </motion.div>
          )}
        </>
      ) : (
        <>
          <div>
            <Link to={"/"} className="sticky top-4  gap-4  flex mt-3 ">
              <FaArrowTurnUp className="-rotate-90 " />
              <h1 className=" h-10 mb-6 text-sm font-normal text-gray-800">
                Back
              </h1>
            </Link>
            <div className="grid lg:grid-cols-4 gap-5 pb-10">
              {projects.map((project, index) => (
                <Link to={`/project/${project.id}`} className="p-3 border-2 flex gap-3 border-black lg:border hover:bg-black hover:text-white transition-all">
                  <p>{index + 1}</p>
                  <h1>{project.name}</h1>
                </Link>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ProjectSection;
