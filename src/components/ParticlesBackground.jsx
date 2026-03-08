import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: 0 },
        particles: {
          number: { value: 50 },
          color: { value: "#ffffff" },
          links: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4 },
          move: { enable: true, speed: 0.6 },
          size: { value: 2 },
          opacity: { value: 0.5 },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
          },
        },
        background: { color: "transparent" },
      }}
    />
  );
};

export default ParticlesBackground;
