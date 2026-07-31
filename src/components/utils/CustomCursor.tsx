"use client";

import { useEffect, useState } from 'react';
import styles from './CustomCursor.module.css';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [hasHover, setHasHover] = useState(false);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 400 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Check if the device has hover capability (desktop/mouse vs touch device)
    const mediaQuery = window.matchMedia('(hover: hover)');
    setHasHover(mediaQuery.matches);

    const handleMediaChange = (e: MediaQueryListEvent) => {
      setHasHover(e.matches);
    };

    mediaQuery.addEventListener('change', handleMediaChange);
    return () => mediaQuery.removeEventListener('change', handleMediaChange);
  }, []);

  useEffect(() => {
    if (!hasHover) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;
      
      try {
        const isInteractive = 
          target.tagName === 'A' || 
          target.tagName === 'BUTTON' || 
          !!target.closest('button') || 
          !!target.closest('a') ||
          target.classList.contains('clickable') ||
          window.getComputedStyle(target).cursor === 'pointer';
          
        setIsHovered(isInteractive);
      } catch (err) {
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleHover);
    document.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleHover);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };

  }, [cursorX, cursorY, isVisible, hasHover]);

  if (!hasHover) return null;

  return (
    <>
      <motion.div
        className={styles.cursor}
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        animate={{
          scale: isHovered ? 2.2 : 1,
          opacity: isVisible ? 1 : 0,
          backgroundColor: isHovered ? 'rgba(156, 254, 202, 0.15)' : 'rgba(156, 254, 202, 0.03)',
          borderColor: isHovered ? 'rgba(156, 254, 202, 0.8)' : 'rgba(156, 254, 202, 0.4)',
          borderWidth: isHovered ? '2px' : '1px'
        }}
        transition={{
          opacity: { duration: 0.15 },
          scale: { type: "spring", stiffness: 350, damping: 22 }
        }}
      />
      <motion.div
        className={styles.cursorDot}
        style={{
          x: cursorX,
          y: cursorY,
        }}
        animate={{
          scale: isHovered ? 1.5 : 1,
          opacity: isVisible ? 1 : 0,
          backgroundColor: isHovered ? '#fff' : '#9cfeca'
        }}
        transition={{
          opacity: { duration: 0.15 },
          scale: { type: "spring", stiffness: 450, damping: 25 }
        }}
      />
    </>
  );
};

export default CustomCursor;
