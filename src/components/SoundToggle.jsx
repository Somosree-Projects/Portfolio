// src/components/SoundToggle.jsx
import React, { useEffect, useRef, useState } from "react";
import "../styles/soundToggle.css";

const SoundToggle = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio("/assets/sound/ambient-forest.mp3"));

  useEffect(() => {
    const audio = audioRef.current;
    audio.loop = true;
    isPlaying ? audio.play() : audio.pause();

    return () => {
      audio.pause();
    };
  }, [isPlaying]);

  return (
    <div className="sound-toggle">
      <button onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? "🔇 Mute Magic" : "🔊 Play Magic"}
      </button>
    </div>
  );
};

export default SoundToggle;
