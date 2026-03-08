// src/App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { AnimatePresence, motion } from "framer-motion";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import SoundToggle from "./components/SoundToggle";
import ProjectDetail from "./components/ProjectDetail";
import ScrollToTop from "./components/ScrollToTop";
import SparkleCursor from "./components/SparkleCursor";
import Footer from "./components/Footer";

const AppContent = () => {
  const location = useLocation();
  const isProjectDetail = location.pathname.startsWith("/projects/");

  return (
    <>
      <ScrollToTop />
      <SparkleCursor />
      <SoundToggle />

      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: "#1b0033",
            color: "#ffe7ff",
            fontFamily: "Cinzel, serif",
            border: "1px solid #ff99ff",
            boxShadow: "0 0 10px #ff69b4",
          },
          iconTheme: {
            primary: "#ff69b4",
            secondary: "#fff",
          },
        }}
      />

      {!isProjectDetail && <Navbar />}

      {/* ✅ Animate route transitions */}
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Routes location={location}>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <About />
                  <Skills />
                  <Projects />
                  <Contact />
                  <Footer />
                </>
              }
            />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return <Router>{loading ? <Loader /> : <AppContent />}</Router>;
}

export default App;
