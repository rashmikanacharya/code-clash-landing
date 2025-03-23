
import { useState } from 'react';
import { motion } from 'framer-motion';
import './Header.scss';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="header">
      <div className="container header__container">
        <motion.a 
          href="/" 
          className="header__logo"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          C<span className="blue-o">O</span>DE CLASH
        </motion.a>
        
        <div className="header__right">
          <button className="header__mobile-toggle" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
          
          <motion.nav 
            className={`header__nav ${isMenuOpen ? 'active' : ''}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ul className="header__nav-list">
              {['Courses', 'Leaderboard', 'About Us'].map((item, index) => (
                <motion.li 
                  key={item} 
                  className="header__nav-item"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * (index + 1) }}
                  whileHover={{ scale: 1.05 }}
                >
                  <a href={`/${item.toLowerCase().replace(' ', '-')}`}>{item}</a>
                </motion.li>
              ))}
            </ul>
          </motion.nav>
          
          <motion.a 
            href="/login" 
            className="header__login-btn"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Login
          </motion.a>
        </div>
      </div>
    </header>
  );
};

export default Header;
