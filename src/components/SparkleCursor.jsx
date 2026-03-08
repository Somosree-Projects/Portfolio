// src/components/SparkleCursor.jsx
import { useEffect } from "react";
import "../styles/sparkleCursor.css";

const SparkleCursor = () => {
  useEffect(() => {
    const createSparkle = (x, y) => {
      const sparkle = document.createElement("div");
      sparkle.className = "sparkle";
      sparkle.style.left = `${x + window.scrollX}px`;
      sparkle.style.top = `${y + window.scrollY}px`;
      document.body.appendChild(sparkle);

      setTimeout(() => {
        sparkle.remove();
      }, 700);
    };

    const handleMouseMove = (e) => {
      createSparkle(e.clientX, e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return null;
};

export default SparkleCursor;
