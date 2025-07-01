import React from 'react';
import { motion } from 'framer-motion';
import styles from './Keyframes.module.css';
import m from '../../assets/images/m.png';

export default function RotateKeyframes() {
  return (
    <motion.img
      src={m}
      alt="Rotate Keyframes"
      className={styles.circle}
      animate={{ rotate: [0, 90, 180, 270, 360] }}
      transition={{ duration: 4, repeat: Infinity, repeatType: 'mirror' }}
    />
  );
}
