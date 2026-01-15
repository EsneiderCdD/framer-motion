import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/Examples.module.css';
import m from '@/assets/images/m.svg';

export default function ColorExample() {
  const [showCode, setShowCode] = useState(false);

  const codeString = `<motion.div
  className={styles.circleWrapper}
  initial={{ backgroundColor: '#F6EA11' }}
  animate={{ backgroundColor: '#000000' }}
  transition={{ repeat: Infinity, repeatType: 'reverse',
                duration: 2
  }}
>
  <img src={m} 
  alt="Colores" 
  className={styles.circle} />
</motion.div>`;

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
        <motion.div
          className={styles.circleWrapper}
          initial={{ backgroundColor: '#F6EA11' }}
          animate={{ backgroundColor: '#000000' }}
          transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
        >
          <img src={m} alt="Colores" className={styles.circle} />
        </motion.div>
      </div>

      {/* CODE O DESCRIPCIÓN */}
      <div className={styles.item}>
        {showCode ? (
          <pre className={styles.codeBlock}>
            <code>{codeString}</code>
          </pre>
        ) : (
          <p>
            En Framer Motion también podemos animar propiedades visuales como el <strong>backgroundColor</strong>, permitiendo transiciones suaves entre colores. Con <strong>repeatType: 'reverse'</strong>, la animación rebota entre los valores iniciales y finales.
          </p>
        )}
      </div>
    </div>
  );
}
