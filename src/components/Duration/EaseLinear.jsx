import React from 'react';
import { motion } from 'framer-motion';
import styles from './Duration.module.css';
import m from '../../assets/images/m.png';

export default function EaseLinear() {
  return (
    <motion.img
      src={m}
      alt="Ease Linear"
      className={styles.circle}
      initial={{ x: -100 }}
      animate={{ x: 100 }}
      transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse', ease: 'linear' }}
    />
  );
}
