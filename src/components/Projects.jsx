import React from 'react';
import { motion } from 'framer-motion';

const projectsData = [
  {
    title: "Gatorides",
    description: "Full-stack Ride Sharing Platform with React, GoLang, and MongoDB.",
    tags: ["React", "GoLang", "MongoDB", "Stripe"],
    image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg",
    github: "https://github.com/shahid-43/SE-Gatorides",
    live: "#", // Add live link if available
  },
  {
    title: "FitTrack",
    description: "Fitness Tracking App with Django, React, and PostgreSQL with an AI-powered chatbot.",
    tags: ["Django", "React", "PostgreSQL", "AI", "HuggingFace"],
    image: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1",
    github: "https://github.com/shahid-43/fit_track",
    live: "#",
  },
  {
    
    title: "CodeDrop",
    description: "Full-stack file transfer platform enabling secure, one-time downloads via a shared alphanumeric code, powered by Spring Boot and React.",
    tags: ["Spring Boot", "React", "WebSockets", "Docker", "Nginx"],
    
    // TODO: Replace this placeholder with your actual project image
    image: "https://images.pexels.com/photos/4126724/pexels-photo-4126724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    github: "https://github.com/shahid-43/FitTrack", // NOTE: Link points to FitTrack, update if different
    live: "#",
  },
  {
    title: "Data Structure Visualizer",
    description: "An interactive tool to visualize common data structures and algorithms, built with React.",
    tags: ["React", "Data Structures", "Algorithms"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Binary_tree.svg/800px-Binary_tree.svg.png",
    github: "#", // Add github link if available
    live: "#",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Projects = () => {
  return (
    <section id="projects" className="container">
      <h2>My Projects</h2>
      <motion.div 
        className="projects-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        transition={{ staggerChildren: 0.2 }}
      >
        {projectsData.map((project, index) => (
          <motion.div className="project-card" key={index} variants={cardVariants}>
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <h3>{project.title}</h3>
            <div className="project-tags">
              {project.tags.map((tag, i) => (
                <span key={i} className="project-tag">{tag}</span>
              ))}
            </div>
            <p>{project.description}</p>
            <div className="project-links">
              <a href={project.github} className="btn" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href={project.live} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Live Demo</a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;