import React from 'react';
import { motion } from 'framer-motion';
import styles from './Animations.module.css';
import m from '../../assets/images/m.png';

export default function RotateExample() {
  return (
    <div className={styles.box}>
      <div className={styles.item}>
        <p>
          ipsum dolor sit amet, consectetur adipiscing elit.
          Nulla facilisi. Nulla facilisi.ESCALA X 
          Suspendisse potenti. Sed euismod, nisi vel
        </p>
      </div>
      <div className={styles.item}>
        <motion.img
          src={m}
          alt="Rotación"
          className={styles.circle}
          initial={{  rotate: 0 }}
          animate={{  rotate: 360 }}
          transition={{ duration: 5, repeat: Infinity,repeatType: 'reverse' }}
        
        />
         <motion.img
          src={m}
          alt="Rotación"
          className={styles.circle}
          initial={{  rotateX: 0 }}
          animate={{  rotateX: 360 }}
          transition={{ duration: 5, repeat: Infinity,repeatType: 'reverse' }}
        
        />
         <motion.img
          src={m}
          alt="Rotación"
          className={styles.circle}
          initial={{  rotateY: 0 }}
          animate={{  rotateY: 360 }}
          transition={{ duration: 5, repeat: Infinity,repeatType: 'reverse' }}
        
        />
      </div>
    </div>
  );
}
