import React from 'react';
import { motion } from 'framer-motion';
import styles from './Transitions.module.css';
import m from '../../assets/images/m.png';

export default function DelayExample() {
  return (
    <motion.img
      src={m}
      alt="Delay"
      className={styles.circle}
      initial={{ scale: 1 }}
      animate={{ scale: 1.5 }}
      transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse', delay: 1 }}
    />
  );
}
