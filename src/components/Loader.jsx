// src/components/Loader.jsx
import React, { useEffect, useState } from "react";
import "../styles/loader.css";

const Loader = () => {
  const [fadeOut, setFadeOut] = useState(false);
  const [progress, setProgress] = useState(0);
  const fullText = "✨ Welcome to my portfolio...";
  const [displayedText, setDisplayedText] = useState("");


  // Typing effect
  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText((prev) => prev + fullText.charAt(index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50);
    return () => clearInterval(typingInterval);
  }, []);

  // Sparkle trail
  useEffect(() => {
    const createSparkle = (x, y) => {
      const sparkle = document.createElement("div");
      sparkle.className = "cursor-sparkle";
      sparkle.style.left = `${x}px`;
      sparkle.style.top = `${y}px`;
      document.body.appendChild(sparkle);
      setTimeout(() => sparkle.remove(), 800);
    };

    const handleMouseMove = (e) => createSparkle(e.clientX, e.clientY);
    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const startTime = Date.now();
    const duration = 4200; // 4.2s for smooth 100%
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const percent = Math.min((elapsed / duration) * 100, 100);
      setProgress(Math.floor(percent));
      
      if (percent >= 100) {
        clearInterval(interval);
        setTimeout(() => setFadeOut(true), 400); // trigger fade after progress done
      }
    }, 20);
    
    return () => clearInterval(interval);
  }, []);

  // Circle progress calculations
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className={`loader-wrapper ${fadeOut ? "fade-out" : ""}`}>
      <div className="spell-circle">
        <div className="circle-core">
          <svg className="progress-ring" width="100" height="100">
            <circle
              className="progress-ring-bg"
              cx="50"
              cy="50"
              r={radius}
            />
            <circle
              className="progress-ring-fill"
              cx="50"
              cy="50"
              r={radius}
              strokeDasharray={circumference}
              strokeDashoffset={offset}
            />
          </svg>
        </div>
        <div className="magic-ring" />
        <div className="particles">
          {[...Array(12)].map((_, i) => (
            <span key={i} className={`particle particle-${i % 4}`} />
          ))}
        </div>
      </div>
      <div className="progress-text-overlay">{progress}%</div>
      <p className="loader-text">
        {displayedText}
        <span className="cursor">❂</span>
      </p>
    </div>
  );
};

export default Loader;
