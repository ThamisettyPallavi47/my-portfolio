
import React from "react";
import "../styles/TechnicalSkills.css";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaPython, FaReact } from "react-icons/fa6";

const Skills = () => {
  const technicalSkills = [
    { name: "HTML", icon: <FaHtml5 color="#c95d2e" />, level: "90%" },
    { name: "CSS", icon: <FaCss3Alt color="#147bbc" />, level: "60%" },
    { name: "JavaScript", icon: <FaJs color="#b0bc1e" />, level: "65%" },
    { name: "Python", icon: <FaPython color="#09bcbc" />, level: "80%" },
    { name: "React.js", icon: <FaReact color="#61dbfb" />, level: "70%" },
  ];

  const professionalSkills = [
    { percent: "90%", text: "Creativity" },
    { percent: "60%", text: "Communication" },
    { percent: "75%", text: "Problem Solving" },
    { percent: "80%", text: "Team Work" },
  ];

  return (
    <section className="skills-section" id="skills">
      <h1 className="sub-title">Skills</h1>

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
            {technicalSkills.map((skill, index) => (
              <div className="bar" key={index}>
                {skill.icon}
                <div className="info">
                  <span>{skill.name}</span>
                </div>
                <div className="progressline">
                  <span style={{ width: skill.level }}></span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Professional Skills */}
        <motion.div
          className="container1"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="heading1">Professional Skills</h2>
          <div className="radial-bars">
            {professionalSkills.map((skill, index) => (
              <div className="radial-bar" key={index}>
                <svg viewBox="0 0 200 200">
                  <circle className="progress-bar" cx="100" cy="100" r="80"></circle>
                  <circle
                    className="path"
                    cx="100"
                    cy="100"
                    r="80"
                    style={{
                      strokeDasharray: 502,
                      strokeDashoffset: 502 - (parseInt(skill.percent) / 100) * 502,
                    }}
                  ></circle>
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
