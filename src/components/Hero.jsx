// src/components/Hero.jsx
import React from "react";
import { motion } from "framer-motion";
import "../styles/hero.css";

const Hero = () => {
  return (
    <section className="hero-section" id="hero">
    {/* Particle Canvas */}
      <div className="particle-bg">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
      </div>
  <div className="hero-container">
    {/* Left: Text Content */}
    <div className="hero-left">
      <motion.h1
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="hero-title"
      >
        Hi, I’m <span className="highlighted">Somosree</span> — Full Stack Developer & UI Enthusiast.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="hero-subtext"
      >
        Whether it's a dashboard, a game, or a portfolio — I build experiences that feel alive, responsive, and delightful.
      </motion.p>
    </div>
    {/* Right: Video */}
    <div className="hero-right">
      <video
        autoPlay
        muted
        playsInline
        className="hero-video"
      >
        <source src="/videos/hero-intro.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  </div>
</section>

  );
};

export default Hero;
