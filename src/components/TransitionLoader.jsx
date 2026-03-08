// src/components/TransitionLoader.jsx
import React from "react";
import { motion } from "framer-motion"; // ✅ Add motion from Framer Motion
import "../styles/transitionLoader.css";

const TransitionLoader = () => {
  return (
    <motion.div
      className="transition-loader"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="magic-orb" />
      <p className="loading-text">Teleporting through the quest ✨</p>
    </motion.div>
  );
};

export default TransitionLoader;
