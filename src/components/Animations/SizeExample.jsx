import React from 'react';
import { motion } from 'framer-motion';
import styles from './Animations.module.css';
import m from '../../assets/images/m.png';

export default function SizeExample() {
  return (
    <motion.img
      src={m}
      alt="Tamaño"
      className={styles.circle}
      initial={{ width: '100px', height: '100px' }}
      animate={{ width: '200px', height: '200px' }}
      transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
    />
  );
}
