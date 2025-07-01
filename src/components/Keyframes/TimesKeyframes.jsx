import React from 'react';
import { motion } from 'framer-motion';
import styles from './Keyframes.module.css';
import m from '../../assets/images/m.png';

export default function TimesKeyframes() {
  return (
    <motion.img
      src={m}
      alt="Times Keyframes"
      className={styles.circle}
      animate={{ x: [0, 100, 0] }}
      transition={{ duration: 3, times: [0, 0.3, 1], repeat: Infinity }}
    />
  );
}
