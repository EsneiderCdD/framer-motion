


      
import React from 'react';
import { motion } from 'framer-motion';
import styles from './Transitions.module.css';
import m from '../../assets/images/m.png';

export default function RepeatExample() {
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
  transition={{
    duration: 5,
    repeat: Infinity,
    repeatType: 'reverse'
  }}
/>`}
{/*CAMBIAR POR EL SIGUIENTE CODIGO */}
{/*      <div className={styles.item}>
        <motion.img
          src={m}
          alt="Repeat Type"
          className={styles.circle}
          initial={{ y: 0 }}
          animate={{ y: 150 }}
          transition={{ duration: 1, repeat: Infinity, repeatType: 'mirror' }}
        />
      </div>  */}
          </code>
        </pre>
      </div>

       <div className={styles.item}> 
        <motion.img
          src={m}
          alt="Repeat"
          className={styles.circle}
          initial={{ x: 0 }}
          animate={{ x: 150 }}
          transition={{ duration: 1, repeat: Infinity }}
        />
      </div>

      <div className={styles.item}>
        <p>
          La propiedad <strong>rotate</strong> en Framer Motion permite girar un
          elemento sobre su eje Z, es decir, rotar en su propio plano. Por ejemplo,
          animar de <strong>rotate: 0</strong> a <strong>rotate: 360</strong> genera
          una vuelta completa sobre sí mismo.
          <br /><br />
         
        </p>
      </div>
    </div>
  );
}
