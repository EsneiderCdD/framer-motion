// File: src/animations/basicos/playground/LabMotionBuilder/useMotionConfig.js
import { useState } from 'react';

export function useMotionConfig() {
  const [motionProps, setMotionProps] = useState({
    x: 0,
    y: 0,
    scale: 1,
    rotate: 0,
    backgroundColor: '#ffffff',
  });

  const [transitionProps, setTransitionProps] = useState({
    duration: 0.8,
    ease: 'easeInOut',
    repeat: 0,
    repeatType: 'loop',
  });

  const updateMotionProp = (key, value) => {
    setMotionProps(prev => ({ ...prev, [key]: value }));
  };

  const updateTransitionProp = (key, value) => {
    setTransitionProps(prev => ({ ...prev, [key]: value }));
  };

  return {
    motionProps,
    transitionProps,
    updateMotionProp,
    updateTransitionProp,
  };
}
