
// import React from 'react';

// import '../styles/Certifications.css';
// const certificates = [
//   {
//     title: "React Developer Certificate",
//     issuer: "Coursera",
//     courseName: "Meta Front-End Developer",
//     date: "June 2024",
//     duration: "6 Weeks",
//     skills: "React, JSX, Components, Hooks",
//     file: "/certificates/react-certificate.pdf",
//   },
//   {
//     title: "Web Development Bootcamp",
//     issuer: "Udemy",
//     courseName: "The Complete 2024 Web Developer Bootcamp",
//     date: "March 2024",
//     duration: "8 Weeks",
//     skills: "HTML, CSS, JavaScript, Node.js, React",
//     file: "/certificates/udemy-webdev.png",
//   },
//   {
//     title: "SQL for Data Science",
//     issuer: "NPTEL",
//     courseName: "Introduction to Databases",
//     date: "April 2024",
//     duration: "4 Weeks",
//     skills: "SQL, Joins, Subqueries, Aggregate Functions",
//     file: "/certificates/nptel-sql.pdf",
//   },
// ];

// const Certificate = () => {
  
//   return (
//     <section className="certificates-section">
//       <h1 className="certificates-title">My Certificates</h1>
//       <div className="certificates-grid">
//         {certificates.map((cert, index) => (
//           <div className="certificate-card" key={index}>
//             <h3>{cert.title}</h3>
//             <p><strong>Issuer:</strong> {cert.issuer}</p>
//             <p><strong>Course:</strong> {cert.courseName}</p>
//             <p><strong>Date:</strong> {cert.date}</p>
//             <p><strong>Duration:</strong> {cert.duration}</p>
//             <p><strong>Skills Learned:</strong> {cert.skills}</p>
//             <a
//               href={cert.file}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="view-button"
//             >
//               View Certificate
//             </a>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Certificate;
import React from 'react';
import { motion } from 'framer-motion'; // 👈 Added
import '../styles/Certifications.css';

const certificates = [
  {
    title: "Full Stack Foundation",
    issuer: "L&T EduTech",
    courseName: "Full Stack Foundation-Core Java",
    date: "Nov 2023 to Mar 2024",
    duration: "6 Months",
    skills: "java",
    file: "/certificates/corejava.jpg",
  },
  {
    title: "Python Development Bootcamp",
    issuer: "IBM",
    courseName: "Getting started with enterprise-grade AI",
    date: "Apr 2024",
    duration: "4 Weeks",
    skills: "Python,AI",
    file: "/certificates/pythonibm.png",
  },
  {
    title: "UI & UX Developer",
    issuer: "L&T EduTech",
    courseName: "UI AND UX",
    date: "Apr 2024 to Aug 2024",
    duration: "6 months",
    skills: "HYML,CSS,Bootcamp",
    file: "/certificates/ui-ux developer.jpg",
  },
];

const Certificate = () => {
  return (
    <section className="certificates-section">
      <h1 className="certificates-title">My Certificates</h1>
      <div className="certificates-grid">
        {certificates.map((cert, index) => (
          <motion.div
            className="certificate-card"
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h3>{cert.title}</h3>
            <p><strong>Issuer:</strong> {cert.issuer}</p>
            <p><strong>Course:</strong> {cert.courseName}</p>
            <p><strong>Date:</strong> {cert.date}</p>
            <p><strong>Duration:</strong> {cert.duration}</p>
            <p><strong>Skills Learned:</strong> {cert.skills}</p>
            <a
              href={cert.file}
              target="_blank"
              rel="noopener noreferrer"
              className="view-button"
            >
              View Certificate
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certificate;
