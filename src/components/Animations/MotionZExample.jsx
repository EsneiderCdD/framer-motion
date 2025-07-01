import React from 'react';
import { motion } from 'framer-motion';
import styles from './Animations.module.css';
import m from '../../assets/images/m.png';

export default function MotionZExample() {
  return (
    <motion.img
      src={m}
      alt="Movimiento Z"
      className={styles.circle}
      initial={{ z: 0 }}
      animate={{ z: 100 }} // Efecto visible solo si trabajas en contexto 3D con perspectiva
      transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
      style={{ transform: 'perspective(600px)' }} // Importante: sin perspectiva, z no se aprecia
    />
  );
}
