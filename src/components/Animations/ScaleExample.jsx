import React from 'react';
import { motion } from 'framer-motion';
import styles from './Animations.module.css';
import m from '../../assets/images/m.png';

export default function ScaleExample() {
  return (
    <motion.img
      src={m}
      alt="Escala"
      className={styles.circle}
      initial={{ scale: 1, scaleX: 1 }}
      animate={{ scale: 2, scaleX: 0.5 }}
      transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
    />
  );
}
