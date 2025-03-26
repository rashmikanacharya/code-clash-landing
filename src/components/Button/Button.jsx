
import { motion } from 'framer-motion';
import './Button.css';

const Button = ({ text, onClick, isMain = false, className = '' }) => {
  return (
    <motion.button
      className={`button ${isMain ? 'button--main' : ''} ${className}`}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {text}
      
      <div className="button__shine"></div>
    </motion.button>
  );
};

export default Button;
