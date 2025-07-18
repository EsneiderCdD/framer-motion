// src/components/Duration/EaseInOut.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Duration.module.css';
import m from '../../assets/images/m.png';

export default function EaseInOut() {
  const [showCode, setShowCode] = useState(false);

  const codeString = `<motion.img
  src={m}
  alt="Ease In Out"
  className={styles.circle}
  initial={{ x: -100 }}
  animate={{ x: 100 }}
  transition={{
    duration: 2,
    repeat: Infinity,
    repeatType: 'reverse',
    ease: 'easeInOut'
  }}
/>`;

  return (
    <div className={styles.box}>
      <div className={styles.item}>
        <button onClick={() => setShowCode(prev => !prev)}>
          {showCode ? 'i' : '<>'}
        </button>
      </div>

      <div className={styles.item}>
        <motion.img
          src={m}
          alt="Ease In Out"
          className={styles.circle}
          initial={{ x: -100 }}
          animate={{ x: 100 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut'
          }}
        />
      </div>

      <div className={styles.item}>
        {showCode ? (
          <pre className={styles.codeBlock}>
            <code>{codeString}</code>
          </pre>
        ) : (
          <p>
            Esta animación aplica la función de easing <strong>easeInOut</strong>, que combina una aceleración al inicio y una desaceleración al final del movimiento. <br /><br />
            Se mueve en el eje X desde <code>-100</code> hasta <code>100</code>, de forma infinita, creando una transición suave de ida y vuelta.
          </p>
        )}
      </div>
    </div>
  );
}
