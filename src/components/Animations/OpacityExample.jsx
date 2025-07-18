import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Animations.module.css';
import m from '../../assets/images/m.png';

export default function OpacityExample() {
  const [showCode, setShowCode] = useState(false);

  const codeString = `<motion.img
  src={m}
  alt="Opacidad"
  className={styles.circle}
  initial={{ opacity: 0.2 }}
  animate={{ opacity: 1 }}
  transition={{ repeat: Infinity , repeatType: 'reverse',
                duration: 2
  }}
/>`;

  return (
    <div className={styles.box}>
      {/* TOGGLE */}
      <div className={styles.item}>
        <button onClick={() => setShowCode(prev => !prev)}>
          {showCode ? 'i' : '<>'}
        </button>
      </div>

      {/* VISUAL */}
      <div className={styles.item}>
        <motion.img
          src={m}
          alt="Opacidad"
          className={styles.circle}
          initial={{ opacity: 0.2 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
        />
      </div>

      {/* CODE O DESCRIPCIÓN */}
      <div className={styles.item}>
        {showCode ? (
          <pre className={styles.codeBlock}>
            <code>{codeString}</code>
          </pre>
        ) : (
          <p>
            La propiedad <strong>opacity</strong> en Framer Motion controla la transparencia de un elemento. Un valor de <strong>opacity: 0</strong> lo hace invisible y <strong>opacity: 1</strong> lo muestra totalmente. En este caso, la animación alterna entre <strong>opacity: 0.2</strong> y <strong>opacity: 1</strong>, generando un efecto continuo de aparición y desaparición.
          </p>
        )}
      </div>
    </div>
  );
}
