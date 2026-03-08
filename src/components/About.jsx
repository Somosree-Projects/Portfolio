// src/components/About.jsx
import React from "react";
import "../styles/about.css";
import { motion } from "framer-motion";

const timelineData = [
  {
    year: "2019–2020",
    title: "🏫 Secondary Education",
    description:
      "Completed from Barrackpore Ramakrishna Vivekananda Mission Vidyabhavan with 68.86%. Built strong fundamentals in Mathematics and Computer Science.",
  },
  {
    year: "2020–2022",
    title: "🏫 Higher Secondary Education",
    description:
      "Graduated from Sukchar Satadal Balika Vidyayatan with 76.4% (Science). Focused on Physics, Computer Science, and Logic Building.",
  },
  {
    year: "2022",
    title: "🎓 Started BCA & Web Dev Journey",
    description:
      "Enrolled in Bachelor of Computer Application at Brainware University. Also began exploring web development with HTML, CSS, and JavaScript.",
  },
  {
    year: "2023",
    title: "🎨 Frontend Creativity & Projects",
    description:
      "Experimented with animations and UI design using vanilla JavaScript. Focused on crafting smooth, interactive user experiences.",
  },
  {
    year: "2024",
    title: "💡 FlickFinder — First Full Project",
    description: (
      <>
        Built{" "}
        <a
          href="https://your-flickfinder-link.com"
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >
          FlickFinder
        </a>
        , a movie browsing platform using HTML, CSS, JavaScript, PHP, and MySQL.
        Practiced full-stack integration with real-time features.
      </>
    ),
  },
  {
    year: "2025",
    title: "🚀 FuntasticIQ, Portfolio Launch & MCA Begins",
    description: (
      <>
        Completed BCA at Brainware University with a final CGPA of <strong>9.49</strong>. Built{" "}
        <a
          href="https://your-funtasticiq-link.com"
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >
          FuntasticIQ
        </a>{" "}
        using the MERN stack and launched a fully animated, RPG-style developer portfolio. Also began my Master’s in Computer Application (MCA) at Brainware University.
      </>
    ),
  },
];

const About = () => {
  return (
    <section className="about-section" id="about">
      <h2 className="about-heading">🧭 About Me 🧭</h2>

      <div className="timeline">
        {timelineData.map((item, index) => (
          <motion.div
            className="timeline-item"
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.3 }}
            viewport={{ once: true }}
          >
            <div className="timeline-year">{item.year}</div>
            <div className="timeline-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;
