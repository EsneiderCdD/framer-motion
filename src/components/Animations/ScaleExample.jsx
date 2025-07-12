import React from 'react';
import { motion } from 'framer-motion';
import styles from './Animations.module.css';
import m from '../../assets/images/m.png';

export default function ScaleExample() {
  const codeString = `<motion.img
  src={m}
  alt="Escala"
  className={styles.circle}
  initial={{ scale: 1.5 }}
  animate={{ scale: 0 }}
  transition={{ duration: 2, 
                repeat: Infinity }}
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
          alt="Escala"
          className={styles.circle}
          initial={{ scale: 1.5 }}
          animate={{ scale: 0 }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </div>

      <div className={styles.item}>
        <p>
          La propiedad <strong>scale</strong> en Framer Motion permite modificar el tamaño de un elemento de forma proporcional en ambos ejes, X (horizontal) y Y (vertical). Al aplicar un valor como <strong>scale: 1.5</strong>, el objeto se agranda al 150% de su tamaño original. Cuando usamos <strong>scale: 0</strong>, el objeto se reduce hasta desaparecer. También es posible controlar la escala de manera independiente en cada eje mediante <strong>scaleX</strong> para ajustar el ancho y <strong>scaleY</strong> para modificar la altura. Esto permite realizar transformaciones específicas sobre cada dirección.
        </p>
      </div>
    </div>
  );
}
