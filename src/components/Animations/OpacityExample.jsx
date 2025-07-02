import React from 'react';
import { motion } from 'framer-motion';
import styles from './Animations.module.css';
import m from '../../assets/images/m.png';

export default function OpacityExample() {
  return (
    <div className={styles.box}>
      
      
      
      <div className={styles.item}>
        <motion.img
          src={m}
          alt="Opacidad"
          className={styles.circle}
          initial={{ opacity: 0.2 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
        />
      </div>

      <div className={styles.item}>
        <p>
          ipsum dolor sit amet, consectetur adipiscing elit.
          Nulla facilisi. Nulla facilisi. Opacidad
          Suspendisse potenti. Sed euismod, nisi vel
        </p>
      </div>
    </div>
  );
}
