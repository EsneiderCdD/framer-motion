
import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Duration.module.css';
import m from '../../assets/images/m.png';

export default function EaseIn() {
  const [showCode, setShowCode] = useState(false);

  const codeString = `<motion.img
  src={m}
  alt="Ease In"
  className={styles.circle}
  initial={{ x: -100 }}
  animate={{ x: 100 }}
  transition={{
    duration: 2,
    repeat: Infinity,
    repeatType: 'reverse',
    ease: 'easeIn'
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
          alt="Ease In"
          className={styles.circle}
          initial={{ x: -100 }}
          animate={{ x: 100 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeIn'
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
            En esta animación el elemento se mueve horizontalmente de <strong>x: -100</strong> a <strong>x: 100</strong> utilizando la función de easing <strong>easeIn</strong>.<br /><br />
            Esto significa que comienza de forma lenta y luego acelera progresivamente, creando un efecto suave al inicio y más rápido hacia el final de cada recorrido.
          </p>
        )}
      </div>
    </div>
  );
}
