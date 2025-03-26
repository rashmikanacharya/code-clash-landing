
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
      <img 
        src="/lovable-uploads/87e19cff-e83e-4883-a252-32b2ed951897.png" 
        alt="CodeClash Battle" 
        className="animated-logo__image" 
      />
    </motion.div>
  );
};

export default AnimatedLogo;
