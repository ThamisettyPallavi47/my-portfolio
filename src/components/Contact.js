import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Contact.css';
import { FaLinkedin, FaGithub,FaEnvelope,FaPhoneAlt} from 'react-icons/fa';

const Contact = () => {
  return (
    <motion.div
      className="contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="contact-text">
        <h2>Contact me</h2>
        <h4>let's work together</h4>
        <p>
          Let's build something great together! I'm excited to hear your ideas and collaborate on exciting frontend development projects..
        </p>
        <ul className="contact-list">
          <li><FaEnvelope size={24}/>  contact@gmail.com</li>
          <li><FaPhoneAlt size={24} />  +1234567890</li>
        </ul>
        <div className="contact-icons">
          <a href="mailto:pallavithammisetty@gmail.com" target="_blank" rel="noopener noreferrer"><FaEnvelope size={24} /></a>
          <a href="https://www.linkedin.com/in/tamisetty-pallavi-901275291/" target="_blank" rel="noopener noreferrer"><FaLinkedin size={24} /></a>
          <a href="https://github.com/ThamisettyPallavi47" target="_blank" rel="noopener noreferrer"><FaGithub size={24} /></a>
          
        </div>
      </div>
      <div className="contact-form">
        <form>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
          <button type="submit" className="send">Send</button>
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;