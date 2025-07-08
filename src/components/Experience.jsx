import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    title: "Software Engineer",
    company: "Riskcovry",
    period: "2022 - 2024",
    description: "Built web applications from concept to deployment, developed various API services for Partner requirements, worked with cross-functional teams.",
    skills: ["JavaScript", "Python","Node.js","Django", "React", "PostgreSQL", "Docker", "Git"]
  },
  {
    title: "ML Intern",
    company: "Verzeo",
    period: "2020",
    description: "Developed a machine learning model to predict the resale value of second-hand vehicles based on features like brand, mileage, fuel type, and age. Collected and cleaned data, performed exploratory analysis, and evaluated multiple regression algorithms to optimize prediction accuracy.",
    skills: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Jupyter Notebook"]
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Experience = () => {
  return (
    <section id="experience" className="container">
      <h2>Work Experience</h2>
      <motion.div 
        className="experience-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.2 }}
      >
        {experiences.map((exp, index) => (
          <motion.div className="experience-card" key={index} variants={cardVariants}>
            <div className="card-header">
              <div>
                <h3>{exp.title}</h3>
                <div className="company">{exp.company}</div>
              </div>
              <div className="period">{exp.period}</div>
            </div>
            <p>{exp.description}</p>
            <div className="skills-list">
              {exp.skills.map((skill, i) => (
                <span key={i} className="skill-tag">{skill}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Experience;