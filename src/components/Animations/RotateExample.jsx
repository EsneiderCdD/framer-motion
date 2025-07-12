import React from 'react';
import { motion } from 'framer-motion';
import styles from './Animations.module.css';
import m from '../../assets/images/m.png';

export default function RotateExample() {
  const codeString = `<motion.img
  src={m}
  alt="Rotación"
  className={styles.circle}
  initial={{ rotate: 0 }}
  animate={{ rotate: 360 }}
  transition={{
    duration: 5,
    repeat: Infinity,
    repeatType: 'reverse'
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
          alt="Rotación"
          className={styles.circle}
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 5, repeat: Infinity, repeatType: 'reverse' }}
        />
        <motion.img
          src={m}
          alt="Rotación X"
          className={styles.circle}
          initial={{ rotateX: 0 }}
          animate={{ rotateX: 360 }}
          transition={{ duration: 5, repeat: Infinity, repeatType: 'reverse' }}
        />
        <motion.img
          src={m}
          alt="Rotación Y"
          className={styles.circle}
          initial={{ rotateY: 0 }}
          animate={{ rotateY: 360 }}
          transition={{ duration: 5, repeat: Infinity, repeatType: 'reverse' }}
        />
      </div>

      <div className={styles.item}>
        <p>
          La propiedad <strong>rotate</strong> en Framer Motion permite girar un elemento sobre su eje Z, es decir, rotar en su propio plano. Por ejemplo, animar de <strong>rotate: 0</strong> a <strong>rotate: 360</strong> genera una vuelta completa sobre sí mismo. <br />
          También es posible rotar sobre el eje X con <strong>rotateX</strong>, lo que provoca un giro hacia adelante o hacia atrás, afectando la altura visual del objeto. Por otro lado, <strong>rotateY</strong> realiza un giro de lado a lado, modificando la vista en el ancho.
        </p>
      </div>
    </div>
  );
}
