
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Bot, Swords, Users, ArrowRight, Check } from 'lucide-react';
import './Card.css';

const Card = ({ title, description, icon, features, category, badge }) => {
  return (
    <motion.div 
      className={`card card--${category}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className={`card__badge card__badge--${category}`}>
        {badge}
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
      title: 'Solo Practice',
      description: 'Enhance your coding skills at your own pace with adaptive challenges tailored to your skill level.',
      icon: <Bot size={32} />,
      features: [
        'Personalized learning path',
        'Instant feedback on solutions',
        'Track your progress over time'
      ],
      category: 'solo',
      badge: 'Solo'
    },
    {
      title: '1v1 Battles',
      description: 'Test your skills against other programmers in real-time coding battles with competitive rankings.',
      icon: <Swords size={32} />,
      features: [
        'Live competitive coding',
        'Global leaderboards',
        'Earn points and badges'
      ],
      category: 'battle',
      badge: '1v1'
    },
    {
      title: 'Team Challenges',
      description: 'Collaborate with other developers to solve complex problems and build real-world projects.',
      icon: <Users size={32} />,
      features: [
        'Collaborative problem solving',
        'Project-based learning',
        'Code reviews and feedback'
      ],
      category: 'team',
      badge: 'Team'
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
            Learning Modes
          </motion.span>
          
          <motion.h2 
            className="cards-section__title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Choose How You Want to Improve
          </motion.h2>
          
          <motion.p
            className="cards-section__description"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Whether you prefer solo practice, competitive battles, or team collaboration, we have the perfect learning environment for you.
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
              category={card.category}
              badge={card.badge}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardsSection;
