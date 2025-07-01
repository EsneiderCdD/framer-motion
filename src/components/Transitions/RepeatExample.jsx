import React from 'react';
import { motion } from 'framer-motion';
import styles from './Transitions.module.css';
import m from '../../assets/images/m.png';

export default function RepeatExample() {
  return (
    <motion.img
      src={m}
      alt="Repeat"
      className={styles.circle}
      initial={{ x: 0 }}
      animate={{ x: 150 }}
      transition={{ duration: 1, repeat: Infinity }}
    />
  );
}
