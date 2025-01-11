import React, { useEffect, useState } from "react";
import PortfolioSlider from "./components/Portfolio Slider/PortfolioSlider";
import ProjectSection from "./components/Project Section/ProjectSection";
import { Route, Routes, useLocation } from "react-router-dom";
import NotFound from "./components/404 Not Found/NotFound";
import Navbar from "./components/Navigation/Navbar";
import PageLoader from "./components/Page Loader/PageLoader";
import { AnimatePresence } from "framer-motion";

const App = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  // Show loader on route change
  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 1000); // Simulate loading time

    return () => clearTimeout(timeout);
  }, [location.pathname]);

  return (
    <>
      {loading ? (
        <PageLoader />
      ) : (
        <AnimatePresence mode="wait">
          <div className="max-w-6xl mx-auto px-6 py-2 bg-white">
            <Routes key={location.pathname} location={location}>
              <Route path="/" element={<PortfolioSlider />} />
              <Route path="/project/:variable" element={<ProjectSection />} />
              <Route path="/project" element={<ProjectSection />} />
              {/* <Route path="*" element={<NotFound />} /> */}
            </Routes>
            <Navbar />
          </div>
        </AnimatePresence>
      )}
    </>
  );
};

export default App;
