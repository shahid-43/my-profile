import React from 'react';
import { motion } from 'framer-motion';

const education = [
  {
      degree: "MS in Computer and Information Science",
      school: "University of Florida",
      period: "2024 - 2026",
      gpa: "4.0/4.0",
      description: "Focused on Software Engineering, AI, and Data Science."
    },
  {
    degree: "Bachelor of Technology in Computer Science",
    school: "Indian Institute of Technology, Gandhinagar",
    period: "2018 - 2022",
    gpa: "7.0/10.0",
    description: "Specialized in core computer science topics like algorithms, data structures, and computer architecture."
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Education = () => {
  return (
    <section id="education" className="container">
      <h2>Education</h2>
      <motion.div 
        className="education-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.2 }}
      >
        {education.map((edu, index) => (
          <motion.div className="education-card" key={index} variants={cardVariants}>
            <div className="card-header">
              <div>
                <h3>{edu.degree}</h3>
                <div className="school">{edu.school}</div>
              </div>
              <div className="period">{edu.period}</div>
            </div>
            <p>{edu.description}</p>
            <strong>GPA: {edu.gpa}</strong>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Education;