// File: components/LabMotionBuilder/LabMotionBuilder.jsx
import React, { useState } from 'react';
import MotionControls from './MotionControls';
import MotionPreview from './MotionPreview';
import styles from './LabMotionBuilder.module.css';

function LabMotionBuilder() {
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

  return (
    <div className={styles.builderContainer}>
      <h2 className={styles.title}>🧪 Motion Builder</h2>
      <div className={styles.layout}>
        <MotionControls
          motionProps={motionProps}
          transitionProps={transitionProps}
          setMotionProp={updateMotionProp}
          setTransitionProp={updateTransitionProp}
        />
        <MotionPreview
          motionProps={motionProps}
          transitionProps={transitionProps}
        />
      </div>
    </div>
  );
}

export default LabMotionBuilder;
