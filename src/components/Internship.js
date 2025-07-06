// import React from 'react';
// import { motion } from 'framer-motion';
// import '../styles/Internship.css';

// const Internship = () => {
//   return (
//     <motion.div
//       className="internship"
//       initial={{ y: 100 }}
//       animate={{ y: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       <h2 className="sub-title">Internship/Work Experience</h2>
//       <p>No internship experience listed yet.</p>
//     </motion.div>
//   );
// };

// export default Internship;
import React from "react";
import '../styles/Internship.css';
import { motion } from "framer-motion";

const Internships = () => {
  return (
    <section className="internship-section">
      <h2 className="section-title">Internship Experience</h2>
      <div className="internship-container">
        {/* Internship 1 */}
        <motion.div
          className="internship-box left-box"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3>Python Development Intern</h3>
          <p className="company">TechSaksham</p>
          <p className="duration">Nov 2024 – Jan 2025</p>
          <ul className="details">
            <li>Location:Remote</li>
            <li>Developed Face Recognition using Python</li>
            <li>Based on Attendence Management System</li>
            <li>web-based application that leverages machine learning</li>
          </ul>
          <p className="tech-stack">Tech Used: machine learning, Python libraries, Flask,OpenCV</p>
        </motion.div>

        {/* Internship 2 */}
        <motion.div
          className="internship-box right-box"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3>React.js Intern</h3>
          <p className="company">NRKS Skill Development</p>
          <p className="duration">July 2025 – Sep 2025</p>
          <ul className="details">
            <li>Location:Remote</li>
            <li>Built portfolio website using React.js</li>
            <li>Develop,Test an maintain front-end components</li>
            <li>Explore modern libraries and tools</li>
          </ul>
          <p className="tech-stack">Tech Used: React.js, JavaScript, HTML, CSS</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Internships;
