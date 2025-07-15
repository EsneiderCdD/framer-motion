// useMotionConfig.js
import { useState } from 'react';

export function useMotionConfig() {
  const [motionProps, setMotionProps] = useState({
    x: { initial: 0, animate: 100 },
    y: { initial: 0, animate: 100 },
    scale: { initial: 1, animate: 2 },
    rotate: { initial: 0, animate: 90 },
    backgroundColor: { initial: '#ffffff', animate: '#0000ff' }, // ← NUEVO formato
  });

  const [transitionProps, setTransitionProps] = useState({
    duration: 1,
    ease: 'easeInOut',
    repeat: 0,
    repeatType: 'loop',
  });

  const updateMotionProp = (prop, type, value) => {
    setMotionProps(prev => ({
      ...prev,
      [prop]: {
        ...prev[prop],
        [type]: value,
      },
    }));
  };

  const updateTransitionProp = (prop, value) => {
    setTransitionProps(prev => ({
      ...prev,
      [prop]: value,
    }));
  };

  return {
    motionProps,
    transitionProps,
    updateMotionProp,
    updateTransitionProp,
  };
}
