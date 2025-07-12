import React from 'react';
import { motion } from 'framer-motion';
import styles from './Animations.module.css';
import m from '../../assets/images/m.png';

export default function ColorExample() {
  const codeString = `<motion.div
  className={styles.circleWrapper}
  initial={{ 
        backgroundColor: '#F6EA11',
        borderRadius: '0%'
  }}
  animate={{ 
        backgroundColor:'#000000', 
        borderRadius:'50%' 
  }}
  transition={{ 
        duration: 2, 
        repeat: Infinity, 
        repeatType: 'reverse' 
  }}
>
  <img src={m} 
  alt="Colores" 
  className={styles.circle} />
</motion.div>`;

  return (
    <div className={styles.box}>
      <div className={styles.item}>
        <pre>
          <code>{codeString}</code>
        </pre>
      </div>

      <div className={styles.item}>
        <motion.div
          className={styles.circleWrapper}
          initial={{ backgroundColor: '#F6EA11', borderRadius: '0%' }}
          animate={{ backgroundColor: '#000000', borderRadius: '50%' }}
          transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
        >
          <img src={m} alt="Colores" className={styles.circle} />
        </motion.div>
      </div>

      <div className={styles.item}>
        <p>
          En Framer Motion, podemos animar el <strong>backgroundColor</strong> y el <strong>borderRadius</strong> para cambiar el color y la forma de un elemento al mismo tiempo. <br /><br />
          Por ejemplo, un contenedor cuadrado puede transformarse en un círculo mientras cambia de color. Estas animaciones solo afectan la apariencia visual, no el espacio que ocupa el elemento.
        </p>
      </div>
    </div>
  );
}

