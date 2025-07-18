import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Animations.module.css';
import m from '../../assets/images/m.png';

export default function SizeExample() {
  const [showCode, setShowCode] = useState(false);

  const codeString = `<motion.img
  src={m}
  alt="Tamaño"
  className={styles.circle}
  initial={{ width: '100px', height: '100px' }}
  animate={{ width: '150px', height: '150px' }}
  transition={{ repeat: Infinity, repeatType: 'reverse'
                duration: 10
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
          alt="Tamaño"
          className={styles.circle}
          initial={{ width: '100px', height: '100px' }}
          animate={{ width: '150px', height: '150px' }}
          transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse' }}
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
            En Framer Motion, podemos modificar el tamaño real de un elemento usando las propiedades <strong>width</strong> y <strong>height</strong>. Esto cambia directamente el espacio que ocupa en el diseño de la página.
            <br /><br />
            A diferencia de <strong>scale</strong>, que altera el tamaño visual sin afectar el layout, cambiar el ancho y alto sí puede influir en el flujo y disposición de otros elementos cercanos.
          </p>
        )}
      </div>
    </div>
  );
}
