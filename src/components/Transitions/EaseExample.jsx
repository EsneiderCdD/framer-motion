import React from 'react';
import { motion } from 'framer-motion';
import styles from './Transitions.module.css';
import m from '../../assets/images/m.png';

export default function EaseExample() {
  return (
    <div className={styles.box}>
      <div className={styles.item}>
        <motion.img
          src={m}
          alt="Ease"
          className={styles.circle}
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 2, ease: 'easeInOut', repeat: Infinity }}
        />
      </div>
      <div className={styles.item}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.
          Nulla facilisi. Suspendisse potenti. Sed euismod, nisi vel consectetur
          facilisis, nisl nunc aliquet nisi, euismod tincidunt nunc nisi euismod.
        </p>
      </div>
    </div>
  );
}
