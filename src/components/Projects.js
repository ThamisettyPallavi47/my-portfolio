import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Projects.css';
import Slider from './Slider';
import { FaGithub } from 'react-icons/fa6';

const projects = [
  {
    title: 'Weather Monitoring & Prediction System ',
    description: 'An intelligent system that monitors real-time environmental data and uses AI to predict trends, provide alerts, and recommend actions for a healthier environment.',
    techStack: ['Python', 'Flask', 'Openweather API', 'Machine Learning'],
    githubLink: 'https://github.com/ThamisettyPallavi47/WEATHER-MONITORING-APP',
    demoLink: 'https://weather-monitoring-app-m53t.onrender.com/',
    image: process.env.PUBLIC_URL + '/images/weather.png',
  },
  {
    title: 'Superstore Sales & Profit Analysis ',
    description: 'Developed machine learning models, Power BI dashboards, and Streamlit applications using Python for data analysis and business insights',
    techStack: ['Python', 'Pandas', 'Numpy', 'Machine Learning', 'Power BI'],
    githubLink: 'https://github.com/ThamisettyPallavi47/SUPERSTOREDATAANALYSIS',
    demoLink: 'https://superstoredataanalysis-xyeg6y7vqcnw3uyxkezalr.streamlit.app/',
    image: process.env.PUBLIC_URL + '/images/superstore.png',
  },
  {
    title: 'Infosphere - Responsive Blog Posts',
    description: 'A responsive blog platform built with React featuring categorized articles, dark/light mode, and email-based contact support.',
    techStack: ['React.js', 'Node.js', 'Express.js', 'EmailJS'],
    githubLink: 'https://github.com/ThamisettyPallavi47/INFOSPHERE-REACT.JS',
    demoLink: 'https://thamisettypallavi47.github.io/INFOSPHERE-REACT.JS/',
    image: process.env.PUBLIC_URL + '/images/infosphere.png',
  },
  {
    title: 'Smart Student Productivity & Task Management System',
    description: 'Developed a full-stack MERN application with JWT-based role authentication, REST APIs, and analytics dashboards for secure student task management.',
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB','JWT'],
    githubLink: 'https://github.com/ThamisettyPallavi47/TASKMANAGEMENT',
    demoLink: 'https://thamisettypallavi47.github.io/TASKMANAGEMENT/',
    image: process.env.PUBLIC_URL + '/images/smartstudent.png',
  },
  {
    title: 'AI Snake Game Comparison Platform',
    description: 'Built a real-time Snake Game platform to compare Manual, BFS, and A* algorithms using live performance metrics and interactive gameplay.',
    techStack: ['React.js', 'Python',  'Flask','BFS','A* Algorithm','REST API'],
    githubLink: 'https://github.com/ThamisettyPallavi47/SNAKE-GAME-COMPARISON',
    demoLink: 'https://snake-game-comparison.vercel.app/',
    image: process.env.PUBLIC_URL + '/images/snakegame.png',
  },
];

const Projects = () => {
  return (
    <motion.div
      className="portfolio-section"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="sub-title">Projects</h2>
      <Slider
        items={projects}
        autoPlay
        interval={6000}
        renderItem={(project) => (
          <div className="project-slide">
            <div className="project-image-panel">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-details">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech-stack">
                {project.techStack.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
              <div className="project-actions">
                {project.githubLink && (
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link primary-link">
                    <FaGithub /> GitHub
                  </a>
                )}
                {project.demoLink && (
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="project-link secondary-link">
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      />
    </motion.div>
  );
};

export default Projects;