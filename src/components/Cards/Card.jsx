
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Card.scss';

const Card = ({ title, description, icon, index }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  
  const toggleFlip = () => {
    setIsFlipped(!isFlipped);
  };
  
  return (
    <motion.div 
      className="card-wrapper"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      onClick={toggleFlip}
      whileHover={{ y: -10 }}
    >
      <div className={`card ${isFlipped ? 'is-flipped' : ''}`}>
        <div className="card__face card__face--front">
          <div className="card__icon">{icon}</div>
          <h3 className="card__title">{title}</h3>
          <div className="card__arrow">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </div>
        </div>
        
        <div className="card__face card__face--back">
          <h3 className="card__title">{title}</h3>
          <p className="card__description">{description}</p>
          <div className="card__arrow">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5"></path>
              <path d="m12 19-7-7 7-7"></path>
            </svg>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const CardsSection = () => {
  const cards = [
    {
      title: 'Solo',
      description: 'Practice coding with interactive challenges at your own pace. Solve problems, build projects, and improve your skills in a supportive environment.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 7h-3a2 2 0 0 1-2-2V2"></path>
          <path d="M9 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7l4 4v10a2 2 0 0 1-2 2Z"></path>
          <path d="m3 15 2 2 4-4"></path>
        </svg>
      )
    },
    {
      title: '1v1 Battle',
      description: 'Compete head-to-head with other coders in real-time. Race to solve problems, optimize algorithms, and climb the global leaderboard.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="m18 16 4-4-4-4"></path>
          <path d="m6 8-4 4 4 4"></path>
          <path d="m14.5 4-5 16"></path>
        </svg>
      )
    }
  ];
  
  return (
    <section className="cards-section">
      <div className="container">
        <motion.h2 
          className="cards-section__title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Choose Your Path
        </motion.h2>
        
        <div className="cards-section__grid">
          {cards.map((card, index) => (
            <Card 
              key={card.title} 
              title={card.title} 
              description={card.description} 
              icon={card.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardsSection;
