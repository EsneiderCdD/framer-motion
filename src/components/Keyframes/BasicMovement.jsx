import React from 'react';
import { motion } from 'framer-motion';
import styles from './Keyframes.module.css';
import m from '../../assets/images/m.png';

export default function BasicMovement() {
  return (
    <motion.img
      src={m}
      alt="Basic Movement"
      className={styles.circle}
      animate={{
        x: [0, 70, 100, 70, 0, -70, -100, -70, 0],
        y: [-100, -70, 0, 70, 100, 70, 0, -70, -100]
      }}
      transition={{ duration: 10, repeat: Infinity }}
    />
  );
}
