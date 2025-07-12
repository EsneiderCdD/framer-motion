import React from 'react';
import { motion } from 'framer-motion';
import styles from './Animations.module.css';
import m from '../../assets/images/m.png';

export default function ColorExample() {
  const codeString = `<motion.div
  className={styles.circleWrapper}
  initial={{ 
    backgroundColor: '#F6EA11' 
  }}
  animate={{ 
    backgroundColor: '#000000' 
  }}
  transition={{
    duration: 2,
    repeat: Infinity,
    repeatType: 'reverse'
  }}
>
  <img src={m} 
  alt="Colores" 
  className={styles.circle} />
</motion.div>`;

  return (
    <div className={styles.box}>
      <div className={styles.item}>
        <pre className={styles.codeBlock}>
          <code>{codeString}</code>
        </pre>
      </div>

      <div className={styles.item}>
        <motion.div
          className={styles.circleWrapper}
          initial={{ backgroundColor: '#F6EA11' }}
          animate={{ backgroundColor: '#000000' }}
          transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
        >
          <img src={m} alt="Colores" className={styles.circle} />
        </motion.div>
      </div>

      <div className={styles.item}>
        <p>
          En Framer Motion también podemos animar propiedades visuales como el <strong>backgroundColor</strong>, permitiendo transiciones suaves entre colores.
        </p>
      </div>
    </div>
  );
}
