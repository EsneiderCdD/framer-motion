import React from 'react';
import { motion } from 'framer-motion';
import styles from './Animations.module.css';
import m from '../../assets/images/m.png';

export default function ColorExample() {
  return (
    <div className={styles.box}>

      <div className={styles.item}>
        <motion.div
          className={styles.circleWrapper}
          initial={{ backgroundColor: '#F6EA11' }}
          animate={{ backgroundColor: '#00000' }}
          transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
        >
          <img src={m} alt="Colores" className={styles.circle} />
        </motion.div>
      </div>
      <div className={styles.item}>
        <p>
          ipsum dolor sit amet, consectetur adipiscing elit.
          Nulla facilisi. Nulla facilisi. Colores
          Suspendisse potenti. Sed euismod, nisi vel
        </p>
      </div>
    </div>
  );
}
