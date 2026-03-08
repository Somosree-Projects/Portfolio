import React from "react";
import "../styles/projects.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const projects = [
  {
    slug: "flickfinder",
    title: "FlickFinder 🎬",
    subtitle: "Movie Discovery App",
    description: "A dynamic movie browsing platform built with HTML, CSS, JavaScript, PHP, and MySQL.",
    tools: ["HTML", "CSS", "JS", "PHP", "MySQL"],
  },
  {
    slug: "funtasticiq",
    title: "FuntasticIQ 🧠",
    subtitle: "Quiz-Based Gaming",
    description: "An interactive MERN stack quiz app with real-time scoring and profiles.",
    tools: ["MongoDB", "Express", "React", "Node.js"],
  },
  {
    slug: "my-next-project",
    title: "My Next Project ✨",
    subtitle: "Coming Soon",
    description: "An upcoming full-stack project blending creativity with complex interactions.",
    tools: ["???"],
  },
];

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-heading">🛠️ Featured Projects 🛠️</h2>

      <div className="project-grid">
        {projects.map((proj, idx) => (
          <motion.div
            key={idx}
            className="project-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link to={`/projects/${proj.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
              <h3>{proj.title}</h3>
              <p className="subtitle">{proj.subtitle}</p>
              <p className="description">{proj.description}</p>
              <div className="tools">
                {proj.tools.map((tool, i) => (
                  <span key={i} className="tool">{tool}</span>
                ))}
              </div>
              <p style={{ fontWeight: "bold", marginTop: "1rem" }}>→ View Full Details</p>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
