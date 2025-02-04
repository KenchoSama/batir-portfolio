import React, { useEffect, useRef, useState } from "react";
// import PortfolioSlider from "./components/Portfolio Slider/PortfolioSlider";
import ProjectSection from "./components/Project Section/ProjectSection";
import { Route, Routes, useLocation } from "react-router-dom";
import NotFound from "./components/404 Not Found/NotFound";
import CustomNavBar from "./components/Navigation/CustomNavBar"; 
import Footer from "./components/Footer/Footer";
import PageLoader from "./components/Page Loader/PageLoader";
import "./components/Page Loader/Loader.css";
import { AnimatePresence } from "framer-motion";
import gsap from "gsap";
import Certificate from "./components/Certificate Section/Certificate";
import About from "./components/About Section/About";
import PortfolioSliderOrg from "./components/Portfolio Slider/PortfolioSliderOrg";
import AboutMod from "./components/About Section/AboutMod";

const App = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const loaderSpan = useRef(null);

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 1000);
    gsap.to(loaderSpan.current, { duration: 1, background: "black" });

    return () => clearTimeout(timeout);
  }, [location.pathname]);

  return (
    <>
      {loading ? (
        <PageLoader />
      ) : (
        <div className="flex flex-col min-h-screen">
          <CustomNavBar />
          <main className="flex-grow">
            <AnimatePresence mode="wait">
              <div
                className="max-w-6xl mx-auto px-6 py-2 bg-white"
                ref={loaderSpan}
              >
                <Routes key={location.pathname} location={location}>
                  <Route index element={<PortfolioSliderOrg />} /> {/* ✅ Fix: Load homepage */}
                  <Route path="projects" element={<ProjectSection />} />
                  <Route path="project/:id" element={<ProjectSection />} />
                  <Route path="about" element={<About />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </div>
            </AnimatePresence>
          </main>
          <Footer />
        </div>
      )}
    </>
  );
};

export default App;
