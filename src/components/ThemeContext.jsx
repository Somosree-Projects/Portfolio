// src/components/ThemeContext.jsx
import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

const themes = {
  artistic: {
    background: "#1a1a2e",
    text: "#ffffff",
    font: "Poppins, sans-serif",
  },
  rpg: {
    background: "#0d0b00",
    text: "#ffe9c1",
    font: "'MedievalSharp', cursive",
  },
};

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState("artistic");

  const toggleTheme = () => {
    const newMode = mode === "artistic" ? "rpg" : "artistic";
    setMode(newMode);
  };

  const theme = themes[mode];

  return (
    <ThemeContext.Provider value={{ theme, mode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
