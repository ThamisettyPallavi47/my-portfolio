
import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Home.css';
import bgImage from '../assets/pallavibackgroundimage.png';
import { FaLinkedin, FaGithub,FaEnvelope} from 'react-icons/fa6';

const Home = () => {
  return (
    <motion.div
      className="home"
      style={{ backgroundImage: `url(${bgImage})` }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
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
        <motion.h3
          className="text"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          And I'm a <span>MERN Stack Developer</span>
        </motion.h3>
        <motion.p
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
         Currently pursuing my final year B.Tech
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
  href={process.env.PUBLIC_URL + "/tamisettypallaviresume.pdf"}
  download="Tamisetty_Pallavi_Resume.pdf"
  className="resume-btn"
>
  Download Resume⬇️
</a>

      </div>
    </motion.div>
  );
};

export default Home;