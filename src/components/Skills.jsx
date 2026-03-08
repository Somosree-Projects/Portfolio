// src/components/Skills.jsx
import React from "react";
import "../styles/skills.css";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiPhp, SiMongodb, SiExpress, SiFramer, SiTailwindcss } from "react-icons/si";

const skills = [
  { name: "HTML5", icon: <FaHtml5 />, glow: "#e44d26" },
  { name: "CSS3", icon: <FaCss3Alt />, glow: "#2965f1" },
  { name: "JavaScript", icon: <FaJs />, glow: "#f7df1e" },
  { name: "PHP", icon: <SiPhp />, glow: "#7377ad" },
  { name: "React", icon: <FaReact />, glow: "#61dafb" },
  { name: "Node.js", icon: <FaNodeJs />, glow: "#3c873a" },
  { name: "Express.js", icon: <SiExpress />, glow: "#ffffff" },
  { name: "MongoDB", icon: <SiMongodb />, glow: "#4db33d" },
  { name: "Git", icon: <FaGitAlt />, glow: "#f1502f" },
  { name: "GitHub", icon: <FaGithub />, glow: "#ffffff" },
  { name: "Framer Motion", icon: <SiFramer />, glow: "#e942ff" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, glow: "#38bdf8" },
  { name: "MySQL / DB", icon: <FaDatabase />, glow: "#f29111" },
];

const Skills = () => {
  // Duplicate skills for seamless infinite scroll
  const repeatedSkills = [...skills, ...skills];

  return (
    <section className="skills-section" id="skills">
      <h2 className="skills-heading">💼 Core Development Skills 💼</h2>

      <div className="skills-marquee">
        <div className="skills-track">
          {repeatedSkills.map((skill, i) => (
            <div className="skill-glyph" key={i} style={{ boxShadow: `0 0 15px ${skill.glow}` }}>
              <div className="skill-icon" style={{ color: skill.glow }}>
                {skill.icon}
              </div>
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
