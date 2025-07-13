import React from 'react';
import { motion } from 'framer-motion';
import styles from './Keyframes.module.css';
import m from '../../assets/images/m.png';

export default function CombinedKeyframes() {
  const codeString = `<motion.img
  src={m}
  alt="Combined Keyframes"
  className={styles.circle}
  animate={{
    x: [0, 50, 0, -50, 0],
    scale: [1, 1.2, 1, 0.8, 1],
    opacity: [1, 0.5, 0.2, 0.5, 1]
  }}
  transition={{ duration: 4, repeat: Infinity }}
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
          alt="Combined Keyframes"
          className={styles.circle}
          animate={{
            x: [0, 50, 0, -50, 0],
            scale: [1, 1.2, 1, 0.8, 1],
            opacity: [1, 0.5, 0.2, 0.5, 1]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </div>

      <div className={styles.item}>
        <p>
          Esta animación combina tres propiedades clave: <code>x</code> para desplazar el elemento lateralmente, <code>scale</code> para hacerlo crecer y encoger, y <code>opacity</code> para hacerlo más o menos visible. El resultado es un movimiento dinámico, que en 4 segundos recorre cinco pasos creando un ritmo cíclico continuo.
        </p>
      </div>
    </div>
  );
}
