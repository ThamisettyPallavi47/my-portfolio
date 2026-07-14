
import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from "react-simple-typewriter";
import '../styles/Home.css';

import profileImage from '../assets/portfoliophoto1.png';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa6';

const Home = () => {
  return (
    <motion.div
      className="home"
      
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="home-layout">
        <div className="home-content">
          <motion.h3
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Hello, It's Me
          </motion.h3>
          <motion.h1
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Tamisetty Pallavi
          </motion.h1>
          {/* <motion.h3
            className="text"
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            And I'm a <span>Python Developer | MERN Stack Developer | Data Analyst</span>
          </motion.h3> */}
          <motion.h3
            className="text"
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            And I'm a{" "}
            <span>
              <Typewriter
                words={[
                  "Python Developer",
                  "Data Analyst",
                  "MERN Stack Developer",
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={90}
                deleteSpeed={60}
                delaySpeed={1800}
              />
            </span>
          </motion.h3>
          {/* <motion.p
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
           Driven Computer Science graduate with a passion for Data Analytics, Python Development, and MERN Stack applications, focused on building efficient and user-friendly software solutions.
          </motion.p> */}
          <motion.p
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            Computer Science (Data Science) graduate passionate about developing
            scalable web applications, analyzing data, and building AI-powered
            solutions using Python and modern web technologies.
          </motion.p>
          <motion.div
            className="home-sci"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.5 }}
          >
            <a href="https://www.linkedin.com/in/tamisetty-pallavi-901275291/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={24} />
            </a>
            <a href="https://github.com/ThamisettyPallavi47" target="_blank" rel="noopener noreferrer">
              <FaGithub size={24} />
            </a>
            <a href="mailto:pallavithammisetty@gmail.com" target="_blank" rel="noopener noreferrer"><FaEnvelope size={24} /></a>
          </motion.div>

          <a
            href={process.env.PUBLIC_URL + "/tamisettypallavi.pdf"}
            download="Tamisettypallavi.pdf"
            className="resume-btn"
          >
            Download Resume⬇️
          </a>
        </div>

        <motion.div
          className="home-image-wrapper"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          whileHover={{ scale: 1.01, y: -4 }}
        >
          <div className="home-image-card">
            <img src={profileImage} alt="Tamisetty Pallavi" className="home-image" />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;