import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/Achievements.css';
import Slider from './Slider';

const achievementGroups = {
  Workshops: [
    {
      id: 1,
      title: 'Math Quiz 2022',
      description: 'Participated in an engaging math quiz event and strengthened problem solving under timed conditions.',
      imageUrl: 'https://cdn-icons-png.flaticon.com/512/190/190411.png',
      certificateLink: '',
    },
    {
      id: 2,
      title: 'Office Master on Power BI',
      description: 'Participated in a one-day Power BI workshop to gain practical dashboard development skills.',
      imageUrl: process.env.PUBLIC_URL + '/certificates/powerbi1.jpg',
      certificateLink: '/certificates/powerbi1.jpg',
    },
    {
      id: 3,
      title: 'Power BI Workshop',
      description: 'Learned to build interactive dashboards and visualize business data using Microsoft Power BI.',
      imageUrl: process.env.PUBLIC_URL + '/certificates/powerbi2.jpg',
      certificateLink: '/certificates/powerbi2.jpg',
    },
  ],
  Certifications: [
    {
      id: 4,
      title: 'IBM Python for Data Science',
      description: 'Completed a certification focused on Python programming, data analysis, and practical machine learning workflows.',
      imageUrl: process.env.PUBLIC_URL + '/certificates/pythonibm.png',
      certificateLink: '/certificates/pythonibm.png',
    },
    {
      id: 5,
      title: 'Core Java Certification',
      description: 'Completed a Java certification covering core programming fundamentals and object-oriented concepts.',
      imageUrl: process.env.PUBLIC_URL + '/certificates/java.jpg',
      certificateLink: '/certificates/java.jpg',
    },
    {
      id: 6,
      title: 'Python Full Stack Development',
      description: 'Successfully completed Python Full Stack Development training covering full-stack web development fundamentals.',
      imageUrl: process.env.PUBLIC_URL + '/certificates/pythoninfo.jpg',
      certificateLink: '/certificates/pythoninfo.jpg',
    },
    {
      id: 7,
      title: 'UI & UX Developer',
      description: 'Completed UI/UX Developer training focused on user-centered interface and experience design.',
      imageUrl: process.env.PUBLIC_URL + '/certificates/uiux.jpg',
      certificateLink: '/certificates/uiux.jpg',
    },
  ],
  Hackathons: [
    {
      id: 8,
      title: 'OpenAI Academy × NxtWave Regional Buildathon',
      description: 'Participated in a 2-day AI buildathon focused on developing innovative AI-powered solutions',
      imageUrl: process.env.PUBLIC_URL + '/certificates/nxtwave.jpeg',
      certificateLink: '/certificates/nxtwave.jpeg',
    },
  ],
};

const tabs = ['Workshops', 'Certifications', 'Hackathons'];

export default function Achievements() {
  const [activeTab, setActiveTab] = useState('Certifications');
  const activeItems = achievementGroups[activeTab];

  return (
    <section className="achievements-section">
      <h2 className="section-title">Achievements & Certifications</h2>
      <div className="achievement-tabs" role="tablist" aria-label="Achievement categories">
        {tabs.map((tab) => (
          <button
            key={tab}
            type="button"
            className={`achievement-tab ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
      >
        <Slider
          items={activeItems}
          autoPlay
          interval={6000}
          renderItem={(item) => (
            <div className="achievement-card">
              <img src={item.imageUrl} alt={item.title} />
              <div className="achievement-card-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                {item.certificateLink && (
                  <a href={process.env.PUBLIC_URL + item.certificateLink} className="certificate-btn" target="_blank" rel="noopener noreferrer">
                    View Certificate
                  </a>
                )}
              </div>
            </div>
          )}
        />
      </motion.div>
    </section>
  );
}
