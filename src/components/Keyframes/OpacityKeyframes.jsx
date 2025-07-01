import React from 'react';
import { motion } from 'framer-motion';
import styles from './Keyframes.module.css';
import m from '../../assets/images/m.png';

export default function OpacityKeyframes() {
  return (
    <motion.img
      src={m}
      alt="Opacity Keyframes"
      className={styles.circle}
      animate={{ opacity: [1, 0.5, 0, 0.5, 1] }}
      transition={{ duration: 2, repeat: Infinity }}
    />
  );
}
