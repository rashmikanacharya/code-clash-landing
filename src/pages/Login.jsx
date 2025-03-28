
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../components/Button/Button';
import Header from '../components/Header/Header';
import './Login.css';

const Login = () => {
  return (
    <div className="login-page">
      <Header />
      
      <div className="login-container">
        <motion.div 
          className="login-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="login-title">Welcome Back</h2>
          <p className="login-subtitle">Sign in to continue your coding journey</p>
          
          <form className="login-form">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                placeholder="Enter your email" 
                className="login-input"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input 
                type="password" 
                id="password" 
                placeholder="Enter your password" 
                className="login-input"
              />
            </div>
            
            <div className="form-actions">
              <Button text="Sign In" isMain={true} className="login-button" />
            </div>
          </form>
          
          <div className="login-footer">
            <p>Don't have an account? <Link to="/signup" className="login-link">Sign up</Link></p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
