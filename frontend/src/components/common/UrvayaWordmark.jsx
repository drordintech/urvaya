import React from 'react';
import { motion } from 'framer-motion';

export default function UrvayaWordmark({
  size = 'md',        // 'sm' | 'md' | 'lg' | 'xl'
  theme = 'light',    // 'light' (olive) | 'dark' (gold) | 'white'
  animate = false,    // true = letter-by-letter fade-in on mount
  className = ''
}) {
  // size map
  const sizes = {
    sm: '20px',   // mobile navbar
    md: '28px',   // desktop navbar
    lg: '42px',   // hero section
    xl: '64px',   // loading screen / splash
  }

  // theme map
  const colors = {
    light: '#6C5610',   // olive — on parchment/ivory backgrounds
    dark:  '#C9A84C',   // gold — on dark/burgundy backgrounds
    white: '#F0E8D8',   // ivory — on very dark backgrounds
  }

  const baseStyle = {
    fontFamily: "'Cormorant Garamond', serif",
    fontWeight: 400,
    fontStyle: 'normal',
    fontSize: sizes[size] || sizes.md,
    color: colors[theme] || colors.light,
    letterSpacing: '0.02em',
    lineHeight: 1,
    textTransform: 'lowercase',
    userSelect: 'none',
    display: 'inline-flex',
  };

  const word = "urvaya";

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 8 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  if (animate) {
    return (
      <motion.span
        className={`urvaya-wordmark ${className}`}
        style={baseStyle}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {word.split('').map((char, index) => (
          <motion.span key={index} variants={letterVariants}>
            {char}
          </motion.span>
        ))}
      </motion.span>
    );
  }

  return (
    <span
      className={`urvaya-wordmark ${className}`}
      style={baseStyle}
    >
      {word}
    </span>
  )
}
