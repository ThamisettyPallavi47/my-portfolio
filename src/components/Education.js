

import React from "react";
import '../styles/Education.css';
import { motion } from "framer-motion";
import { FaSchool, FaCalendarAlt, FaChartLine } from "react-icons/fa";

const educationData = [
  {
    degree: "High School",
    institution: "AP Model School & College",
    year: "2019 - 2020",
    cgpa: "9.5 CGPA",
  },
  {
    degree: "Higher Secondary",
    institution: "AP Model School & College",
    year: "2020 - 2022",
    cgpa: "7.3 CGPA",
  },
  {
    degree: "Bachelor of Technology",
    institution: "Sri Venkateswara College of Engineering & Technology autonomous",
    year: "2022 - 2026",
    cgpa: "9.02 CGPA",
  },
];

const Education = () => {
  return (
    <section className="education-section" id="education">
      <h2 className="section-title">EDUCATION</h2>
      <div className="education-cards">
        {educationData.map((item, index) => (
          <motion.div
            className="education-card"
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.12 }}
            whileHover={{ y: -6, boxShadow: "0 14px 28px rgba(0, 0, 0, 0.28)" }}
          >
            <h3 className="education-degree">{item.degree}</h3>
            <div className="education-meta">
              <span><FaSchool /> {item.institution}</span>
              <span><FaCalendarAlt /> {item.year}</span>
              <span><FaChartLine /> {item.cgpa}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
