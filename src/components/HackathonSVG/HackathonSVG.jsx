
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Laptop } from 'lucide-react';
import './HackathonSVG.css';

const HackathonSVG = () => {
  return (
    <div className="hackathon-svg-container">
      <div className="hackathon-gradient-bg"></div>
      
      {/* Floating code boxes in background */}
      <motion.div 
        className="floating-box floating-box--python"
        initial={{ y: 0 }}
        animate={{ y: [-10, 10, -10] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      >
        <div className="floating-box__content">
          <Code size={18} className="floating-box__icon" />
          <span className="floating-box__text">Python</span>
        </div>
      </motion.div>
      
      <motion.div 
        className="floating-box floating-box--java"
        initial={{ y: 0 }}
        animate={{ y: [10, -10, 10] }}
        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
      >
        <div className="floating-box__content">
          <Code size={18} className="floating-box__icon" />
          <span className="floating-box__text">Java</span>
        </div>
      </motion.div>
      
      <motion.div 
        className="floating-box floating-box--js"
        initial={{ y: 0 }}
        animate={{ y: [-5, 15, -5] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      >
        <div className="floating-box__content">
          <Code size={18} className="floating-box__icon" />
          <span className="floating-box__text">JavaScript</span>
        </div>
      </motion.div>
      
      {/* SVG Scene with developers */}
      <svg 
        viewBox="0 0 600 400" 
        className="hackathon-svg"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Subtle grid lines for tech feel */}
        <pattern id="grid-pattern" width="30" height="30" patternUnits="userSpaceOnUse">
          <path d="M 30 0 L 0 0 0 30" fill="none" stroke="rgba(0, 191, 255, 0.1)" strokeWidth="0.5"></path>
        </pattern>
        <rect width="600" height="400" fill="url(#grid-pattern)" />
        
        {/* Glowing table */}
        <motion.ellipse 
          cx="300" 
          cy="320" 
          rx="250" 
          ry="40"
          fill="url(#table-gradient)"
          initial={{ opacity: 0.5 }}
          animate={{ opacity: [0.5, 0.7, 0.5] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <defs>
          <linearGradient id="table-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(0, 191, 255, 0.1)" />
            <stop offset="50%" stopColor="rgba(0, 191, 255, 0.3)" />
            <stop offset="100%" stopColor="rgba(0, 191, 255, 0.1)" />
          </linearGradient>
        </defs>
        
        {/* Left Developer */}
        <g className="developer developer--left">
          {/* Body */}
          <motion.path 
            d="M190,220 Q190,280 190,310" 
            stroke="#33C3F0" 
            strokeWidth="30" 
            strokeLinecap="round"
            initial={{ opacity: 0.7 }}
            animate={{ opacity: [0.7, 0.9, 0.7] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          
          {/* Head */}
          <motion.circle 
            cx="190" 
            cy="190" 
            r="30" 
            fill="#33C3F0"
            initial={{ y: 0 }}
            animate={{ y: [-2, 2, -2] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          
          {/* Arms */}
          <motion.path 
            d="M160,230 Q130,260 110,240" 
            stroke="#33C3F0" 
            strokeWidth="12" 
            strokeLinecap="round"
            initial={{ rotate: 0, transformOrigin: "160px 230px" }}
            animate={{ rotate: [-1, 1, -1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          
          <motion.path 
            d="M220,230 Q250,260 270,240" 
            stroke="#33C3F0" 
            strokeWidth="12" 
            strokeLinecap="round"
            initial={{ rotate: 0, transformOrigin: "220px 230px" }}
            animate={{ rotate: [1, -1, 1] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
          />
          
          {/* Laptop */}
          <motion.rect 
            x="130" 
            y="240" 
            width="50" 
            height="40" 
            rx="5" 
            fill="#222222"
            initial={{ rotate: 0, transformOrigin: "155px 260px" }}
            animate={{ rotate: [-1, 1, -1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          
          <motion.rect 
            x="130" 
            y="280" 
            width="50" 
            height="5" 
            rx="2" 
            fill="#111111"
            initial={{ rotate: 0, transformOrigin: "155px 260px" }}
            animate={{ rotate: [-1, 1, -1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          
          <motion.rect 
            x="135" 
            y="245" 
            width="40" 
            height="30" 
            rx="2" 
            fill="#00BFFF"
            initial={{ rotate: 0, transformOrigin: "155px 260px", opacity: 0.7 }}
            animate={{ 
              rotate: [-1, 1, -1],
              opacity: [0.7, 0.9, 0.7]
            }}
            transition={{ 
              rotate: { duration: 3, repeat: Infinity, ease: "easeInOut" },
              opacity: { duration: 2, repeat: Infinity, ease: "easeInOut" }
            }}
          />
        </g>
        
        {/* Right Developer */}
        <g className="developer developer--right">
          {/* Body */}
          <motion.path 
            d="M410,220 Q410,280 410,310" 
            stroke="#ff4c4c" 
            strokeWidth="30" 
            strokeLinecap="round"
            initial={{ opacity: 0.7 }}
            animate={{ opacity: [0.7, 0.9, 0.7] }}
            transition={{ duration: 4, repeat: Infinity, delay: 1 }}
          />
          
          {/* Head */}
          <motion.circle 
            cx="410" 
            cy="190" 
            r="30" 
            fill="#ff4c4c"
            initial={{ y: 0 }}
            animate={{ y: [2, -2, 2] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          />
          
          {/* Arms */}
          <motion.path 
            d="M380,230 Q350,260 330,240" 
            stroke="#ff4c4c" 
            strokeWidth="12" 
            strokeLinecap="round"
            initial={{ rotate: 0, transformOrigin: "380px 230px" }}
            animate={{ rotate: [-1, 1, -1] }}
            transition={{ duration: 3.3, repeat: Infinity, ease: "easeInOut" }}
          />
          
          <motion.path 
            d="M440,230 Q470,260 490,240" 
            stroke="#ff4c4c" 
            strokeWidth="12" 
            strokeLinecap="round" 
            initial={{ rotate: 0, transformOrigin: "440px 230px" }}
            animate={{ rotate: [1, -1, 1] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          />
          
          {/* Laptop */}
          <motion.rect 
            x="420" 
            y="240" 
            width="50" 
            height="40" 
            rx="5" 
            fill="#222222"
            initial={{ rotate: 0, transformOrigin: "445px 260px" }}
            animate={{ rotate: [1, -1, 1] }}
            transition={{ duration: 3.3, repeat: Infinity, ease: "easeInOut" }}
          />
          
          <motion.rect 
            x="420" 
            y="280" 
            width="50" 
            height="5" 
            rx="2" 
            fill="#111111"
            initial={{ rotate: 0, transformOrigin: "445px 260px" }}
            animate={{ rotate: [1, -1, 1] }}
            transition={{ duration: 3.3, repeat: Infinity, ease: "easeInOut" }}
          />
          
          <motion.rect 
            x="425" 
            y="245" 
            width="40" 
            height="30" 
            rx="2" 
            fill="#ff4c4c"
            initial={{ rotate: 0, transformOrigin: "445px 260px", opacity: 0.7 }}
            animate={{ 
              rotate: [1, -1, 1],
              opacity: [0.7, 0.9, 0.7]
            }}
            transition={{ 
              rotate: { duration: 3.3, repeat: Infinity, ease: "easeInOut" },
              opacity: { duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
            }}
          />
        </g>
        
        {/* Subtle animation particles */}
        {[...Array(5)].map((_, i) => (
          <motion.circle
            key={i}
            cx={100 + i * 100}
            cy={350}
            r={2}
            fill="#00BFFF"
            initial={{ opacity: 0.3, y: 0 }}
            animate={{ 
              opacity: [0.3, 0.7, 0.3],
              y: [-5, -15, -5]
            }}
            transition={{ 
              duration: 3 + i,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
          />
        ))}
      </svg>
      
      {/* Animated Laptop Icon at the bottom */}
      <motion.div 
        className="laptop-icon"
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <Laptop size={24} />
      </motion.div>
    </div>
  );
};

export default HackathonSVG;
