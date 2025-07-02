import React from 'react';
import { motion } from 'framer-motion';
import styles from './Animations.module.css';
import m from '../../assets/images/m.png';

export default function SizeExample() {
  return (
    <div className={styles.box}>
      <div className={styles.item}>
        <p>
          ipsum dolor sit amet, consectetur adipiscing elit.
          Nulla facilisi. Nulla facilisi. Tamaño
          Suspendisse potenti. Sed euismod, nisi vel
        </p>
      </div>
      <div  className={styles.item}>
        <motion.img
          src={m}
          alt="Tamaño"
          className={styles.circle}
          initial={{ width: '100px', height: '100px' }}
          animate={{ width: '150px', height: '150px' }}
          transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse' }}
        />
      </div>
    </div>
  );
}
