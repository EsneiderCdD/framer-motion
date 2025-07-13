import React from 'react';
import { motion } from 'framer-motion';
import styles from './Keyframes.module.css';
import m from '../../assets/images/m.png';

export default function TimesKeyframes() {
  const codeString = `<motion.img
  src={m}
  alt="Times Keyframes"
  className={styles.circle}
  animate={{ x: [0, 100, 0] }}
  transition={{ duration: 3, times: [0, 0.3, 1], repeat: Infinity }}
/>`;

  return (
    <div className={styles.box}>
      <div className={styles.item}>
        <pre className={styles.codeBlock}>
          <code>{codeString}</code>
        </pre>
      </div>

      <div className={styles.item}>
        <motion.img
          src={m}
          alt="Times Keyframes"
          className={styles.circle}
          animate={{ x: [0, 100, 0] }}
          transition={{ duration: 3, times: [0, 0.3, 1], repeat: Infinity }}
        />
      </div>

      <div className={styles.item}>
        <p>
          Esta animación mueve el elemento horizontalmente desde <code>0</code> hasta <code>100</code> y de vuelta a <code>0</code>. 
          La propiedad <code>times</code> controla el ritmo con que se alcanzan esos valores: en este caso, el segundo valor se alcanza al 30% del tiempo total, acelerando el regreso. 
          Así, en lugar de transiciones equidistantes, se genera un tempo desigual más expresivo.
        </p>
      </div>
    </div>
  );
}
