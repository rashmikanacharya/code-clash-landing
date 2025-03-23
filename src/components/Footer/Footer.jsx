
import { motion } from 'framer-motion';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__background">
        {[...Array(20)].map((_, index) => (
          <motion.div 
            key={index}
            className="footer__bubble"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * 100 + 50,
              opacity: 0 
            }}
            animate={{ 
              y: [null, Math.random() * -100 - 50],
              opacity: [0, Math.random() * 0.5 + 0.1, 0]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: Math.random() * 10 + 10,
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>

      <div className="container footer__container">
        <div className="footer__content">
          <div className="footer__brand">
            <motion.div 
              className="footer__logo"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              C<span className="blue-o">O</span>DECLASH
            </motion.div>
            <p>Challenge yourself. Compete with others. Code better.</p>
          </div>
          
          <div className="footer__links">
            <div className="footer__column">
              <h4>Platform</h4>
              <ul>
                <li><a href="/leaderboard">Leaderboard</a></li>
                <li><a href="/challenges">Challenges</a></li>
                <li><a href="/about-us">About Us</a></li>
              </ul>
            </div>
            
            <div className="footer__column">
              <h4>Resources</h4>
              <ul>
                <li><a href="/documentation">Documentation</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/faq">FAQ</a></li>
              </ul>
            </div>
            
            <div className="footer__column">
              <h4>Contact</h4>
              <ul>
                <li><a href="/support">Support</a></li>
                <li><a href="mailto:info@codeclash.io">info@codeclash.io</a></li>
                <li><a href="https://twitter.com/codeclash">Twitter</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer__bottom">
          <p>&copy; {new Date().getFullYear()} CODECLASH. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
