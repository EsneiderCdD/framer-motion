import React from 'react';
import { motion } from 'framer-motion';
import styles from './Transitions.module.css';
import m from '../../assets/images/m.png';

export default function DelayExample() {
  return (
    <div className={styles.box}>
      <div className={styles.item}>
        <p>
          ipsum dolor sit amet, consectetur adipiscing elit.
          Nulla facilisi. Nulla facilisi. Retraso
          Suspendisse potenti. Sed euismod, nisi vel
        </p>
      </div>
      
      <div className={styles.item} >
        <motion.img
          src={m}
          alt="Delay"
          className={styles.circle}
          initial={{ scale: 1 }}
          animate={{ scale: 1.5 }}
          transition={{ duration: 1, delay: 10 }}
        />
        </div>
      </div>
  );
}
