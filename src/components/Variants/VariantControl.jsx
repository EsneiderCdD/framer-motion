// src/components/Variants/VariantControl.jsx

import { motion } from 'framer-motion';
import { useState } from 'react';
import styles from './styles.module.css';
import m from '../../assets/m.svg';

const variants = {
  on: { scale: 1.2, rotate: 360 },
  off: { scale: 1, rotate: 0 }
};

export default function VariantControl() {
  const [active, setActive] = useState(false);

  return (
    <div className={styles.box}>
      <div className={styles.item}>
        <div>
          <h3>Control de estados</h3>
          <p>
            Puedes usar `variants` con estados externos usando `animate={estado ? "on" : "off"}`. Esto te da un control completo desde React.
          </p>
          <button onClick={() => setActive(!active)}>
            {active ? 'Desactivar' : 'Activar'}
          </button>
        </div>

        <motion.img
          src={m}
          alt="logo"
          className={styles.circle}
          variants={variants}
          animate={active ? 'on' : 'off'}
          transition={{ duration: 0.5 }}
        />
      </div>
    </div>
  );
}
