
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import AnimatedLogo from '../AnimatedLogo/AnimatedLogo';
import HackathonSVG from '../HackathonSVG/HackathonSVG';
import './ModernHero.css';

const ModernHero = () => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', resize);
    resize();
    
    // Create gradient background
    const createGradient = () => {
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, 'rgba(20, 20, 35, 1)');
      gradient.addColorStop(1, 'rgba(10, 15, 28, 1)');
      return gradient;
    };
    
    // Generate stars
    const stars = [];
    for (let i = 0; i < 150; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5,
        opacity: Math.random(),
        speed: Math.random() * 0.05
      });
    }
    
    // Animate stars
    const animate = () => {
      ctx.fillStyle = createGradient();
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw and update stars
      stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();
        
        // Move stars
        star.y -= star.speed;
        
        // If star reaches top, reset to bottom
        if (star.y < 0) {
          star.y = canvas.height;
          star.x = Math.random() * canvas.width;
        }
      });
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="modern-hero">
      <canvas ref={canvasRef} className="modern-hero__canvas"></canvas>
      
      <div className="modern-hero__content">
        <div className="modern-hero__left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="modern-hero__logo-container"
          >
            <AnimatedLogo />
          </motion.div>
          
          <motion.h1 
            className="modern-hero__title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Elevate your <span className="accent">coding skills</span> in the arena
          </motion.h1>
          
          <motion.p 
            className="modern-hero__subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Master programming through interactive challenges and competitive coding battles with Python, Java, and JavaScript
          </motion.p>
          
          <motion.div 
            className="modern-hero__cta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <Link to="/login">
              <Button text="Get Started" isMain={true} />
            </Link>
            <Button text="View Challenges" />
          </motion.div>
        </div>
        
        <motion.div
          className="modern-hero__visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="modern-hero__glow"></div>
          <HackathonSVG />
        </motion.div>
      </div>
    </section>
  );
};

export default ModernHero;
