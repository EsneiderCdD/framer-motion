import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/Examples.module.css';
import m from '../../assets/images/m.png';

export default function ScaleExample() {
  const [showCode, setShowCode] = useState(false);

  const codeString = `<motion.img
  src={m}
  alt="Escala"
  className={styles.circle}
  initial={{ scale: 1.5 }}
  animate={{ scale: 0 }}
  transition={{ duration: 2, repeat: Infinity }}
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
          alt="Escala"
          className={styles.circle}
          initial={{ scale: 1.5 }}
          animate={{ scale: 0 }}
          transition={{ duration: 2, repeat: Infinity }}
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
            La propiedad <strong>scale</strong> en Framer Motion permite modificar el tamaño de un elemento de forma proporcional en ambos ejes, X (horizontal) y Y (vertical). Al aplicar un valor como <strong>scale: 1.5</strong>, el objeto se agranda al 150% de su tamaño original. Cuando usamos <strong>scale: 0</strong>, el objeto se reduce hasta desaparecer. También es posible controlar la escala de manera independiente en cada eje mediante <strong>scaleX</strong> para ajustar el ancho y <strong>scaleY</strong> para modificar la altura. Esto permite realizar transformaciones específicas sobre cada dirección.
          </p>
        )}
      </div>
    </div>
  );
}
