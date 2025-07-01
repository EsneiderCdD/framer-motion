import React from 'react';
import { motion } from 'framer-motion';
import styles from './Animations.module.css';
import m from '../../assets/images/m.png';

export default function RotateExample() {
  return (
    <motion.img
      src={m}
      alt="Rotación"
      className={styles.circle}
      initial={{ rotateZ: 0, rotateX: 0 }}
      animate={{ rotateZ: 360, rotateX: 180 }}
      transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
      style={{ transform: 'perspective(600px)' }}
    />
  );
}
