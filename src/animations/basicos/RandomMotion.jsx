// src/components/RandomMotion/RandomMotion.jsx
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import m from '../../assets/images/m.png';
import styles from './RandomMotion.module.css'; // Crea este CSS si quieres

function RandomMotion({
  speed = 1.75, // segundos entre movimientos
  rangeX = 150, // máximo desplazamiento en X
  rangeY = 150  // máximo desplazamiento en Y
}) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition({
        x: Math.random() * rangeX * 2 - rangeX, // Genera valores entre -rangeX y +rangeX
        y: Math.random() * rangeY * 2 - rangeY
      });
    }, speed * 1000);

    return () => clearInterval(interval);
  }, [speed, rangeX, rangeY]);

  return (
    <motion.img
      src={m}
      alt="Movimiento aleatorio"
      className={styles.randomImage}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 100, damping: 10 }}
    />
  );
}

export default RandomMotion;
