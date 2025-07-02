import React from 'react';
import { motion } from 'framer-motion';
import styles from './Animations.module.css';
import m from '../../assets/images/m.png';

export default function ColorExample() {
  return (
    <div className={styles.box}>

      <div className={styles.item}>
        <pre>
          <code>
            {`<motion.div
  className={styles.circleWrapper}
  initial={{ backgroundColor: '#F6EA11' }}
  animate={{ backgroundColor: '#000000' }}
  transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
>
  <img src={m} alt="Colores" className={styles.circle} />
</motion.div>`}
          </code>
        </pre>
      </div>

      <div className={styles.item}>
        <motion.div
          className={styles.circleWrapper}
          initial={{ backgroundColor: '#F6EA11' }}
          animate={{ backgroundColor: '#000000' }}
          transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
        >
          <img src={m} alt="Colores" className={styles.circle} />
        </motion.div>
      </div>

      <div className={styles.item}>
        <p>
  En Framer Motion, podemos animar el <strong>backgroundColor</strong> para crear transiciones suaves entre colores. <br /><br />
  A diferencia de <strong>scale</strong> o <strong>size</strong>, las animaciones de color solo cambian la apariencia visual del elemento, sin afectar su tamaño ni su posición.
</p>

      </div>

    </div>
  );
}
