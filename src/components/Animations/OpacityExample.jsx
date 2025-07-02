import React from 'react';
import { motion } from 'framer-motion';
import styles from './Animations.module.css';
import m from '../../assets/images/m.png';

export default function OpacityExample() {
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
  transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
/>`}
          </code>
        </pre>
      </div>

      <div className={styles.item}>
        <motion.img
          src={m}
          alt="Opacidad"
          className={styles.circle}
          initial={{ opacity: 0.2 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
        />
      </div>

      <div className={styles.item}>
        <p>
          La propiedad <strong>opacity</strong> en Framer Motion controla el nivel de transparencia de un elemento. Un valor de <strong>opacity: 0</strong> hace que el objeto sea completamente invisible, mientras que <strong>opacity: 1</strong> lo hace totalmente visible. <br /><br />
          En este ejemplo, la animación hace que el elemento oscile entre una opacidad baja (<strong>0.2</strong>) y una opacidad total (<strong>1</strong>), creando un efecto de aparición y desaparición suave y continuo. <br /><br />
          La propiedad <strong>opacity</strong> es muy útil para crear transiciones visuales, efectos de entrada o salida, o para resaltar elementos de manera dinámica.
        </p>
      </div>
    </div>
  );
}
