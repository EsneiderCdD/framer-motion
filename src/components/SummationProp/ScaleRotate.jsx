import React from 'react';
import { motion } from 'framer-motion';
import styles from './Summation.module.css'; // Usa el nuevo module CSS
import m from '../../assets/images/m.png'; // O una imagen adecuada

export default function ScaleRotate() {
  const codeString = `<motion.div
  className={styles.circleWrapper}
  initial={{ scale: 0.5, rotate: 0 }}
  animate={{ scale: 1.5, rotate: 360 }}
  transition={{
    duration: 4,
    repeat: Infinity,
    repeatType: 'reverse',
    ease: 'easeInOut'
  }}
>
  <img src={m} alt="Animación combinada" className={styles.circle} />
</motion.div>`;

  return (
    <div className={styles.box}>
      <div className={styles.item}>
        <pre className={styles.codeBlock}>
          <code>{codeString}</code>
        </pre>
      </div>

      <div className={styles.item}>
        <motion.div
          className={styles.circleWrapper}
          initial={{ scale: 0.5, rotate: 0 }}
          animate={{ scale: 1.5, rotate: 360 }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut'
          }}
        >
          <img src={m} alt="Animación combinada" className={styles.circle} />
        </motion.div>
      </div>

      <div className={styles.item}>
        <p>
          En este ejemplo combinamos dos propiedades: <strong>scale</strong> y <strong>rotate</strong>. 
          Mientras el elemento rota completamente sobre su eje, también cambia su tamaño de forma progresiva.
          <br /><br />
          Esta combinación crea una sensación dinámica de expansión y giro al mismo tiempo, enriqueciendo 
          la animación visual sin necesidad de desplazamiento en el eje X o Y.
        </p>
      </div>
    </div>
  );
}
