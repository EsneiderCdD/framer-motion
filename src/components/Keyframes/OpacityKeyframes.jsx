import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Keyframes.module.css';
import m from '../../assets/images/m.png';

export default function OpacityKeyframes() {
  const [showCode, setShowCode] = useState(false);

  const codeString = `<motion.img
  src={m}
  alt="Opacity Keyframes"
  className={styles.circle}
  animate={{ opacity: [1, 0.5, 0, 0.5, 1] }}
  transition={{ duration: 2, repeat: Infinity }}
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
          alt="Opacity Keyframes"
          className={styles.circle}
          animate={{ opacity: [1, 0.5, 0, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </div>
      <div className={styles.item}>
        {showCode ? (
          <pre className={styles.codeBlock}>
            <code>{codeString}</code>
          </pre>
        ) : (
          <p>
            Esta animación modifica la propiedad <code>opacity</code> usando una secuencia de valores: de <code>1</code> a <code>0</code> y viceversa, pasando por transiciones intermedias. 
            En 2 segundos recorre los cinco pasos, creando un parpadeo suave y continuo.
          </p>
        )}
      </div>
    </div>
  );
}
