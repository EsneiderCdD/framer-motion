import React from 'react';
import { motion } from 'framer-motion';
import styles from './Transitions.module.css';
import m from '../../assets/images/m.png';

export default function RepeatTypeExample() {
  return (
    <motion.img
      src={m}
      alt="Repeat Type"
      className={styles.circle}
      initial={{ y: 0 }}
      animate={{ y: 150 }}
      transition={{ duration: 1, repeat: Infinity, repeatType: 'mirror' }}
    />
  );
}
