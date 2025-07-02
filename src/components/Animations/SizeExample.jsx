import React from 'react';
import { motion } from 'framer-motion';
import styles from './Animations.module.css';
import m from '../../assets/images/m.png';

export default function SizeExample() {
  return (
    <div className={styles.box}>

      <div className={styles.item}>
        <pre>
          <code>
            {`<motion.img
  src={m}
  alt="Tamaño"
  className={styles.circle}
  initial={{ width: '100px', height: '100px' }}
  animate={{ width: '150px', height: '150px' }}
  transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse' }}
/>`}
          </code>
        </pre>
      </div>

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

      <div className={styles.item}>
     <p>
  En Framer Motion, podemos cambiar el tamaño real de un elemento usando <strong>width</strong> y <strong>height</strong>, lo que afecta directamente el espacio que ocupa en la página. <br /><br />
  A diferencia de <strong>scale</strong>, que solo modifica el tamaño visual sin alterar el layout, cambiar el ancho y alto sí puede mover o desplazar otros elementos.
</p>

      </div>

    </div>
  );
}

