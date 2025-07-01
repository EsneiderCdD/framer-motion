import React from 'react';
import { motion } from 'framer-motion';
import styles from './Animations.module.css';
import m from '../../assets/images/m.png';

export default function OpacityExample() {
  return (
    <motion.img
      src={m}
      alt="Opacidad"
      className={styles.circle}
      initial={{ opacity: 0.2 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
    />
  );
}
