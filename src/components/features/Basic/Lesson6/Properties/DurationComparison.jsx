import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/Properties.module.css';
import m from '@/assets/images/m.png';

export default function DurationComparison() {
  return (
    <div className={styles.comparisonContainer}>
      <motion.img
        src={m}
        alt="Duración Rápida"
        className={styles.circle}
        initial={{ y: -100 }}
        animate={{ y: 100 }}
        transition={{ duration: 2.5, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
      />

      <motion.img
        src={m}
        alt="Duración Lenta"
        className={styles.circle}
        initial={{ y: -100 }}
        animate={{ y: 100 }}
        transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
      />
    </div>
  );
}
