"use client";

import React, { useEffect } from 'react';
import styles from './Atmosphere.module.css';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const Atmosphere = () => {
  const mouseX = useMotionValue(-500);
  const mouseY = useMotionValue(-500);

  const springConfig = { damping: 25, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className={styles.atmosphere}>
      <div className={styles.noise}></div>
      <motion.div 
        className={styles.mouseGlow}
        style={{
          left: smoothX,
          top: smoothY,
        }}
      />
    </div>
  );
};

export default Atmosphere;
