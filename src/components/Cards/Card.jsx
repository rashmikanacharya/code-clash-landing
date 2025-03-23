
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Robot, Swords } from 'lucide-react';
import './Card.scss';

const Card = ({ title, description, icon, index, iconColor, bgColor }) => {
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
          <div className="card__icon-container" style={{ backgroundColor: bgColor }}>
            <div className="card__icon" style={{ color: iconColor }}>{icon}</div>
          </div>
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
      icon: <Robot size={40} />,
      bgColor: '#F44336', // Red background
      iconColor: 'white' // White icon
    },
    {
      title: '1v1 Battle',
      description: 'Compete head-to-head with other coders in real-time. Race to solve problems, optimize algorithms, and climb the global leaderboard.',
      icon: <Swords size={40} />,
      bgColor: '#4CAF50', // Green background
      iconColor: 'white' // White icon
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
              iconColor={card.iconColor}
              bgColor={card.bgColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardsSection;
