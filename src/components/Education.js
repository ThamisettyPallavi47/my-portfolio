

import React from "react";
import '../styles/Education.css';
import { motion } from "framer-motion";

const educationData = [
  {
    degree: "High School",
    institution: "AP Model School & College",
    year: "2019 - 2020",
    cgpa: "9.5 CGPA",
    description:
      "Completed high school with focus on english,science,social and mathematics.",
  },
  {
    degree: "Higher Secondary",
    institution: "AP Model School & College",
    year: "2020 - 2022",
    cgpa: "6.9 CGPA",
    description:
      "Completed higher secondary school with focus on science,and mathematics",
  },
  {
    degree: "Bachelor's Degree",
    institution: "SVCET(A)",
    year: "2022 - 2026",
    cgpa: "8.88 CGPA",
    description:
      "Studied Computer Science Engineering Specialized in Data Science and Machine Learning techniques.",
  },
];

const Education = () => {
  return (
    <section className="education-section" id="education">
      <h2 className="section-title">EDUCATION</h2>
      <div className="timeline-container">
        {educationData.map((item, index) => (
          <motion.div
            className="timeline-item"
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="timeline-dot" />
            <div className="timeline-content">
              <span className="timeline-year">{item.year}</span>
              <h3 className="timeline-degree">{item.degree}</h3>
              <p className="timeline-institution">{item.institution}</p>
              <p className="timeline-cgpa">CGPA: {item.cgpa}</p>
              <p className="timeline-description">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
