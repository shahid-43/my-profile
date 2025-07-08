import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="container">
      <h2>About Me</h2>
      <motion.div
        className="about-container"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="about-image">
          <div className="about-image-inner">
             {/* Make sure you have a profile picture in the /public folder */}
             <p>  Shahid Shareef Mohammad </p>
          </div>
        </div>
        <div className="about-text">
          <p>
            I am a dedicated Software Engineer with professional experience building robust web applications and API services at Riskcovry. Currently, I am expanding my expertise by pursuing a Master's degree in Computer and Information Science at the University of Florida.
          </p>
          <p>
            My passion lies at the intersection of full-stack development and artificial intelligence. I enjoy tackling complex challenges and am always eager to learn and apply new technologies to create impactful solutions.
          </p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </motion.div>
    </section>
  );
};

export default About;