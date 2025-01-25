'use client';

import { motion, useScroll, useSpring } from 'framer-motion';
import React from 'react';

const ScrollIndicator: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <motion.div
      style={{
        scaleX: scrollYProgress,
        height: '3px',
        backgroundColor: '#2563EB',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        transformOrigin: '0%',
        zIndex: 9999,
      }}
    />
  );
};

export default ScrollIndicator;
