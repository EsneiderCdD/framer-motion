import React from 'react';
import { motion } from 'framer-motion';
import styles from './Keyframes.module.css';
import m from '../../assets/images/m.png';

export default function EaseKeyframes() {
  const codeString = `<motion.img
  src={m}
  alt="Ease Keyframes"
  className={styles.circle}
  animate={{ x: [0, 100, -100, 0] }}
  transition={{ 
    duration: 4, 
    ease: ['easeIn', 'easeOut', 'easeInOut'], 
    repeat: Infinity 
  }}
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
          alt="Ease Keyframes"
          className={styles.circle}
          animate={{ x: [0, 100, -100, 0] }}
          transition={{
            duration: 4,
            ease: ['easeIn', 'easeOut', 'easeInOut'],
            repeat: Infinity,
          }}
        />
      </div>

      <div className={styles.item}>
        <p>
          Esta animación recorre diferentes valores de la propiedad <code>x</code>, generando un movimiento lateral en cuatro fases. 
          Utiliza una combinación de curvas de aceleración <code>easeIn</code>, <code>easeOut</code> y <code>easeInOut</code>, que afectan la forma en que cambia la velocidad entre cada paso. 
          Esto crea un desplazamiento más orgánico y fluido.
        </p>
      </div>
    </div>
  );
}
