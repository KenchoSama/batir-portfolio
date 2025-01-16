import React, { useEffect, useRef, useState } from "react";
import PortfolioSlider from "./components/Portfolio Slider/PortfolioSlider";
import ProjectSection from "./components/Project Section/ProjectSection";
import { Route, Routes, useLocation } from "react-router-dom";
import NotFound from "./components/404 Not Found/NotFound";
import Navbar from "./components/Navigation/Navbar";
import PageLoader from "./components/Page Loader/PageLoader";
import "./components/Page Loader/Loader.css";
import { AnimatePresence } from "framer-motion";
import gsap from "gsap";
import Certificate from "./components/Certificate Section/Certificate";
import About from "./components/About Section/About";



const App = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  const loaderSpan = useRef(null)
  // Show loader on route change
  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 1000); // Simulate loading time

    gsap.to(loaderSpan.current, {
      duration: 1,
      background: "black"

    })

    return () => clearTimeout(timeout);
  }, [location.pathname]);


  return (
    <>
      {loading ? (
        <PageLoader />
        
      ) : (
        <AnimatePresence mode="wait">
          {/* <div className="flex fixed top-0 z-30 w-full h-screen">
              <div className="w-[20%] bg-black up-1 translate-y-full"></div>
              <div className="w-[20%] bg-black up-2 translate-y-full"></div>
              <div className="w-[20%] bg-black up-3 translate-y-full"></div>
              <div className="w-[20%] bg-black up-4 translate-y-full"></div>
              <div className="w-[20%] bg-black up-5 translate-y-full"></div>
            </div> */}
            
          <div className="max-w-6xl mx-auto px-6 py-2 bg-white "  ref={loaderSpan} >
            <Routes key={location.pathname} location={location}>
              <Route path="/" element={<PortfolioSlider />} />
              <Route path="/project/:id" element={<ProjectSection />} />
              <Route path="/projects" element={<ProjectSection />} />
              <Route path="/certificates" element={<Certificate />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Navbar />
          </div>
        </AnimatePresence>
      )}
    </>
  );
};

export default App;
