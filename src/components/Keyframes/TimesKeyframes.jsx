
   
import React from 'react';
import { motion } from 'framer-motion';
import styles from './Keyframes.module.css';
import m from '../../assets/images/m.png';

export default function TimesKeyframes() {
  return (
    <div className={styles.box}>
      
      <div className={styles.item}>
        <pre>
          <code>
            {`<motion.img
  src={m}
  alt="Opacidad"
  className={styles.circle}
  initial={{ opacity: 0.2 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 2, 
  repeat: Infinity, 
  repeatType: 'reverse' 
  }}
/>`}

{/* CAMBIAR
    <motion.img
      src={m}
      alt="Times Keyframes"
      className={styles.circle}
      animate={{ x: [0, 100, 0] }}
      transition={{ duration: 3, times: [0, 0.3, 1], repeat: Infinity }}
    /> */}
          </code>
        </pre>
      </div>

      <div className={styles.item}>
      <motion.img
      src={m}
      alt="Times Keyframes"
      className={styles.circle}
      animate={{ x: [0, 100, 0] }}
      transition={{ duration: 3, times: [0, 0.3, 1], repeat: Infinity }}
    />
      </div>

      <div className={styles.item}>
       <p>
  La propiedad <strong>opacity</strong> en Framer Motion controla la transparencia de un elemento. Un valor de <strong>opacity: 0</strong> lo hace invisible y <strong>opacity: 1</strong> lo hace totalmente visible. <br /><br />
  En este caso, la animación varía entre <strong>opacity: 0.2</strong> y <strong>opacity: 1</strong>, creando un efecto de aparición y desaparición continuo.
</p>

      </div>
    </div>
  );
}


