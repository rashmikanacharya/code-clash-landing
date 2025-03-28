
import { motion } from 'framer-motion';
import './AnimatedLogo.css';

const AnimatedLogo = () => {
  const logoVariants = {
    initial: {
      scale: 0.8,
      opacity: 0,
      y: 20
    },
    animate: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.2,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      filter: "brightness(1.2)",
      transition: {
        duration: 0.3,
        yoyo: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div 
      className="animated-logo"
      variants={logoVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
    >
      <div className="logo-container">
        <svg 
          viewBox="0 0 240 80" 
          className="animated-logo__svg"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00BFFF" />
              <stop offset="100%" stopColor="#1E90FF" />
            </linearGradient>
          </defs>
          <path 
            d="M40,55 L20,55 L10,40 L20,25 L40,25 L50,40 L40,55 Z" 
            fill="url(#logo-gradient)" 
            className="logo-shape"
          />
          <path 
            d="M80,65 L60,65 L50,45 L60,25 L80,25 L90,45 L80,65 Z" 
            fill="url(#logo-gradient)" 
            className="logo-shape"
          />
          <path 
            d="M120,55 L100,55 L90,40 L100,25 L120,25 L130,40 L120,55 Z" 
            fill="url(#logo-gradient)" 
            className="logo-shape"
          />
          <text 
            x="140" 
            y="50" 
            fontFamily="'Inter', sans-serif" 
            fontSize="28" 
            fontWeight="700" 
            fill="#ffffff"
            className="logo-text"
          >
            CODE
          </text>
          <text 
            x="140" 
            y="70" 
            fontFamily="'Inter', sans-serif" 
            fontSize="18" 
            fontWeight="500" 
            fill="#00BFFF"
            className="logo-text-sub"
          >
            CLASH
          </text>
        </svg>
      </div>
    </motion.div>
  );
};

export default AnimatedLogo;
