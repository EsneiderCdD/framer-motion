import React from 'react';
import { motion } from 'framer-motion';
import styles from './Keyframes.module.css';
import m from '../../assets/images/m.png';

export default function EaseKeyframes() {
  return (
    <motion.img
      src={m}
      alt="Ease Keyframes"
      className={styles.circle}
      animate={{ x: [0, 100, -100, 0] }}
      transition={{ duration: 4, ease: ['easeIn', 'easeOut', 'easeInOut'], repeat: Infinity }}
    />
  );
}
