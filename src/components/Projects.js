import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Projects.css';
// import {FaGithub} from 'react-icons/fa';

const Projects = () => {
  return (
    <motion.div
      className="portfolio-section"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="sub-title">Projects</h2>
      <div className="portfolio-images">
        
        <div className="row">
          
          <img src={process.env.PUBLIC_URL + "/images/imageportfolio.jpeg"} alt="project 1 Title" />

          <div className="layer">
            <h5>AI-Based Environmental Monitoring and Prediction System </h5>
            <p>An intelligent system that monitors real-time environmental 
              data and uses AI to predict trends, provide alerts, and recommend actions for a healthier environment.
            Tech Used: machine learning, Python libraries, Flask,OpenCV</p>
            <a href="https://github.com/ThamisettyPallavi47/AI-based-weather-app" target="_blank" rel="noopener noreferrer">GITHUB</a>
          </div>
        </div>
        <div className="row">
         
          <img src={process.env.PUBLIC_URL + "/images/imageportfolio.jpeg"} alt="project 2 Title" />

          <div className="layer">
            <h5>AI-Based Job Recommendation System</h5>
            <p>AI-based system that matches job seekers with suitable roles using NLP and ML for personalized Recommendation
              and application tracking.Tech used:Python,HTML,CSS,JS,scikit-learn,spacy
            </p>
            <a href="https://github.com/ThamisettyPallavi47/AI-JOB-RECOMMENDATION" target="_blank" rel="noopener noreferrer">GITHUB</a>
          </div>
        </div>
        <div className="row">
          
          <img src={process.env.PUBLIC_URL + "/images/imageportfolio.jpeg"} alt="project 3 Title" />

          <div className="layer">
            <h5>Infosphere - Responsive Blog Posts</h5>
            <p>Created a responsive blog/news platform using React.js, featuring categorized 
              articles and a clean user interface.
 Implemented dark/light mode, responsive design, and a contact form using EmailJS.
 Developed backend functionality with Node.js and Express.js and deployed the project online.</p>

            <a href="https://thamisettypallavi47.github.io/INFOSPHERE-REACT.JS/" target="_blank" rel="noopener noreferrer">Live Demo</a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;