import React from 'react';
import { motion } from 'framer-motion';
import styles from './Keyframes.module.css';
import m from '../../assets/images/m.png';

export default function CombinedKeyframes() {
  return (
    <motion.img
      src={m}
      alt="Combined Keyframes"
      className={styles.circle}
      animate={{
        x: [0, 50, 0, -50, 0],
        scale: [1, 1.2, 1, 0.8, 1],
        opacity: [1, 0.5, 0.2, 0.5, 1]
      }}
      transition={{ duration: 4, repeat: Infinity }}
    />
  );
}
