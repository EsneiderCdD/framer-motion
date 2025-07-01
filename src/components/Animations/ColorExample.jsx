import React from 'react';
import { motion } from 'framer-motion';
import styles from './Animations.module.css';
import m from '../../assets/images/m.png';

export default function ColorExample() {
  return (
    <motion.div
      className={styles.circleWrapper}
      initial={{ backgroundColor: '#ff0000', borderRadius: '0%' }}
      animate={{ backgroundColor: '#00ff00', borderRadius: '50%' }}
      transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
    >
      <img src={m} alt="Colores" className={styles.circle} />
    </motion.div>
  );
}
