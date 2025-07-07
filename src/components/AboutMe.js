import React from 'react';
import { motion } from 'framer-motion';

import '../styles/AboutMe.css';

const AboutMe = () => {
  return (
    <motion.div
      className="about"
      id="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="about-img">
        <motion.img
          // src="/images/pallavipicture.png"
            src={process.env.PUBLIC_URL + "/images/pallavipicture.png"}
          alt="Profile"
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
          style={{ 
  }}
        />
      </div>
      <div className="about-text">
        <h2>AboutMe</h2>
        <h4>full stack developer!</h4>
        <p>
          Enthusiastic and motivated 3rd-year B.Tech student specializing in Data Science, with a solid foundation in web technologies and data analytics.
           Proficient in HTML, CSS, JavaScript, Python, Power BI, and Microsoft Excel. Currently looking for an internship or 
           job opportunity to bridge the gap between academic knowledge and industry experience. Passionate about continuous learning, gaining practical exposure,
            and contributing effectively to dynamic teams. 
          Eager to kick-start a professional journey where I can grow while delivering value through my skills.
        </p>
        <a href="https://www.linkedin.com/in/tamisetty-pallavi-901275291/"target="_blank" rel="noopener noreferrer" className="btn-box">More About Me</a>
      </div>
    </motion.div>
  );
};

export default AboutMe;