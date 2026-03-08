// src/components/ThemeToggle.jsx
import React from "react";
import { useTheme } from "./ThemeContext";
import "../styles/themeToggle.css";

const ThemeToggle = () => {
  const { mode, toggleTheme } = useTheme();

  return (
    <div className="theme-toggle">
      <button onClick={toggleTheme}>
        Switch to {mode === "rpg" ? "🎨 Artist Mode" : "🧙 RPG Mode"}
      </button>
    </div>
  );
};

export default ThemeToggle;
