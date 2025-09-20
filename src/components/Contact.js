import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css';
// import { FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa6';


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_jzk3oka',   
      'template_qsrkbuq',  
      form.current,
      'JMi4bqspYuGoiYVQq'    
    )
    .then((result) => {
      alert('Message sent successfully!');
      e.target.reset();  
    }, (error) => {
      alert('Failed to send message. Please try again.');
      console.error(error.text);
    });
  };

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
          <a href="mailto:pallavithammisetty@gmail.com" target="_blank" rel="noopener noreferrer">
          <li><FaEnvelope size={24} /> pallavithammisetty@gmail.com</li>
          </a>
          <li><FaPhone size={24} /> 7801099887</li>
        </ul>
        <div className="contact-icons">
          <a href="mailto:pallavithammisetty@gmail.com" target="_blank" rel="noopener noreferrer"><FaEnvelope size={24} /></a>
          <a href="https://www.linkedin.com/in/tamisetty-pallavi-901275291/" target="_blank" rel="noopener noreferrer"><FaLinkedin size={24} /></a>
          <a href="https://github.com/ThamisettyPallavi47" target="_blank" rel="noopener noreferrer"><FaGithub size={24} /></a>
        </div>
      </div>
      <div className="contact-form">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="from_name" placeholder="Your Name" required />
          <input type="email" name="from_email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required></textarea>
          <button type="submit" className="send">Send</button>
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;
