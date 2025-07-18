import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Keyframes.module.css';
import m from '../../assets/images/m.png';

export default function ScaleKeyframes() {
  const [showCode, setShowCode] = useState(false);

  const codeString = `<motion.img
  src={m}
  alt="Scale Keyframes"
  className={styles.circle}
  animate={{ scale: [1, 1.5, 1, 0.5, 1] }}
  transition={{ duration: 3, repeat: Infinity }}
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
          alt="Scale Keyframes"
          className={styles.circle}
          animate={{ scale: [1, 1.5, 1, 0.5, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </div>
      <div className={styles.item}>
        {showCode ? (
          <pre className={styles.codeBlock}>
            <code>{codeString}</code>
          </pre>
        ) : (
          <p>
            Al no definir <code>initial</code>, Framer Motion usa el primer valor de <code>animate</code> como punto de partida.
            En este caso, <code>scale</code> oscila entre <code>1</code>, <code>1.5</code>, <code>0.5</code> y vuelve a <code>1</code>, generando un ritmo cíclico de expansión y contracción.
          </p>
        )}
      </div>
    </div>
  );
}
