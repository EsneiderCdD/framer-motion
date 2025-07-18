// src/components/Duration/EaseOut.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Duration.module.css';
import m from '../../assets/images/m.png';

export default function EaseOut() {
  const [showCode, setShowCode] = useState(false);

  const codeString = `<motion.img
  src={m}
  alt="Ease Out"
  className={styles.circle}
  initial={{ x: -100 }}
  animate={{ x: 100 }}
  transition={{
    duration: 2,
    repeat: Infinity,
    repeatType: 'reverse',
    ease: 'easeOut'
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
          alt="Ease Out"
          className={styles.circle}
          initial={{ x: -100 }}
          animate={{ x: 100 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeOut'
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
            Esta animación aplica la función de easing <strong>easeOut</strong>, que acelera rápidamente al inicio del movimiento y luego desacelera hacia el final. <br /><br />
            El movimiento se da de <code>x: -100</code> a <code>x: 100</code> y se repite de forma infinita, creando un efecto de entrada rápida y salida suave en ambos sentidos.
          </p>
        )}
      </div>
    </div>
  );
}
