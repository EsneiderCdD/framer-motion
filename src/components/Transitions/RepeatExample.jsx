import React from 'react';
import { motion } from 'framer-motion';
import styles from './Transitions.module.css';
import m from '../../assets/images/m.png';

export default function RepeatExample() {
  return (
    <div className={styles.box}>
      <div className={styles.item}>
        <p>
          ipsum dolor sit amet, consectetur adipiscing elit.
          Nulla facilisi. Nulla facilisi. Repetir
        </p>
      </div>
      <div className={styles.item}> 
        <motion.img
          src={m}
          alt="Repeat"
          className={styles.circle}
          initial={{ x: 0 }}
          animate={{ x: 150 }}
          transition={{ duration: 1, repeat: Infinity }}
        />
      </div>
    </div>
  );
}
