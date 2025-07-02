import React from 'react';
import { motion } from 'framer-motion';
import styles from './Animations.module.css';
import m from '../../assets/images/m.png';

export default function RotateExample() {
  return (
    <div className={styles.box}>
      <div className={styles.item}>
        <pre>
          <code>
            {`<motion.img
  src={m}
  alt="Rotación"
  className={styles.circle}
  initial={{ rotate: 0 }}
  animate={{ rotate: 360 }}
  transition={{ duration: 5, repeat: Infinity, repeatType: 'reverse' }}
/>`}
          </code>
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
          alt="Rotación"
          className={styles.circle}
          initial={{ rotateX: 0 }}
          animate={{ rotateX: 360 }}
          transition={{ duration: 5, repeat: Infinity, repeatType: 'reverse' }}
        />
        <motion.img
          src={m}
          alt="Rotación"
          className={styles.circle}
          initial={{ rotateY: 0 }}
          animate={{ rotateY: 360 }}
          transition={{ duration: 5, repeat: Infinity, repeatType: 'reverse' }}
        />
      </div>
      <div className={styles.item}>
        <p>
          La propiedad <strong>rotate</strong> en Framer Motion permite girar un elemento en su plano base, es decir, en el eje Z (el eje que "sale" de la pantalla). Por ejemplo, al animar de <strong>rotate: 0</strong> a <strong>rotate: 360</strong>, el objeto realiza una rotación completa sobre sí mismo. <br /><br />
          Además, Framer Motion nos permite rotar sobre los ejes X y Y de forma independiente usando las propiedades <strong>rotateX</strong> y <strong>rotateY</strong>. Al usar <strong>rotateX</strong>, el elemento gira sobre el eje horizontal (como si se volcara hacia adelante o hacia atrás). Con <strong>rotateY</strong>, el giro es sobre el eje vertical (como si el objeto girara de lado a lado). <br /><br />
          Estas propiedades nos permiten crear animaciones tridimensionales sencillas que agregan profundidad y dinamismo a nuestros proyectos.
        </p>
      </div>
    </div>
  );
}
