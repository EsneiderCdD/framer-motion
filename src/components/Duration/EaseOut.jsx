import React from 'react';
import { motion } from 'framer-motion';
import styles from './Duration.module.css';
import m from '../../assets/images/m.png';

export default function EaseOut() {
  return (
    <motion.img
      src={m}
      alt="Ease Out"
      className={styles.circle}
      initial={{ x: -100 }}
      animate={{ x: 100 }}
      transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse', ease: 'easeOut' }}
    />
  );
}
