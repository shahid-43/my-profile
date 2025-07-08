import React from 'react';
import { motion } from 'framer-motion';

// Skills from your data, cleaned up for consistency
const skillsList = [
  'React', 'Node.js', 'Django', 'SpringBoot', 'Python', 'Java', 'JavaScript', 
  'GoLang', 'AWS', 'AI', 'ML', 'SQL', 'Docker', 'PostgreSQL', 'MongoDB', 'Git'
];

const skillItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Skills = () => {
  return (
    <section id="skills" className="container">
      <h2>My Skills</h2>
      <motion.div
        className="skills-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.05 }}
      >
        {skillsList.map((skill, index) => (
          <motion.div className="skill-item" key={index} variants={skillItemVariants}>
            {skill}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;