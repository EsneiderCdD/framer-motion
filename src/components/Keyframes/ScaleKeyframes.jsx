import React from 'react';
import { motion } from 'framer-motion';
import styles from './Keyframes.module.css';
import m from '../../assets/images/m.png';

export default function ScaleKeyframes() {
  return (
    <motion.img
      src={m}
      alt="Scale Keyframes"
      className={styles.circle}
      animate={{ scale: [1, 1.5, 1, 0.5, 1] }}
      transition={{ duration: 3, repeat: Infinity }}
    />
  );
}
