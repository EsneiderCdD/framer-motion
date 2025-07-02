import React from 'react';
import { motion } from 'framer-motion';
import styles from './Transitions.module.css';
import m from '../../assets/images/m.png';

export default function RepeatTypeExample() {
  return (
    <div className={styles.box}>
      
      <div className={styles.item}>
        <motion.img
          src={m}
          alt="Repeat Type"
          className={styles.circle}
          initial={{ y: 0 }}
          animate={{ y: 150 }}
          transition={{ duration: 1, repeat: Infinity, repeatType: 'mirror' }}
        />
      </div>
      <div className={styles.item}>
        <p>
          ipsum dolor sit amet, consectetur adipiscing elit.
          Nulla facilisi. Nulla facilisi. Repetir tipo
          Suspendisse potenti. Sed euismod, nisi vel
        </p>
      </div>
    </div>
  );
}
