import React from 'react';
import { motion } from 'framer-motion';
import primaryLogo from '../../assets/logos/primary logo.png';
import './Loader.css';

const Loader = ({ fullScreen = false }) => {
  return (
    <div className={`loader-container ${fullScreen ? 'fullscreen' : ''}`}>
      <motion.img 
        src={primaryLogo} 
        alt="Urvaya Loading" 
        className="loader-logo"
        animate={{ opacity: [0.3, 1, 0.3], scale: [0.95, 1.05, 0.95] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      />
    </div>
  );
};

export default Loader;
