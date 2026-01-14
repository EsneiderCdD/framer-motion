
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import m from '../../assets/images/m.png';
import styles from './RandomMotion.module.css'; 

function RandomMotion({
  speed = 3, 
  rangeX = 150, 
  rangeY = 150  
}) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition({
        x: Math.random() * rangeX * 2 - rangeX, 
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
