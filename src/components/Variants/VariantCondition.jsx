// src/components/Variants/VariantCondition.jsx

import { motion } from 'framer-motion';
import { useState } from 'react';
import styles from './styles.module.css';
import m from '../../assets/images/m.svg';


const variants = {
  active: { x: 100, scale: 1.2 },
  inactive: { x: 0, scale: 1 }
};

export default function VariantCondition() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={styles.box}>
      <div className={styles.item}>
        <div>
          <h3>Variants Condicionales</h3>
          <p>
            Puedes cambiar entre distintos variants según condiciones lógicas. Ideal para animaciones dinámicas con base en la UI.
          </p>
          <button onClick={() => setIsActive(!isActive)}>
            Toggle Estado
          </button>
        </div>

        <motion.img
          src={m}
          alt="logo"
          className={styles.circle}
          variants={variants}
          animate={isActive ? 'active' : 'inactive'}
          transition={{ type: 'spring', stiffness: 300 }}
        />
      </div>
    </div>
  );
}
