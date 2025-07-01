import React from 'react';
import { motion } from 'framer-motion';
import styles from './Transitions.module.css';
import m from '../../assets/images/m.png';

export default function EaseExample() {
  return (
    <motion.img
      src={m}
      alt="Ease"
      className={styles.circle}
      initial={{ rotate: 0 }}
      animate={{ rotate: 360 }}
      transition={{ duration: 2, ease: 'easeInOut', repeat: Infinity }}
    />
  );
}
