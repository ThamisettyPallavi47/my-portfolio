
import React from "react";
import '../styles/TechnicalSkills.css';
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <h1 className="sub-title">
        Skills
      </h1>

      <div className="skills-container">
        {/* Technical Skills */}
        <motion.div
          className="container1"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading1">Technical Skills</h2>
          <div className="technical-bars">
            <div className="bar">
              <i className="bx bxl-html5" style={{ color: "#c95d2e" }}></i>
              <div className="info">
                <span>HTML</span>
              </div>
              <div className="progressline html">
                <span></span>
              </div>
            </div>
            <div className="bar">
              <i className="bx bxl-css3" style={{ color: "#147bbc" }}></i>
              <div className="info">
                <span>CSS</span>
              </div>
              <div className="progressline css">
                <span></span>
              </div>
            </div>
            <div className="bar">
              <i className="bx bxl-javascript" style={{ color: "#b0bc1e" }}></i>
              <div className="info">
                <span>JavaScript</span>
              </div>
              <div className="progressline javascript">
                <span></span>
              </div>
            </div>
            <div className="bar">
              <i className="bx bxl-python" style={{ color: "#09bcbc" }}></i>
              <div className="info">
                <span>Python</span>
              </div>
              <div className="progressline python">
                <span></span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Professional Skills */}
        <motion.div
          className="container1"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h1 className="heading1">Professional Skills</h1>
          <div className="radial-bars">
            {[
              { percent: "90%", text: "Creativity", class: "path-1" },
              { percent: "60%", text: "Communication", class: "path-2" },
              { percent: "75%", text: "Problem Solving", class: "path-3" },
              { percent: "80%", text: "Team Work", class: "path-4" },
            ].map((skill, index) => (
              <div className="radial-bar" key={index}>
                <svg viewBox="0 0 200 200">
                  <circle className="progress-bar" cx="100" cy="100" r="80"></circle>
                  <circle className={`path ${skill.class}`} cx="100" cy="100" r="80"></circle>
                </svg>
                <div className="percentage">{skill.percent}</div>
                <div className="text">{skill.text}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
