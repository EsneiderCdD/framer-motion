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
  initial={{ backgroundColor: '#F6EA11', borderRadius: '0%' }}
  animate={{ backgroundColor: '#000000', borderRadius: '50%' }}
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
          initial={{ backgroundColor: '#F6EA11', borderRadius: '0%' }}
          animate={{ backgroundColor: '#000000', borderRadius: '50%' }}
          transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
        >
          <img src={m} alt="Colores" className={styles.circle} />
        </motion.div>
      </div>

      <div className={styles.item}>
        <p>
          En este ejemplo de Framer Motion, no solo animamos el cambio de <strong>color</strong> del fondo, sino que también transformamos la <strong>forma</strong> del contenedor al modificar la propiedad <strong>borderRadius</strong>. <br /><br />
          La animación inicia con un contenedor cuadrado de color amarillo (<strong>#F6EA11</strong>) y gradualmente cambia a un círculo de color negro (<strong>#000000</strong>). La propiedad <strong>borderRadius</strong> permite esta transición suave entre una figura cuadrada (0%) y una figura circular (50%). <br /><br />
          Es importante aclarar que, al igual que las transiciones de color, los cambios en <strong>borderRadius</strong> son transformaciones visuales que no alteran el espacio ocupado por el elemento en el layout. Solo afectan la apariencia, sin desplazar ni afectar otros elementos alrededor. <br /><br />
          Este tipo de animaciones son ideales para crear transiciones atractivas que combinan color y forma de manera dinámica y elegante.
        </p>
      </div>

    </div>
  );
}
