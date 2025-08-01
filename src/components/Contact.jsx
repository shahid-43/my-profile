import React from 'react';
import { motion } from 'framer-motion';
import { MdOutlineEmail } from 'react-icons/md';
import { FaLinkedin, FaGithub, FaPhone } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="container">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="contact-container"
      >
        <h2>Get In Touch</h2>
        <p>
          I'm always open to discussing new opportunities and collaborations. Feel free to reach out!
        </p>
        <div className="contact-links">
          <a href="mailto:shahidshareef0102@gmail.com" target="_blank" rel="noopener noreferrer" className="contact-link-item">
            <MdOutlineEmail className="icon"/>
            <span>shahidshareef0102@gmail.com</span>
          </a>
           <a href="tel:+13522462892" className="contact-link-item">
            <FaPhone className="icon"/>
            <span>+1 (352) 246-2892</span>
          </a>
          <a href="https://www.linkedin.com/in/mohammad-shahid-shareef/" target="_blank" rel="noopener noreferrer" className="contact-link-item">
            <FaLinkedin className="icon"/>
            <span>LinkedIn</span>
          </a>
          <a href="https://github.com/shahid-43" target="_blank" rel="noopener noreferrer" className="contact-link-item">
            <FaGithub className="icon"/>
            <span>GitHub</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;