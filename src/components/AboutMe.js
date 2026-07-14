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
            src={process.env.PUBLIC_URL + "/images/portfoliophoto1.png"}
          alt="Profile"
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
          style={{ 
  }}
        />
      </div>
      <div className="about-text">
        {/* <h2>About Us</h2>
        <h4>full stack developer!</h4>
        <p>
          B.Tech graduate (2026 pass-out) specializing in Data Science, with a strong foundation in web development and data analytics.
           Completed a Frontend Development internship at NRKS Skill Development,
           where I worked on building responsive user interfaces using React.js. Proficient in Python,SQL,HTML, CSS, JavaScript(basic), Power BI, and Microsoft Excel. 
           Actively seeking a full-time job opportunity where I can apply my technical skills, 
          contribute effectively to organizational goals, and continue learning in a professional environment.
        </p> */}
        <h2>About Me</h2>

          <h4>Python Developer | Data Analyst | MERN Stack Developer</h4>

          <p>
            I'm a Computer Science (Data Science) graduate passionate about building
            scalable web applications and data-driven solutions. I have experience in
            React.js, Python, SQL, Flask, Power BI, and modern web technologies through
            academic projects and internships. I'm a quick learner who enjoys working in
            collaborative team environments, embraces new challenges, and continuously
            explores emerging technologies to enhance my skills and deliver impactful
            solutions.
          </p>
        <a href="https://www.linkedin.com/in/tamisetty-pallavi-901275291/"target="_blank" rel="noopener noreferrer" className="btn-box">More About Me</a>
      </div>
    </motion.div>
  );
};

export default AboutMe;