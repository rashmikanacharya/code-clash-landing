
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Bot, Swords, Check, ArrowRight } from 'lucide-react';
import './Card.css';

const Card = ({ title, description, icon, features, language, badge }) => {
  return (
    <motion.div 
      className="card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className={`card__language-badge card__language-badge--${language.toLowerCase()}`}>
        {language}
      </div>
      
      <div className="card__icon-container">
        <div className="card__icon">{icon}</div>
      </div>
      
      <h3 className="card__title">{title}</h3>
      <p className="card__description">{description}</p>
      
      <div className="card__features">
        {features.map((feature, index) => (
          <div className="card__feature" key={index}>
            <div className="card__feature-icon">
              <Check size={16} />
            </div>
            <span className="card__feature-text">{feature}</span>
          </div>
        ))}
      </div>
      
      <div className="card__arrow-container">
        <span className="card__arrow-text">Learn more</span>
        <div className="card__arrow">
          <ArrowRight size={16} />
        </div>
      </div>
    </motion.div>
  );
};

const CardsSection = () => {
  const cards = [
    {
      title: 'Python Mastery Path',
      description: 'Master Python programming through our comprehensive curriculum designed for all skill levels.',
      icon: <Bot size={32} />,
      features: [
        'Data science and analysis',
        'Web scraping and automation',
        'Machine learning fundamentals'
      ],
      language: 'Python'
    },
    {
      title: 'Java Development Track',
      description: 'Build enterprise-grade applications and solve advanced algorithmic challenges.',
      icon: <Swords size={32} />,
      features: [
        'Object-oriented programming',
        'Spring Boot fundamentals',
        'Concurrency and multithreading'
      ],
      language: 'Java'
    },
    {
      title: 'JavaScript Expertise',
      description: 'From front-end wizardry to full-stack mastery, elevate your JavaScript knowledge.',
      icon: <Bot size={32} />,
      features: [
        'Modern front-end frameworks',
        'Node.js and server-side JS',
        'Real-time applications'
      ],
      language: 'JavaScript'
    }
  ];
  
  return (
    <section className="cards-section">
      <div className="cards-section__background"></div>
      <div className="cards-section__container">
        <div className="cards-section__header">
          <motion.span 
            className="cards-section__subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Language Tracks
          </motion.span>
          
          <motion.h2 
            className="cards-section__title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Master the Programming Language of Your Choice
          </motion.h2>
          
          <motion.p
            className="cards-section__description"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Choose your preferred language track and dive into specialized challenges, projects, and competitive coding battles.
          </motion.p>
        </div>
        
        <div className="cards-section__grid">
          {cards.map((card, index) => (
            <Card 
              key={card.title} 
              title={card.title} 
              description={card.description} 
              icon={card.icon}
              features={card.features}
              language={card.language}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardsSection;
