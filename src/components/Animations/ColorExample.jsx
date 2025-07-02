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
          En Framer Motion, podemos animar propiedades de color como <strong>backgroundColor</strong> para crear transiciones suaves entre diferentes tonalidades. En este ejemplo, el color de fondo cambia de un amarillo brillante (<strong>#F6EA11</strong>) a un negro (<strong>#000000</strong>) de forma continua y reversible. <br /><br />
          A diferencia de propiedades como <strong>scale</strong> o <strong>size</strong> que afectan dimensiones o el espacio ocupado, las animaciones de color no alteran la posición ni el tamaño del elemento, solo modifican su apariencia visual. <br /><br />
          Este tipo de animaciones son útiles para crear cambios de estado, resaltar elementos o generar efectos dinámicos sin afectar la estructura del layout. Framer Motion gestiona estas transiciones de color de manera fluida, interpolando automáticamente entre los valores de color inicial y final.
        </p>
      </div>

    </div>
  );
}
