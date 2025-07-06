import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Achievements.css';
// import Certificate1 from "../assets/b267019f-18d2-4476-a9c6-3f0c4eda29a0.png";
const achievements = [
  {
    id: 1,
    title: "Winner – Math Quiz 2022",
    date: "Dec 2022",
    organizer: "ITECHNOFEST 2K22",
    description:
      "A fun and interactive Math Quiz application designed to test and improve users' arithmetic skills with timed questions, instant feedback, and score tracking",
    imageUrl:
      "https://cdn-icons-png.flaticon.com/512/190/190411.png", // trophy icon
    certificateLink: "#",
    // imageUrl: Certificate1,
  },
  {
    id: 2,
    title: "AI-Based Environmental Monitoring and Prediction System",
    date: "April 2025",
    organizer: "BIT BASH",
    description:
      "Selected to present an AI-Based Environmental Monitoring and Prediction System analyzer at BIT BASH 2025, showcasing Python & ML skills.",
    imageUrl:
      "https://cdn-icons-png.flaticon.com/512/2910/2910794.png", // presentation icon
    certificateLink: "#",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariantsLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const itemVariantsRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};
export default function Achievements() {
  return (
    <section className="achievements-section">
      <h2 className="section-title">Achievements</h2>
      <motion.div
        className="achievements-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {achievements.map((ach, index) => (
          <motion.div
            key={ach.id}
            className={`achievement-item ${
              index % 2 === 0 ? "left-layout" : "right-layout"
            }`}
          >
            <motion.div
              className="achievement-text"
              variants={itemVariantsLeft}
              
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.8 }}
            >
              <h3 className="achievement-title">{ach.title}</h3>
              <p className="achievement-date-organizer">
                {ach.date} | {ach.organizer}
              </p>
              <p className="achievement-description">{ach.description}</p>
            {ach.certificateLink && (
  <a
    href={ach.certificateLink}
    className="certificate-btn"
    target="_blank"
    rel="noopener noreferrer"
  >
    View Certificate
  </a>
)}
            </motion.div>
            <motion.div
              className="achievement-image"
              variants={itemVariantsRight}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.8 }}
            >
              <img src={ach.imageUrl} alt={ach.title} />
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
