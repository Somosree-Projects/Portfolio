// src/components/ProjectDetail.jsx
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../styles/projectDetail.css";
import { motion } from "framer-motion";

const projectData = {
  flickfinder: {
    title: "FlickFinder 🎬",
    subtitle: "Movie Discovery Web App",
    image: "/images/flickfinder-banner.webp",
    description:
      "FlickFinder is a Netflix-inspired movie discovery platform that allows users to browse, search, and filter through a dynamic collection of movies. Built using PHP and MySQL, it features a sleek interface and real-time interactions.",
    features: [
      "Movie categorization by genre, year, and rating",
      "Real-time AJAX-based search and filtering",
      "Responsive UI with HTML5, CSS3, and JavaScript",
      "Backend built in PHP and MySQL for dynamic content",
      "Favorites & movie preview with embedded video trailers",
    ],
    userFlow: [
      "Homepage shows trending and featured movies",
      "Users can filter by genre, rating, and release year",
      "Real-time search enables dynamic lookup of titles",
      "Movie detail cards open modals with trailers",
      "Built-in error handling for no matches and server errors",
    ],
    techStack: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL", "AJAX"],
    futureScope: [
      "Integrate TMDb or OMDb APIs for expanded movie database",
      "User login & watchlist functionality",
      "Admin panel to upload and update content",
      "Theme toggle for light/dark viewing mode",
    ],
    github: "https://github.com/yourusername/flickfinder",
    live: "https://your-flickfinder-site.com",
  },

  funtasticiq: {
    title: "FuntasticIQ 🧠",
    subtitle: "Quiz-Based Gaming Platform",
    image: "/images/funtasticiq-banner.webp",
    description:
      "FuntasticIQ is an interactive full-stack quiz platform where users take part in dynamic quizzes and track their progress. The admin panel allows for real-time quiz creation and analytics.",
    features: [
      "JWT-secured user registration and login",
      "Admin dashboard to add/update/delete quizzes",
      "Score tracking and leaderboard integration",
      "Interactive UI for seamless quiz experience",
      "MongoDB stores user data and results",
    ],
    userFlow: [
      "User signs up/logs in and lands on quiz dashboard",
      "Chooses from available categories and starts quiz",
      "Each question has a timer and 4 multiple choice answers",
      "Score calculated and shown at end with detailed results",
    ],
    techStack: ["React.js", "Node.js", "Express", "MongoDB", "JWT", "CSS"],
    futureScope: [
      "Real-time multiplayer quiz competition",
      "Analytics dashboard for performance tracking",
      "Push notifications and progress reminders",
      "Gamified levels with avatars and XP system",
    ],
    github: "https://github.com/SomosreeWebProjects/FuntasticIQ",
    live: "https://your-funtasticiq-site.com",
  },
};

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projectData[slug];
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const winHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / winHeight) * 100;
      setScrollPercent(scrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const listVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };


  if (!project) {
    return (
      <div className="project-detail-section">
        <p>Project not found.</p>
      </div>
    );
  }

  const fadeIn = (delay = 0.4) => ({
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { delay, duration: 0.8 },
  });

  return (
  <>
    {/* Scroll Progress Bar */}
    <div className="scroll-bar-container">
      <div className="scroll-bar" style={{ width: `${scrollPercent}%` }}></div>
    </div>

    <motion.div className="project-detail-section" initial="initial" animate="animate">
      <motion.h2 className="project-detail-heading" {...fadeIn(0.2)}>
        {project.title}
      </motion.h2>

      {project.image && (
        <motion.div className="project-banner" {...fadeIn(0.4)}>
          <img src={project.image} alt={`${project.title} banner`} loading="lazy"/>
        </motion.div>
      )}

      <motion.p className="project-subtitle" {...fadeIn(0.5)}>
        {project.subtitle}
      </motion.p>

      <motion.p className="project-description" {...fadeIn(0.6)}>
        {project.description}
      </motion.p>

      <motion.div {...fadeIn(0.7)}>
        <h3 className="section-heading">✨ Features</h3>
        <motion.ul
        className="project-features"
        variants={listVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        >
          {project.features.map((item, i) => (
            <motion.li variants={itemVariants} key={i}>
              ✅ {item}
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>

      {project.userFlow && (
        <motion.div {...fadeIn(0.8)}>
          <h3 className="section-heading">🔁 User Flow</h3>
          <motion.ul
          className="project-features"
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          >
            {project.userFlow.map((item, i) => (
              <motion.li variants={itemVariants} key={i}>{item}</motion.li>
            ))}
          </motion.ul>
        </motion.div>
      )}

      <motion.div {...fadeIn(0.9)}>
        <h3 className="section-heading">🛠️ Tech Stack</h3>
        <motion.ul
        className="project-features"
        variants={listVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        >
          {project.techStack.map((tech, i) => (
            <motion.li variants={itemVariants} key={i}>🧩 {tech}</motion.li>
          ))}
        </motion.ul>
      </motion.div>

      {project.futureScope && (
        <motion.div {...fadeIn(1)}>
          <h3 className="section-heading">🚀 Future Scope</h3>
          <motion.ul
          className="project-features"
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          >
            {project.futureScope.map((scope, i) => (
              <motion.li variants={itemVariants} key={i}>🔮 {scope}</motion.li>
            ))}
          </motion.ul>
        </motion.div>
      )}

      <motion.div className="project-links" {...fadeIn(1.1)}>
        <a href={project.live} target="_blank" rel="noopener noreferrer" className="tool">🌐 Live Site</a>
        <a href={project.github} target="_blank" rel="noopener noreferrer" className="tool">💻 GitHub</a>
      </motion.div>

      {/* Back & Next Navigation */}
      <motion.div className="project-navigation" {...fadeIn(1.2)}>
        <Link to="/" className="tool">← Back to Home</Link>
        {/* Calculate next project slug */}
        {(() => {
          const slugs = Object.keys(projectData);
          const currentIndex = slugs.indexOf(slug);
          const nextIndex = (currentIndex + 1) % slugs.length;
          const nextSlug = slugs[nextIndex];

          return (
            <Link to={`/projects/${nextSlug}`} className="tool">Next Project →</Link>
          );
        })()}
      </motion.div>
    </motion.div>
  </>
);

};

export default ProjectDetail;
