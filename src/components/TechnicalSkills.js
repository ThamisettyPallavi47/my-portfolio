
import React from "react";
import "../styles/TechnicalSkills.css";
import { motion } from "framer-motion";
import {
  FaCode,
  FaChartLine,
  FaDatabase,
  FaCloud,
  FaScrewdriverWrench,
  FaBrain,
  FaUsers,
  FaHeadset,
  FaUserTie,
  FaClock,
  FaBolt,
  FaGlobe,
} from "react-icons/fa6";

const Skills = () => {
  const technicalGroups = [
    {
      title: "Programming Languages",
      icon: <FaCode />,
      items: ["Python", "SQL", "JavaScript"],
    },
    {
      title: "Frontend Technologies",
      icon: <FaCode />,
      items: ["HTML", "CSS", "React.js"],
    },
    {
      title: "Data Analytics & Visualization",
      icon: <FaChartLine />,
      items: ["Power BI", "Excel", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Streamlit"],
    },
    {
      title: "Backend Development",
      icon: <FaCode />,
      items: ["Flask", "Node.js", "REST APIs", "API Integration", "JSON"],
    },
    {
      title: "Databases",
      icon: <FaDatabase />,
      items: ["MySQL", "MongoDB"],
    },
    {
      title: "Developer Tools",
      icon: <FaScrewdriverWrench />,
      items: ["GitHub", "Postman", "Jupyter Notebook", "VS Code"],
    },
    {
      title: "Cloud & OS",
      icon: <FaCloud />,
      items: ["AWS (S3, EC2, CloudFront, IAM)", "Linux", "Bash Scripting"],
    },
    {
      title: "Core Concepts",
      icon: <FaBrain />,
      items: ["Data Structures & Algorithms", "Object-Oriented Programming", "Data Analyst"],
    },
  ];

  const professionalSkills = [
    { icon: <FaBolt />, text: "Problem Solving" },
    { icon: <FaHeadset />, text: "Communication" },
    { icon: <FaUsers />, text: "Teamwork" },
    { icon: <FaUserTie />, text: "Leadership" },
    { icon: <FaClock />, text: "Time Management" },
    { icon: <FaBolt />, text: "Adaptability" },
    { icon: <FaBrain />, text: "Quick Learning" },
  ];

  const languages = ["English – Fluent", "Telugu"];

  return (
    <section className="skills-section" id="skills">
      <h1 className="sub-title">Skills</h1>

      <div className="skills-container">
        <motion.div
          className="skills-panel technical-panel"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading1">Technical Skills</h2>
          <div className="technical-groups">
            {technicalGroups.map((group, index) => (
              <div className="skill-group" key={index}>
                <h3 className="skill-group-title">
                  <span>{group.icon}</span> {group.title}
                </h3>
                <div className="skill-tags">
                  {group.items.map((item, itemIndex) => (
                    <span className="skill-tag" key={itemIndex}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="skills-panel professional-panel"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="heading1">Professional Skills</h2>
          <div className="professional-list">
            {professionalSkills.map((skill, index) => (
              <div className="professional-skill" key={index}>
                <span className="professional-icon">{skill.icon}</span>
                <span>{skill.text}</span>
              </div>
            ))}

            <div className="languages-subsection">
              <h3 className="languages-heading">
                <span className="professional-icon"><FaGlobe /></span>
                <span>Languages</span>
              </h3>
              <div className="languages-list">
                {languages.map((language, index) => (
                  <div className="professional-skill language-skill" key={index}>
                    <span className="professional-icon"><FaGlobe /></span>
                    <span>{language}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
