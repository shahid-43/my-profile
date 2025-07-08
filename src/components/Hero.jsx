import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hi, I'm Shahid Shareef Mohammad
        </motion.h1>

        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
        >
          <TypeAnimation
            sequence={[
              'A Full Stack Developer',
              2000,
              'An AI Enthusiast',
              2000,
              'I build with React, Go, and Python.',
              2000,
            ]}
            wrapper="p"
            speed={50}
            className="subtitle"
            repeat={Infinity}
          />
        </motion.div>
        
        <motion.div
            className="hero-socials"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
        >
          <a href="https://github.com/shahid-43" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;