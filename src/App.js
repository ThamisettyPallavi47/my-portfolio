import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import TechnicalSkills from './components/TechnicalSkills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Internship from './components/Internship';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [theme, setTheme] = useState('dark');
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className={`App ${theme}`}>
      <nav className="navbar">
        <div className="navbar-brand">Portfolio</div>
        <button className="nav-toggle" onClick={toggleNav}>
          ☰
        </button>
        <ul className={`nav-links ${isNavOpen ? 'open' : ''}`}>
          <li><a href="#home" className={activeSection === 'home' ? 'active' : ''} onClick={() => { setActiveSection('home'); toggleNav(); }}>Home</a></li>
          <li><a href="#about-me" className={activeSection === 'about-me' ? 'active' : ''} onClick={() => { setActiveSection('about-me'); toggleNav(); }}>About Me</a></li>
          <li><a href="#education" className={activeSection === 'education' ? 'active' : ''} onClick={() => { setActiveSection('education'); toggleNav(); }}>Education</a></li>
          <li><a href="#skills" className={activeSection === 'skills' ? 'active' : ''} onClick={() => { setActiveSection('skills'); toggleNav(); }}>Skills</a></li>
          <li><a href="#project" className={activeSection === 'project' ? 'active' : ''} onClick={() => { setActiveSection('project'); toggleNav(); }}>Project</a></li>
          <li><a href="#certifications" className={activeSection === 'certifications' ? 'active' : ''} onClick={() => { setActiveSection('certifications'); toggleNav(); }}>Certifications</a></li>
          <li><a href="#internship" className={activeSection === 'internship' ? 'active' : ''} onClick={() => { setActiveSection('internship'); toggleNav(); }}>Internship</a></li>
          <li><a href="#achievements" className={activeSection === 'achievements' ? 'active' : ''} onClick={() => { setActiveSection('achievements'); toggleNav(); }}>Achievements</a></li>
          <li><a href="#contact" className={activeSection === 'contact' ? 'active' : ''} onClick={() => { setActiveSection('contact'); toggleNav(); }}>Contact</a></li>
        </ul>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleTheme}
          className="theme-toggle"
        >
          Toggle {theme === 'dark' ? 'Light' : 'Dark'} Mode
        </motion.button>
      </nav>
      <section id="home"><Home /></section>
      <section id="about-me"><AboutMe /></section>
      <section id="education"><Education /></section>
      <section id="skills"><TechnicalSkills /></section>
      <section id="project"><Projects /></section>
      <section id="certifications"><Certifications /></section>
      <section id="internship"><Internship /></section>
      <section id="achievements"><Achievements /></section>
      <section id="contact"><Contact /></section>
      <Footer />
    </div>
  );
}

export default App;