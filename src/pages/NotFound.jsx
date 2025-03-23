
import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header/Header';

const NotFound = () => {
  return (
    <>
      <Header />
      <div className="not-found">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1>404</h1>
          <p>Oops! The page you're looking for doesn't exist</p>
          <a href="/">Return to Home</a>
        </motion.div>
      </div>
    </>
  );
};

export default NotFound;
