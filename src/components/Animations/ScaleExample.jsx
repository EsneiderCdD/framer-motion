import React from 'react';
import { motion } from 'framer-motion';
import styles from './Animations.module.css';
import m from '../../assets/images/m.png';

export default function ScaleExample() {
  return (
      
    <div className={styles.box}>
      <div className={styles.item}>
        <motion.img
          src={m}
          alt="Escala"
          className={styles.circle}
          initial={{ scale: 1  }}
          animate={{ scale: 0  }}
          transition={{ duration: 2, repeat: Infinity, }}
        />
      </div>
      <div className={styles.item}>
        <code>
          ipsum dolor sit amet, consectetur adipiscing elit.
          Nulla facilisi. Nulla facilisi.ESCALA X
          Suspendisse potenti. Sed euismod, nisi vel ESCALA EN Y consectetur interdum, ESCALA
        </code>
      </div>
    </div>
   
    
  );
}
